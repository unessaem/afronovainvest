import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: change to '/subfolder/' if the site is not served from the domain root.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
