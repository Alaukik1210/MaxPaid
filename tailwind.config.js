/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lime: "#33ff00",
        fuchsia: {
          "100": "#cc00ff",
          "200": "rgba(204, 0, 255, 0.2)",
        },
       
      },
      
      fontFamily: {
        "product-sans": "'Product Sans'",
        "product-sans-black": ["'Product Sans Black'"],
        "product-sans-medium": "'Product Sans Medium'",
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/bg2.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      
    },
   
    
  },
}
};
