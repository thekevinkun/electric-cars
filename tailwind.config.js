/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEEEEE",
        "blue-thunder": "#30639c",
        "slate-zinc": "#393c41",
      },
      fontFamily: {
        sora: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        orbitron: "var(--font-orbitron)",
      },
    },
  },
  plugins: [],
};
