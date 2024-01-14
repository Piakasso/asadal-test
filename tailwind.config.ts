import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    colors: {
      black: "#050624",
      white: "#FAFBFC",
      grey: "#A4B4CB",
      "blue-300": "#3E79E5",
      "blue-200": "rgb(53, 162, 235)",
      "blue-100": "#01B8E3",
      red: "rgb(255, 99, 132)",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      md: "1.14rem",
      xl: "1.28rem",
      "2xl": "2.28rem",
    },
  },

  plugins: [],
};
export default config;
