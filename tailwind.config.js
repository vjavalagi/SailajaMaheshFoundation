/** @type {import('tailwindcss').Config} */
export default {
    // The 'content' array tells Tailwind which files to scan for class names.
    // This is crucial for tree-shaking (purging unused CSS) in production.
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      // You can customize default values here.
      extend: {
        // Example of adding a custom color:
        // colors: {
        //   'primary-blue': '#1da1f2',
        // },
        // Example of setting a default font to 'Inter' if not set globally:
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }