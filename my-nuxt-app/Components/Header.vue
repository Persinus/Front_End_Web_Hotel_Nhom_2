<template>
  <va-navbar color="primary" class="header" shadow>
    <!-- Logo -->
    <template #left>
      <div class="logo">
        <a href="/" class="logo-link">🏨 OceanView</a>
      </div>
    </template>

    <!-- Navigation -->
    <template #center>
      <va-navbar-item v-for="item in navItems" :key="item.title">
        <a :href="item.link" class="nav-link">{{ item.title }}</a>
      </va-navbar-item>
    </template>

    <!-- Buttons -->
    <template #right>
      <va-button class="mr-2" preset="outline" color="white">Đăng nhập</va-button>
      <va-button color="accent">Đăng ký</va-button>
    </template>
  </va-navbar>
</template>

<script setup>
const navItems = [
  { title: 'Trang chủ', link: '/' },
  { title: 'Đặt phòng', link: '/booking' },
  { title: 'Dịch vụ', link: '/Service' },
  { title: 'Ưu đãi', link: '/promotions' },
  { title: 'Tài khoản', link: '/account' }
]
</script>

<style scoped>
.header {
  padding: 10px 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.logo-link {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

.logo-link:hover {
  color: #ffd700; /* Màu vàng khi hover */
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 10px 15px;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffd700; /* Màu vàng khi hover */
}

.va-button {
  font-weight: 600;
}
</style>

