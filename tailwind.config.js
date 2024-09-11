/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
    
    plugins: [],
    theme: {
        extend: {
          spacing: {
            'calc1': 'calc(100%-360px)',
            "calc2": "calc(100%)",
            
          },
          screens: {
            'min-900': '900px',
            "min-300": "300px",
          },
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
          },
        },
      },
  };