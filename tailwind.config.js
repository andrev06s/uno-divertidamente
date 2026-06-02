/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        joy: '#FFD93D',
        anger: '#FF6B6B',
        sadness: '#4D96FF',
        disgust: '#6BCB77',
        anxiety: '#9D4EDD',
        cream: '#FFFBF3',
      },
      fontFamily: {
        display: ['"Fredoka"', '"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.10)',
        glow: '0 0 0 6px rgba(255, 217, 61, 0.18)',
      },
      backgroundImage: {
        'emotion-gradient':
          'linear-gradient(90deg, #FFD93D 0%, #FF6B6B 25%, #4D96FF 50%, #6BCB77 75%, #9D4EDD 100%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
