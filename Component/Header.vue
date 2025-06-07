<template>
  <header :class="['header', { 'dark': theme.isDarkMode, 'scrolled': isScrolled }]">
    <div class="container">
      <!-- Logo Section -->
      <NuxtLink class="logo" to="/">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" class="logo-svg">
            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
            <path d="M12 7v5l4 2-4 2v5"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="brand-name">OceanView</span>
          <span class="brand-tagline">Luxury Hotels</span>
        </div>
      </NuxtLink>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
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
              <va-icon :name="item.icon" size="small" class="nav-icon" />
              <span>{{ item.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Right Section -->
      <div class="header-actions">
        <!-- Language Selector -->
        <div class="language-selector">
          <va-select
            v-model="selectedLanguage"
            :options="languageOptions"
            class="language-select"
            preset="bordered"
            :max-visible-options="3"
          >
            <template #prepend>
              <va-icon name="language" size="small" />
            </template>
          </va-select>
        </div>

        <!-- Currency Selector -->
        <div class="currency-selector">
          <va-select
            v-model="selectedCurrency"
            :options="currencyOptions"
            class="currency-select"
            preset="bordered"
            :max-visible-options="3"
          >
            <template #prepend>
              <va-icon name="attach_money" size="small" />
            </template>
          </va-select>
        </div>

        <!-- Theme Toggle -->
        <button class="theme-toggle" @click="handleToggleDarkMode" :title="isDarkMode ? 'Chuyển sang Light Mode' : 'Chuyển sang Dark Mode'">
          <va-icon :name="isDarkMode ? 'light_mode' : 'dark_mode'" />
        </button>

        <!-- Notifications (if logged in) -->
        <div v-if="isLoggedIn" class="notifications">
          <button class="notification-btn" @click="toggleNotifications">
            <va-icon name="notifications" />
            <span v-if="notificationCount > 0" class="notification-badge">{{ notificationCount }}</span>
          </button>
          <div v-if="showNotifications" class="notification-dropdown">
            <div class="notification-header">
              <h4>Thông báo</h4>
              <button class="mark-all-read" @click="markAllAsRead">Đánh dấu đã đọc</button>
            </div>
            <div class="notification-list">
              <div v-for="notification in notifications" :key="notification.id" class="notification-item">
                <div class="notification-content">
                  <p>{{ notification.message }}</p>
                  <span class="notification-time">{{ notification.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Auth Section -->
        <div class="auth-section">
          <template v-if="isLoggedIn">
            <DropDown placement="bottom-end" class="user-dropdown">
              <template #anchor>
                <div class="user-avatar">
                  <div class="avatar-container">
                    <img
                      :src="userProfile?.HinhAnhURL && userProfile.HinhAnhURL !== 'string'
                        ? userProfile.HinhAnhURL
                        : 'https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg'"
                      alt="Avatar"
                      class="avatar"
                    />
                    <div class="status-indicator online"></div>
                  </div>
                  <div class="user-info">
                    <span class="username">{{ userProfile?.HoTen || userProfile?.TenTaiKhoan || 'Người dùng' }}</span>
                    <span class="user-role">{{ userProfile?.Vaitro }}</span>
                  </div>
                  <va-icon name="expand_more" size="small" class="dropdown-arrow" />
                </div>
              </template>
              
              <div class="dropdown-content">
                <div class="user-profile-section">
                  <div class="profile-header">
                    <img :src="userProfile?.HinhAnhURL || 'https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg'" class="profile-avatar" />
                    <div>
                      <h4>{{ userProfile?.HoTen || 'Người dùng' }}</h4>
                      <p>{{ userProfile?.Email }}</p>
                    </div>
                  </div>
                </div>
                
                <div class="dropdown-divider"></div>
                
                <div class="dropdown-menu-items">
                  <NuxtLink to="/profile" class="dropdown-item">
                    <va-icon name="person" />
                    <span>Hồ sơ cá nhân</span>
                  </NuxtLink>
                  <NuxtLink to="/bookings" class="dropdown-item">
                    <va-icon name="hotel" />
                    <span>Đặt phòng của tôi</span>
                  </NuxtLink>
                  <NuxtLink to="/favorites" class="dropdown-item">
                    <va-icon name="favorite" />
                    <span>Yêu thích</span>
                  </NuxtLink>
                  <NuxtLink to="/settings" class="dropdown-item">
                    <va-icon name="settings" />
                    <span>Cài đặt</span>
                  </NuxtLink>
                </div>
                
                <div class="dropdown-divider"></div>
                
                <div class="dropdown-item logout-item" @click="logout">
                  <va-icon name="logout" />
                  <span>Đăng xuất</span>
                </div>
              </div>
            </DropDown>
          </template>
          
          <template v-else>
            <div class="auth-buttons">
              <NuxtLink to="/DangNhapPhu" class="btn btn-outline">
                <va-icon name="login" size="small" />
                Đăng nhập
              </NuxtLink>
              <NuxtLink to="/DangKy" class="btn btn-primary">
                <va-icon name="person_add" size="small" />
                Đăng ký
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation Overlay -->
    <div v-if="isMenuOpen" class="mobile-overlay" @click="closeMenu"></div>
    
    <!-- Progress Bar -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useThemeStore } from '@/store/DarkMode'
import { usePhanQuyenStore } from '@/store/PhanQuyenCookie'
import { axiosBase } from '~/utils/axiosBase'
import DropDown from './DropDown.vue'

const theme = useThemeStore()
const navItems = [
  { title: 'Trang chủ', link: '/', icon: 'home' },
  { title: 'Đặt phòng', link: '/Phong', icon: 'hotel' },
  { title: 'Dịch vụ', link: '/DichVu', icon: 'room_service' },
  { title: 'Nội quy', link: '/HotelRegulations', icon: 'rule' },
  { title: 'Game', link: '/Trangchoigame', icon: 'games' },
]

const languageOptions = [
  { text: '🇻🇳 Tiếng Việt', value: 'vi' },
  { text: '🇺🇸 English', value: 'en' },
  { text: '🇯🇵 日本語', value: 'ja' },
]

const currencyOptions = [
  { text: 'VND', value: 'vnd' },
  { text: 'USD', value: 'usd' },
  { text: 'EUR', value: 'eur' },
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const scrollProgress = ref(0)
const selectedLanguage = ref('vi')
const selectedCurrency = ref('vnd')
const showNotifications = ref(false)
const notificationCount = ref(3)
const notifications = ref([
  { id: 1, message: 'Đặt phòng của bạn đã được xác nhận', time: '5 phút trước' },
  { id: 2, message: 'Ưu đãi đặc biệt: Giảm 20% cho lần đặt tiếp theo', time: '1 giờ trước' },
  { id: 3, message: 'Check-in sớm đã được chấp thuận', time: '2 giờ trước' },
])

const phanQuyenStore = usePhanQuyenStore()
const isLoggedIn = computed(() => phanQuyenStore.isLoggedIn())
const userProfile = ref(null)
const isDarkMode = computed({
  get: () => theme.isDarkMode,
  set: (val) => theme.setDarkMode(val)
})

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }
const toggleNotifications = () => { showNotifications.value = !showNotifications.value }
const markAllAsRead = () => { notificationCount.value = 0 }

const logout = () => {
  phanQuyenStore.logout()
  userProfile.value = null
  window.location.href = '/'
}

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  isScrolled.value = scrollTop > 50
  
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
}

const fetchProfile = async () => {
  try {
    const res = await axiosBase.get('/xacthuc/profile')
    userProfile.value = res.data.profile
  } catch {
    userProfile.value = null
  }
}

function handleToggleDarkMode() {
  theme.toggleDarkMode()
}

onMounted(() => {
  if (isLoggedIn.value) fetchProfile()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(isLoggedIn, (val) => { 
  if (val) fetchProfile() 
  else userProfile.value = null 
})
</script>

<style scoped>
/* Header Base Styles */
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: #2c3e50;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.header.dark {
  background: rgba(15, 23, 42, 0.95);
  color: #e2e8f0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header.dark.scrolled {
  background: rgba(15, 23, 42, 0.98);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Container */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
}

/* Logo Styles */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.logo-svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1;
}

.brand-tagline {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.header.dark .brand-name {
  color: #e2e8f0;
}

.header.dark .brand-tagline {
  color: #94a3b8;
}

/* Navigation */
.nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.nav-link.active {
  background: rgba(102, 126, 234, 0.15);
  color: #667eea;
  font-weight: 600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background: #667eea;
  border-radius: 1px;
}

.header.dark .nav-link {
  color: #94a3b8;
}

.header.dark .nav-link:hover,
.header.dark .nav-link.active {
  background: rgba(102, 126, 234, 0.2);
  color: #a5b4fc;
}

.nav-icon {
  opacity: 0.7;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Language & Currency Selectors */
.language-selector,
.currency-selector {
  min-width: 100px;
}

.language-select,
.currency-select {
  font-size: 0.85rem;
}

/* Theme Toggle */
.theme-toggle {
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: scale(1.05);
}

.header.dark .theme-toggle {
  background: rgba(102, 126, 234, 0.2);
  color: #a5b4fc;
}

/* Notifications */
.notifications {
  position: relative;
}

.notification-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.notification-btn:hover {
  background: rgba(102, 126, 234, 0.2);
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}

.notification-dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  width: 320px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1001;
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.notification-header h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.mark-all-read {
  background: none;
  border: none;
  color: #667eea;
  font-size: 0.85rem;
  cursor: pointer;
}

.notification-list {
  max-height: 300px;
  overflow-y: auto;
}

.notification-item {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-content p {
  margin: 0 0 4px 0;
  font-size: 0.9rem;
  color: #2c3e50;
}

.notification-time {
  font-size: 0.8rem;
  color: #64748b;
}

/* Auth Section */
.auth-buttons {
  display: flex;
  gap: 12px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.btn-outline {
  color: #667eea;
  border-color: #667eea;
  background: transparent;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* User Avatar */
.user-avatar {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.user-avatar:hover {
  background: rgba(102, 126, 234, 0.1);
}

.avatar-container {
  position: relative;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(102, 126, 234, 0.2);
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}

.status-indicator.online {
  background: #10b981;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1;
}

.user-role {
  font-size: 0.75rem;
  color: #64748b;
  text-transform: capitalize;
}

.header.dark .username {
  color: #e2e8f0;
}

.header.dark .user-role {
  color: #94a3b8;
}

.dropdown-arrow {
  transition: transform 0.2s ease;
}

.user-dropdown[data-show="true"] .dropdown-arrow {
  transform: rotate(180deg);
}

/* Dropdown Content */
.dropdown-content {
  width: 280px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.user-profile-section {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.profile-header {
  display: flex;
  gap: 12px;
  align-items: center;
}

.profile-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.profile-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.profile-header p {
  margin: 4px 0 0 0;
  font-size: 0.85rem;
  opacity: 0.9;
}

.dropdown-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
}

.dropdown-menu-items {
  padding: 8px 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dropdown-item:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.logout-item {
  color: #ef4444;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.logout-item:hover {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: #64748b;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.header.dark .hamburger-line {
  background: #94a3b8;
}

/* Mobile Overlay */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Scroll Progress */
.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.1s ease;
  z-index: 1001;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .language-selector,
  .currency-selector {
    display: none;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
    height: 64px;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .nav.nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .header.dark .nav {
    background: #0f172a;
  }
  
  .nav-list {
    flex-direction: column;
    padding: 20px;
    gap: 4px;
  }
  
  .nav-link {
    padding: 16px;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  .mobile-overlay {
    display: block;
  }
  
  .header-actions {
    gap: 8px;
  }
  
  .theme-toggle,
  .notification-btn {
    width: 36px;
    height: 36px;
  }
  
  .user-info {
    display: none;
  }
  
  .brand-tagline {
    display: none;
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .auth-buttons {
    flex-direction: column;
    gap: 8px;
  }
  
  .btn {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
  
  .notification-dropdown {
    width: calc(100vw - 32px);
    right: -140px;
  }
  
  .dropdown-content {
    width: calc(100vw - 32px);
    right: -120px;
  }
}
</style>
