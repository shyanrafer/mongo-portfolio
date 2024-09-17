import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// source code from U of MN
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
