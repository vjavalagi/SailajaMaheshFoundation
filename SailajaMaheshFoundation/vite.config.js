import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// NOTE: We are importing the necessary modules for direct PostCSS configuration
// We need to import 'autoprefixer' and 'tailwindcss' directly into this file.
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  // Configure the CSS processing pipeline
  css: {
    postcss: {
      // Embed the configuration that was in postcss.config.js here
      plugins: [
        tailwindcss(), // Run Tailwind CSS
        autoprefixer(), // Run Autoprefixer
      ],
    },
  },
  
  plugins: [
    // This plugin enables React Fast Refresh and Babel support
    react({
      // Configure Babel to use the React Compiler (if you were using it)
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
});