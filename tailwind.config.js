/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        boxShadow: {
          'custom-shadows': '3px 3px 5px lightblue',
        },
      },
      colors: {
        'light-blue': 'aliceblue',
        blue: 'rgb(69, 179, 230)',
        'bg-primary': 'rgb(247,48,199)',
        'bg-primary-content': 'rgb(51,48,247)',
        secondary: 'secondary',
      },
    },
    daisyui: {
      themes: ['sunset'],
    },
    plugins: [require('daisyui')],
  };