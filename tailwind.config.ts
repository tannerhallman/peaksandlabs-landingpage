import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#faf8e9",
        primary: "#98af9a",
        secondary: "#a98d5e",
        alternative: "#d9dbd1",
        dark: "#11190e",
      },
    },
  },
  plugins: [],
};

export default config;
