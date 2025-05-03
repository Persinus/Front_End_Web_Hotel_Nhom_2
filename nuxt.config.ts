// Cấu hình Nuxt cho Static Site Generation (SSG)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // Đảm bảo sử dụng phiên bản tương thích
  devtools: { enabled: true }, // Bật công cụ devtools

  // Cấu hình các plugin của ứng dụng
  plugins: [
    '~/plugins/axios.js', // Đường dẫn plugin Axios
    '~/plugins/vuestic-ui.ts', // Đường dẫn plugin Vuestic UI
    '~/plugins/qrcode.js',
    '~/plugins/bootstrap.client.ts',
    '~/plugins/pinia.js',
  ],

  // Cấu hình ứng dụng
  app: {
    // Có thể thêm cấu hình ứng dụng nếu cần
  },

  // Kích hoạt tự động định tuyến trang
  pages: true, 

  // Cấu hình các biến runtime
  runtimeConfig: {
    public: {
      apiBase: 'http://nhom2webkhachsan.runasp.net/api', // Cấu hình URL API công khai
     
    },
  },




});

