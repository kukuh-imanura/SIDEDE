import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// PWA
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Auto-update jika ada versi baru
      devOptions: {
        enabled: true, // Untuk testing PWA saat development
      },
      manifest: {
        name: 'Sistem Informasi Donor Darah',
        short_name: 'SiDede',
        description: 'Sistem Informasi Pendaftaran Donor Darah pada UTD-PMI Kabupaten Sumbawa',
        theme_color: '#eeeeee',
        background_color: '#eeeeee',
        display: 'standalone',
        icons: [
          {
            src: '/icon/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
