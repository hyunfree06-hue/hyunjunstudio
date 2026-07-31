"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Inquiry, InquiryStatus } from "@/lib/types";
import { updateInquiryStatus } from "@/app/actions/portfolio";
import { cn } from "@/lib/utils";

const statusLabel: Record<InquiryStatus, string> = {
  new: "신규",
  read: "읽음",
  done: "완료",
};

export function InquiryManager({ inquiries }: { inquiries: Inquiry[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const changeStatus = async (id: string, status: InquiryStatus) => {
    await updateInquiryStatus(id, status);
    setSelected((prev) => (prev?.id === id ? { ...prev, status } : prev));
    router.refresh();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <h2 className="mb-4 text-lg font-bold">문의 내역</h2>
        {inquiries.length === 0 ? (
          <p className="border border-paper-line px-4 py-10 text-center text-sm text-ink-muted">
            아직 문의가 없어요
          </p>
        ) : (
          <ul className="space-y-2">
            {inquiries.map((inq) => (
              <li key={inq.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(inq);
                    if (inq.status === "new") changeStatus(inq.id, "read");
                  }}
                  className={cn(
                    "w-full border px-4 py-3 text-left transition-colors",
                    selected?.id === inq.id
                      ? "border-coral bg-coral/5"
                      : "border-paper-line bg-paper hover:border-ink/20"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-ink">{inq.name}</span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        inq.status === "new" && "bg-coral/10 text-coral-dark",
                        inq.status === "read" && "bg-paper-warm text-ink",
                        inq.status === "done" && "bg-ink/5 text-ink-muted"
                      )}
                    >
                      {statusLabel[inq.status]}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-1 text-sm text-ink-muted">
                    {inq.message}
                  </p>
                  <p className="mt-1 text-xs text-ink-light">
                    {new Date(inq.created_at).toLocaleString("ko-KR")}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {selected ? (
          <div className="border border-paper-line bg-paper p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-ink">{selected.name}</h3>
                <a
                  href={
                    selected.contact.includes("@")
                      ? `mailto:${selected.contact}`
                      : `tel:${selected.contact}`
                  }
                  className="mt-1 block text-sm text-coral hover:underline"
                >
                  {selected.contact}
                </a>
              </div>
              <select
                value={selected.status}
                onChange={(e) =>
                  changeStatus(selected.id, e.target.value as InquiryStatus)
                }
                className="rounded-xl border border-ink/10 px-3 py-1.5 text-sm"
              >
                <option value="new">신규</option>
                <option value="read">읽음</option>
                <option value="done">완료</option>
              </select>
            </div>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-ink-muted">
              {selected.message}
            </p>
            {selected.attachment_urls?.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-semibold text-ink">첨부파일</p>
                <div className="flex flex-wrap gap-2">
                  {selected.attachment_urls.map((url) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={url}
                        alt="attachment"
                        className="h-20 w-20 rounded-xl object-cover"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
            <p className="mt-4 text-xs text-ink-light">
              {new Date(selected.created_at).toLocaleString("ko-KR")}
            </p>
          </div>
        ) : (
          <div className="flex h-48 items-center justify-center border border-dashed border-paper-line text-sm text-ink-muted">
            문의를 선택하면 상세 내용이 표시돼요
          </div>
        )}
      </div>
    </div>
  );
}
