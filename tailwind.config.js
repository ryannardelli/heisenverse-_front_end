/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        primary: "#5DBF30",
        secondary: "#0D0D0D",
        assets: "#36731A",
        light: "#E0F2FE",
        dark: "#111827"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: "class"
};
