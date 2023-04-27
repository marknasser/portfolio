/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        light: "#a2a3f9",
        light2: "#9c86d3",
        blue: "#3551d1",
        green: "",
        weird: "#caf0f8",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        wave: "inset 9px 9px 9px 9px #915eff80",
        info: "inset 9px 9px 9px 9px #ffffff4d",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "profile-img": "url('/src/assets/old/profile.jpg')",
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      },
      content: {
        brush: "url('./assets/old/brush.png')",
      },
      keyframes: {
        borderWave: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
      },
      animation: {
        borderWave: "borderWave 2s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
};
