import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        borderExpand: {
          "0%": { borderWidth: "0px" },
          "100%": { borderWidth: "2px" },
        },
        borderExpandWidth: {
          "0%": { borderBottom: "1px solid transparent" },
          "100%": {
            borderBottom: "2px solid rgb(6 182 212 / var(--tw-text-opacity))",
          },
        },
      },
      animation: {
        borderExpand: "borderExpand 1s ease-in-out forwards",
        borderExpandWidth: "borderExpandWidth 0.8s ease-out forwards",
      },
    },
    variants: {
      extend: {
        animation: ["responsive", "hover", "focus"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
