import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  build: {
    // Raise warning threshold slightly — large assets are mostly external CDN anyway
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor code into separate cached chunks so the app JS is smaller
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-motion': ['motion'],
          'vendor-lucide': ['lucide-react'],
          'vendor-email':  ['@emailjs/browser'],
        },
      },
    },
  },
});
