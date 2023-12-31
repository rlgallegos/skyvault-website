/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#FFFFFF",
            secondary: "#2475c8",
            tertiary: "#C8E8C7"
        }
    },
  },
  plugins: [],
}

