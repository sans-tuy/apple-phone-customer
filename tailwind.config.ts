import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
  plugins: [
    nextui(),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".xl-bold-base": {
          fontSize: "32px",
          fontWeight: "bold",
          lineHeight: "38.73px",
        },
        ".md-bold-base": {
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "29.05px",
        },
        ".sm-bold-base": {
          fontSize: "16px",
          fontWeight: "bold",
          lineHeight: "19.36px",
        },
        ".sm-md-base": {
          fontSize: "16px",
          fontWeight: "normal",
          lineHeight: "19.36px",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
