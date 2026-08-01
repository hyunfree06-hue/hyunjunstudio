/**
 * Large image → signed URL → Storage direct upload smoke test.
 * Simulates the client path without going through Next.js Server Actions.
 *
 * Usage: node --env-file=.env.local scripts/test-portfolio-upload.mjs
 */
import { createClient } from "@supabase/supabase-js";
import { writeFileSync, unlinkSync, statSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !serviceKey || !anonKey) {
  console.error("Missing Supabase env vars");
  process.exit(1);
}

/** Minimal valid JPEG with repeated scan data to exceed 5MB */
function buildLargeJpeg(targetBytes = 5.5 * 1024 * 1024) {
  // JPEG SOI + APP0 + soft quantization/huffman is complex;
  // Use a BMP which Storage accepts as image/bmp, or a fake jpeg with padding.
  // Prefer generating a real uncompressed PNG via raw zlib-free approach: BMP.
  const width = 2400;
  const height = 1800;
  const rowSize = Math.floor((width * 3 + 3) / 4) * 4;
  const pixelSize = rowSize * height;
  const fileSize = 54 + pixelSize;
  const buf = Buffer.alloc(fileSize);

  // BMP header
  buf.write("BM", 0);
  buf.writeUInt32LE(fileSize, 2);
  buf.writeUInt32LE(54, 10);
  buf.writeUInt32LE(40, 14);
  buf.writeInt32LE(width, 18);
  buf.writeInt32LE(height, 22);
  buf.writeUInt16LE(1, 26);
  buf.writeUInt16LE(24, 28);
  buf.writeUInt32LE(pixelSize, 34);

  // Fill with patterned pixels so it's not sparse/compressible by CDN
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = 54 + y * rowSize + x * 3;
      buf[i] = (x * 3 + y) % 256;
      buf[i + 1] = (x * 7 + y * 2) % 256;
      buf[i + 2] = (x + y * 5) % 256;
    }
  }

  if (buf.length < targetBytes) {
    // If somehow smaller, pad (shouldn't happen at 2400x1800)
    return Buffer.concat([buf, Buffer.alloc(Math.ceil(targetBytes - buf.length), 0xab)]);
  }
  return buf;
}

async function main() {
  const admin = createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const browser = createClient(url, anonKey);

  const raw = buildLargeJpeg();
  const tmpPath = join(tmpdir(), `portfolio-test-${Date.now()}.bmp`);
  writeFileSync(tmpPath, raw);
  const sizeMb = (statSync(tmpPath).size / (1024 * 1024)).toFixed(2);
  console.log(`Created test image: ${tmpPath} (${sizeMb} MB)`);

  const storagePath = `test-${Date.now()}-large.bmp`;

  console.log("1) createSignedUploadUrl (service role)…");
  const { data: signed, error: signErr } = await admin.storage
    .from("portfolio-images")
    .createSignedUploadUrl(storagePath);

  if (signErr || !signed) {
    console.error("Signed URL failed:", signErr?.message);
    unlinkSync(tmpPath);
    process.exit(1);
  }
  console.log("   OK path=", signed.path);

  console.log("2) uploadToSignedUrl (anon client, like browser)…");
  const fileBuf = raw;
  const blob = new Blob([fileBuf], { type: "image/bmp" });

  const { error: upErr } = await browser.storage
    .from("portfolio-images")
    .uploadToSignedUrl(signed.path, signed.token, blob, {
      contentType: "image/bmp",
      upsert: false,
    });

  if (upErr) {
    console.error("Upload failed:", upErr.message);
    unlinkSync(tmpPath);
    process.exit(1);
  }
  console.log("   OK uploaded");

  const {
    data: { publicUrl },
  } = browser.storage.from("portfolio-images").getPublicUrl(signed.path);

  console.log("3) Public URL:", publicUrl);

  const head = await fetch(publicUrl, { method: "HEAD" });
  console.log("4) HEAD status:", head.status, "content-length:", head.headers.get("content-length"));

  // cleanup test object
  await admin.storage.from("portfolio-images").remove([signed.path]);
  unlinkSync(tmpPath);

  if (!head.ok) {
    console.error("Public URL not reachable");
    process.exit(1);
  }

  console.log("\nSUCCESS: large file uploaded via signed URL without Next.js body limit.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
