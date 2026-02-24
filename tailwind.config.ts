import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d4af37",
          light: "#f0d060",
          dark: "#a8891c",
          shimmer: "#f5e088",
        },
        mystic: {
          black: "#0a0008",
          deep: "#100015",
          purple: "#1a0a2e",
          violet: "#2d0f4e",
          mid: "#3d1a6b",
          glow: "#6b35a8",
        },
        honey: {
          amber: "#c8860a",
          warm: "#e8a020",
          light: "#f5c842",
          pale: "#fce896",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Cormorant Garamond", "Crimson Text", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gold-shimmer": "linear-gradient(135deg, #a8891c 0%, #d4af37 30%, #f5e088 50%, #d4af37 70%, #a8891c 100%)",
        "mystic-gradient": "linear-gradient(135deg, #0a0008 0%, #1a0a2e 40%, #2d0f4e 70%, #0a0008 100%)",
        "honey-glow": "radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3), 0 0 40px rgba(212,175,55,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(212,175,55,0.4), 0 0 60px rgba(212,175,55,0.15)",
        "gold-glow-sm": "0 0 15px rgba(212,175,55,0.3)",
        "mystic": "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
