// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
      extend: {
        colors: {
          primary: '#4ADE80', 
          secondary: '#0EA5E9',
          dark: '#111827',
          light: '#F9FAFB',

          accent: '#FBBF24', // custom yellow
          muted: '#6B7280', // custom gray
        },
        fontFamily: {
          spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          'xl': '1.25rem',
        },
      },
    },
    plugins: [],
  };
  