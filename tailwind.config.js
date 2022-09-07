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
            'hero-camella': "url('../src/assets/img/banner-img.png')",
            'top-bg-house-camella': "url('../src/assets/img/top_bg_house.png')",
            'footer-camella': "url('../src/assets/img/footer-img.png')",
        }
    },
    fontFamily: {
      'Raleway': ['Raleway', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet': '450px',
      // => @media (min-width: 450px) { ... }
      
      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4k': '2560px',
      // => @media (min-width: 2560px) { ... }
    },


  },
  plugins: [],
}
