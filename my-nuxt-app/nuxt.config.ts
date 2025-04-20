// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // Đảm bảo sử dụng phiên bản tương thích
  devtools: { enabled: true }, // Bật công cụ devtools
  
  plugins: [
    '~/plugins/axios.js', // Đường dẫn plugin Axios
    '~/plugins/vuestic-ui.ts', // Đường dẫn plugin Vuestic UI
   '~/plugins/qrcode.js',
  
  ],
  pages: true, // Kích hoạt tự động định tuyến trang
  runtimeConfig: {
    public: {
      apiBase: 'http://nhom2webkhachsan.runasp.net/api', // Cấu hình URL API công khai
    },
  },
});