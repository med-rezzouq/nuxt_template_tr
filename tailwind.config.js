const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  // or 'media' or 'class'

  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
      intro: "100% 55vh",
      complete: "100% 70vh",
      ina: "100% 70vh",
      inb: "100% 60vh",
      inh: "100% 100vh",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      gray: colors.gray,
      indigo: {
        dark: "#08365C",
        footer: "#134E84",
        initial: "#093F6D",
        original: "#122E46",
        gcards: "#043156FA",
        light: "#F5F5F5",
        lgray: "#F9F9F9",
        project: "#19466B",
        bg: "#F5F5F5",
        hard: "#1A4A74",
        soft: "#2E6DA1",
        blue: "#0B4E86",
        lblue: "#0A4473",
        gray: "#4E4E4E",
        hgray: "#BBBBBB",
        wgray: "#ECECEC",
        sgray: "#EBEBEB",
        premium: "#F1D9BF",
        tgray: "#646464",
      },
    },
    extend: {
      screens: {
        sl: { max: "1200px" },
        // => @media (min-width: 992px) { ... }
      },
      boxShadow: {
        card: "0px 2px 24px #11111126",
        agile: "0px 3px 6px #00000014",
      },
      borderWidth: {
        1: "1px",
      },

      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "10/12": "83.333%",
        "11/12": "91.66%",
        prose: "50ch",
      },
      zIndex: {
        "-10": "-10",
      },
      fontSize: {
        "4xl": ["40px", "56px"],
        xl: ["20px", "22px"],
        "2xl": ["25px", "30px"],
        sm: ["14px", "28px"],
        xs: ["12px", "20px"],
        xxs: ["8px", "11.2px"],
      },

      flex: {
        4: "1 0 25%",
        2: "2 2 0%",
      },
    },
  },
  variants: {},
  plugins: [],
};
