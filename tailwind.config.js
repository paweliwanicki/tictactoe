module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    fontSize: {
      md: [
        "20px",
        {
          lineHeight: "25px",
          letterSpacing: "1.25px",
        },
      ],
    },
    colors: {
      dark: "#1A2A33",
      "semi-dark": "#1F3641",
      silver: "##A8BFC9",
      "silver-light": "#DBE8ED",
      blue: "#31C3BD",
      "blue-light": "#65E9E4",
      orange: "#F2B137",
      "orange-light": "#FFC860",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        15: "15px",
        "4xl": "2rem",
      },
      boxShadow: {
        "orange-custom": "inset 0px -8px 0px #CC8B13",
        "blue-custom": "inset 0px -8px 0px #118C87",
      },
      width: {
        226: "226px",
        410: "410px",
      },
      height: {
        67: "67px",
        52: "52px",
      },
      padding: {
        17: "17px",
        25: "25px",
      },
    },
  },
  plugins: [],
};
