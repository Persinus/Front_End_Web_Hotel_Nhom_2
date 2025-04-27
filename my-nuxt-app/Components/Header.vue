<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <NuxtLink class="logo" to="/">🏨 OceanView</NuxtLink>

      <!-- Toggler for mobile -->
      <button class="menu-toggle" @click="toggleMenu">
        <span class="menu-icon"></span>
      </button>

      <!-- Navigation -->
      <nav :class="['nav', { 'nav-open': isMenuOpen }]">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.title" class="nav-item">
            <NuxtLink
              class="nav-link"
              :to="item.link"
              active-class="active"
              exact-active-class="active"
              @click="closeMenu"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Auth buttons -->
        <div class="auth-buttons">
          <NuxtLink to="/login" class="btn btn-outline">Đăng nhập</NuxtLink>
          <NuxtLink to="/register" class="btn btn-primary">Đăng ký</NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const navItems = [
  { title: 'Trang chủ', link: '/' },
  { title: 'Đặt phòng', link: '/booking' },
  { title: 'Dịch vụ', link: '/service' },
  { title: 'Ưu đãi', link: '/promotions' },
  { title: 'Tài khoản', link: '/account' },
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* Header styles */
.header {
  background-color: #ffffff;
  color: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #4caf50;
}

/* Menu toggle button */
.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: none;
}

.menu-icon {
  width: 25px;
  height: 3px;
  background-color: #333;
  display: block;
  position: relative;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  width: 25px;
  height: 3px;
  background-color: #333;
  position: absolute;
  left: 0;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  top: 8px;
}

/* Navigation styles */
.nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-list {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
}

.nav-link:hover,
.nav-link.active {
  color: #4caf50;
  font-weight: bold;
}

/* Auth buttons */
.auth-buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
}

.btn-outline {
  border: 2px solid #4caf50;
  color: #4caf50;
  background: transparent;
}

.btn-outline:hover {
  background: #4caf50;
  color: white;
}

.btn-primary {
  background: #4caf50;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #388e3c;
}

/* Responsive styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 20px;
    display: none;
  }

  .nav-open {
    display: flex;
  }

  .auth-buttons {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .auth-buttons .btn {
    width: 100%;
  }
}
</style>
