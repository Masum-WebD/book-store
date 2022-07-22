/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27AE61",
          secondary: "#229955",
          accent: "#333333",
        },
      },
     
    ],
  },
  plugins: [require("daisyui")],
}
