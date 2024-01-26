/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Tilt Neon"],
    },
    extend: {
      animation: {
        "slow-spin": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
}
