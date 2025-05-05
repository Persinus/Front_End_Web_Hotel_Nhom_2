export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vuestic-ui.ts',
    '~/plugins/qrcode.js',
    '~/plugins/bootstrap.client.ts',
    '~/plugins/pinia.js',
  ],

  nitro: {
    preset: 'vercel',
  },

  ssr: true,
  pages: true,

  // Không cần cấu hình proxy nữa
  routeRules: {
    '/': { prerender: true },
  },
});
