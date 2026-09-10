import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B2545",
          light: "#13345f",
          dark: "#081b34",
        },
        accent: {
          DEFAULT: "#0EA5A4",
          light: "#5eead4",
          dark: "#0b8483",
        },
      },
      maxWidth: {
        content: "1280px",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
