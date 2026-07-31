"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Portfolio } from "@/lib/types";
import { deletePortfolio } from "@/app/actions/portfolio";
import { PortfolioForm } from "@/components/admin/PortfolioForm";
import { Button } from "@/components/ui/Button";
import { maskName } from "@/lib/mask";

export function PortfolioManager({
  portfolios,
}: {
  portfolios: Portfolio[];
}) {
  const router = useRouter();
  const [mode, setMode] = useState<"list" | "create" | "edit">("list");
  const [editing, setEditing] = useState<Portfolio | null>(null);

  const refresh = () => {
    setMode("list");
    setEditing(null);
    router.refresh();
  };

  if (mode === "create" || mode === "edit") {
    return (
      <div>
        <h2 className="mb-4 text-lg font-bold">
          {mode === "create" ? "새 포트폴리오 등록" : "포트폴리오 수정"}
        </h2>
        <PortfolioForm
          portfolio={editing}
          onDone={refresh}
          onCancel={() => {
            setMode("list");
            setEditing(null);
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">포트폴리오 목록</h2>
        <Button
          variant="primary"
          size="sm"
          onClick={() => setMode("create")}
        >
          + 새 포트폴리오 등록
        </Button>
      </div>

      {portfolios.length === 0 ? (
        <p className="rounded-2xl bg-cream px-4 py-10 text-center text-sm text-ink-muted">
          등록된 포트폴리오가 없어요
        </p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-ink/5">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-cream-dark/80 text-ink-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">제목</th>
                <th className="px-4 py-3 font-semibold">카테고리</th>
                <th className="px-4 py-3 font-semibold">클라이언트</th>
                <th className="px-4 py-3 font-semibold">공개</th>
                <th className="px-4 py-3 font-semibold">관리</th>
              </tr>
            </thead>
            <tbody>
              {portfolios.map((p) => (
                <tr key={p.id} className="border-t border-ink/5">
                  <td className="px-4 py-3 font-medium">{p.title}</td>
                  <td className="px-4 py-3 text-ink-muted">{p.category}</td>
                  <td className="px-4 py-3 text-ink-muted">
                    {p.client_name ? maskName(p.client_name) : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {p.is_published ? (
                      <span className="text-success">공개</span>
                    ) : (
                      <span className="text-ink-light">비공개</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="text-primary hover:underline"
                        onClick={() => {
                          setEditing(p);
                          setMode("edit");
                        }}
                      >
                        수정
                      </button>
                      <button
                        type="button"
                        className="text-red-500 hover:underline"
                        onClick={async () => {
                          if (!confirm(`「${p.title}」을(를) 삭제할까요?`))
                            return;
                          await deletePortfolio(p.id);
                          router.refresh();
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
