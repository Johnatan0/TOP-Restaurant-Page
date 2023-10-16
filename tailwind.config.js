module.exports = {
  purge: ['./src/**/*.js', './dist/*.html'],
  darkMode: false, 
  theme: {
    extend: {
      backgroundImage: {
        'chicken-burguer' : "url(/src/assets/chickenburger.png)",
        'burguer' : "url(/src/assets/burguer.png)",
        'icecream' : "url(/src/assets/ice_cream.png)",
        'pizza' : "url(/src/assets/pizza.png)",
        'salad' : "url(/src/assets/salad.png)",
        'combo-burguer' : "url(/src/assets/burguer_combo.png)",
        'cheesy-pizza' : "url(/src/assets/cheesy_pizza.png)",
        'peperoni-pizza': "url(/src/assets/peperoni_pizza.png)",
        'acai-bowl' : "url(/src/assets/açai.png)",
        'choco-icecream' : "url(/src/assets/chocolate-ice-cream.png)",
        'supreme-combo' : "url(/src/assets/supreme_combo.png)",
        'special-fries' : "url(/src/assets/cheesy_fries.png)",
        'milkshake' : "url(/src/assets/milkshake.png)",
        'nuggies' : "url(/src/assets/nuggies.png)",
        'fish-snack' : "url(/src/assets/fish-snack.png)",
        'vanilla-sundae' : "url(/src/assets/vanilla-sundae.png)",
        'breakfast' : "url(/src/assets/breakfast.png)",
        'beef-sandwich' : "url(/src/assets/Beef_sandwich.png)",
        'fries' : "url(/src/assets/simple_fries.png)"
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(350px, 1fr))',
        'auto-fill-sm' : 'repeat(auto-fill, minmax(175px, 1fr)'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};