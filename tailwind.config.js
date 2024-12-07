/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'twinkle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 }
        },
        'explosion': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.5) rotate(180deg)' },
          '100%': { transform: 'scale(0) rotate(360deg)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'spin-slow': 'spin-slow 4s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'explosion': 'explosion 0.5s ease-in-out forwards'
      },
      dropShadow: {
        'glow': '0 0 8px rgba(45, 212, 191, 0.5)',
        'glow-red': '0 0 8px rgba(239, 68, 68, 0.5)'
      }
    },
  },
  plugins: [],
};
