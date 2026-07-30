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
        // Indigo — the Storybook lead supporting color (used for surfaces,
        // illustrations, and playful blocks alongside the green brand primary).
        secondary: {
          DEFAULT: "#4F46E5",
          light: "#818CF8",
          dark: "#3730A3",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
        },
        // Warm orange accent — the energetic counterpoint to indigo.
        accent: {
          DEFAULT: "#EA580C",
          light: "#FB923C",
          dark: "#C2410C",
          tint: "#FFEDD5",
        },
        lilac: "#818CF8",
        sun: "#FACC15",
        cream: {
          DEFAULT: "#F4F3EF",
          50: "#FAF9F6",
          100: "#F4F3EF",
          200: "#EBE9E0",
          300: "#E2DFC9",
          400: "#CCCAAF",
          500: "#A6A38B",
        },
        // Deep blue-black ink keeps text warm and on-palette with indigo.
        ink: {
          DEFAULT: "#1E1B33",
          900: "#1E1B33",
          800: "#2C2849",
          700: "#46426A",
          muted: "#6B6790",
          subtle: "#9A97B5",
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
        card: "0 4px 24px -8px rgba(30, 27, 51, 0.10)",
        soft: "0 12px 40px -12px rgba(46, 125, 50, 0.20)",
        glow: "0 30px 80px -20px rgba(79, 70, 229, 0.28)",
        platform: "0 30px 60px -20px rgba(30, 27, 51, 0.22)",
        // Playful "sticker" offsets — flat, hard-edged drop behind cards.
        sticker: "6px 6px 0 0 rgba(30, 27, 51, 0.9)",
        "sticker-sm": "4px 4px 0 0 rgba(30, 27, 51, 0.9)",
        "sticker-indigo": "6px 6px 0 0 #4F46E5",
        "sticker-accent": "6px 6px 0 0 #EA580C",
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
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "marquee-vertical-reverse": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.02)" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pop: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "60%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "draw-dash": {
          to: { strokeDashoffset: "0" },
        },
        "bus-roll": {
          "0%": { transform: "translateX(-12%)" },
          "100%": { transform: "translateX(112%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        spin_slow: "spin_slow 22s linear infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "marquee-vertical": "marquee-vertical 28s linear infinite",
        "marquee-vertical-reverse": "marquee-vertical-reverse 28s linear infinite",
        "float-gentle": "float-gentle 4s ease-in-out infinite",
        wobble: "wobble 3.5s ease-in-out infinite",
        pop: "pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        "bus-roll": "bus-roll 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
