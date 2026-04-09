import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'RoseCycle',
        short_name: 'RoseCycle',
        description: 'Agentic Menstrual Health & Wellness App',
        theme_color: '#fef8f8',
        background_color: '#fef8f8',
        display: 'standalone',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/864/864685.png', // Temporary placeholder
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://cdn-icons-png.flaticon.com/512/864/864685.png', // Temporary placeholder
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
