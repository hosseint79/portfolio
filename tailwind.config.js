module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(-10px)" },
          "50% ": { transform: " translateY(15px) translateX(15px)" },
          "100%": { transform: " translateY(-10px)" },
        },
      },
      animation: {
        wiggle: "wiggle 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
