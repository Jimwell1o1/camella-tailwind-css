/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'green-camella': '#6aa75e',
            'darkgreen-camella': '#076648',
        },
        backgroundImage: {
            'hero-camella': "url('../src/assets/img/header.jpg')",
            'top-bg-house-camella': "url('../src/assets/img/top_bg_house.png')",
            'footer-camella': "url('../src/assets/img/footer-img.png')",
        }
    },
    fontFamily: {
      'Raleway': ['Raleway', 'sans-serif']
    }


  },
  plugins: [],
}
