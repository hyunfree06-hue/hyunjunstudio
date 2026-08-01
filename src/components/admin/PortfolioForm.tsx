"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { Portfolio } from "@/lib/types";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";
import { createPortfolio, updatePortfolio } from "@/app/actions/portfolio";
import { uploadPortfolioImageDirect } from "@/lib/image-upload";
import { Button } from "@/components/ui/Button";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

type Props = {
  portfolio?: Portfolio | null;
  onDone: () => void;
  onCancel: () => void;
};

export function PortfolioForm({ portfolio, onDone, onCancel }: Props) {
  const [title, setTitle] = useState(portfolio?.title || "");
  const [category, setCategory] = useState(
    portfolio?.category || PORTFOLIO_CATEGORIES[0]
  );
  const [clientName, setClientName] = useState(portfolio?.client_name || "");
  const [workPeriod, setWorkPeriod] = useState(portfolio?.work_period || "");
  const [techStack, setTechStack] = useState(
    portfolio?.tech_stack?.join(", ") || ""
  );
  const [thumbnailUrl, setThumbnailUrl] = useState(
    portfolio?.thumbnail_url || ""
  );
  const [images, setImages] = useState<string[]>(portfolio?.images || []);
  const [preview, setPreview] = useState(portfolio?.preview_description || "");
  const [detail, setDetail] = useState(portfolio?.detail_description || "");
  const [externalLink, setExternalLink] = useState(
    portfolio?.external_link || ""
  );
  const [isPublished, setIsPublished] = useState(
    portfolio?.is_published ?? true
  );
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const uploadFiles = async (files: FileList | File[]) => {
    setUploading(true);
    setError(null);
    const list = Array.from(files);
    const urls: string[] = [];

    try {
      for (let i = 0; i < list.length; i++) {
        const file = list[i];
        setUploadProgress(
          list.length > 1
            ? `이미지 업로드 중… (${i + 1}/${list.length})`
            : "이미지 압축·업로드 중…"
        );

        const res = await uploadPortfolioImageDirect(file);
        if (res.url) {
          urls.push(res.url);
        } else {
          const msg = `이미지 업로드에 실패했습니다: ${res.error || "알 수 없는 오류"}`;
          setError(msg);
          break;
        }
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "알 수 없는 오류";
      setError(`이미지 업로드에 실패했습니다: ${message}`);
    } finally {
      setUploading(false);
      setUploadProgress(null);
    }

    return urls;
  };

  const handleThumbnail = async (files: FileList | null) => {
    if (!files?.[0]) return;
    try {
      const urls = await uploadFiles([files[0]]);
      if (urls[0]) setThumbnailUrl(urls[0]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "알 수 없는 오류";
      setError(`이미지 업로드에 실패했습니다: ${message}`);
      setUploading(false);
      setUploadProgress(null);
    }
  };

  const handleExtraImages = async (files: FileList | null) => {
    if (!files?.length) return;
    try {
      const urls = await uploadFiles(files);
      if (urls.length) setImages((prev) => [...prev, ...urls]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "알 수 없는 오류";
      setError(`이미지 업로드에 실패했습니다: ${message}`);
      setUploading(false);
      setUploadProgress(null);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    try {
      await handleExtraImages(e.dataTransfer.files);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "알 수 없는 오류";
      setError(`이미지 업로드에 실패했습니다: ${message}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !thumbnailUrl || !preview.trim() || !detail.trim()) {
      setError("제목, 대표 이미지, 미리보기·상세 설명은 필수예요.");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      const fd = new FormData();
      fd.set("title", title);
      fd.set("category", category);
      fd.set("client_name", clientName);
      fd.set("work_period", workPeriod);
      fd.set("tech_stack", techStack);
      fd.set("thumbnail_url", thumbnailUrl);
      fd.set("images", images.join(","));
      fd.set("preview_description", preview);
      fd.set("detail_description", detail);
      fd.set("external_link", externalLink);
      fd.set("is_published", String(isPublished));

      const result = portfolio
        ? await updatePortfolio(portfolio.id, fd)
        : await createPortfolio(fd);

      if (result.error) {
        setError(result.error);
        return;
      }
      onDone();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "알 수 없는 오류";
      setError(`저장에 실패했습니다: ${message}`);
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-paper-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-semibold">제목 *</label>
          <input
            className={inputClass}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">카테고리</label>
          <select
            className={inputClass}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {PORTFOLIO_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">클라이언트명</label>
          <input
            className={inputClass}
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="고현준"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">작업 기간</label>
          <input
            className={inputClass}
            value={workPeriod}
            onChange={(e) => setWorkPeriod(e.target.value)}
            placeholder="2025.03 - 2025.04"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">
            기술 스택 (쉼표 구분)
          </label>
          <input
            className={inputClass}
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            placeholder="Next.js, Tailwind"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">대표 이미지 *</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleThumbnail(e.target.files)}
          className="text-sm"
        />
        {thumbnailUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="mt-2 h-28 rounded-lg object-cover"
          />
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">추가 이미지</label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`rounded-lg border-2 border-dashed px-4 py-8 text-center text-sm ${
            dragOver
              ? "border-coral bg-coral/5"
              : "border-paper-line bg-paper-warm/50"
          }`}
        >
          <p className="text-ink-muted">이미지를 드래그하거나 선택하세요</p>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleExtraImages(e.target.files)}
            className="mt-3 text-sm"
          />
        </div>
        {images.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {images.map((url) => (
              <div key={url} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt=""
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <button
                  type="button"
                  onClick={() => setImages((prev) => prev.filter((u) => u !== url))}
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-xs text-white"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        {uploading && (
          <p className="mt-1 text-xs text-ink-muted">
            {uploadProgress || "이미지 압축·업로드 중…"}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">
          미리보기 설명 *
        </label>
        <textarea
          className={inputClass}
          rows={2}
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
        />
      </div>

      <div data-color-mode="light">
        <label className="mb-1 block text-sm font-semibold">
          상세 설명 (Markdown) *
        </label>
        <MDEditor value={detail} onChange={(v) => setDetail(v || "")} height={280} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">외부 링크</label>
        <input
          className={inputClass}
          value={externalLink}
          onChange={(e) => setExternalLink(e.target.value)}
          placeholder="https://"
        />
      </div>

      <label className="flex items-center gap-2 text-sm font-medium">
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
          className="h-4 w-4 rounded"
        />
        공개
      </label>

      {error && (
        <p className="border border-coral/30 bg-coral/5 px-4 py-3 text-sm text-coral">
          {error}
        </p>
      )}

      <div className="flex gap-2 pt-2">
        <Button type="submit" variant="primary" disabled={saving || uploading}>
          {saving ? "저장 중…" : portfolio ? "수정하기" : "등록하기"}
        </Button>
        <Button type="button" variant="ghost" onClick={onCancel}>
          취소
        </Button>
      </div>
    </form>
  );
}
