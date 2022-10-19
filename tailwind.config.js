module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    // test
    minWidth: {
      180: "180px",
      211: "211px",
      298: "298px",
      454: "454px",
    },
    minHeight: {
      20: "20px",
      44: "44px",
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
