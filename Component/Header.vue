<template>
  <header :class="['header', { 'dark': theme.isDarkMode }]">
    <div class="container">
      <!-- Logo -->
      <NuxtLink class="logo" to="/">🏨 OceanView</NuxtLink>

      <!-- Toggler for mobile -->
      <button class="menu-toggle" @click="toggleMenu">

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
        <template v-if="isLoggedIn">
          <DropDown placement="bottom-end">
            <template #anchor>
              <div class="user-avatar">
                <img
                  :src="userProfile?.HinhAnhURL && userProfile.HinhAnhURL !== 'string'
                    ? userProfile.HinhAnhURL
                    : 'https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg'"
                  alt="Avatar"
                  class="avatar"
                />
                <span class="username">{{ userProfile?.HoTen || userProfile?.TenTaiKhoan || 'Người dùng' }}</span>
              </div>
            </template>
            <div class="dropdown-item"><b>📧 Email:</b> {{ userProfile?.Email }}</div>
            <div class="dropdown-item"><b>🛡️ Vai trò:</b> {{ userProfile?.Vaitro }}</div>
            <div class="dropdown-item">
              <va-switch
                v-model="isDarkMode"
                @change="handleToggleDarkMode"
                color="primary"
                :label="isDarkMode ? '🌙 Dark mode' : '☀️ Light mode'"
              />
            </div>
            <div class="dropdown-item">
              <button class="btn btn-outline" @click="logout">Đăng xuất</button>
            </div>
          </DropDown>
        </template>
        <template v-else>
          <NuxtLink to="/DangNhapPhu" class="btn btn-outline">Đăng nhập</NuxtLink>
        </template>
      </div>
    </div>
    <div class="header-underline" v-if="!theme.isDarkMode"></div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useThemeStore } from '@/store/DarkMode'
import { usePhanQuyenStore } from '@/store/PhanQuyenCookie'
import { axiosBase } from '~/utils/axiosBase'
import DropDown from './DropDown.vue'
import Toast from './Toast.vue'

const theme = useThemeStore()
const navItems = [
  { title: 'Trang chủ', link: '/' },
  { title: 'Đặt phòng', link: '/Phong' },
  { title: 'Dịch vụ', link: '/DichVu' },
  { title: 'Nội quy', link: '/HotelRegulations' },
  { title: 'Game', link: '/Trangchoigame' },
]

const isMenuOpen = ref(false)
const phanQuyenStore = usePhanQuyenStore()
const isLoggedIn = computed(() => phanQuyenStore.isLoggedIn())
const userProfile = ref(null)
const isDarkMode = computed({
  get: () => theme.isDarkMode,
  set: (val) => theme.setDarkMode(val)
})
const toastRef = ref(null)

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

const logout = () => {
  phanQuyenStore.logout()
  userProfile.value = null
  window.location.href = '/'
}

// Lấy profile khi đăng nhập
const fetchProfile = async () => {
  try {
    const res = await axiosBase.get('/xacthuc/profile')
    userProfile.value = res.data.profile
  } catch {
    userProfile.value = null
  }
}

onMounted(() => {
  if (isLoggedIn.value) fetchProfile()
})
watch(isLoggedIn, (val) => { if (val) fetchProfile(); else userProfile.value = null })

function handleToggleDarkMode() {
  theme.toggleDarkMode()
  if (toastRef.value) {
    toastRef.value.showToast(
      isDarkMode.value
        ? 'Đã chuyển sang dark mode'
        : 'Đã chuyển lại light mode'
    )
  }
}
</script>

<style scoped>
/* Header styles */
.header {
  background-color: #ffffff;
  color: #333;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 56px; /* nhỏ lại */
  border-bottom: none; /* bỏ border cũ */
}

/* Dark mode styles */
.header.dark {
  background-color: #003366;
  color: white;
}

/* Light mode styles */
.header-light {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
}

/* Container styles */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 100%;
}

/* Logo styles */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.logo-img {
  height: 40px;
}

.logo-text {
  font-size: 1.7rem;
  color: #1a3c40;
  font-weight: 500;
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
  color: #1a3c40;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 500;
  padding: 0 0 4px 0;
  border-bottom: 2px solid transparent;
  height: 54px; /* cố định chiều cao */
  display: flex;
  align-items: center;
  transition: border 0.2s;
}

.header.dark .nav-link {
  color: white;
}

.nav-link:hover,
.nav-link.active {
  border-bottom: 2.5px solid #4fd1c5;
  font-weight: bold;
}

/* Underline xanh nhạt sát dưới header */
.header-underline {
  width: 100%;
  height: 3px;
  background: #4fd1c5;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1001;
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
  cursor: pointer;
  position: relative;
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

/* User dropdown styles */
.user-dropdown {
  position: absolute;
  top: 55px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  min-width: 180px;
  box-shadow: 0 2px 8px #0002;
  border-radius: 8px;
  z-index: 1001;
  padding: 10px 0;
}

.header.dark .user-dropdown {
  background: #333;
  color: white;
  border-color: #444;
}

.dropdown-item {
  padding: 8px 18px;
  font-size: 0.98rem;
  border-bottom: 1px solid #eee;
}

.dropdown-item:last-child {
  border-bottom: none;
  text-align: center;
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


.settings-menu select,
.settings-menu input[type="checkbox"] {
  padding: 5px;
  border-radius: 5px;
}
</style>
