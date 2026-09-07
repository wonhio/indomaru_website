import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D0F", // Near Black
        charcoal: "#171A1F",
        parchment: "#F4F2ED", // Warm Off White
        mist: "#A7ABB2", // Soft Gray
        silver: "#C6C9CE", // Metallic Silver
        navy: "#132333", // Deep Navy Accent
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1400px",
      },
      letterSpacing: {
        wide2: "0.14em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
