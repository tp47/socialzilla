/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          button: "#1da1f2",
          bg: {
            dark: "#171717",
            light: "#ffffff",
          },
        },
        secondary: {
          bg: {
            dark: "#404040",
            light: "#f5f5f5",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
