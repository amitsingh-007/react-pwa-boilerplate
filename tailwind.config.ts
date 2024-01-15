import { nextui } from "@nextui-org/react";
import { type Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-primary)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
