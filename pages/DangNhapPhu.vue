<template>
  <div class="login-container">
    <!-- Background Animation phủ toàn bộ phía sau -->
    <div class="background-animation"></div>

    <div class="login-split-wrapper animate__animated animate__fadeIn">
      <!-- Nửa trái: Branding + Ảnh + Support -->
      <div class="login-left">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=600&q=80"
          alt="Hotel"
          class="login-left-img"
        />
        <div class="logo-section">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" class="logo-svg">
              <path
                d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z"
              />
              <path d="M12 7v5l4 2-4 2v5" />
            </svg>
          </div>
          <div class="logo-text">
            <h1>OceanView Hotels</h1>
            <p>Luxury Experience</p>
          </div>
        </div>
        <div class="welcome-text">
          <h2>Chào mừng trở lại</h2>
          <p>Đăng nhập để truy cập tài khoản của bạn</p>
        </div>

        <!-- Support Section chuyển vào đây -->
        <div class="support-section">
          <p>Cần hỗ trợ?</p>
          <div class="support-contacts">
            <a href="tel:1900-1234" class="support-contact">
              <svg viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              <span>1900-1234</span>
            </a>
            <a href="mailto:support@oceanview.com" class="support-contact">
              <svg viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <span>support@oceanview.com</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Nửa phải: Login Form -->
      <div class="login-right animate__animated animate__fadeInRight">
        <div class="login-card">
          <div class="card-header">
            <div class="header-icon">
              <svg viewBox="0 0 24 24" class="icon-svg">
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </div>
            <h3>Đăng nhập tài khoản</h3>
            <p>Vui lòng nhập thông tin đăng nhập của bạn</p>
          </div>

          <form @submit.prevent="handleLogin" class="login-form">
            <!-- Username Field -->
            <div class="form-group">
              <label for="username" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
                Tên tài khoản
              </label>
              <div class="input-wrapper">
                <svg viewBox="0 0 24 24" class="input-icon">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
                <input
                  id="username"
                  v-model="username"
                  type="text"
                  placeholder="Nhập tên tài khoản"
                  class="form-input"
                  :class="{
                    error: hasUsernameError,
                    success: username && !hasUsernameError,
                  }"
                  @input="validateUsername"
                  @focus="isUsernameFocused = true"
                  @blur="isUsernameFocused = false"
                  required
                />
                <div class="input-status" v-if="username && !hasUsernameError">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>
              <div v-if="usernameError" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
                {{ usernameError }}
              </div>
            </div>

            <!-- Password Field -->
            <div class="form-group">
              <label for="password" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                  />
                </svg>
                Mật khẩu
              </label>
              <div class="input-wrapper">
                <svg viewBox="0 0 24 24" class="input-icon">
                  <path
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                  />
                </svg>
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Nhập mật khẩu"
                  class="form-input"
                  :class="{
                    error: hasPasswordError,
                    success: password && !hasPasswordError,
                  }"
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
                    <path
                      d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                    />
                  </svg>
                  <svg v-else viewBox="0 0 24 24">
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    />
                  </svg>
                </button>
              </div>
              <div v-if="passwordError" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
                {{ passwordError }}
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="form-options">
              <label class="remember-me">
                <input type="checkbox" v-model="rememberMe" />
                <span class="checkmark"></span>
                <span class="remember-text">Ghi nhớ đăng nhập</span>
              </label>
              <a href="/forgot-password" class="forgot-link">Quên mật khẩu?</a>
            </div>

            <!-- Error Alert -->
            <div v-if="error" class="error-alert">
              <svg viewBox="0 0 24 24" class="alert-icon">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
              <span>{{ error }}</span>
            </div>
            <div class="register-section">
              <p>
                Chưa có tài khoản?
                <a href="/register" class="register-link">Đăng ký ngay</a>
              </p>
            </div>
            <!-- Submit Button -->
            <button
              type="submit"
              class="login-button"
              :disabled="!isFormValid || loading"
              :class="{ loading: loading }"
            >
              <div class="btn-content">
                <svg v-if="!loading" viewBox="0 0 24 24" class="btn-icon">
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>
                <div v-else class="loading-spinner"></div>
                <span>{{ loading ? "Đang đăng nhập..." : "Đăng nhập" }}</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" :class="[toastType, { show: showToast }]">
      <div class="toast-content">
        <svg v-if="toastType === 'success'" viewBox="0 0 24 24" class="toast-icon">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="toast-icon">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { usePhanQuyenStore } from "~/store/PhanQuyenCookie";
import { axiosBase } from "~/utils/axiosBase";

// Reactive data
const username = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");
const profile = ref("");
const isVisible = ref(false);
const showPassword = ref(false);
const rememberMe = ref(false);
const isUsernameFocused = ref(false);
const isPasswordFocused = ref(false);
const usernameError = ref("");
const passwordError = ref("");
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");

const phanQuyenStore = usePhanQuyenStore();

// Computed properties
const hasUsernameError = computed(() => !!usernameError.value);
const hasPasswordError = computed(() => !!passwordError.value);
const isFormValid = computed(() => {
  return (
    username.value && password.value && !hasUsernameError.value && !hasPasswordError.value
  );
});

// Methods
const validateUsername = () => {
  if (!username.value) {
    usernameError.value = "Vui lòng nhập tên tài khoản";
  } else if (username.value.length < 3) {
    usernameError.value = "Tên tài khoản phải có ít nhất 3 ký tự";
  } else {
    usernameError.value = "";
  }
};

const validatePassword = () => {
  if (!password.value) {
    passwordError.value = "Vui lòng nhập mật khẩu";
  } else if (password.value.length < 6) {
    passwordError.value = "Mật khẩu phải có ít nhất 6 ký tự";
  } else {
    passwordError.value = "";
  }
};

const showToastMessage = (message, type = "success") => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

const handleLogin = async () => {
  // Validate form
  validateUsername();
  validatePassword();

  if (!isFormValid.value) {
    showToastMessage("Vui lòng kiểm tra lại thông tin đăng nhập", "error");
    return;
  }

  error.value = "";
  profile.value = "";
  loading.value = true;

  try {
    const ok = await phanQuyenStore.login(username.value, password.value);

    if (ok) {
      // Lấy từ cookie thay vì localStorage
      if (process.client) {
        const token = useCookie("token").value;
        const role = useCookie("role").value;
        const userId = useCookie("userId").value;

        showToastMessage("Đăng nhập thành công!");

        // Show success alert with user info
        setTimeout(() => {
          alert(
            "Đăng nhập thành công!\n" +
              "Token: " +
              token +
              "\nVai trò: " +
              role +
              "\nMã khách hàng: " +
              userId
          );
        }, 500);
      }

      // Gọi API lấy thông tin người dùng
      try {
        const res = await axiosBase.get("/xacthuc/profile");
        profile.value = JSON.stringify(res.data, null, 2);
      } catch (e) {
        profile.value = "Không lấy được thông tin người dùng!";
        showToastMessage("Không thể tải thông tin người dùng", "error");
      }
    } else {
      error.value = "Sai tài khoản hoặc mật khẩu!";
      showToastMessage("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!", "error");
    }
  } catch (e) {
    error.value = "Có lỗi xảy ra. Vui lòng thử lại!";
    showToastMessage("Có lỗi xảy ra. Vui lòng thử lại!", "error");
  } finally {
    loading.value = false;
  }
};

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: "Inter", "Segoe UI", sans-serif;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
}

/* Background Animation phủ toàn bộ */
.background-animation {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: none;
}

/* Main Wrapper: không gap, phủ kín */
.login-split-wrapper {
  display: flex;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: none;
  border-radius: 0;
  box-shadow: none;
  z-index: 2;
  margin: 0;
  gap: 0;
  opacity: 1;
  transform: none;
  transition: all 0.6s ease;
}

/* Nửa trái: Branding + Ảnh + Support */
.login-left {
  flex: 1 1 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  min-width: 0;
  border-radius: 0;
  z-index: 2;
  height: 100vh;
  position: relative;
}
.login-left-img {
  width: 100%;
  height: 45%;
  object-fit: cover;
  border-radius: 0 0 24px 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px #0002;
  display: block;
}
.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
}
.logo-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}
.logo-svg {
  width: 30px;
  height: 30px;
  fill: white;
}
.logo-text h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 4px 0;
}
.logo-text p {
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
  font-style: italic;
}
.welcome-text h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.welcome-text p {
  font-size: 1rem;
  opacity: 0.9;
}

/* Login - Right Side */
.login-right {
  flex: 1 1 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 48px 32px;
  min-width: 0;
  border-radius: 0 24px 24px 0;
  z-index: 2;
  gap: 18px;
  box-shadow: 0 4px 24px #0001;
  position: relative;
}
.login-right_img {
  margin: 0 auto 12px auto;
}

/* Card Header */
.card-header {
  text-align: center;
  margin-bottom: 32px;
}

.header-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.icon-svg {
  width: 30px;
  height: 30px;
  fill: white;
}

.card-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.card-header p {
  color: #64748b;
  font-size: 0.95rem;
}

/* Form Styles */
.login-form {
  margin-bottom: 12px; /* Giảm khoảng cách dưới form */
}

.form-group {
  margin-bottom: 12px; /* Giảm khoảng cách giữa các trường */
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 4px; /* Giảm khoảng cách label và input */
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

.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 4px; /* Giảm khoảng cách lỗi */
}

.error-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Form Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px; /* Giảm khoảng cách dưới remember/forgot */
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #64748b;
}

.remember-me input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease;
}

.remember-me input[type="checkbox"]:checked + .checkmark {
  background: #667eea;
  border-color: #667eea;
}

.remember-me input[type="checkbox"]:checked + .checkmark::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.forgot-link {
  color: #667eea;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.forgot-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

/* Error Alert */
.error-alert {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 12px; /* Giảm khoảng cách dưới alert */
  font-size: 0.9rem;
}

.alert-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  flex-shrink: 0;
}

/* Login Button */
.login-button {
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

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.login-button.loading {
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Register Section */
.register-section {
  padding-top: 8px; /* Giảm khoảng cách trên */
  border-top: 1px solid #e2e8f0;
  margin-bottom: 0;
}

.register-section p {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
}

.register-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

/* Profile Section */
.profile-section {
  margin-bottom: 24px;
}

.profile-card {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 24px;
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

.profile-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.profile-icon {
  width: 24px;
  height: 24px;
  fill: #10b981;
}

.profile-header h4 {
  color: #065f46;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.profile-content h5 {
  color: #047857;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.profile-data {
  background: rgba(255, 255, 255, 0.8);
  padding: 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #374151;
  white-space: pre-wrap;
  overflow-x: auto;
  max-height: 200px;
  margin: 0;
}

/* Support Section */
.support-section {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.support-section p {
  font-size: 0.9rem;
  opacity: 0.9;
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
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  padding: 4px 8px;
  border-radius: 6px;
}

.support-contact:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
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
@media (max-width: 900px) {
  .login-split-wrapper {
    flex-direction: column;
    max-width: 95vw;
    min-height: unset;
    gap: 18px;
  }
  .login-left,
  .login-right {
    width: 100%;
    border-radius: 24px;
    padding: 32px 16px;
    min-height: unset;
  }
  .login-right_img {
    margin: 0 auto 12px auto;
  }
}

@media (max-width: 768px) {
  .login-container {
    padding: 16px;
  }

  .login-card {
    padding: 32px 24px;
  }

  .logo-section {
    flex-direction: column;
    gap: 12px;
  }

  .welcome-text h2 {
    font-size: 1.5rem;
  }

  .form-options {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
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

  .login-card {
    padding: 24px 20px;
  }

  .card-header h3 {
    font-size: 1.3rem;
  }

  .social-login {
    gap: 8px;
  }

  .social-btn {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
}
</style>
