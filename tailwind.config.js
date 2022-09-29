/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#421956",
        "author-bg-color": " #EFEBEB",
        F4EFEF: "#F4EFEF",
      },
      boxShadow: {
        custom: "4px 4px 6px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
