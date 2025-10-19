import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite' // <--- this import
import path from 'path'
export default defineConfig({
  plugins: [react()],
   resolve: {
// alias: {
// '@': '/src'
// }
}
})
