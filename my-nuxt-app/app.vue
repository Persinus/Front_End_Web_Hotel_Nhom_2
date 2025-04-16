<template>
  <div>
    <!-- Hiển thị nội dung của các trang -->
    <nuxt-page />
  </div>
</template>

<script setup>
// Sử dụng useHead để quản lý thẻ head
useHead({
  link: [
    // Element Plus CSS
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/element-plus/dist/index.css' },
    // Vuestic UI CSS
    { rel: 'stylesheet', href: 'https://unpkg.com/vuestic-ui/dist/vuestic-ui.css' },
    // Font Awesome
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
  ],
  script: [
    // Tailwind CSS
    { src: 'https://cdn.tailwindcss.com' },
    // Vue 3
    { src: 'https://unpkg.com/vue@3/dist/vue.global.js' },
    // Element Plus
    { src: 'https://cdn.jsdelivr.net/npm/element-plus' },
    // Vuestic UI
    { src: 'https://unpkg.com/vuestic-ui' },
    // QR Code
    { src: 'https://cdn.jsdelivr.net/npm/qrcode.vue@3.4.1/dist/qrcode.vue.browser.min.js' },
    // Chart.js
    { src: 'https://cdn.jsdelivr.net/npm/chart.js' }
  ]
})
</script>

<style>
/* Các kiểu dáng cho nav, logo và button */
.nav {
  /* Định dạng cho nav */
}

.logo {
  /* Định dạng cho logo */
}

.auth-buttons .btn {
  /* Định dạng cho button đăng nhập và đăng ký */
}

.auth-buttons .btn-primary {
  /* Định dạng cho button đăng ký */
}
</style>