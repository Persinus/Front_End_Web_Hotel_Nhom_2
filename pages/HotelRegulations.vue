<template>
  <div :class="['rules-wrapper', { 'dark': theme.isDarkMode }]">
    <TheHeader />

    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content" :class="{ 'animate-in': isVisible }">
        <div class="hero-icon">
          <svg viewBox="0 0 24 24" class="icon-svg">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z"/>
          </svg>
        </div>
        <h1 class="hero-title">
          <span class="title-line">Nội quy</span>
          <span class="title-highlight">Khách sạn</span>
        </h1>
        <p class="hero-subtitle">
          Để đảm bảo trải nghiệm tốt nhất cho tất cả khách hàng, vui lòng tuân thủ các quy định sau
        </p>
        
        <!-- Quick Stats -->
        <div class="quick-stats">
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Hỗ trợ</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5★</div>
            <div class="stat-label">Dịch vụ</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">An toàn</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="rules-content">
      <div class="rules-container" :class="{ 'animate-in': isVisible }">
        <!-- Important Notice -->
        <div class="important-notice">
          <div class="notice-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div class="notice-content">
            <h3>Thông báo quan trọng</h3>
            <p>Việc tuân thủ nội quy giúp đảm bảo an toàn và tạo môi trường thoải mái cho tất cả khách hàng. Cảm ơn sự hợp tác của quý khách!</p>
          </div>
        </div>

        <!-- Rules Grid -->
        <div class="rules-grid">
          <!-- Rule 1 -->
          <div class="rule-card" :style="{ animationDelay: '0.1s' }">
            <div class="rule-header">
              <div class="rule-number">01</div>
              <div class="rule-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
            <div class="rule-content">
              <h3 class="rule-title">Xuất trình giấy tờ tùy thân</h3>
              <div class="rule-description">
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Xuất trình CMND/CCCD hoặc Hộ chiếu còn hạn</span>
                </div>
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Giấy tờ phải rõ ràng, không bị hư hỏng</span>
                </div>
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Khách nước ngoài cần có visa hợp lệ</span>
                </div>
              </div>
              <div class="rule-image">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" alt="ID Documents" />
              </div>
            </div>
          </div>

          <!-- Rule 2 -->
          <div class="rule-card" :style="{ animationDelay: '0.2s' }">
            <div class="rule-header">
              <div class="rule-number">02</div>
              <div class="rule-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
            </div>
            <div class="rule-content">
              <h3 class="rule-title">Giờ nhận và trả phòng</h3>
              <div class="time-info">
                <div class="time-item checkin">
                  <div class="time-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"/>
                    </svg>
                  </div>
                  <div class="time-details">
                    <span class="time-label">Nhận phòng</span>
                    <span class="time-value">14:00</span>
                  </div>
                </div>
                <div class="time-separator">
                  <svg viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
                  </svg>
                </div>
                <div class="time-item checkout">
                  <div class="time-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"/>
                    </svg>
                  </div>
                  <div class="time-details">
                    <span class="time-label">Trả phòng</span>
                    <span class="time-value">12:00</span>
                  </div>
                </div>
              </div>
              <div class="rule-note">
                <svg viewBox="0 0 24 24" class="note-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Trễ giờ có thể phát sinh phí bổ sung</span>
              </div>
              <div class="rule-image">
                <img src="https://images.unsplash.com/photo-1559599189-14d4c7f7cde5?auto=format&fit=crop&w=800&q=80" alt="Clock" />
              </div>
            </div>
          </div>

          <!-- Rule 3 -->
          <div class="rule-card" :style="{ animationDelay: '0.3s' }">
            <div class="rule-header">
              <div class="rule-number">03</div>
              <div class="rule-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
              </div>
            </div>
            <div class="rule-content">
              <h3 class="rule-title">Bảo quản chìa khóa phòng</h3>
              <div class="rule-description">
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Trả lại chìa khóa khi check-out</span>
                </div>
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Không sao chép hoặc làm mất chìa khóa</span>
                </div>
                <div class="description-item warning">
                  <svg viewBox="0 0 24 24" class="warning-icon">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                  <span>Mất chìa khóa sẽ bị tính phí 200,000₫</span>
                </div>
              </div>
              <div class="rule-image">
                <img src="https://images.unsplash.com/photo-1588774069262-3b23e0f8fc4b?auto=format&fit=crop&w=800&q=80" alt="Key" />
              </div>
            </div>
          </div>

          <!-- Rule 4 -->
          <div class="rule-card" :style="{ animationDelay: '0.4s' }">
            <div class="rule-header">
              <div class="rule-number">04</div>
              <div class="rule-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
                </svg>
              </div>
            </div>
            <div class="rule-content">
              <h3 class="rule-title">Các hành vi bị cấm</h3>
              <div class="rule-description">
                <div class="description-item prohibited">
                  <svg viewBox="0 0 24 24" class="prohibited-icon">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
                  </svg>
                  <span>Hút thuốc trong phòng</span>
                </div>
                <div class="description-item prohibited">
                  <svg viewBox="0 0 24 24" class="prohibited-icon">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
                  </svg>
                  <span>Mang thú cưng vào khách sạn</span>
                </div>
                <div class="description-item prohibited">
                  <svg viewBox="0 0 24 24" class="prohibited-icon">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
                  </svg>
                  <span>Gây ồn ào sau 22:00</span>
                </div>
              </div>
              <div class="rule-image">
                <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80" alt="No Smoking" />
              </div>
            </div>
          </div>

          <!-- Rule 5 -->
          <div class="rule-card" :style="{ animationDelay: '0.5s' }">
            <div class="rule-header">
              <div class="rule-number">05</div>
              <div class="rule-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V5l-9-4z"/>
                </svg>
              </div>
            </div>
            <div class="rule-content">
              <h3 class="rule-title">An toàn và bảo mật</h3>
              <div class="rule-description">
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Khóa cửa phòng khi ra ngoài</span>
                </div>
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Không để người lạ vào phòng</span>
                </div>
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Báo ngay cho lễ tân khi có sự cố</span>
                </div>
              </div>
              <div class="rule-image">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80" alt="Security" />
              </div>
            </div>
          </div>

          <!-- Rule 6 -->
          <div class="rule-card" :style="{ animationDelay: '0.6s' }">
            <div class="rule-header">
              <div class="rule-number">06</div>
              <div class="rule-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
              </div>
            </div>
            <div class="rule-content">
              <h3 class="rule-title">Trách nhiệm khách hàng</h3>
              <div class="rule-description">
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Bảo quản tài sản cá nhân</span>
                </div>
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Bồi thường khi làm hư hỏng tài sản</span>
                </div>
                <div class="description-item">
                  <svg viewBox="0 0 24 24" class="check-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Tuân thủ pháp luật Việt Nam</span>
                </div>
              </div>
              <div class="rule-image">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" alt="Responsibility" />
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Support -->
        <div class="support-section">
          <div class="support-content">
            <div class="support-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
              </svg>
            </div>
            <div class="support-text">
              <h3>Cần hỗ trợ thêm?</h3>
              <p>Đội ngũ lễ tân của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
            </div>
            <div class="support-actions">
              <a href="tel:1900-1234" class="support-btn primary">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Gọi ngay: 1900-1234
              </a>
              <a href="mailto:support@oceanview.com" class="support-btn secondary">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email hỗ trợ
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" :class="{ 'show': showToast }">
      <div class="toast-content">
        <svg viewBox="0 0 24 24" class="toast-icon">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '@/store/DarkMode'
import TheHeader from '../Component/Header.vue'

const theme = useThemeStore()
theme.initializeDarkMode()

const isVisible = ref(false)
const showToast = ref(false)
const toastMessage = ref('')

const showToastMessage = (message) => {
  toastMessage.value = message
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  // Show welcome message
  setTimeout(() => {
    showToastMessage('Chào mừng bạn đến với nội quy khách sạn!')
  }, 1000)
})
</script>

<style scoped>
.rules-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #333;
  transition: all 0.3s ease;
  position: relative;
  overflow-x: hidden;
}

.rules-wrapper.dark {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #e2e8f0;
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
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 30%;
  animation-delay: 4s;
}

.shape-4 {
  width: 120px;
  height: 120px;
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

/* Hero Section */
.hero-section {
  position: relative;
  z-index: 2;
  padding: 100px 20px 60px 20px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.hero-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px auto;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.icon-svg {
  width: 40px;
  height: 40px;
  fill: white;
}

.hero-title {
  font-size: 3.5rem;
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

.rules-wrapper.dark .title-line {
  color: #e2e8f0;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 48px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.rules-wrapper.dark .hero-subtitle {
  color: #94a3b8;
}

/* Quick Stats */
.quick-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 48px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

.rules-wrapper.dark .stat-label {
  color: #94a3b8;
}

/* Main Content */
.rules-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px 20px;
}

.rules-container {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.rules-container.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Important Notice */
.important-notice {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 48px;
}

.notice-icon {
  width: 60px;
  height: 60px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.notice-icon svg {
  width: 30px;
  height: 30px;
  fill: white;
}

.notice-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #065f46;
  margin-bottom: 8px;
}

.notice-content p {
  color: #047857;
  line-height: 1.6;
  margin: 0;
}

.rules-wrapper.dark .important-notice {
  background: rgba(16, 185, 129, 0.15);
}

.rules-wrapper.dark .notice-content h3 {
  color: #34d399;
}

.rules-wrapper.dark .notice-content p {
  color: #6ee7b7;
}

/* Rules Grid */
.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  margin-bottom: 48px;
}

.rule-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  animation: slideUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.rule-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.rules-wrapper.dark .rule-card {
  background: #1e293b;
  border: 1px solid #334155;
}

/* Rule Header */
.rule-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.rule-number {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
}

.rule-icon {
  width: 48px;
  height: 48px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rule-icon svg {
  width: 24px;
  height: 24px;
  fill: #667eea;
}

/* Rule Content */
.rule-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
}

.rules-wrapper.dark .rule-title {
  color: #e2e8f0;
}

.rule-description {
  margin-bottom: 24px;
}

.description-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  padding: 8px 0;
}

.check-icon {
  width: 20px;
  height: 20px;
  fill: #10b981;
  flex-shrink: 0;
}

.warning-icon {
  width: 20px;
  height: 20px;
  fill: #f59e0b;
  flex-shrink: 0;
}

.prohibited-icon {
  width: 20px;
  height: 20px;
  fill: #ef4444;
  flex-shrink: 0;
}

.description-item span {
  color: #64748b;
  line-height: 1.5;
}

.description-item.warning span {
  color: #d97706;
  font-weight: 600;
}

.description-item.prohibited span {
  color: #dc2626;
  font-weight: 500;
}

.rules-wrapper.dark .description-item span {
  color: #94a3b8;
}

.rules-wrapper.dark .description-item.warning span {
  color: #fbbf24;
}

.rules-wrapper.dark .description-item.prohibited span {
  color: #f87171;
}

/* Time Info */
.time-info {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.time-item {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.time-icon {
  width: 40px;
  height: 40px;
  background: #667eea;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time-icon svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.time-details {
  display: flex;
  flex-direction: column;
}

.time-label {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 2px;
}

.time-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
}

.time-separator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.time-separator svg {
  width: 24px;
  height: 24px;
  fill: #667eea;
}

.rules-wrapper.dark .time-info {
  background: #334155;
}

.rules-wrapper.dark .time-label {
  color: #94a3b8;
}

.rules-wrapper.dark .time-value {
  color: #e2e8f0;
}

/* Rule Note */
.rule-note {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  margin-bottom: 16px;
}

.note-icon {
  width: 16px;
  height: 16px;
  fill: #ef4444;
}

.rule-note span {
  color: #dc2626;
  font-size: 0.9rem;
  font-weight: 500;
}

.rules-wrapper.dark .rule-note {
  background: rgba(239, 68, 68, 0.15);
}

.rules-wrapper.dark .rule-note span {
  color: #f87171;
}

/* Rule Image */
.rule-image {
  border-radius: 12px;
  overflow: hidden;
  height: 200px;
}

.rule-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.rule-card:hover .rule-image img {
  transform: scale(1.05);
}

/* Support Section */
.support-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 48px;
  color: white;
  text-align: center;
}

.support-content {
  max-width: 600px;
  margin: 0 auto;
}

.support-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
}

.support-icon svg {
  width: 40px;
  height: 40px;
  fill: white;
}

.support-text h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.support-text p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 32px;
  line-height: 1.6;
}

.support-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.support-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.support-btn svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.support-btn.primary {
  background: white;
  color: #667eea;
}

.support-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
}

.support-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.support-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
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
@media (max-width: 1024px) {
  .rules-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 24px;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .quick-stats {
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 20px 40px 20px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .rules-grid {
    grid-template-columns: 1fr;
  }
  
  .rule-card {
    padding: 24px;
  }
  
  .quick-stats {
    flex-direction: column;
    gap: 16px;
  }
  
  .important-notice {
    flex-direction: column;
    text-align: center;
  }
  
  .time-info {
    flex-direction: column;
    gap: 16px;
  }
  
  .time-separator {
    transform: rotate(90deg);
  }
  
  .support-section {
    padding: 32px 24px;
  }
  
  .support-actions {
    flex-direction: column;
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
  
  .rule-card {
    padding: 20px;
  }
  
  .rule-header {
    flex-direction: column;
    text-align: center;
  }
  
  .support-text h3 {
    font-size: 1.5rem;
  }
}
</style>
