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
        'light-off-white': '#F8F9FA',
        'off-white': '#e8e9eb',
        'off-white-darker': '#dedddc',
        'pastel-green': '#00a14b',
        'pastel-green-dark': '#019144',
        'pastel-green-darker': '#006b32',
        'redd': '#EE1E22',
        'light-red': '#e84a4d',
        'lighter-red': '#ff6164',
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
        'medium-yellow': '#f2bb3f',
        'light-yellow': '#f7c043',
        'dark-yellow': '#ebaf2a',
        'darker-yellow': '#d99602',
        'sky-blue': '#24BAF4',
        'dark-sky-blue': '#0491c7',
        'spinner-color': '#00DFC0',
        'paste': '#18dbc0',
        'dark-paste': '#02b39a',
      },

      animation: {
        shine: "shine 3s",
      },
      keyframes: {
        shine: {
          "100%": { left: "105%" },
        },
      },

    },
  },
  plugins: [require('tw-elements/dist/plugin'),
    // require("daisyui")
  ],
}
