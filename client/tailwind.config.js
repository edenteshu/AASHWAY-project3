module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#ff6347", // Tomato
        secondary: "#1e90ff", // Dodger Blue
        accent: "#32cd32", // Lime Green
        dark: "#2d2d2d", // Dark Gray
        light: "#f0f0f0", // Very Light Gray
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        skillFadeIn: "fadeIn 0.7s ease-in forwards 0.3s",
      },
    },
  },
  plugins: [],
};
