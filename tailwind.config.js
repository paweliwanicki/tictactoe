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
      "sm-custom": [
        "16px",
        {
          lineHeight: "20px",
          letterSpacing: "1px",
        },
      ],
      md: [
        "20px",
        {
          lineHeight: "25px",
          letterSpacing: "1.25px",
        },
      ],
    },
    maxWidth: {
      "460px": "460px",
      "1440px": "1440px",
    },
    minHeight: {
      "470px": "470px",
    },
    colors: {
      dark: "#1A2A33",
      "semi-dark": "#1F3641",
      silver: "#A8BFC9",
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
        "10px": "10px",
        "15px": "15px",
        "4xl": "2rem",
      },
      boxShadow: {
        "sm-orange-custom": "inset 0px -4px 0px #CC8B13",
        "md-orange-custom": "inset 0px -8px 0px #CC8B13",
        "sm-blue-custom": "inset 0px -8px 0px #118C87",
        "md-blue-custom": "inset 0px -8px 0px #118C87",
        "sm-silver-custom": "inset 0px -4px 0px #6B8997",
        "md-silver-custom": "inset 0px -8px 0px #6B8997",
        "sm-semi-dark-custom": "inset 0px -4px 0px #1F3641",
        "md-semi-dark-custom": "inset 0px -8px 0px #1F3641",
        "md-dark-custom": "inset 0px -8px 0px #10212A",
        "sm-dark-custom": "inset 0px -4px 0px #10212A",
      },
      width: {
        "52px": "52px",
        "140px": "140px",
        "226px": "226px",
        "410px": "410px",
        "460px": "460px",
      },
      height: {
        "52px": "52px",
        "67px": "67px",
        "140px": "140px",
        "460px": "460px",
      },
      padding: {
        "8px": "8px",
        "9px": "9px",
        "11px": "11px",
        "13px": "13px",
        "15px": "15px",
        "17px": "17px",
        "19px": "19px",
        "24px": "24px",
        "30px": "30px",
      },
      margin: {
        "17px": "17px",
        "19px": "19px",
        "20px": "20px",
        "24px": "24px",
        "25px": "25px",
        "40px": "40px",
      },
      gap: {
        '20px': '20px',
      }
    },
  },
  plugins: [],
};
