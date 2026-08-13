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
        // Enterprise IT palette
        ink: {
          DEFAULT: "#0B1220", // near-black navy — primary text/bg surface
          900: "#0B1220",
          800: "#111827",
          700: "#1F2937",
          600: "#334155",
          500: "#475569",
          400: "#64748B",
          300: "#94A3B8",
          200: "#CBD5E1",
          100: "#E2E8F0",
          50: "#F1F5F9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC",
          line: "#E5E7EB",
        },
        accent: {
          // steel blue — subtle enterprise accent
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          soft: "#DBEAFE",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },
      fontSize: {
        display: [
          "clamp(2.1rem, 5.4vw, 3.8rem)",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        h1: [
          "clamp(1.75rem, 4vw, 2.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h2: [
          "clamp(1.35rem, 2.8vw, 1.85rem)",
          { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 18, 32, 0.04), 0 1px 3px rgba(11, 18, 32, 0.06)",
        elevated: "0 4px 24px rgba(11, 18, 32, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
