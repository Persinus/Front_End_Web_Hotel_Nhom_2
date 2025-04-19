<template>
  <va-navbar color="primary" class="header" shadow>
    <!-- Logo -->
    <template #left>
      <div class="logo">
        <a href="/" class="logo-link">
          <i class="mdi mdi-hotel" style="margin-right: 8px;"></i> OceanView
        </a>
      </div>
    </template>

    <!-- Navigation -->
    <template #center>
      <va-navbar-item v-for="item in navItems" :key="item.title">
        <a :href="item.link" class="nav-link">
          <i :class="item.icon" style="margin-right: 5px;"></i> {{ item.title }}
        </a>
      </va-navbar-item>
    </template>

    <!-- Buttons -->
    <template #right>
      <va-button class="mr-2" preset="outline" color="white">Đăng nhập</va-button>
      <va-button color="accent">Đăng ký</va-button>
    </template>
  </va-navbar>

  <div class="icon-demo">
    <!-- Biểu tượng Facebook -->
    <i class="mdi mdi-facebook" style="font-size: 24px; color: #4267B2;"></i>

    <!-- Biểu tượng Instagram -->
    <i class="mdi mdi-instagram" style="font-size: 24px; color: #E1306C;"></i>

    <!-- Biểu tượng Twitter -->
    <i class="mdi mdi-twitter" style="font-size: 24px; color: #1DA1F2;"></i>
  </div>
</template>

<script setup>
const navItems = [
  { title: 'Trang chủ', link: '/', icon: 'mdi mdi-home' },
  { title: 'Đặt phòng', link: '/booking', icon: 'mdi mdi-calendar-check' },
  { title: 'Dịch vụ', link: '/services', icon: 'mdi mdi-room-service' },
  { title: 'Ưu đãi', link: '/promotions', icon: 'mdi mdi-tag' },
  { title: 'Tài khoản', link: '/account', icon: 'mdi mdi-account' }
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
  font-weight: 50;
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

.icon-demo {
  display: flex;
  gap: 15px;
  align-items: center;
}
</style>

