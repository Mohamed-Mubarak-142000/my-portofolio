/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColorBody: "var(--bgColor)",
        secondaryBgColor: "var(--secondaryBgColor)",
        bgColorBtn: "var(--bgColorBtn)",
        bgColorBtnHover: "var(--bgColorBtnHover)",
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
        border: "var(--border)",
      },
    },
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
