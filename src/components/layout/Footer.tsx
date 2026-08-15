import Link from "next/link";
import { SITE, NAV_ITEMS, INDUSTRY_ITEMS } from "@/lib/constants";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-surface-line bg-surface-alt">
      <div className="container-max py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo size={22} />
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-500">
              브랜드부터 시스템까지, 창업가와 기업이 필요한 디지털 자산을
              한 팀에서 설계하고 구축합니다.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Menu</p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-600 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Industries</p>
            <ul className="space-y-2">
              {INDUSTRY_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-600 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Contact</p>
            <ul className="space-y-2 text-sm text-ink-600">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="link-underline"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.kakaoOpenChat}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  카카오 오픈채팅
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-surface-line pt-6 text-[11px] tracking-wide text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {SITE.copyrightYear} {SITE.brand}. All rights reserved.
          </p>
          <p>{SITE.domain} · 대표 {SITE.representative}</p>
        </div>
      </div>
    </footer>
  );
}
