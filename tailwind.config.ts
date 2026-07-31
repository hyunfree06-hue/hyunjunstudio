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
        primary: {
          DEFAULT: "#FF8A5B",
          light: "#FFB08A",
          dark: "#E56F40",
        },
        accent: {
          DEFAULT: "#FFD86E",
          light: "#FFE9A8",
        },
        cream: {
          DEFAULT: "#FFFBF5",
          dark: "#FFF3E6",
        },
        ink: {
          DEFAULT: "#2B2B2B",
          muted: "#6B6B6B",
          light: "#9A9A9A",
        },
        success: "#7CC29B",
        mint: "#C8E8D8",
      },
      fontFamily: {
        sans: ["Pretendard", "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(43, 43, 43, 0.06)",
        lift: "0 12px 32px rgba(43, 43, 43, 0.1)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
