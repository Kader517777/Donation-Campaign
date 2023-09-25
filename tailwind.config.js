/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/component/Navber/*.{js,ts,jsx,tsx}",
    "./src/component/Catagories/*.{js,ts,jsx,tsx}",
    "./src/component/Catagory/*.{js,ts,jsx,tsx}",
    "./src/component/CatagoryDetail/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

