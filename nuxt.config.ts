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
     storage: {
      cache: {
        driver: 'fs', // Sử dụng file system để lưu cache (hoặc dùng 'memory')
        base: './.nitro/cache', // Đường dẫn lưu cache
      }
    }
  },

  ssr: true,
  pages: true,

  // Không cần cấu hình proxy nữa
  routeRules: {
    '/': { prerender: true },
  },
});
