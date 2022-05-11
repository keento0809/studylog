module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    minHeight: {
      100: "100px",
      270: "270px",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
