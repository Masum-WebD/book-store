module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27AE61",
          secondary: "#229955",
          accent: "#6e6e6e",
          neutral: "#3c3c3c",
        },
      },
    ],
  },
  plugins: [require("daisyui", "flowbite/plugin")],
};
