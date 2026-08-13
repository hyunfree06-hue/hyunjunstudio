// Hardcoded portfolio data — do not add DB dependency here.
// 각 항목은 상세 페이지(/portfolio/[slug])에서 렌더링됩니다.

export type PortfolioCategory =
  | "웹사이트"
  | "SaaS · 프로덕트"
  | "브랜드 · 로고"
  | "리서치 · 문서";

export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  summary: string; // one-line, used on grid card
  description: string; // paragraph for detail page (below hero)
  role: string[]; // "브랜드 전략", "웹 개발", ...
  deliverables: string[]; // "홈페이지", "관리자", "로고 시스템"
  stack?: string[]; // "Next.js", "Vercel", "Figma"
  thumbnail: string; // /portfolio/xxx.png
  images: string[]; // all detail images in order
  externalUrl?: string;
};

// helper for public paths
const p = (name: string) => `/portfolio/${name}`;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ---------- 웹사이트 ----------
  {
    slug: "yutong-b2b-order",
    title: "유통 B2B 대량발주 사이트",
    client: "농산물 · 건강기능식품 유통사",
    category: "웹사이트",
    year: "2026",
    summary: "대량발주 문의를 리드로 전환하는 유통사 랜딩",
    description:
      "과일과 건강기능식품을 도매 유통하는 회사의 신규 랜딩입니다. 광고를 보고 유입된 대량발주 담당자를 즉시 문의로 전환시키는 것이 핵심 목표였습니다. 헤더 상단에 주력 프로모션 라인을 상시 노출해 재유입을 유도하고, 히어로에서 신뢰 카피를 강조한 뒤 대량발주 문의 CTA와 급 상품 카탈로그로 이어지는 구조로 설계했습니다.",
    role: ["기획", "카피", "웹 개발"],
    deliverables: ["랜딩 페이지", "문의 CTA", "상품 카탈로그"],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    thumbnail: p("case-02_01.png"),
    images: [p("case-02_01.png"), p("case-02_02.png")],
  },
  {
    slug: "mecha-coding",
    title: "MECHA CODING · 로보틱스 아카데미",
    client: "메카코딩",
    category: "웹사이트",
    year: "2026",
    summary: "VEX 로보틱스 실적을 강조한 교육기관 사이트",
    description:
      "로보틱스와 소프트웨어 교육을 진행하는 학원의 공식 사이트입니다. VEX Korea 챔피언 지도 실적을 히어로 배경으로 크게 노출하고, 초·중·고 프로그램 별 커리큘럼과 상담 문의를 단일 뷰에서 전달할 수 있도록 정보 위계를 재정리했습니다.",
    role: ["웹 개발", "정보 설계"],
    deliverables: ["공식 웹사이트", "프로그램 상세", "상담 문의 폼"],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    thumbnail: p("case-03_01.png"),
    images: [p("case-03_01.png"), p("case-03_02.png")],
  },
  {
    slug: "biolsurok",
    title: "비올수록 · 차전자피 브랜드 사이트",
    client: "비올수록",
    category: "웹사이트",
    year: "2026",
    summary: "프리미엄 식이섬유 브랜드의 D2C 사이트",
    description:
      "차전자피 식이섬유 건강식품 브랜드의 D2C 사이트입니다. 오래 앉아있는 현대인을 타깃으로 카피 톤을 정제하고, 제품 이미지 · 구매 CTA · 브랜드 스토리를 여백 중심 레이아웃으로 배치했습니다. 시각적으로 프리미엄과 신뢰가 함께 읽히도록 GMP 인증 · 식이섬유 함량 등 신뢰 지표를 히어로 하단에 상시 노출했습니다.",
    role: ["웹 개발", "UI 설계"],
    deliverables: ["브랜드 사이트", "제품 페이지", "구매 가이드"],
    stack: ["Next.js", "Tailwind CSS"],
    thumbnail: p("case-04_01.png"),
    images: [p("case-04_01.png"), p("case-04_02.png")],
  },
  {
    slug: "snack-kuji",
    title: "간식쿠지 · 무인 편의점 온라인",
    client: "간식쿠지",
    category: "웹사이트",
    year: "2026",
    summary: "번호 뽑기 콘셉트의 무인 편의점 커머스",
    description:
      "무인 편의점 매장을 온라인으로 옮긴 커머스 서비스입니다. 쿠폰 번호를 골라 뽑는 오프라인 놀이 요소를 온라인으로 옮겨와 인터랙션 자체를 브랜드 자산으로 삼았습니다. 상단 카테고리는 이모지 · 아이콘 대신 실제 상품 그리드를 크게 노출해 회유율을 높였습니다.",
    role: ["웹 개발", "인터랙션 설계"],
    deliverables: ["프론트 커머스", "쿠폰 인터랙션"],
    stack: ["Next.js", "Tailwind CSS"],
    thumbnail: p("case-05_01.png"),
    images: [p("case-05_01.png"), p("case-05_02.png")],
  },

  // ---------- SaaS · 프로덕트 ----------
  {
    slug: "proposalpilot",
    title: "ProposalPilot · 웹→제안서 자동화 SaaS",
    client: "자체 프로덕트",
    category: "SaaS · 프로덕트",
    year: "2026",
    summary: "웹사이트 정보를 개인화 제안서로 자동 생성",
    description:
      "잠재 고객사의 웹사이트 URL을 붙여넣으면 담당자 정보를 추출하고, 개인화된 제안서 · 콜드 아웃리치 이메일 초안을 30초 내에 생성해주는 SaaS입니다. 프리랜서와 소규모 에이전시의 영업 리드타임 문제를 해결하기 위해 기획 · 프론트 · 백엔드까지 자체 개발했습니다.",
    role: ["프로덕트 기획", "웹 개발", "브랜드"],
    deliverables: ["랜딩 페이지", "제품 UI", "가격 페이지"],
    stack: ["Next.js", "OpenAI", "Tailwind CSS"],
    thumbnail: p("case-06_01.png"),
    images: [p("case-06_01.png"), p("case-06_02.png")],
  },
  {
    slug: "detailforge",
    title: "DetailForge · 상세페이지 제작 스튜디오",
    client: "자체 프로덕트",
    category: "SaaS · 프로덕트",
    year: "2026",
    summary: "몇 분 만에 완성하는 판매용 상품 상세페이지",
    description:
      "커머스 셀러 대상 상세페이지 제작 SaaS입니다. 텍스트와 이미지를 순서대로 넣기만 하면 판매용 세로형 상세페이지가 자동으로 만들어집니다. 요금제 구조와 무료 사용량 정책까지 포함한 완결형 프로덕트로 설계했습니다.",
    role: ["프로덕트 기획", "웹 개발"],
    deliverables: ["랜딩", "에디터 UI", "요금제"],
    stack: ["Next.js", "Tailwind CSS"],
    thumbnail: p("case-07_01.png"),
    images: [p("case-07_01.png"), p("case-07_02.png")],
  },
  {
    slug: "hourse",
    title: "Hourse · AI-native 디자인 워크스페이스",
    client: "자체 프로덕트",
    category: "SaaS · 프로덕트",
    year: "2026",
    summary: "아이디어를 편집 가능한 디자인으로 바꾸는 캔버스",
    description:
      "독립 크리에이터를 위한 AI 네이티브 디자인 도구입니다. 하나의 캔버스에서 시각 작업을 만들고 다듬고 조합할 수 있으며, 프롬프트로 새 요소를 즉시 삽입 · 수정할 수 있도록 설계했습니다. 랜딩 페이지부터 실제 에디터 프로토타입까지 함께 만든 프로젝트입니다.",
    role: ["프로덕트 기획", "웹 개발", "브랜드"],
    deliverables: ["랜딩 페이지", "에디터 프로토타입", "브랜드"],
    stack: ["Next.js", "Canvas API", "Tailwind CSS"],
    thumbnail: p("case-08_01.png"),
    images: [p("case-08_01.png"), p("case-08_02.png")],
  },

  // ---------- 브랜드 · 로고 ----------
  {
    slug: "sumim",
    title: "sumim · 반려동물 니트웨어 브랜드",
    client: "sumim",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "따뜻한 라인아트로 완성한 반려동물 브랜드",
    description:
      "반려견 니트웨어를 만드는 sumim의 로고와 브랜드 아이덴티티입니다. 단순한 라인아트 강아지 심볼과 소문자 세리프 워드마크를 조합해 부드럽고 손맛 나는 브랜드 톤을 잡았습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고", "시안"],
    thumbnail: p("case-09_01.png"),
    images: [p("case-09_01.png"), p("seuim-draft.png")],
  },
  {
    slug: "chaeum-freshsupply",
    title: "채움식자재 · 식자재 유통 아이덴티티",
    client: "주식회사 채움식자재",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "식자재 유통 법인의 로고와 명함 시스템",
    description:
      "식자재 유통 B2B 법인의 로고와 명함 시스템입니다. 그릇 심볼 안에 채소를 담은 미니멀 마크로 '채움'이라는 브랜드명을 시각화하고, 딥그린 컬러로 신뢰감을 강조했습니다.",
    role: ["브랜드 · 로고", "인쇄물"],
    deliverables: ["로고", "명함"],
    thumbnail: p("case-09_02.png"),
    images: [p("case-09_02.png"), p("chaeum-namecard-back.png")],
  },
  {
    slug: "hyungje-jikhwa",
    title: "형제직화 · 숯불 BBQ 브랜드 시스템",
    client: "형제직화",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "로고부터 매장 인테리어 사인까지 일체 개발",
    description:
      "숯불 직화 BBQ 브랜드 '형제직화'의 로고 · 워드마크 · 매장 인테리어 사인까지 이어지는 브랜드 시스템입니다. 불꽃 심볼과 굵은 붓 획의 워드마크를 조합해 강한 정체성을 잡고, 컬러 배리에이션 · 흑백 조합 · 매장 실사 적용까지 통합해 개발했습니다.",
    role: ["브랜드 · 로고", "매장 사인"],
    deliverables: ["로고 시스템", "인테리어 사인"],
    thumbnail: p("case-09_03.png"),
    images: [
      p("case-09_03.png"),
      p("case-09_07.png"),
      p("case-09_08.png"),
      p("hyungjejikhwa-interior1.png"),
      p("hyungjejikhwa-interior2.png"),
    ],
  },
  {
    slug: "oftb",
    title: "OFTB · Off The Ball 스포츠 브랜드",
    client: "OFTB",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "블랙 · 화이트 스포츠 어패럴 로고",
    description:
      "'Off The Ball' 축구 어패럴 브랜드의 로고입니다. 다이나믹한 이탤릭 세리프 워드마크와 대비되는 삼각 심볼로 스피드와 정직한 스포츠 정체성을 표현했습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고"],
    thumbnail: p("case-09_04.png"),
    images: [p("case-09_04.png"), p("oftb-black.png")],
  },
  {
    slug: "sr-brand",
    title: "SR · 스포츠 로고",
    client: "SR",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "임팩트 있는 오렌지 스포츠 로고",
    description:
      "스포츠 관련 브랜드 SR의 볼드 워드마크입니다. 오렌지 채도와 아웃라인 스트로크를 활용해 스포츠 유니폼 · 굿즈에 그대로 프린트해도 시인성이 유지되도록 설계했습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고"],
    thumbnail: p("case-09_05.png"),
    images: [p("case-09_05.png"), p("sr-logo-orange.png")],
  },
  {
    slug: "kim-ihan-english",
    title: "김이한 영어 PREMIUM",
    client: "Kim Yihan English Academy",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "성적 상승 그래프를 심볼화한 학원 로고",
    description:
      "프리미엄 영어학원 '김이한 영어'의 로고입니다. 성적 상승을 상징하는 바 그래프를 심볼로 잡고, 세리프 국문 워드마크와 골드 라벨로 프리미엄 포지셔닝을 시각화했습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고"],
    thumbnail: p("case-09_06.png"),
    images: [p("case-09_06.png")],
  },
  {
    slug: "conntruck",
    title: "Conn=Truck · 물류 브랜드",
    client: "Conn=Truck",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "체인 심볼로 신뢰를 표현한 물류 브랜드",
    description:
      "화물 운송 플랫폼 Conn=Truck의 브랜드입니다. 체인의 링크 두 개를 겹친 심볼로 '기업물류 · 원상 · 파트운송 · 전국배차'를 관통하는 신뢰-연결 메시지를 담았습니다. 로고 · 명함까지 시스템으로 개발했습니다.",
    role: ["브랜드 · 로고", "인쇄물"],
    deliverables: ["로고", "명함"],
    thumbnail: p("case-09_09.png"),
    images: [p("case-09_09.png"), p("conntruck-namecard-back.png")],
  },
  {
    slug: "hourse-logo",
    title: "Hourse · 워드마크 & 심볼",
    client: "자체 프로덕트",
    category: "브랜드 · 로고",
    year: "2026",
    summary: "AI 디자인 툴 Hourse의 로고 시스템",
    description:
      "AI 네이티브 디자인 툴 Hourse의 브랜드 로고입니다. 달리는 말 실루엣과 산세리프 워드마크를 조합해 스피드와 정직한 도구감을 함께 담아냈습니다. 프로덕트 UI · 랜딩 페이지와 톤을 통일해서 사용합니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고 시스템"],
    thumbnail: p("case-09_10.png"),
    images: [p("case-09_10.png")],
  },
  {
    slug: "carswitch",
    title: "CarSwitch · 차량 교환 서비스",
    client: "CarSwitch",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "화살표 교환 심볼의 오토모티브 로고",
    description:
      "차량 스왑/교환 서비스 CarSwitch의 로고입니다. 상하 방향의 화살표를 교차시켜 'Switch' 액션을 심볼로 잡고, 딥블루 워드마크로 안정감과 신뢰를 강조했습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고"],
    thumbnail: p("carswitch-logo.png"),
    images: [p("carswitch-logo.png")],
  },
  {
    slug: "daom",
    title: "DAOM · 워드마크",
    client: "DAOM",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "젠틀한 미니멀 워드마크",
    description:
      "브랜드 DAOM의 워드마크입니다. 라인 웨이트를 얇게 유지하면서도 카운터 스페이스를 여유롭게 잡아 미니멀 · 럭셔리 라인에 두루 어울리도록 설계했습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고"],
    thumbnail: p("daom-logo.png"),
    images: [p("daom-logo.png")],
  },
  {
    slug: "sojeongae",
    title: "소정애 · 보리밥 브랜드",
    client: "소정애 보리밥",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "따뜻한 한식 브랜드 로고",
    description:
      "보리밥 F&B 브랜드 '소정애'의 로고입니다. 정직한 국문 세리프와 그릇/곡물 심볼을 조합해 따뜻한 한식 브랜드 톤을 잡았습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고"],
    thumbnail: p("sojeongae-borribap.png"),
    images: [p("sojeongae-borribap.png")],
  },
  {
    slug: "ongyeol",
    title: "온결 · 발바닥 케어",
    client: "온결",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "발 케어 브랜드의 벡터 심볼",
    description:
      "발바닥 케어 브랜드 '온결'의 시안입니다. 발 실루엣을 부드럽게 정리한 벡터 심볼과 워드마크를 함께 개발했습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고 시안"],
    thumbnail: p("ongyeol-footprint.png"),
    images: [p("ongyeol-footprint.png")],
  },
  {
    slug: "merixa",
    title: "MERIXA · 브랜드 시안",
    client: "MERIXA",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "브랜드 철학 정리와 로고 시안",
    description:
      "브랜드 MERIXA의 시안 워크입니다. 브랜드 철학을 시각적으로 정리하고 로고 · 컬러 방향을 함께 잡았습니다.",
    role: ["브랜드 · 로고"],
    deliverables: ["로고 시안", "브랜드 정의"],
    thumbnail: p("merixa-philosophy.png"),
    images: [p("merixa-philosophy.png")],
  },
  {
    slug: "primary-system-brand",
    title: "PRIMARY SYSTEM · 자체 브랜드",
    client: "프라이머리시스템",
    category: "브랜드 · 로고",
    year: "2026",
    summary: "자체 법인 브랜드 아이덴티티",
    description:
      "프라이머리시스템의 자체 브랜드 · 명함 시스템입니다. 미니멀한 P 심볼과 국문/영문 병기 워드마크로 IT 에이전시로서의 신뢰와 절제를 함께 담았습니다.",
    role: ["브랜드 · 로고", "인쇄물"],
    deliverables: ["로고", "명함"],
    thumbnail: p("case-10_01.png"),
    images: [p("case-10_01.png")],
  },

  // ---------- 리서치 · 문서 ----------
  {
    slug: "seo-proposal",
    title: "SEO 제안서 시스템",
    client: "프라이머리시스템 세일즈 자산",
    category: "리서치 · 문서",
    year: "2026",
    summary: "웹 제작 + 검색 노출 통합 제안서",
    description:
      "홈페이지 제작과 검색 최적화를 함께 제안하는 프라이머리시스템의 표준 세일즈 문서입니다. 검색 유입이 발생하는 원리, 실제 지표(Google Search Console 데이터), 제작 이후 유지 · 콘텐츠 확장 플랜까지 슬라이드 단위로 구조화했습니다.",
    role: ["리서치", "문서 설계"],
    deliverables: ["제안서 문서 (10p+)"],
    thumbnail: p("seo-proposal-03_01.png"),
    images: [
      p("seo-proposal-03_01.png"),
      p("seo-proposal-03_02.png"),
      p("seo-proposal-04_01.png"),
      p("seo-proposal-05_01.png"),
      p("seo-proposal-06_01.png"),
      p("seo-proposal-07_01.png"),
      p("seo-proposal-08_01.png"),
      p("seo-proposal-09_01.png"),
    ],
  },
];

export const CATEGORY_ORDER: PortfolioCategory[] = [
  "웹사이트",
  "SaaS · 프로덕트",
  "브랜드 · 로고",
  "리서치 · 문서",
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_ITEMS.find((item) => item.slug === slug);
}

export function getPortfoliosByCategory(
  category: string | undefined,
): PortfolioItem[] {
  if (!category || category === "전체") return PORTFOLIO_ITEMS;
  return PORTFOLIO_ITEMS.filter((item) => item.category === category);
}
