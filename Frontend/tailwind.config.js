/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#09394A",
      secondary: "#083649",
      tertiary: "#063347",
      inverted: "#fff",
    },
    fontFamily: {
      primary: [
        "Passion One",
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],

      secondary: [
        "Poppins",
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [],
};
