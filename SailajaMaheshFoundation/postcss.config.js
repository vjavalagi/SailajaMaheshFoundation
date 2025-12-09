/** @type {import('postcss-load-config').Config} */
export default {
  // This tells PostCSS to use the Tailwind CSS and Autoprefixer plugins.
  plugins: {
    // 1. Tailwind reads your tailwind.config.js and generates CSS utility classes.
    tailwindcss: {},
    // 2. Autoprefixer adds vendor prefixes (like -webkit-, -moz-) for wider browser compatibility.
    autoprefixer: {},
  },
}