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
          primary: "#FF745C",
          secondary: "#452473",
          accent: "#16162E",
          neutral: "#0B1B28",
          halkabeguni: "#F8F3FF",
          "placehold": "#0B1B28",
        },
      },
    ],
  },
  plugins: [require("daisyui", "flowbite/plugin")],
};
