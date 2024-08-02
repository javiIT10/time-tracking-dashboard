/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/js/app.js"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        /* ### Primary */
        blue: "hsl(246, 80%, 60%)",
        "light-red-work": "hsl(15, 100%, 70%)" /* (work) */,
        "soft-blue-play": "hsl(195, 74%, 62%)" /* (play) */,
        "light-red-study": "hsl(348, 100%, 68%)" /* (study) */,
        "lime-green-exercise": "hsl(145, 58%, 55%)" /* (exercise) */,
        "violet-social": "hsl(264, 64%, 52%)" /* (social) */,
        "soft-orange-seftcare": "hsl(43, 84%, 65%)" /* (self care) */,

        /* ### Neutral */
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
