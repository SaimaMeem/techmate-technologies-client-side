module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'logo-text': ['Unica One', 'cursive'],
        'headings': ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#0e293b',
        'darker-blue': '#091b26',
        'light-off-white':'#F8F9FA',
        'off-white': '#e8e9eb',
        'off-white-darker': '#dedddc',
        'pastel-green': '#00a14b',
        'pastel-green-dark': '#019144',
        'pastel-green-darker': '#006b32',
        'redd': '#ed1c24',
        'light-red': '#f25a5f',
        'orange': '#FF914D',
        'orange-dark': '#fc8942',
        'orange-darker': '#f77728',
        'orange-darkest': '#db702e',
        'light-orange': '#f59d67',
        'lavender-dark': '#c14be3',
        'lavender-darker': '#9e2abf',
        'lavender-darkest': '#781f91',
        'light-lavender': '#d191e3',
        'yellow': '#FBB61B',
        'light-yellow': '#f7c043',
        'dark-yellow': '#dea31f',
        'sky-blue':'#24BAF4',
        'dark-sky-blue':'#0491c7',
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin'),
  // require("daisyui")
],
}
