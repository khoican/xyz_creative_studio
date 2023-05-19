/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-images': "url('./../assets/images/hero-img.png')",
        'photo-images': "url('./../assets/images/photograph.png')"
      },
      backgroundColor: {
        'footer': '#2D2D2D'
      },
      fontFamily: {
        'sans': ['Poppins'],
        'courier': ['Courier Prime']
      }
    },
  },
  plugins: [],
}

