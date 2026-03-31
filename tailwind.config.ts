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
        background: "var(--background)",
        foreground: "var(--foreground)",
        bitcoin: {
          DEFAULT: "#F7931A",
          dark: "#E2820E",
          light: "#FFB84D",
          glow: "#F7931A40",
        },
        navy: {
          DEFAULT: "#0A0E1A",
          light: "#111827",
          card: "#131A2B",
          border: "#1E2A42",
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "ticker": "ticker 30s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "node-pulse": "nodePulse 4s ease-in-out infinite",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px #F7931A40, 0 0 60px #F7931A20" },
          "50%": { boxShadow: "0 0 40px #F7931A60, 0 0 100px #F7931A30" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        nodePulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "bitcoin-mesh": "url('/mesh-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
