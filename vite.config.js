import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Vite React PWA',
        short_name: 'VitePWA',
        description: 'My Vite-powered Progressive Web App',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-100x100.png',
            sizes: '100x100',
            type: 'image/png',
          }
        ],
      },
    }),
  ],
});
