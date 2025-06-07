<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->

<template>
  <div class="forgot-password-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Main Container -->
    <div class="main-container">
      <div class="forgot-form-container" :class="{ 'animate-in': isVisible }">
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

        <!-- Lock Icon with Animation -->
        <div class="lock-icon-container">
          <div class="lock-icon-wrapper" :class="{ 'success': emailSent }">
            <div class="lock-icon">
              <div class="lock-body">
                <div class="lock-shackle" :class="{ 'open': emailSent }"></div>
              </div>
              <div class="key-icon" v-if="emailSent">
                <svg viewBox="0 0 24 24" class="key-svg">
                  <path d="M7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm12.78-1.38L13.5 14.9l-1.41-1.41 6.28-6.28c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L10.68 12 9.27 10.59l6.28-6.28c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L6.44 7.76c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9.27 7.76l1.41 1.41L4.4 15.45c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l6.28-6.28 1.41 1.41-6.28 6.28c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l6.28-6.28z"/>
                </svg>
              </div>
            </div>
            <div class="pulse-ring"></div>
            <div class="pulse-ring pulse-ring-2"></div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="content-section">
          <h1 class="main-title">
            <span class="title-line">Quên</span>
            <span class="title-highlight">Mật khẩu?</span>
          </h1>
          
          <p class="description">
            Đừng lo lắng, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.
          </p>
        </div>

        <!-- Form Section -->
        <div class="form-section">
          <form @submit.prevent="sendResetEmail" class="reset-form">
            <div class="form-group">
              <label for="email" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Địa chỉ Email
              </label>
              <div class="input-wrapper">
                <svg viewBox="0 0 24 24" class="input-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <input 
                  type="email" 
                  id="email" 
                  v-model="email"
                  required
                  placeholder="Nhập địa chỉ email của bạn"
                  class="form-input"
                  :class="{ 'error': hasError, 'success': emailSent }"
                  @input="validateEmail"
                  @focus="isInputFocused = true"
                  @blur="isInputFocused = false"
                />
                <div class="input-status" v-if="emailSent">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <div v-if="errorMessage" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errorMessage }}
              </div>
            </div>
            
            <button 
              type="submit" 
              class="submit-button"
              :disabled="!email || isLoading || emailSent"
              :class="{ 'loading': isLoading, 'success': emailSent }"
            >
              <div class="btn-content">
                <svg v-if="!isLoading && !emailSent" viewBox="0 0 24 24" class="btn-icon">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                <div v-else-if="isLoading" class="loading-spinner"></div>
                <svg v-else viewBox="0 0 24 24" class="btn-icon">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>
                  {{ isLoading ? 'Đang gửi...' : emailSent ? 'Đã gửi thành công' : 'Gửi hướng dẫn' }}
                </span>
              </div>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="emailSent" class="success-message">
            <div class="success-icon">
              <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <h3>Email đã được gửi!</h3>
            <p>Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến <strong>{{ email }}</strong></p>
            <div class="success-actions">
              <button class="resend-btn" @click="resendEmail" :disabled="resendCooldown > 0">
                <svg viewBox="0 0 24 24">
                  <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
                </svg>
                {{ resendCooldown > 0 ? `Gửi lại sau ${resendCooldown}s` : 'Gửi lại email' }}
              </button>
            </div>
          </div>

          <!-- Help Section -->
          <div class="help-section">
            <div class="help-tips">
              <h4>Không nhận được email?</h4>
              <ul class="tips-list">
                <li>
                  <svg viewBox="0 0 24 24" class="tip-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Kiểm tra thư mục Spam/Junk
                </li>
                <li>
                  <svg viewBox="0 0 24 24" class="tip-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Đảm bảo email chính xác
                </li>
                <li>
                  <svg viewBox="0 0 24 24" class="tip-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Thử lại với email khác
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
            <span>Quay lại đăng nhập</span>
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

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" :class="[toastType, { 'show': showToast }]">
      <div class="toast-content">
        <svg v-if="toastType === 'success'" viewBox="0 0 24 24" class="toast-icon">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" class="toast-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const email = ref('')
const emailSent = ref(false)
const isLoading = ref(false)
const isVisible = ref(false)
const isInputFocused = ref(false)
const hasError = ref(false)
const errorMessage = ref('')
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')
const resendCooldown = ref(0)

let resendInterval = null

const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.value && !emailRegex.test(email.value)) {
    hasError.value = true
    errorMessage.value = 'Vui lòng nhập địa chỉ email hợp lệ'
  } else {
    hasError.value = false
    errorMessage.value = ''
  }
}

const sendResetEmail = async () => {
  if (!email.value) {
    showToastMessage('Vui lòng nhập địa chỉ email', 'error')
    return
  }

  validateEmail()
  if (hasError.value) {
    showToastMessage('Email không hợp lệ', 'error')
    return
  }

  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    emailSent.value = true
    showToastMessage(`Đã gửi hướng dẫn đặt lại mật khẩu đến ${email.value}`)
    
    console.log('Gửi email đặt lại mật khẩu cho:', email.value)
  } catch (error) {
    showToastMessage('Có lỗi xảy ra. Vui lòng thử lại!', 'error')
  } finally {
    isLoading.value = false
  }
}

const resendEmail = async () => {
  if (resendCooldown.value > 0) return
  
  resendCooldown.value = 30
  
  // Start countdown
  resendInterval = setInterval(() => {
    resendCooldown.value--
    if (resendCooldown.value <= 0) {
      clearInterval(resendInterval)
    }
  }, 1000)
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  showToastMessage(`Email đã được gửi lại đến ${email.value}`)
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

onUnmounted(() => {
  if (resendInterval) {
    clearInterval(resendInterval)
  }
})
</script>

<style scoped>
.forgot-password-page {
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

.forgot-form-container {
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

.forgot-form-container.animate-in {
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

/* Lock Icon Animation */
.lock-icon-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.lock-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lock-icon {
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 3;
}

.lock-body {
  width: 50px;
  height: 35px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lock-body::after {
  content: '';
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.lock-shackle {
  width: 30px;
  height: 30px;
  border: 4px solid #667eea;
  border-bottom: none;
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.6s ease;
}

.lock-shackle.open {
  transform: translateX(-50%) rotate(-45deg);
  transform-origin: right bottom;
}

.key-icon {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 32px;
  height: 32px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: keyPop 0.5s ease;
}

.key-svg {
  width: 16px;
  height: 16px;
  fill: white;
}

@keyframes keyPop {
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

.pulse-ring {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.pulse-ring-2 {
  animation-delay: 1s;
  width: 140px;
  height: 140px;
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
  margin-bottom: 16px;
  line-height: 1.2;
}

.title-line {
  color: #2c3e50;
  display: block;
}

.title-highlight {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
}

/* Form Section */
.form-section {
  margin-bottom: 32px;
  text-align: left;
}

.reset-form {
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.label-icon {
  width: 16px;
  height: 16px;
  fill: #667eea;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: #64748b;
  z-index: 2;
}

.form-input {
  width: 100%;
  padding: 14px 14px 14px 44px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-input.success {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.input-status {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.status-icon {
  width: 20px;
  height: 20px;
}

.status-icon.success {
  fill: #10b981;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 8px;
}

.error-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Submit Button */
.submit-button {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-button.loading {
  pointer-events: none;
}

.submit-button.success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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

/* Success Message */
.success-message {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  animation: slideDown 0.5s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  width: 48px;
  height: 48px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
}

.success-icon svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.success-message h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #065f46;
  margin-bottom: 8px;
}

.success-message p {
  color: #047857;
  line-height: 1.6;
  margin-bottom: 16px;
}

.success-actions {
  display: flex;
  justify-content: center;
}

.resend-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 2px solid #10b981;
  color: #10b981;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.resend-btn:hover:not(:disabled) {
  background: #10b981;
  color: white;
}

.resend-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.resend-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Help Section */
.help-section {
  margin-bottom: 24px;
  text-align: left;
}

.help-tips h4 {
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

.toast.error {
  background: #ef4444;
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
  .forgot-form-container {
    padding: 32px 24px;
    margin: 16px;
  }
  
  .main-title {
    font-size: 1.8rem;
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
  
  .forgot-form-container {
    padding: 24px 20px;
  }
  
  .lock-icon {
    width: 60px;
    height: 60px;
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
