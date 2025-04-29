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
      </nav>

      <!-- Auth Section -->
      <div class="auth-section">
        <div v-if="!isLoggedIn" class="auth-buttons">
          <NuxtLink to="/login" class="btn btn-outline">Đăng nhập</NuxtLink>
        
        </div>
        <div v-else class="user-avatar">
          <img src="https://i.imgur.com/6VBx3io.png" alt="Avatar" class="avatar" />
          <span class="username">{{ username }}</span>
        </div>
      </div>

      <!-- Settings Dropdown -->
      <div class="settings-dropdown">
        <button @click="toggleSettingsDropdown" class="settings-icon">
          <span class="gear-icon">⚙️</span>
        </button>
        <div v-if="isSettingsDropdownOpen" class="settings-menu">
          <div class="settings-item">
            <label for="darkModeSwitch">Chế độ tối:</label>
            <va-switch
              id="darkModeSwitch"
              v-model="isDarkMode"
              @change="toggleDarkMode"
            />
            <div class="va-text-center">
         
        </div>
          </div>
          <div class="settings-item">
            <label for="languageSwitch">Ngôn ngữ:</label>
            <va-switch
              id="languageSwitch"
              v-model="selectedLanguage"
              :true-label="'Tiếng Việt'"
              :false-label="'English'"
              @change="changeLanguage"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/store/DarkMode'

const theme = useThemeStore()

const navItems = [
  { title: 'Trang chủ', link: '/' },
  { title: 'Đặt phòng', link: '/Phong' },
  { title: 'Dịch vụ', link: '/service' },
  { title: 'Ưu đãi', link: '/promotions' },
]

const isMenuOpen = ref(false)
const isSettingsDropdownOpen = ref(false)
const selectedLanguage = ref('vi')

// Giả lập trạng thái đăng nhập
const isLoggedIn = ref(false) // Đổi thành `true` nếu đã đăng nhập
const username = ref('Nguyễn Văn A') // Tên người dùng khi đã đăng nhập

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
  theme.toggleDarkMode()
}

// Change language (placeholder for now)
const changeLanguage = () => {
  console.log(`Language changed to: ${selectedLanguage.value}`)
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

/* Dark mode styles */
.header.dark {
  background-color: #003366;
  color: white;
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

.header.dark .logo {
  color: #81c784;
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

.header.dark .nav-link {
  color: white;
}

.nav-link:hover,
.nav-link.active {
  color: #4caf50;
  font-weight: bold;
}

/* Auth Section */
.auth-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.auth-buttons .btn {
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

/* User Avatar */
.user-avatar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.header.dark .username {
  color: white;
}

/* Settings dropdown styles */
.settings-dropdown {
  position: relative;
  margin-right: 20px;
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

.header.dark .settings-menu {
  background-color: #333;
  color: white;
}
</style>
