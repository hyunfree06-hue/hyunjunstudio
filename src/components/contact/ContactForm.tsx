"use client";

import { useRef, useState, useTransition } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  submitInquiry,
  uploadInquiryAttachment,
  type ContactFormState,
} from "@/app/actions/contact";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(1, "이름을 입력해 주세요"),
  contact: z.string().min(1, "연락처 또는 이메일을 입력해 주세요"),
  message: z.string().min(1, "문의 내용을 입력해 주세요"),
  privacy: z.boolean().refine((v) => v === true, {
    message: "개인정보 수집에 동의해 주세요",
  }),
});

type FormValues = z.infer<typeof schema>;

const initialState: ContactFormState = {};

function SubmitButton({
  disabled,
  pending,
}: {
  disabled?: boolean;
  pending?: boolean;
}) {
  return (
    <Button
      type="submit"
      variant="primary"
      size="lg"
      className="w-full"
      disabled={pending || disabled}
    >
      {pending ? "전송 중…" : "문의 보내기"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitInquiry, initialState);
  const [urls, setUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
      privacy: false,
    },
  });

  const name = watch("name");
  const contact = watch("contact");
  const message = watch("message");

  const handleSmsSend = () => {
    const body = `[문의] ${name}\n연락처: ${contact}\n\n${message}`;
    const encoded = encodeURIComponent(body);
    window.location.href = `sms:${SITE.phone}?body=${encoded}`;
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    setUploadError(null);

    const next: string[] = [...urls];
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      const result = await uploadInquiryAttachment(fd);
      if (result.url) next.push(result.url);
      else if (result.error) setUploadError(result.error);
    }
    setUrls(next);
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await trigger();
    if (!ok) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("attachmentUrls", urls.join(","));
    fd.set("privacy", watch("privacy") ? "true" : "false");

    startTransition(() => {
      formAction(fd);
    });
  };

  if (state.success) {
    return (
      <div className="rounded-3xl border border-success/30 bg-success/10 px-6 py-12 text-center">
        <div className="text-4xl">🎉</div>
        <h3 className="mt-4 text-xl font-bold text-ink">문의가 전달됐어요!</h3>
        <p className="mt-2 text-sm text-ink-muted">
          확인 후 빠르게 연락드릴게요. 급하시면 카톡으로도 말씀해 주세요.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">
            이름 *
          </label>
          <input
            {...register("name")}
            name="name"
            className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="홍길동"
          />
          {(errors.name || state.fieldErrors?.name) && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name?.message || state.fieldErrors?.name}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">
            연락처 또는 이메일 *
          </label>
          <input
            {...register("contact")}
            name="contact"
            className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="010-1234-5678 또는 email@example.com"
          />
          {(errors.contact || state.fieldErrors?.contact) && (
            <p className="mt-1 text-xs text-red-500">
              {errors.contact?.message || state.fieldErrors?.contact}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">
            문의 내용 *
          </label>
          <textarea
            {...register("message")}
            name="message"
            rows={6}
            className="w-full resize-y rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="어떤 작업이 필요하신지 편하게 적어 주세요"
          />
          {(errors.message || state.fieldErrors?.message) && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message?.message || state.fieldErrors?.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">
            사진 첨부 (선택)
          </label>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFiles(e.target.files)}
            className="w-full rounded-2xl border border-dashed border-ink/15 bg-white px-4 py-3 text-sm file:mr-3 file:rounded-xl file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-primary-dark"
          />
          {uploading && (
            <p className="mt-1 text-xs text-ink-muted">업로드 중…</p>
          )}
          {uploadError && (
            <p className="mt-1 text-xs text-red-500">{uploadError}</p>
          )}
          {urls.length > 0 && (
            <ul className="mt-2 space-y-1 text-xs text-ink-muted">
              {urls.map((u) => (
                <li key={u} className="truncate">
                  ✅ {u.split("/").pop()}
                </li>
              ))}
            </ul>
          )}
        </div>

        <label className="flex items-start gap-2.5 text-sm text-ink-muted">
          <input
            type="checkbox"
            {...register("privacy")}
            className="mt-1 h-4 w-4 rounded border-ink/20 text-primary focus:ring-primary"
          />
          <span>
            문의 응대를 위한 개인정보(이름, 연락처) 수집·이용에 동의합니다. *
          </span>
        </label>
        {(errors.privacy || state.fieldErrors?.privacy) && (
          <p className="-mt-3 text-xs text-red-500">
            {errors.privacy?.message || state.fieldErrors?.privacy}
          </p>
        )}

        {state.error && (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {state.error}
          </p>
        )}

        <SubmitButton disabled={uploading} pending={isPending} />
      </form>

      <div className="mt-6">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="w-full"
          onClick={handleSmsSend}
        >
          📱 문자로 바로 문의하기
        </Button>
        <p className="mt-2 text-center text-xs text-ink-light">
          폼에 입력한 내용이 문자 본문으로 전달돼요
        </p>
      </div>
    </div>
  );
}
