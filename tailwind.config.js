module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../path/to/chartjs.min.js",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#28AF62",
          secondary: "#229955",
          accent: "#6e6e6e",
          neutral: "#3c3c3c",
        },
      },
    ],
  },
  plugins: [require("daisyui", "flowbite/plugin")],
};
