/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "320px", max: "359px" },
        xe: { min: "360px", max: "399px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        lobster: ["Lobster Two", "sans-serif"],
      },
    },
  },
  plugins: [],
};
