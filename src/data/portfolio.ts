// Hardcoded portfolio data — do not add DB dependency here.
// 각 항목은 상세 페이지(/portfolio/[slug])에서 렌더링됩니다.

export type PortfolioCategory =
  | "웹사이트"
  | "SaaS · 프로덕트"
  | "브랜드 · 로고"
  | "리서치 · 문서";

export type CaseStudy = {
  problem: string; // 고객이 겪던 문제
  request: string; // 고객의 요청
  whatWeDid: string[]; // 실제로 한 일
  result: string; // 무엇이 구축/변화됐는지 (허위 수치 없이)
};

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
  // 대표 프로젝트만 채운다. description을 재구성한 것이며 새 사실을 추가하지 않는다.
  caseStudy?: CaseStudy;
};

// helper for public paths
const p = (name: string) => `/portfolio/${name}`;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ---------- 웹사이트 ----------
  {
    slug: "coolguy-aircon",
    title: "쿨가이 에어컨 · 홈페이지 + SEO",
    client: "쿨가이 에어컨",
    category: "웹사이트",
    year: "2026",
    summary: "수도권 에어컨 서비스 홈페이지 · 검색 유입 구조 통합",
    description:
      "수도권 60개 시·군·구를 대상으로 에어컨 설치·수리·가스충전·청소·철거 서비스를 제공하는 쿨가이 에어컨의 공식 웹사이트입니다. 서비스 안내, 대응 지역, 지역·증상별 블로그 아카이브, 문의 동선까지 한 팀에서 설계·구축했고 네이버 블로그(누적 조회 11만+) 연동과 검색 유입 구조를 함께 세팅했습니다.",
    role: ["웹 개발", "정보 설계", "SEO 세팅"],
    deliverables: [
      "기업 홈페이지",
      "블로그 아카이브 구조",
      "네이버 블로그 연동",
      "지역·증상별 SEO 랜딩",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
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
    externalUrl: "https://cools.ai.kr",
    caseStudy: {
      problem:
        "수도권 에어컨 서비스는 지역·증상 단위로 검색되는데, 홈페이지와 블로그가 분리돼 있어 검색으로 들어온 잠재 고객이 문의로 이어지지 않는 것이 문제였습니다.",
      request:
        "홈페이지·블로그·문의 동선을 하나의 사이트로 통합하고, 지역과 증상별로 계속 검색 노출되는 구조로 만들 것.",
      whatWeDid: [
        "서비스(설치·수리·가스충전·청소·철거)별로 구조화된 홈페이지 설계",
        "지역·증상별 블로그 아카이브를 사이트에 편입해 검색 노출 자산화",
        "네이버 블로그(누적 조회 11만+) 연동으로 신뢰 지표 상시 노출",
        "전화·문자·홈페이지 문의로 이어지는 다중 접점 CTA 구조",
      ],
      result:
        "서비스·지역·증상별 검색이 문의로 이어지는 통합 웹 구조를 구축했고, 제작 이후에도 지속적으로 유지·관리 중입니다.",
    },
  },
  {
    slug: "kim-jihyun-portfolio",
    title: "김지현 · 작가 아카이브 웹사이트",
    client: "김지현 작가",
    category: "웹사이트",
    year: "2026",
    summary: "회화 · 전시 · 비평 텍스트를 담은 작가 개인 아카이브",
    description:
      "회화 작가 김지현의 개인 아카이브 사이트입니다. 작품의 물성과 실제 스케일을 존중하는 미니멀한 그리드로 대표작을 나열하고, 각 작품은 실제 크기(예: 388×261cm)까지 함께 표기해 회화의 규모가 웹에서도 그대로 전달되도록 설계했습니다. 개인전 · 단체전 이력, 크리티컬 아카이브, 작가 소개까지 한 사이트 안에서 정리했습니다.",
    role: ["웹 개발", "정보 설계"],
    deliverables: ["작가 아카이브 웹사이트", "작품 라이트박스", "전시 이력 · About 페이지"],
    stack: ["Next.js", "Tailwind CSS"],
    thumbnail: p("kim-jihyun_01.jpg"),
    images: [p("kim-jihyun_01.jpg"), p("kim-jihyun_02.jpg")],
    externalUrl: "https://kim-jihyun.com",
    caseStudy: {
      problem: "작품의 실제 스케일과 물성이 웹에서 축소되어 사라지는 것이 문제였습니다. 회화 작가에게 작품의 크기는 정체성의 일부입니다.",
      request: "작가 아카이브로서 작품 · 전시 · 비평까지 담되, 회화의 스케일과 물성이 사라지지 않는 사이트.",
      whatWeDid: [
        "작품 이미지 옆에 실제 규모(cm 단위)를 함께 표기하는 라이트박스 설계",
        "작품이 주인공이 되도록 여백 · 그리드 위주의 미니멀 레이아웃",
        "개인전 · 단체전 · 크리티컬 텍스트를 시간축으로 정리한 Exhibitions/Articles 페이지",
      ],
      result: "작품 이미지의 스케일 정보까지 놓치지 않고 담은 작가 아카이브 사이트를 완성했습니다.",
    },
  },
  {
    slug: "maison-bonjour",
    title: "MAISON BONJOUR · 제주 아동복 커머스",
    client: "MAISON BONJOUR",
    category: "웹사이트",
    year: "2026",
    summary: "필름 무드의 브랜드 랜딩과 셀렉트샵 커머스",
    description:
      "제주에 기반을 둔 프리미엄 아동복 편집숍의 온라인 스토어입니다. 필름 톤의 히어로 비주얼로 브랜드 정체성을 먼저 전달한 뒤, Girl · Boy · Baby · Adult · Accessory · Brand 카테고리 기반으로 상품을 큐레이션합니다. 다국가 통화(대한민국·USD) 지원, 인스타그램 연동, 뉴스레터 구독까지 커머스 운영에 필요한 요소를 함께 세팅했습니다.",
    role: ["웹 개발", "커머스 구축"],
    deliverables: ["Shopify 커머스", "브랜드 랜딩", "카테고리 시스템", "다국가 통화 · SNS 연동"],
    stack: ["Shopify", "Liquid"],
    thumbnail: p("maison-bonjour_01.jpg"),
    images: [p("maison-bonjour_01.jpg")],
  },
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
    caseStudy: {
      problem: "광고를 보고 유입된 대량발주 담당자가 곧바로 문의로 이어지지 않는 것이 문제였습니다.",
      request: "대량발주 문의를 리드로 전환시키는 신규 랜딩 페이지 제작",
      whatWeDid: [
        "헤더 상단에 주력 프로모션 라인을 상시 노출해 재유입 유도",
        "히어로 영역에 신뢰 카피 강조",
        "대량발주 문의 CTA와 상품 카탈로그로 이어지는 구조 설계",
      ],
      result: "광고 유입에서 문의까지 하나의 흐름으로 이어지는 랜딩 페이지 구조를 갖췄습니다.",
    },
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
    caseStudy: {
      problem: "실적은 있지만 프로그램별 정보가 흩어져 있어 상담 문의로 이어지는 동선이 약했습니다.",
      request: "VEX Korea 챔피언 지도 실적을 살리면서 프로그램별 정보를 정리한 공식 사이트",
      whatWeDid: [
        "VEX Korea 챔피언 지도 실적을 히어로 배경으로 노출",
        "초·중·고 프로그램별 커리큘럼 정보 위계 재정리",
        "상담 문의를 단일 뷰에서 전달하는 구조 설계",
      ],
      result: "실적과 프로그램 정보, 상담 문의가 한 화면 흐름으로 연결된 공식 사이트를 완성했습니다.",
    },
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
    caseStudy: {
      problem: "건강기능식품 D2C 시장에서 프리미엄한 인상과 신뢰를 동시에 전달해야 했습니다.",
      request: "오래 앉아있는 현대인을 타깃으로 한 프리미엄 D2C 사이트",
      whatWeDid: [
        "타깃에 맞춘 카피 톤 정제",
        "제품 이미지·구매 CTA·브랜드 스토리를 여백 중심 레이아웃으로 배치",
        "GMP 인증, 식이섬유 함량 등 신뢰 지표를 히어로 하단에 상시 노출",
      ],
      result: "프리미엄과 신뢰를 함께 전달하는 D2C 사이트를 완성했습니다.",
    },
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
    caseStudy: {
      problem: "오프라인 매장의 재미있는 경험을 온라인에서 그대로 살리기 어려웠습니다.",
      request: "무인 편의점의 '뽑기' 경험을 온라인 커머스로 재현",
      whatWeDid: [
        "쿠폰 번호를 고르는 오프라인 놀이 요소를 온라인 인터랙션으로 구현",
        "이모지·아이콘 대신 실제 상품 그리드를 크게 노출하는 카테고리 UI 설계",
      ],
      result: "인터랙션 자체가 브랜드 자산이 되는 온라인 커머스를 완성했습니다.",
    },
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
    caseStudy: {
      problem: "독립 크리에이터가 여러 툴을 오가지 않고 하나의 캔버스에서 작업을 완결하기 어려웠습니다.",
      request: "AI 네이티브 디자인 워크스페이스, 랜딩 페이지부터 에디터 프로토타입까지",
      whatWeDid: [
        "하나의 캔버스에서 만들고 다듬고 조합하는 워크플로 설계",
        "프롬프트로 요소를 즉시 삽입·수정하는 기능 설계",
        "랜딩 페이지와 에디터 프로토타입 개발",
      ],
      result: "기획부터 프로토타입까지 이어지는 자체 프로덕트를 완성했습니다.",
    },
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
      "반려견 니트웨어를 손으로 뜨는 소규모 브랜드 sumim의 로고와 브랜드 아이덴티티입니다. 니트웨어라는 카테고리 특성상 공산품보다는 손으로 만든 물건이라는 인상이 브랜드 신뢰의 핵심이라, 라인아트 강아지 심볼을 얇고 부드럽게 정리하고 소문자 세리프 워드마크와 조합해 손맛과 정갈함이 함께 읽히도록 설계했습니다. 상품 태그·SNS 프로필·패키지 스티커까지 흑백 단색만으로 어디에나 얹을 수 있도록 심볼을 최대한 단순화한 것이 특징입니다.",
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
      "요식업 사업자를 대상으로 하는 식자재 유통 B2B 법인 '채움식자재'의 로고와 명함 시스템입니다. '채움'이라는 상호 그대로, 그릇 심볼 안에 채소를 담는 형태로 브랜드명을 그대로 시각화했습니다. 컬러는 신선함과 신뢰감을 동시에 전달하는 딥그린 단색으로 통일해 식자재 카탈로그·거래명세서·차량 스티커·명함 등 어느 인쇄물에 얹어도 위계가 유지되도록 설계했습니다. 로고 개발과 함께 앞뒷면 양면 명함 시스템까지 인쇄 규격 기준으로 정리해 납품했습니다.",
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
    caseStudy: {
      problem: "로고만으로는 실제 매장 사인·인쇄물까지 일관되게 적용하기 어려웠습니다.",
      request: "숯불 직화 BBQ 브랜드의 로고부터 매장 인테리어 사인까지 이어지는 브랜드 시스템",
      whatWeDid: [
        "불꽃 심볼과 굵은 붓 획 워드마크로 정체성 설계",
        "컬러 배리에이션·흑백 조합 개발",
        "매장 인테리어 사인까지 실사 적용",
      ],
      result: "로고 하나가 아니라 매장 사인까지 일관되게 이어지는 브랜드 시스템을 완성했습니다.",
    },
  },
  {
    slug: "oftb",
    title: "OFTB · Off The Ball 스포츠 브랜드",
    client: "OFTB",
    category: "브랜드 · 로고",
    year: "2025",
    summary: "블랙 · 화이트 스포츠 어패럴 로고",
    description:
      "축구 어패럴 브랜드 'Off The Ball(OFTB)'의 로고입니다. 축구 어패럴 시장에서 유니폼·저지·트레이닝 웨어에 그대로 프린트됐을 때 시인성이 살아야 한다는 요구가 있어, 대문자 이탤릭 세리프 워드마크와 대비되는 삼각 심볼을 조합해 스피드와 정직한 스포츠 정체성을 함께 담았습니다. 블랙-화이트 단색 조합만으로도 자수·실크·프린팅 어떤 후가공에서도 형태가 뭉개지지 않게 설계한 것이 특징입니다.",
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
      "스포츠 브랜드 SR의 볼드 워드마크입니다. 스포츠 로고는 경기장·유니폼·굿즈·중계 화면 등 시청자와의 거리가 매번 달라지는 매체에 얹히기 때문에, 원거리에서도 형태가 유지되는 두꺼운 서체와 채도 높은 오렌지 컬러를 선택했습니다. 아웃라인 스트로크를 이중으로 두어 배경색이 어떤 톤이든 대비가 살아나도록 설계했고, 유니폼 자수·굿즈 실크·현수막 대형 프린트까지 후가공을 가정하고 획 두께를 결정했습니다.",
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
      "프리미엄 포지셔닝을 지향하는 영어학원 '김이한 영어(Kim Yihan English Academy) PREMIUM' 브랜드의 로고입니다. 학원 브랜드에서 학부모가 가장 먼저 보는 신호가 '실적'이라는 점에 착안해, 성적 상승을 상징하는 바 그래프를 심볼로 정면에 배치했습니다. 국문 세리프 워드마크와 골드 라벨을 조합해 일반 어학원이 아닌 프리미엄 포지셔닝임을 시각적으로 못박고, 간판·현수막·수업안내물·SNS 프로필까지 동일한 위계로 얹힐 수 있도록 정돈했습니다.",
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
      "차량 스왑/교환 서비스 'CarSwitch'의 로고입니다. 차량 교환은 사용자에게 큰 금액이 오가는 거래이기 때문에 서비스명에서부터 '스위치(Switch)' 액션이 즉시 이해되어야 한다는 점을 우선 순위에 두고, 상하 방향의 화살표를 교차시켜 교환 동작 자체를 심볼로 만들었습니다. 워드마크는 자동차·금융 카테고리에서 신뢰의 코드로 쓰이는 딥블루 단색으로 정리해, 앱 아이콘·차량 스티커·계약서 문서 등 어디에 얹혀도 위계가 유지되도록 설계했습니다.",
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
      "브랜드 DAOM의 워드마크입니다. 로고 하나가 상품 태그·패키지·SNS 프로필 등 서로 다른 사이즈의 매체에 얹혀야 하는 럭셔리 라인 특성상, 라인 웨이트는 얇게 유지하면서도 글자와 글자 사이(카운터 스페이스)를 여유롭게 잡아 아주 작게 축소해도 각 글자가 뭉치지 않도록 설계했습니다. 산세리프 기반이지만 자간과 세로 비율을 조정해 젠틀한 인상을 남기고, 흑백 단색 · 컬러 배경 어느 조합에서도 인상이 흔들리지 않도록 정돈한 워드마크입니다.",
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
      "보리밥을 메인으로 하는 한식 F&B 브랜드 '소정애 보리밥'의 로고입니다. 요즘의 트렌디한 카페형 서체보다 오래 봐도 물리지 않는 정직한 국문 세리프를 워드마크로 선택했고, 그릇 · 곡물 형태를 단순화한 심볼을 조합해 '어머니가 차려주는 한 상'이라는 따뜻한 한식 브랜드 톤을 잡았습니다. 간판·메뉴판·포장지·냅킨 등 매장 전반에 얹히는 것을 전제로 흑백 단색만으로도 정체성이 유지되도록 형태를 정돈했습니다.",
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
      "발바닥 케어 브랜드 '온결'의 브랜드 시안입니다. 발 케어 카테고리는 위생·따뜻함·부드러움이 브랜드 신뢰의 축이라는 점에 초점을 맞춰, 발 실루엣의 곡선을 최대한 부드럽게 정리한 벡터 심볼과 국문 워드마크를 함께 개발했습니다. 심볼의 라인 웨이트를 균일하게 유지해 스티커·패키지 상단 라벨·SNS 프로필처럼 작게 축소되는 매체에서도 발 형태가 그대로 인식되도록 정돈했고, 발 관련 제품군에 통합적으로 얹힐 수 있도록 확장성을 남긴 시안 워크입니다.",
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
      "브랜드 MERIXA의 초기 브랜딩 시안 워크입니다. 아이덴티티를 만들기 전에 브랜드가 무엇을 지향하고 어떤 언어와 시각을 쓸 것인지가 먼저 정리되어야 한다는 관점으로, 브랜드 철학·톤·컬러 방향을 한 장의 시각 문서로 우선 정리했습니다. 그 위에서 로고 시안을 여러 방향으로 전개해 클라이언트가 로고 자체가 아닌 브랜드 방향을 먼저 선택할 수 있도록 구성한 프로젝트입니다. 후속 개발 전 단계의 브랜딩 리서치·시안 단계 결과물입니다.",
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
      "웹사이트 제작과 SEO 세팅을 함께 제공하는 IT 스튜디오 '프라이머리시스템(PRIMARY SYSTEM)'의 자체 브랜드와 명함 시스템입니다. 클라이언트에게 브랜딩을 제안하는 회사인 만큼 자체 브랜드에서도 '유행 서체·과한 컬러 없이 오래 가는 시스템'이라는 스튜디오의 방향이 그대로 읽혀야 한다는 원칙 아래, 미니멀한 P 심볼과 국문·영문 병기 워드마크를 조합해 IT 스튜디오로서의 신뢰와 절제를 함께 담았습니다. 로고·명함·메일 서명·홈페이지 · 문서 템플릿까지 하나의 톤으로 통일했습니다.",
    role: ["브랜드 · 로고", "인쇄물"],
    deliverables: ["로고", "명함"],
    thumbnail: p("case-10_01.png"),
    images: [p("case-10_01.png")],
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
