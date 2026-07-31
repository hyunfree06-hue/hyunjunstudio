import {
  MessageSquare,
  Zap,
  Target,
  Globe,
  LayoutTemplate,
  Smartphone,
  PenTool,
  Code2,
  FileText,
  type LucideIcon,
} from "lucide-react";

export const values = [
  {
    icon: MessageSquare,
    title: "고객과의 소통을 최우선으로",
    description: "애매한 요청도 함께 다듬어드려요",
  },
  {
    icon: Zap,
    title: "빠른 응대, 빠른 반영",
    description: "평균 응답 30분 이내",
  },
  {
    icon: Target,
    title: "가격 대비 확실한 결과물",
    description: "시세보다 합리적으로",
  },
] as const satisfies ReadonlyArray<{
  icon: LucideIcon;
  title: string;
  description: string;
}>;

export const services = [
  {
    icon: Globe,
    title: "웹사이트 제작",
    description: "랜딩부터 기업 사이트까지, 반응형으로 깔끔하게",
  },
  {
    icon: LayoutTemplate,
    title: "워드프레스",
    description: "테마 커스텀, 플러그인, 유지보수까지 한 번에",
  },
  {
    icon: Smartphone,
    title: "앱·웹 기획",
    description: "아이디어를 화면 흐름과 기능 명세로 정리해요",
  },
  {
    icon: PenTool,
    title: "로고·브랜딩",
    description: "브랜드 톤에 맞는 심플하고 기억에 남는 디자인",
  },
  {
    icon: Code2,
    title: "소프트웨어 개발",
    description: "웹앱, 모바일 앱, 자동화 도구 개발",
  },
  {
    icon: FileText,
    title: "노션 자동화",
    description: "업무·학원·팀 관리용 노션 템플릿과 자동화",
  },
] as const satisfies ReadonlyArray<{
  icon: LucideIcon;
  title: string;
  description: string;
}>;

export const processSteps = [
  {
    step: "01",
    title: "문의",
    description: "카톡이나 폼으로 편하게 말씀해 주세요",
  },
  {
    step: "02",
    title: "견적",
    description: "범위와 일정, 예산을 함께 맞춰봐요",
  },
  {
    step: "03",
    title: "작업",
    description: "중간 공유하며 피드백을 바로 반영해요",
  },
  {
    step: "04",
    title: "마무리",
    description: "검수 후 인수인계, 간단한 사용법도 안내",
  },
] as const;

export const faqs = [
  {
    q: "견적은 어떻게 받나요?",
    a: "카카오 오픈채팅이나 문의 폼으로 원하시는 내용을 알려주시면, 보통 당일 내로 대략적인 범위와 금액을 안내드려요.",
  },
  {
    q: "작업 기간은 보통 얼마나 걸리나요?",
    a: "간단한 랜딩 페이지는 1~3일, 워드프레스 사이트는 3~7일, 앱/웹 기획·개발은 규모에 따라 1~4주 정도 걸려요. 문의 시 일정에 맞춰 조율 가능합니다.",
  },
  {
    q: "수정은 몇 번까지 가능한가요?",
    a: "기본 2~3회 수정은 포함되어 있어요. 큰 방향 변경이 아닌 디테일 수정은 넉넉히 반영해 드립니다.",
  },
  {
    q: "숨고에서만 작업하시나요?",
    a: "아니요! 이 사이트를 통해 직접 문의주셔도 동일하게 진행해요. 오히려 수수료 없이 더 합리적인 견적이 가능할 수 있어요.",
  },
  {
    q: "유지보수나 업데이트도 가능한가요?",
    a: "네, 기존 사이트 수정, 콘텐츠 추가, 기능 보완 모두 가능합니다. 단발성·월간 유지보수 모두 상담해 드려요.",
  },
] as const;
