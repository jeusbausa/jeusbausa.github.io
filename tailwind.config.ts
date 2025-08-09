import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        body: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#effafe",
          100: "#d7f3fb",
          200: "#b5e9f7",
          300: "#7fd8ef",
          400: "#38c5e6",
          500: "#14b3d9",
          600: "#0ea5e9", // LIGHT MODE primary accent (stronger on white)
          700: "#0b83b6",
          800: "#06607f",
          900: "#0e7490", // DARK MODE softer accent fallback
        },
      },
      boxShadow: { soft: "0 8px 30px rgba(2,132,199,.15)" },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
