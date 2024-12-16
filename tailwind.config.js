/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Mulish"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: '#000',
        logo: '#bf1f49',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
      animation: {
        scaleIn: 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        scaleIn: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      // for disabling user drag on image
      userDrag: {
        none: 'none',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.user-drag-none': {
          WebkitUserDrag: 'none',
        },
      });
    },
  ],
};
