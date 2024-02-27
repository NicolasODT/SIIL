/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          'vif': '#A1F967',
          'medium': '#149033',
          'medium-circuit': '#07802B',
          'dark': '#11882B',
          'dark-circuit': '#015526',
          'very-dark': '#023721',
          'titre': '#05762A', 
        },
      },
    },
  },
  plugins: [],
}

