import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // SkoolBox brand.
        primary: {
          DEFAULT: "#2E7D32",
          light: "#66BB6A",
          dark: "#1B5E20",
          50: "#F0F7F4",
          100: "#DCEEDF",
          200: "#B7DDBE",
          300: "#8ECC97",
          400: "#66BB6A",
          500: "#2E7D32",
          600: "#256628",
          700: "#1B5E20",
          800: "#144316",
          900: "#0B2A0E",
        },
        accent: {
          DEFAULT: "#FF8F00",
          light: "#FFB74D",
          dark: "#E65100",
          tint: "#FFF3E0",
        },
        cream: {
          DEFAULT: "#F4F3EF",
          50: "#FAF9F6",
          100: "#F4F3EF",
          200: "#EBE9E0",
          300: "#E2DFC9",
          400: "#CCCAAF",
          500: "#A6A38B",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          900: "#1A1A1A",
          800: "#2B2B2B",
          700: "#4A4A4A",
          muted: "#6B6B6B",
          subtle: "#94908A",
        },
        coral: "#FF6B6B",
        sky: "#42A5F5",
        teal: "#5DB8B0",
        line: "#D9D5CA",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "serif"],
        display: ["var(--font-display)", "serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(0,0,0,0.08)",
        soft: "0 12px 40px -12px rgba(46, 125, 50, 0.20)",
        glow: "0 30px 80px -20px rgba(46, 125, 50, 0.28)",
        platform: "0 30px 60px -20px rgba(0,0,0,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-2deg)" },
        },
        spin_slow: {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.02)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        spin_slow: "spin_slow 22s linear infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "float-gentle": "float-gentle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
