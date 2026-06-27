import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Add this line

export default defineConfig({
  plugins: [
    tailwindcss(), // Add this line
  ],
})