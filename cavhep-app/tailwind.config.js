/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E5631',
          light: '#2D7D4F',
          muted: '#4A9B6F',
          pale: '#E8F5EE',
        },
        secondary: {
          DEFAULT: '#D4621A',
          light: '#E87840',
          pale: '#FDF0E8',
        },
        amber: {
          DEFAULT: '#F5A623',
          pale: '#FEF6E4',
        },
        cream: {
          DEFAULT: '#F8F6F0',
          dark: '#EEE9DF',
        },
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#1A2410',
          secondary: '#4A6B4A',
          muted: '#8BA88B',
        },
        border: '#D4E8D4',
      },
    },
  },
  plugins: [],
};
