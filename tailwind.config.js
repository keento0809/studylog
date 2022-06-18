module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    // test
    minWidth: {
      298: "298px",
    },
    minHeight: {
      20: "20px",
      48: "48px",
      50: "90px",
      100: "100px",
      240: "240px",
      270: "270px",
    },
    extend: {
      maxWidth: {
        240: "240px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
