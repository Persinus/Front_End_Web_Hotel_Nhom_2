// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'vuestic-ui/dist/vuestic-ui.css',

  ],
  plugins: ['~/plugins/qrcode.js'],
  pages: true,
  // Không cần phải thêm `pages: true` vì đây là mặc định của Nuxt 3
})
