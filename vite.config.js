import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite' // <--- this import

export default defineConfig({
  plugins: [react(), tailwind()],
})
