<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->

<template>
  <div class="check-email-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Main Container -->
    <div class="main-container">
      <div class="check-email-container" :class="{ 'animate-in': isVisible }">
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

        <!-- Email Icon with Animation -->
        <div class="email-icon-container">
          <div class="email-icon-wrapper" :class="{ 'success': emailSent }">
            <div class="email-icon">
              <div class="envelope">
                <div class="envelope-back"></div>
                <div class="envelope-front"></div>
                <div class="letter" :class="{ 'sent': emailSent }">
                  <div class="letter-content"></div>
                </div>
              </div>
              <div class="check-mark" v-if="emailSent">
                <svg viewBox="0 0 24 24" class="check-svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
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
            <span class="title-line">Kiểm tra</span>
            <span class="title-highlight">Email của bạn</span>
          </h1>
          
          <div class="description">
            <p class="description-text">
              Chúng tôi đã gửi link đặt lại mật khẩu đến
            </p>
            <div class="email-display">
              <div class="email-icon-small">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span class="email-address">{{ email }}</span>
              <button class="edit-email-btn" @click="showEditEmail = !showEditEmail" title="Chỉnh sửa email">
                <svg viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </button>
            </div>
            
            <!-- Edit Email Form -->
            <div v-if="showEditEmail" class="edit-email-form">
              <div class="input-group">
                <input 
                  type="email" 
                  v-model="newEmail" 
                  placeholder="Nhập email mới"
                  class="email-input"
                  @keyup.enter="updateEmail"
                />
                <button class="update-btn" @click="updateEmail" :disabled="!newEmail">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-section">
          <button 
            class="primary-btn"
            @click="openEmailApp"
            :disabled="isLoading"
            :class="{ 'loading': isLoading }"
          >
            <div class="btn-content">
              <svg v-if="!isLoading" viewBox="0 0 24 24" class="btn-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div v-else class="loading-spinner"></div>
              <span>{{ isLoading ? 'Đang mở...' : 'Mở ứng dụng Email' }}</span>
            </div>
          </button>

          <!-- Resend Section -->
          <div class="resend-section">
            <p class="resend-text">
              Không nhận được email? 
              <button 
                @click="resendEmail" 
                class="resend-link"
                :disabled="resendCooldown > 0"
                :class="{ 'disabled': resendCooldown > 0 }"
              >
                {{ resendCooldown > 0 ? `Gửi lại sau ${resendCooldown}s` : 'Nhấn để gửi lại' }}
              </button>
            </p>
            
            <div v-if="resendCooldown > 0" class="cooldown-progress">
              <div class="progress-bar" :style="{ width: `${(30 - resendCooldown) / 30 * 100}%` }"></div>
            </div>
          </div>

          <!-- Help Section -->
          <div class="help-section">
            <div class="help-tips">
              <h4>Không tìm thấy email?</h4>
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
                  Chờ vài phút để email đến
                </li>
              </ul>
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
        </div>

        <!-- Support Section -->
        <div class="support-section">
          <p class="support-text">Cần hỗ trợ?</p>
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

    <!-- Success Toast -->
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

const email = ref('olivia@untitledui.com')
const newEmail = ref('')
const showEditEmail = ref(false)
const emailSent = ref(false)
const isLoading = ref(false)
const isVisible = ref(false)
const resendCooldown = ref(0)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

let resendInterval = null

const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const updateEmail = () => {
  if (newEmail.value && newEmail.value !== email.value) {
    email.value = newEmail.value
    showEditEmail.value = false
    newEmail.value = ''
    showToastMessage('Email đã được cập nhật thành công!')
  }
}

const openEmailApp = async () => {
  isLoading.value = true
  
  // Simulate opening email app
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Try to open email app
  try {
    window.open('mailto:', '_blank')
    showToastMessage('Đã mở ứng dụng email!')
  } catch (error) {
    showToastMessage('Không thể mở ứng dụng email. Vui lòng kiểm tra email thủ công.', 'error')
  }
  
  isLoading.value = false
}

const resendEmail = async () => {
  if (resendCooldown.value > 0) return
  
  emailSent.value = true
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
  
  // Reset animation after a delay
  setTimeout(() => {
    emailSent.value = false
  }, 2000)
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
.check-email-page {
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

.check-email-container {
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

.check-email-container.animate-in {
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

/* Email Icon Animation */
.email-icon-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.email-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.email-icon {
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 3;
}

.envelope {
  width: 100%;
  height: 100%;
  position: relative;
}

.envelope-back {
  width: 100%;
  height: 60%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  position: absolute;
  bottom: 0;
}

.envelope-front {
  width: 100%;
  height: 60%;
  background: linear-gradient(135deg, #5a67d8 0%, #667eea 100%);
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  clip-path: polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%);
}

.letter {
  width: 70%;
  height: 45%;
  background: white;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.letter.sent {
  transform: translate(-50%, -80%) scale(0.8);
  opacity: 0.7;
}

.letter-content {
  width: 80%;
  height: 60%;
  background: linear-gradient(to right, #e2e8f0 0%, #e2e8f0 30%, transparent 30%);
  background-size: 20px 3px;
  background-repeat: repeat-y;
  margin: 20% auto;
  border-radius: 2px;
}

.check-mark {
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
  animation: checkmarkPop 0.5s ease;
}

.check-svg {
  width: 16px;
  height: 16px;
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
  margin-bottom: 24px;
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
  margin-bottom: 32px;
}

.description-text {
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 16px;
}

.email-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #f8fafc;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.email-display:hover {
  background: #f1f5f9;
}

.email-icon-small {
  width: 20px;
  height: 20px;
  color: #667eea;
}

.email-icon-small svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.email-address {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
}

.edit-email-btn {
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit-email-btn:hover {
  background: #e2e8f0;
  color: #667eea;
}

.edit-email-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.edit-email-form {
  margin-top: 16px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.input-group {
  display: flex;
  gap: 8px;
}

.email-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.email-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.update-btn {
  padding: 12px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.update-btn:hover:not(:disabled) {
  background: #5a67d8;
}

.update-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Action Section */
.action-section {
  margin-bottom: 32px;
}

.primary-btn {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.primary-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.primary-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.primary-btn.loading {
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

/* Resend Section */
.resend-section {
  margin-bottom: 24px;
}

.resend-text {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.resend-link {
  color: #667eea;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.resend-link:hover:not(.disabled) {
  color: #5a67d8;
}

.resend-link.disabled {
  color: #94a3b8;
  cursor: not-allowed;
  text-decoration: none;
}

.cooldown-progress {
  width: 100%;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 8px;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
  transition: width 0.3s ease;
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
  .check-email-container {
    padding: 32px 24px;
    margin: 16px;
  }
  
  .main-title {
    font-size: 1.8rem;
  }
  
  .email-display {
    flex-direction: column;
    gap: 8px;
  }
  
  .input-group {
    flex-direction: column;
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
  
  .check-email-container {
    padding: 24px 20px;
  }
  
  .email-icon {
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
