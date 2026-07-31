# Hynjun Work — 개인 프리랜서 에이전시 홈페이지

숨고 외주를 자체 창구로 유입시키기 위한 밝고 친근한 개인 에이전시 사이트입니다.

## 기술 스택

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Supabase (DB + Storage)
- Framer Motion
- react-hook-form + zod
- Vercel 배포 기준

## 로컬 실행

```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env.local
# .env.local 값을 Supabase 프로젝트 정보로 채우세요

# 3. 개발 서버
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인합니다.

## Supabase 세팅

1. [Supabase](https://supabase.com)에서 새 프로젝트를 만듭니다.
2. **Project Settings → API**에서 다음을 복사합니다.
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (절대 클라이언트에 노출하지 마세요)
3. **SQL Editor**에서 `supabase/migrations/20250101000000_init.sql` 전체 내용을 실행합니다.
   - `portfolios`, `inquiries` 테이블 생성
   - RLS 정책 (익명 read / insert만 허용, 관리는 service role)
   - Storage 버킷 `portfolio-images`, `inquiry-attachments` 생성
4. Storage 버킷이 생성됐는지 **Storage** 메뉴에서 확인합니다.

## 환경 변수

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=123456
CONTACT_EMAIL=
```

| 변수 | 설명 |
|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 익명(공개) API 키 |
| `SUPABASE_SERVICE_ROLE_KEY` | 관리자 서버 액션용 (비밀) |
| `ADMIN_PASSWORD` | `/admin` 로그인 숫자 비번 |
| `CONTACT_EMAIL` | 문의 알림용 이메일 (선택) |

## 관리자 비밀번호 변경

1. `.env.local` (로컬) 또는 Vercel Environment Variables (배포)에서 `ADMIN_PASSWORD` 값을 바꿉니다.
2. 개발 서버/배포를 재시작합니다.
3. 기존 세션 쿠키는 이전 비밀번호 기반으로 서명되므로, 변경 후 다시 로그인해야 합니다.
4. 비밀번호 3회 실패 시 30초 동안 로그인이 잠깁니다.

관리자 URL:

- 로그인: `/admin`
- 대시보드: `/admin/dashboard` (포트폴리오 CRUD + 문의 내역)

## 페이지 구조

| 경로 | 설명 |
|------|------|
| `/` | 랜딩 (히어로, 리뷰 지그재그, FAQ 등) |
| `/portfolio` | 포트폴리오 목록 |
| `/portfolio/[id]` | 포트폴리오 상세 |
| `/contact` | 문의하기 (카톡 / 폼 / 문자) |
| `/admin` | 관리자 로그인 |
| `/admin/dashboard` | 관리자 대시보드 |

## 사이트 문구·연락처 수정

`src/lib/constants.ts` 의 `SITE` 객체에서 히어로 타이틀, 카톡 링크, 전화번호, 이메일 등을 수정할 수 있습니다.

## Vercel 배포

1. GitHub에 푸시 후 Vercel에 Import
2. Environment Variables에 `.env.local`과 동일한 키를 등록
3. Deploy

```bash
npm run build   # 로컬 빌드 확인
```

## 스크립트

```bash
npm run dev      # 개발
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint
```
