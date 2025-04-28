<template>
  <header :class="['header', { 'dark': theme.isDarkMode }]">
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

      <!-- Settings Icon and Dropdown -->
      <div class="settings-dropdown">
        <button @click="toggleSettingsDropdown" class="settings-icon">
          <span class="gear-icon">⚙️</span>
        </button>
        <div v-if="isSettingsDropdownOpen" class="settings-menu">
          <div>
            <label for="darkModeSwitch">Chế độ tối:</label>
            <input
              id="darkModeSwitch"
              type="checkbox"
              v-model="isDarkMode"
              @change="toggleDarkMode"
            />
          </div>
          <div>
            <label for="languageSwitch">Ngôn ngữ:</label>
            <select id="languageSwitch" v-model="selectedLanguage" @change="changeLanguage">
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/store/DarkMode'

const theme = useThemeStore()

const navItems = [
  { title: 'Trang chủ', link: '/' },
  { title: 'Đặt phòng', link: '/Phong' },
  { title: 'Dịch vụ', link: '/service' },
  { title: 'Ưu đãi', link: '/promotions' },
  { title: 'Tài khoản', link: '/account' },
]

const isMenuOpen = ref(false)
const isSettingsDropdownOpen = ref(false)
const selectedLanguage = ref('vi')

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Close mobile menu
const closeMenu = () => {
  isMenuOpen.value = false
}

// Toggle settings dropdown
const toggleSettingsDropdown = () => {
  isSettingsDropdownOpen.value = !isSettingsDropdownOpen.value
}

// Toggle dark mode
const isDarkMode = computed(() => theme.isDarkMode)
const toggleDarkMode = () => {
  theme.toggleDarkMode()  // Update dark mode state in store
}

// Change language (placeholder for now)
const changeLanguage = () => {
  // Logic for changing language will go here in the future
  console.log(`Language changed to: ${selectedLanguage.value}`)
}
</script>

<style scoped>
/* Header styles */
.header {
  background-color: #ffffff; /* Màu nền sáng cho chế độ sáng */
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

/* Dark mode styles */
.header.dark {
  background-color: #003366; /* Màu xanh dương đậm cho chế độ tối */
  color: white; /* Chữ trắng khi ở chế độ tối */
}

/* Container styles */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo styles */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #4caf50;
}

/* Dark mode logo */
.header.dark .logo {
  color: #81c784;
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

/* Dark mode navigation links */
.header.dark .nav-link {
  color: white;
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

/* Settings dropdown styles */
.settings-dropdown {
  position: relative;
}

.settings-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.settings-menu {
  position: absolute;
  top: 35px;
  right: 0;
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.settings-menu label {
  font-size: 1rem;
}

/* Dark mode styles for settings menu */
.header.dark .settings-menu {
  background-color: #333;
  color: white;
}

.settings-menu select,
.settings-menu input[type="checkbox"] {
  padding: 5px;
  border-radius: 5px;
}
</style>
