/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEEEEE",
        "thunder-blue": "#30639c",
        "hover-thunder-blue": "#20446b",
        "slate-white": "#dbdbdb",
        "hover-slate-white": "#f7f7f7",
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
