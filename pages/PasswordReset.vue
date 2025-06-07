<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->

<template>
  <div class="password-reset-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Main Container -->
    <div class="main-container">
      <div class="password-reset-container" :class="{ 'animate-in': isVisible }">
        <!-- Header Section -->
        <div class="header-section">
          <div class="brand-logo">
            <div class="logo-icon">
              <svg viewBox="0 0 24 24" class="logo-svg">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
                <path d="M12 7v5l4 2-4 2v5"/>
              </svg>
            </div>
            <span class="brand-name">OceanView Hotels</span>
          </div>
        </div>

        <!-- Success Icon with Animation -->
        <div class="success-icon-container">
          <div class="success-icon-wrapper" :class="{ 'success': isSuccess }">
            <div class="success-icon">
              <div class="checkmark-circle">
                <div class="checkmark" :class="{ 'animate': isSuccess }">
                  <svg viewBox="0 0 24 24" class="checkmark-svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <div class="success-particles">
                <div class="particle" v-for="n in 6" :key="n" :style="{ animationDelay: `${n * 0.1}s` }"></div>
              </div>
            </div>
            <div class="pulse-ring"></div>
            <div class="pulse-ring pulse-ring-2"></div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="content-section">
          <h1 class="main-title">
            <span class="title-line">Đặt lại mật khẩu</span>
            <span class="title-highlight">Thành công</span>
          </h1>
          
          <div class="description">
            <p class="description-text">
              Mật khẩu của bạn đã được đặt lại thành công.
            </p>
            <p class="description-subtext">
              Nhấn nút bên dưới để đăng nhập với mật khẩu mới
            </p>
          </div>
        </div>

        <!-- Action Section -->
        <div class="action-section">
          <button 
            @click="goToLogin"
            class="continue-button"
            :disabled="isLoading"
            :class="{ 'loading': isLoading }"
          >
            <div class="btn-content">
              <svg v-if="!isLoading" viewBox="0 0 24 24" class="btn-icon">
                <path d="M10 17l5-5-5-5v10z"/>
              </svg>
              <div v-else class="loading-spinner"></div>
              <span>{{ isLoading ? 'Đang chuyển hướng...' : 'Tiếp tục đăng nhập' }}</span>
            </div>
          </button>

          <!-- Additional Actions -->
          <div class="additional-actions">
            <div class="security-tips">
              <h4>Lời khuyên bảo mật</h4>
              <ul class="tips-list">
                <li>
                  <svg viewBox="0 0 24 24" class="tip-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Sử dụng mật khẩu mạnh với ít nhất 8 ký tự</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" class="tip-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Không chia sẻ mật khẩu với người khác</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" class="tip-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Thay đổi mật khẩu định kỳ để bảo mật</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Back to Login -->
        <div class="back-section">
          <a href="/Login" class="back-link">
            <svg viewBox="0 0 24 24" class="back-icon">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"/>
            </svg>
            <span>Quay lại trang đăng nhập</span>
          </a>
        </div>

        <!-- Support Section -->
        <div class="support-section">
          <p class="support-text">Cần hỗ trợ thêm?</p>
          <div class="support-contacts">
            <a href="tel:1900-1234" class="support-contact">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>1900-1234</span>
            </a>
            <a href="mailto:support@oceanview.com" class="support-contact">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>support@oceanview.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Confetti Animation -->
    <div class="confetti-container" v-if="showConfetti">
      <div class="confetti" v-for="n in 50" :key="n" :style="getConfettiStyle(n)"></div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" :class="[toastType, { 'show': showToast }]">
      <div class="toast-content">
        <svg v-if="toastType === 'success'" viewBox="0 0 24 24" class="toast-icon">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive data
const isVisible = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const showConfetti = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const getConfettiStyle = (index) => {
  const colors = ['#667eea', '#764ba2', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
  return {
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    backgroundColor: colors[index % colors.length],
    animationDuration: `${3 + Math.random() * 2}s`
  }
}

function goToLogin() {
  isLoading.value = true
  
  // Show success message
  showToastMessage('Chuyển hướng đến trang đăng nhập...')
  
  // Simulate loading time
  setTimeout(() => {
    window.location.href = '/Login'
  }, 1500)
}

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  setTimeout(() => {
    isSuccess.value = true
    showConfetti.value = true
    showToastMessage('Mật khẩu đã được đặt lại thành công!')
    
    // Hide confetti after animation
    setTimeout(() => {
      showConfetti.value = false
    }, 3000)
  }, 800)
})
</script>

<style scoped>
.password-reset-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Background Animation */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.floating-shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* Main Container */
.main-container {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.password-reset-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.password-reset-container.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Header Section */
.header-section {
  margin-bottom: 32px;
}

.brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
}

/* Success Icon Animation */
.success-icon-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.success-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-icon {
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 3;
}

.checkmark-circle {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.checkmark-circle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), transparent);
  border-radius: 50%;
}

.checkmark {
  opacity: 0;
  transform: scale(0);
  transition: all 0.6s ease;
}

.checkmark.animate {
  opacity: 1;
  transform: scale(1);
  animation: checkmarkPop 0.6s ease;
}

.checkmark-svg {
  width: 40px;
  height: 40px;
  fill: white;
}

@keyframes checkmarkPop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.success-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fbbf24;
  border-radius: 50%;
  animation: particleFloat 2s ease-out forwards;
  opacity: 0;
}

.particle:nth-child(1) { top: 20%; left: 20%; }
.particle:nth-child(2) { top: 30%; right: 20%; }
.particle:nth-child(3) { bottom: 30%; left: 30%; }
.particle:nth-child(4) { bottom: 20%; right: 30%; }
.particle:nth-child(5) { top: 50%; left: 10%; }
.particle:nth-child(6) { top: 50%; right: 10%; }

@keyframes particleFloat {
  0% {
    opacity: 0;
    transform: scale(0) translateY(0);
  }
  50% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  100% {
    opacity: 0;
    transform: scale(0) translateY(-40px);
  }
}

.pulse-ring {
  position: absolute;
  width: 140px;
  height: 140px;
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.pulse-ring-2 {
  animation-delay: 1s;
  width: 160px;
  height: 160px;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Content Section */
.content-section {
  margin-bottom: 40px;
}

.main-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
}

.title-line {
  color: #2c3e50;
  display: block;
}

.title-highlight {
  background: linear-gradient(45deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  margin-bottom: 32px;
}

.description-text {
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 1.6;
}

.description-subtext {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
}

/* Action Section */
.action-section {
  margin-bottom: 32px;
}

.continue-button {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;
}

.continue-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
}

.continue-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.continue-button.loading {
  pointer-events: none;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.btn-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Additional Actions */
.additional-actions {
  margin-bottom: 24px;
}

.security-tips {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  text-align: left;
}

.security-tips h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
  text-align: center;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  color: #64748b;
  font-size: 0.9rem;
}

.tip-icon {
  width: 16px;
  height: 16px;
  fill: #10b981;
  flex-shrink: 0;
}

/* Back Section */
.back-section {
  margin-bottom: 24px;
  text-align: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 8px;
}

.back-link:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.back-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Support Section */
.support-section {
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
  text-align: center;
}

.support-text {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.support-contacts {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.support-contact {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #667eea;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 4px 8px;
  border-radius: 6px;
}

.support-contact:hover {
  background: rgba(102, 126, 234, 0.1);
}

.support-contact svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Confetti Animation */
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1000;
}

.confetti {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  animation: confettiFall linear forwards;
}

@keyframes confettiFall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

/* Toast */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #10b981;
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transform: translateX(400px);
  opacity: 0;
  transition: all 0.3s ease;
}

.toast.show {
  transform: translateX(0);
  opacity: 1;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

/* Responsive Design */
@media (max-width: 768px) {
  .password-reset-container {
    padding: 32px 24px;
    margin: 16px;
  }
  
  .main-title {
    font-size: 1.8rem;
  }
  
  .success-icon {
    width: 80px;
    height: 80px;
  }
  
  .checkmark-circle {
    width: 80px;
    height: 80px;
  }
  
  .pulse-ring {
    width: 120px;
    height: 120px;
  }
  
  .pulse-ring-2 {
    width: 140px;
    height: 140px;
  }
  
  .support-contacts {
    flex-direction: column;
    gap: 12px;
  }
  
  .toast {
    right: 16px;
    left: 16px;
    transform: translateY(-100px);
  }
  
  .toast.show {
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .floating-shape {
    display: none;
  }
  
  .password-reset-container {
    padding: 24px 20px;
  }
  
  .success-icon {
    width: 60px;
    height: 60px;
  }
  
  .checkmark-circle {
    width: 60px;
    height: 60px;
  }
  
  .checkmark-svg {
    width: 30px;
    height: 30px;
  }
  
  .pulse-ring {
    width: 100px;
    height: 100px;
  }
  
  .pulse-ring-2 {
    width: 120px;
    height: 120px;
  }
}
</style>
