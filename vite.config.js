import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    middlewareMode: false,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'sb-51ue2mzszpma.vercel.run',
      '.vercel.run'
    ],
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000
    },
    sourcemapIgnoreList: () => true
  },
  build: {
    sourcemap: false
  }
})
