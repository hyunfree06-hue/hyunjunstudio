import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#FF6B4A",
          dark: "#E85535",
          light: "#FF8A70",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#666666",
          light: "#999999",
          faint: "#B3B3B3",
        },
        paper: {
          DEFAULT: "#FDFCFA",
          warm: "#F7F5F2",
          line: "#E8E5E0",
        },
        kakao: "#FEE500",
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "Inter",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        "display": [
          "clamp(2.75rem, 7vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "850" },
        ],
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};
export default config;
