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
      routerBase: '/Front_End_Web_Hotel_Nhom_2/', // Thêm cấu hình base URL tại đây
      baseURL: '/Front_End_Web_Hotel_Nhom_2/', // Added baseURL for clarity
    },
  },

  // Tắt server-side rendering nếu chỉ muốn sử dụng static site generation
  ssr: false, // Tắt SSR (Server-Side Rendering)

  // Cấu hình Nitro cho việc tạo static site
  nitro: {
    preset: 'static', // Sử dụng preset static để tạo static site
  },
});

// ssr: false: Tắt server-side rendering nếu bạn chỉ muốn sử dụng static site generation (SSG).
// nitro.preset: 'static': Cấu hình Nitro để tạo static site. Nitro là engine của Nuxt 3 để xử lý các yêu cầu build và deploy.

// Xóa target: Thuộc tính target đã bị loại bỏ trong Nuxt 3, vì vậy không cần sử dụng.

// Triển khai static site:
// Sau khi cập nhật cấu hình, bạn có thể build và xuất static site bằng lệnh:

// Lệnh sau sẽ tạo thư mục dist chứa các file tĩnh của ứng dụng, sẵn sàng để triển khai trên các dịch vụ hosting như Netlify, Vercel, hoặc GitHub Pages.

//npx nuxi generate để tạo static site
//npm run build để build ứng dụng
//npm run preview để xem trước ứng dụng đã build