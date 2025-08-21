import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // ✅ allow JSX in .js files
    jsxRuntime: 'classic',
    babel: {
      presets: ['@babel/preset-react'],
    },
  })],
})
