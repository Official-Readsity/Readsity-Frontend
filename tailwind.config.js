/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#421956",
        "343333": " #343333",
        F4EFEF: "#F4EFEF",
        "light-purple": "A35EC3",
      },
      boxShadow: {
        custom: "4px 4px 6px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
