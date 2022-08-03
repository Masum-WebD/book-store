module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27AE61",
          secondary: "#229955",
          accent: "#229955",
          neutral: "#229955",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
