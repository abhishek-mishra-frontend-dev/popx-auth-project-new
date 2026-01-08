import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import svgr from 'vite-plugin-svgr' // 1. Import the plugin
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // This ensures the path is always correct regardless of where the SCSS file is
        additionalData: `@use "${path.resolve(__dirname, 'src/styles/_mixin.scss').replace(/\\/g, '/')}" as *;`
      }
    }
  }
})