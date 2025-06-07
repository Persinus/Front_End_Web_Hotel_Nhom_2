<template>
  <div class="set-password-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Main Container -->
    <div class="main-container">
      <div class="set-password-container" :class="{ 'animate-in': isVisible }">
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
          <div class="lock-icon-wrapper" :class="{ 'animate': isVisible }">
            <div class="lock-icon">
              <svg viewBox="0 0 24 24" class="lock-svg">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </div>
            <div class="pulse-ring"></div>
            <div class="pulse-ring pulse-ring-2"></div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="content-section">
          <h1 class="main-title">
            <span class="title-line">Đặt mật khẩu</span>
            <span class="title-highlight">Mới</span>
          </h1>
          
          <div class="description">
            <p class="description-text">
              Mật khẩu mới phải khác với mật khẩu đã sử dụng trước đó
            </p>
            <p class="description-subtext">
              Tạo mật khẩu mạnh để bảo vệ tài khoản của bạn
            </p>
          </div>
        </div>

        <!-- Form Section -->
        <form @submit.prevent="resetPassword" class="password-form">
          <!-- Password Field -->
          <div class="form-group">
            <label for="password" class="form-label">
              <svg viewBox="0 0 24 24" class="label-icon">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              Mật khẩu mới *
            </label>
            <div class="input-wrapper">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                id="password" 
                v-model="password"
                placeholder="Nhập mật khẩu mới"
                class="form-input"
                :class="{ 'error': passwordError, 'success': password && !passwordError }"
                @input="validatePassword"
                @focus="isPasswordFocused = true"
                @blur="isPasswordFocused = false"
                required
              />
              <button
                type="button"
                class="password-toggle"
                @click="showPassword = !showPassword"
                :title="showPassword ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'"
              >
                <svg v-if="showPassword" viewBox="0 0 24 24">
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                </svg>
                <svg v-else viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </button>
            </div>
            
            <!-- Password Strength Indicator -->
            <div v-if="password" class="password-strength">
              <div class="strength-bar">
                <div class="strength-fill" :class="passwordStrength.class" :style="{ width: `${passwordStrength.percentage}%` }"></div>
              </div>
              <span class="strength-text" :class="passwordStrength.class">{{ passwordStrength.text }}</span>
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="form-group">
            <label for="confirmPassword" class="form-label">
              <svg viewBox="0 0 24 24" class="label-icon">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Xác nhận mật khẩu *
            </label>
            <div class="input-wrapper">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                id="confirmPassword" 
                v-model="confirmPassword"
                placeholder="Nhập lại mật khẩu mới"
                class="form-input"
                :class="{ 'error': confirmPasswordError, 'success': confirmPassword && !confirmPasswordError }"
                @input="validateConfirmPassword"
                @focus="isConfirmPasswordFocused = true"
                @blur="isConfirmPasswordFocused = false"
                required
              />
              <div class="input-status" v-if="confirmPassword && !confirmPasswordError">
                <svg viewBox="0 0 24 24" class="status-icon success">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            </div>
            <div v-if="confirmPasswordError" class="error-message">
              <svg viewBox="0 0 24 24" class="error-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {{ confirmPasswordError }}
            </div>
          </div>
          
          <!-- Password Requirements -->
          <div class="requirements-section">
            <h4 class="requirements-title">
              <svg viewBox="0 0 24 24" class="requirements-icon">
                <path d="M12 1L3 5v6c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V5l-9-4z"/>
              </svg>
              Yêu cầu mật khẩu
            </h4>
            <div class="requirements-list">
              <div class="requirement-item" :class="{ 'valid': hasMinLength }">
                <div class="requirement-icon">
                  <svg v-if="hasMinLength" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div v-else class="requirement-dot"></div>
                </div>
                <span class="requirement-text">Tối thiểu 8 ký tự</span>
              </div>
              
              <div class="requirement-item" :class="{ 'valid': hasSpecialChar }">
                <div class="requirement-icon">
                  <svg v-if="hasSpecialChar" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div v-else class="requirement-dot"></div>
                </div>
                <span class="requirement-text">Ít nhất một ký tự đặc biệt</span>
              </div>
              
              <div class="requirement-item" :class="{ 'valid': hasUpperCase }">
                <div class="requirement-icon">
                  <svg v-if="hasUpperCase" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div v-else class="requirement-dot"></div>
                </div>
                <span class="requirement-text">Ít nhất một chữ hoa</span>
              </div>
              
              <div class="requirement-item" :class="{ 'valid': hasNumber }">
                <div class="requirement-icon">
                  <svg v-if="hasNumber" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div v-else class="requirement-dot"></div>
                </div>
                <span class="requirement-text">Ít nhất một chữ số</span>
              </div>
            </div>
          </div>
          
          <!-- Submit Button -->
          <button 
            type="submit" 
            class="submit-button"
            :disabled="!isFormValid || isLoading"
            :class="{ 'loading': isLoading }"
          >
            <div class="btn-content">
              <svg v-if="!isLoading" viewBox="0 0 24 24" class="btn-icon">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <div v-else class="loading-spinner"></div>
              <span>{{ isLoading ? 'Đang xử lý...' : 'Đặt lại mật khẩu' }}</span>
            </div>
          </button>
        </form>
        
        <!-- Back to Login -->
        <div class="back-section">
          <a href="/Login" class="back-link">
            <svg viewBox="0 0 24 24" class="back-icon">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"/>
            </svg>
            <span>Quay lại trang đăng nhập</span>
          </a>
        </div>

        <!-- Security Tips -->
        <div class="security-tips">
          <h4>💡 Mẹo bảo mật</h4>
          <ul class="tips-list">
            <li>Sử dụng mật khẩu duy nhất cho mỗi tài khoản</li>
            <li>Không chia sẻ mật khẩu với người khác</li>
            <li>Cập nhật mật khẩu định kỳ</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="resetSuccess" class="success-modal" @click.self="closeSuccessModal">
      <div class="success-container" :class="{ 'animate-in': resetSuccess }">
        <div class="success-icon">
          <svg viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <h3>Đặt lại mật khẩu thành công!</h3>
        <p>Mật khẩu của bạn đã được cập nhật. Bạn sẽ được chuyển hướng đến trang đăng nhập.</p>
        <button class="success-btn" @click="redirectToLogin">
          <svg viewBox="0 0 24 24">
            <path d="M10 17l5-5-5-5v10z"/>
          </svg>
          Tiếp tục đăng nhập
        </button>
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
import { ref, computed, onMounted } from 'vue'

// Reactive data
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const resetSuccess = ref(false)
const isVisible = ref(false)
const isPasswordFocused = ref(false)
const isConfirmPasswordFocused = ref(false)
const isLoading = ref(false)
const passwordError = ref('')
const confirmPasswordError = ref('')
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

// Computed properties for password validation
const hasMinLength = computed(() => password.value.length >= 8)
const hasSpecialChar = computed(() => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password.value))
const hasUpperCase = computed(() => /[A-Z]/.test(password.value))
const hasNumber = computed(() => /[0-9]/.test(password.value))

const passwordStrength = computed(() => {
  const password_val = password.value
  if (!password_val) return { percentage: 0, text: '', class: '' }
  
  let score = 0
  if (hasMinLength.value) score += 25
  if (hasSpecialChar.value) score += 25
  if (hasUpperCase.value) score += 25
  if (hasNumber.value) score += 25
  
  if (score < 50) return { percentage: score, text: 'Yếu', class: 'weak' }
  if (score < 75) return { percentage: score, text: 'Trung bình', class: 'medium' }
  if (score < 100) return { percentage: score, text: 'Mạnh', class: 'strong' }
  return { percentage: score, text: 'Rất mạnh', class: 'very-strong' }
})

const isFormValid = computed(() => {
  return hasMinLength.value && 
         hasSpecialChar.value && 
         hasUpperCase.value &&
         hasNumber.value &&
         password.value === confirmPassword.value && 
         password.value !== ''
})

// Methods
const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const validatePassword = () => {
  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc'
  } else if (!hasMinLength.value) {
    passwordError.value = 'Mật khẩu phải có ít nhất 8 ký tự'
  } else if (!hasSpecialChar.value) {
    passwordError.value = 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt'
  } else if (!hasUpperCase.value) {
    passwordError.value = 'Mật khẩu phải chứa ít nhất một chữ hoa'
  } else if (!hasNumber.value) {
    passwordError.value = 'Mật khẩu phải chứa ít nhất một chữ số'
  } else {
    passwordError.value = ''
  }
  
  // Re-validate confirm password if it exists
  if (confirmPassword.value) {
    validateConfirmPassword()
  }
}

const validateConfirmPassword = () => {
  if (!confirmPassword.value) {
    confirmPasswordError.value = 'Vui lòng xác nhận mật khẩu'
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Mật khẩu xác nhận không khớp'
  } else {
    confirmPasswordError.value = ''
  }
}

const resetPassword = async () => {
  validatePassword()
  validateConfirmPassword()
  
  if (!isFormValid.value) {
    if (passwordError.value) {
      showToastMessage(passwordError.value, 'error')
    } else if (confirmPasswordError.value) {
      showToastMessage(confirmPasswordError.value, 'error')
    }
    return
  }
  
  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Mật khẩu đã được đặt lại:', password.value)
    resetSuccess.value = true
    showToastMessage('Mật khẩu đã được đặt lại thành công!')
  } catch (error) {
    showToastMessage('Có lỗi xảy ra. Vui lòng thử lại!', 'error')
  } finally {
    isLoading.value = false
  }
}

const closeSuccessModal = () => {
  resetSuccess.value = false
}

const redirectToLogin = () => {
  window.location.href = '/Login'
}

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.set-password-page {
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

.set-password-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.set-password-container.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Header Section */
.header-section {
  text-align: center;
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
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  transform: scale(0);
  transition: all 0.6s ease;
}

.lock-icon-wrapper.animate .lock-icon {
  transform: scale(1);
  animation: lockPop 0.6s ease;
}

.lock-svg {
  width: 40px;
  height: 40px;
  fill: white;
}

@keyframes lockPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.pulse-ring {
  position: absolute;
  width: 140px;
  height: 140px;
  border: 2px solid rgba(102, 126, 234, 0.3);
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
  text-align: center;
  margin-bottom: 32px;
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
  margin-bottom: 24px;
}

.description-text {
  color: #2c3e50;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 1.6;
}

.description-subtext {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Form Styles */
.password-form {
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

.form-input {
  width: 100%;
  padding: 14px 16px;
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

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #64748b;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #667eea;
}

.password-toggle svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.input-status {
  position: absolute;
  right: 44px;
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

/* Password Strength */
.password-strength {
  margin-top: 12px;
}

.strength-bar {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.strength-fill {
  height: 100%;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.strength-fill.weak {
  background: #ef4444;
}

.strength-fill.medium {
  background: #f59e0b;
}

.strength-fill.strong {
  background: #10b981;
}

.strength-fill.very-strong {
  background: #059669;
}

.strength-text {
  font-size: 0.85rem;
  font-weight: 500;
}

.strength-text.weak {
  color: #ef4444;
}

.strength-text.medium {
  color: #f59e0b;
}

.strength-text.strong {
  color: #10b981;
}

.strength-text.very-strong {
  color: #059669;
}

/* Requirements Section */
.requirements-section {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.requirements-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.requirements-icon {
  width: 18px;
  height: 18px;
  fill: #667eea;
}

.requirements-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.requirement-item {
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.requirement-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.requirement-item.valid .requirement-icon svg {
  fill: #10b981;
}

.requirement-dot {
  width: 8px;
  height: 8px;
  background: #d1d5db;
  border-radius: 50%;
}

.requirement-text {
  font-size: 0.9rem;
  color: #64748b;
  transition: color 0.3s ease;
}

.requirement-item.valid .requirement-text {
  color: #10b981;
  font-weight: 500;
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
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-button.loading {
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

/* Back Section */
.back-section {
  text-align: center;
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

/* Security Tips */
.security-tips {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.security-tips h4 {
  color: #065f46;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-list li {
  color: #047857;
  font-size: 0.9rem;
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
}

.tips-list li::before {
  content: '•';
  color: #10b981;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Success Modal */
.success-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.success-container {
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.success-container.animate-in {
  opacity: 1;
  transform: scale(1);
}

.success-icon {
  width: 80px;
  height: 80px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  animation: successPop 0.6s ease;
}

@keyframes successPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.success-icon svg {
  width: 40px;
  height: 40px;
  fill: white;
}

.success-container h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #065f46;
  margin-bottom: 16px;
}

.success-container p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 32px;
}

.success-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 auto;
}

.success-btn:hover {
  background: #059669;
  transform: translateY(-1px);
}

.success-btn svg {
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
  .set-password-container {
    padding: 32px 24px;
    margin: 16px;
  }
  
  .main-title {
    font-size: 1.8rem;
  }
  
  .lock-icon {
    width: 80px;
    height: 80px;
  }
  
  .lock-svg {
    width: 32px;
    height: 32px;
  }
  
  .pulse-ring {
    width: 120px;
    height: 120px;
  }
  
  .pulse-ring-2 {
    width: 140px;
    height: 140px;
  }
  
  .requirements-section {
    padding: 16px;
  }
  
  .success-container {
    padding: 24px;
    margin: 16px;
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
  
  .set-password-container {
    padding: 24px 20px;
  }
  
  .main-title {
    font-size: 1.6rem;
  }
  
  .lock-icon {
    width: 60px;
    height: 60px;
  }
  
  .lock-svg {
    width: 24px;
    height: 24px;
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
