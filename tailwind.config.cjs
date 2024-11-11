/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'tea-rose-red': '#d6bbc0',
          'lilac': '#d0a3bf',
          'sky-magenta': '#c585b3',
          'sky-magenta-2': '#bc69aa',
          'purpureus': '#bb66b4',
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }