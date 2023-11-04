/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 4px #4b4b4b',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 0px 10px #0aafe6c4"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
        
      };

      addUtilities(newUtilities);
    }
  ],
}

