module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "490px",
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
      "s-custom": [
        "14px",
        {
          lineHeight: "17.65px",
          letterSpacing: "0.88px",
        },
      ],
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
      "md-custom": [
        "24px",
        {
          lineHeight: "30.25px",
          letterSpacing: "1.5px",
        },
      ],
      "ml-custom": [
        "29px",
        {
          lineHeight: "35px",
          letterSpacing: "2px",
        },
      ],
      "l-custom": [
        "32px",
        {
          lineHeight: "40px",
          letterSpacing: "2.5px",
        },
      ],
      "xl-custom": [
        "40px",
        {
          lineHeight: "50.4px",
          letterSpacing: "2.5px",
        },
      ],
    },
    minWidth: {
      "105px": "105px",
      "110px": "110px",
    },
    maxWidth: {
      "110px": "110px",
      "460px": "460px",
      "1440px": "1440px",
    },
    minHeight: {
      "105px": "105px",
      "110px": "110px",
      "470px": "470px",
      screen: "100vh",
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
      black: "#000000",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      screens: {
        xsm: "420px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        //%
        "30%": "30%",
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
        //px
        "43px": "43px",
        "52px": "52px",
        "64px": "64px",
        "80px": "80px",
        "105px": "105px",
        "110px": "110px",
        "120px": "120px",
        "140px": "140px",
        "226px": "226px",
        "410px": "410px",
        "460px": "460px",
        //%
        "33%": "33%",
        "92%": "92%",
      },
      height: {
        "40px": "40px",
        "48px": "48px",
        "52px": "52px",
        "64px": "64px",
        "67px": "67px",
        "72px": "72px",
        "105px": "105px",
        "110px": "110px",
        "120px": "120px",
        "140px": "140px",
        "266px": "266px",
        "460px": "460px",
        "623px": "623px",
        //%
        "33%": "33%",
      },
      padding: {
        "5px": "5px",
        "8px": "8px",
        "9px": "9px",
        "11px": "11px",
        "13px": "13px",
        "15px": "15px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "24px": "24px",
        "30px": "30px",
      },
      margin: {
        "13px": "13px",
        "16px": "16px",
        "17px": "17px",
        "19px": "19px",
        "20px": "20px",
        "24px": "24px",
        "25px": "25px",
        "40px": "40px",
      },
      gap: {
        "5px": "5px",
        "8px": "8px",
        "10px": "10px",
        "14px": "14px",
        "20px": "20px",
      },
    },
  },
  plugins: [],
};
