<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->

<template>
  <div class="check-in-check-out">
    <!-- Header Section -->
    <div class="header-section">
      <div class="header-content">
        <div class="header-icon">
          <va-icon name="hotel" size="large" />
        </div>
        <h1 class="page-title">
          <span class="title-main">Xác nhận</span>
          <span class="title-highlight">Check-in / Check-out</span>
        </h1>
        <p class="page-subtitle">Quét mã QR để hoàn tất thủ tục nhận/trả phòng một cách nhanh chóng</p>
      </div>
      
      <!-- Progress Indicator -->
      <div class="progress-container">
        <div class="progress-step" :class="{ 'active': currentStep >= 1, 'completed': currentStep > 1 }">
          <div class="step-circle">
            <va-icon :name="currentStep > 1 ? 'check' : 'hotel'" />
          </div>
          <span class="step-label">Thông tin phòng</span>
        </div>
        <div class="progress-line" :class="{ 'active': currentStep >= 2 }"></div>
        <div class="progress-step" :class="{ 'active': currentStep >= 2, 'completed': currentStep > 2 }">
          <div class="step-circle">
            <va-icon :name="currentStep > 2 ? 'check' : 'qr_code'" />
          </div>
          <span class="step-label">Quét mã QR</span>
        </div>
        <div class="progress-line" :class="{ 'active': currentStep >= 3 }"></div>
        <div class="progress-step" :class="{ 'active': currentStep >= 3, 'completed': currentStep > 3 }">
          <div class="step-circle">
            <va-icon :name="currentStep > 3 ? 'check' : 'verified'" />
          </div>
          <span class="step-label">Hoàn tất</span>
        </div>
      </div>
    </div>

    <!-- Alert Section -->
    <div class="alert-section">
      <div class="alert-card" :class="{ 'pulse': isQRActive }">
        <div class="alert-icon">
          <va-icon name="info" />
        </div>
        <div class="alert-content">
          <h3>Hướng dẫn sử dụng</h3>
          <p>Vui lòng quét mã QR bằng camera điện thoại để xác nhận check-in hoặc check-out. Mã QR có hiệu lực trong vòng <strong>{{ timeRemaining }}</strong> phút.</p>
        </div>
        <div class="alert-timer">
          <div class="timer-circle" :style="{ '--progress': timerProgress }">
            <span class="timer-text">{{ Math.ceil(timeRemaining) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="content-grid">
        <!-- Room Information Card -->
        <div class="room-card" :class="{ 'animate-in': isVisible }">
          <div class="card-header">
            <div class="card-icon">
              <va-icon name="hotel" />
            </div>
            <h2>Thông tin phòng</h2>
            <div class="room-status" :class="roomStatus.toLowerCase()">
              <va-icon :name="roomStatus === 'Available' ? 'check_circle' : 'schedule'" />
              <span>{{ roomStatus === 'Available' ? 'Sẵn sàng' : 'Đang chuẩn bị' }}</span>
            </div>
          </div>
          
          <div class="room-image-container">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Deluxe Suite"
              class="room-image"
              @load="imageLoaded = true"
            />
            <div class="image-overlay">
              <div class="room-type-badge">
                <va-icon name="star" />
                <span>Deluxe Suite</span>
              </div>
            </div>
          </div>
          
          <div class="room-details">
            <div class="detail-grid">
              <div class="detail-item">
                <div class="detail-icon">
                  <va-icon name="meeting_room" />
                </div>
                <div class="detail-content">
                  <span class="detail-label">Phòng số</span>
                  <span class="detail-value">501</span>
                </div>
              </div>
              
              <div class="detail-item">
                <div class="detail-icon">
                  <va-icon name="layers" />
                </div>
                <div class="detail-content">
                  <span class="detail-label">Tầng</span>
                  <span class="detail-value">5</span>
                </div>
              </div>
              
              <div class="detail-item">
                <div class="detail-icon">
                  <va-icon name="attach_money" />
                </div>
                <div class="detail-content">
                  <span class="detail-label">Giá phòng</span>
                  <span class="detail-value">2,000,000₫</span>
                </div>
              </div>
              
              <div class="detail-item">
                <div class="detail-icon">
                  <va-icon name="confirmation_number" />
                </div>
                <div class="detail-content">
                  <span class="detail-label">Mã đặt phòng</span>
                  <span class="detail-value">#{{ bookingId }}</span>
                </div>
              </div>
              
              <div class="detail-item">
                <div class="detail-icon">
                  <va-icon name="person" />
                </div>
                <div class="detail-content">
                  <span class="detail-label">Khách hàng</span>
                  <span class="detail-value">John Doe</span>
                </div>
              </div>
              
              <div class="detail-item">
                <div class="detail-icon">
                  <va-icon name="schedule" />
                </div>
                <div class="detail-content">
                  <span class="detail-label">Thời gian</span>
                  <span class="detail-value">{{ formatDateTime(new Date()) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- QR Code Card -->
        <div class="qr-card" :class="{ 'animate-in': isVisible, 'scanning': isScanning }">
          <div class="card-header">
            <div class="card-icon qr-icon">
              <va-icon name="qr_code" />
            </div>
            <h2>Mã QR xác nhận</h2>
            <button class="refresh-btn" @click="regenerateQR" :disabled="isRegenerating">
              <va-icon :name="isRegenerating ? 'refresh' : 'refresh'" :class="{ 'spinning': isRegenerating }" />
            </button>
          </div>
          
          <div class="qr-container">
            <div class="qr-wrapper" :class="{ 'scanning-effect': isScanning }">
              <vue-qrcode :value="qrData" class="qrcode" />
              <div class="qr-overlay" v-if="isScanning">
                <div class="scanning-line"></div>
              </div>
              <div class="qr-corners">
                <div class="corner top-left"></div>
                <div class="corner top-right"></div>
                <div class="corner bottom-left"></div>
                <div class="corner bottom-right"></div>
              </div>
            </div>
            
            <div class="qr-info">
              <div class="expiration-info">
                <va-icon name="schedule" />
                <span>Hết hạn lúc: <strong>{{ expirationTime }}</strong></span>
              </div>
              
              <div class="scan-instructions">
                <va-icon name="camera_alt" />
                <span>Hướng camera vào mã QR để quét</span>
              </div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="action-section">
            <div class="action-buttons">
              <button 
                class="action-btn check-in-btn" 
                @click="handleCheckIn"
                :disabled="isProcessing"
                :class="{ 'processing': isProcessing && actionType === 'checkin' }"
              >
                <div class="btn-content">
                  <va-icon name="login" v-if="!isProcessing || actionType !== 'checkin'" />
                  <va-icon name="refresh" v-else class="spinning" />
                  <span>{{ isProcessing && actionType === 'checkin' ? 'Đang xử lý...' : 'Check-in' }}</span>
                </div>
              </button>
              
              <button 
                class="action-btn check-out-btn" 
                @click="handleCheckOut"
                :disabled="isProcessing"
                :class="{ 'processing': isProcessing && actionType === 'checkout' }"
              >
                <div class="btn-content">
                  <va-icon name="logout" v-if="!isProcessing || actionType !== 'checkout'" />
                  <va-icon name="refresh" v-else class="spinning" />
                  <span>{{ isProcessing && actionType === 'checkout' ? 'Đang xử lý...' : 'Check-out' }}</span>
                </div>
              </button>
            </div>
            
            <div class="help-section">
              <button class="help-btn" @click="showHelp = !showHelp">
                <va-icon name="help_outline" />
                <span>Cần hỗ trợ?</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Help Modal -->
    <div v-if="showHelp" class="modal-overlay" @click="showHelp = false">
      <div class="help-modal" @click.stop>
        <div class="modal-header">
          <h3>
            <va-icon name="help" />
            Hướng dẫn sử dụng
          </h3>
          <button class="close-btn" @click="showHelp = false">
            <va-icon name="close" />
          </button>
        </div>
        
        <div class="modal-content">
          <div class="help-steps">
            <div class="help-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Mở camera điện thoại</h4>
                <p>Sử dụng ứng dụng camera mặc định hoặc ứng dụng quét QR</p>
              </div>
            </div>
            
            <div class="help-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Hướng camera vào mã QR</h4>
                <p>Giữ điện thoại cách mã QR khoảng 15-20cm</p>
              </div>
            </div>
            
            <div class="help-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Chờ xác nhận</h4>
                <p>Hệ thống sẽ tự động xử lý và thông báo kết quả</p>
              </div>
            </div>
          </div>
          
          <div class="contact-info">
            <h4>Liên hệ hỗ trợ</h4>
            <div class="contact-item">
              <va-icon name="phone" />
              <span>Hotline: 1900-1234</span>
            </div>
            <div class="contact-item">
              <va-icon name="email" />
              <span>Email: support@hotel.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success/Error Toast -->
    <div v-if="toastMessage" class="toast" :class="[toastType, { 'show': showToast }]">
      <div class="toast-content">
        <va-icon :name="toastType === 'success' ? 'check_circle' : 'error'" class="toast-icon" />
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'

const { $api } = useNuxtApp()
const router = useRouter()

// Reactive data
const bookingId = ref('123456')
const qrData = ref(`https://hotel-booking-system.com/api/checkin/${bookingId.value}`)
const isVisible = ref(false)
const imageLoaded = ref(false)
const isScanning = ref(false)
const isProcessing = ref(false)
const actionType = ref('')
const isRegenerating = ref(false)
const showHelp = ref(false)
const roomStatus = ref('Available')
const currentStep = ref(1)

// Timer related
const timeRemaining = ref(30)
const timerInterval = ref(null)

// Toast
const toastMessage = ref('')
const toastType = ref('success')
const showToast = ref(false)

// Computed properties
const expirationTime = computed(() => {
  const expiration = new Date()
  expiration.setMinutes(expiration.getMinutes() + timeRemaining.value)
  return expiration.toLocaleTimeString('vi-VN', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  })
})

const timerProgress = computed(() => {
  return ((30 - timeRemaining.value) / 30) * 100
})

// Methods
const formatDateTime = (date) => {
  return date.toLocaleString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
    setTimeout(() => toastMessage.value = '', 300)
  }, 3000)
}

const regenerateQR = async () => {
  isRegenerating.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  qrData.value = `https://hotel-booking-system.com/api/checkin/${bookingId.value}?t=${Date.now()}`
  timeRemaining.value = 30
  
  isRegenerating.value = false
  showToastMessage('Mã QR đã được làm mới', 'success')
}

const handleCheckIn = async () => {
  isProcessing.value = true
  actionType.value = 'checkin'
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const response = await $api.post(`/api/checkin/${bookingId.value}`)
    if (response.status === 200) {
      currentStep.value = 3
      showToastMessage('Check-in thành công! Chúc bạn có kỳ nghỉ vui vẻ.', 'success')
      
      setTimeout(() => {
        router.push('/xac-nhan')
      }, 2000)
    } else {
      showToastMessage('Check-in thất bại! Vui lòng thử lại.', 'error')
    }
  } catch (error) {
    showToastMessage('Lỗi khi check-in! Vui lòng liên hệ lễ tân.', 'error')
  } finally {
    isProcessing.value = false
    actionType.value = ''
  }
}

const handleCheckOut = async () => {
  isProcessing.value = true
  actionType.value = 'checkout'
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const response = await $api.post(`/api/checkout/${bookingId.value}`)
    if (response.status === 200) {
      currentStep.value = 3
      showToastMessage('Check-out thành công! Cảm ơn bạn đã lựa chọn khách sạn.', 'success')
      
      setTimeout(() => {
        router.push('/xac-nhan')
      }, 2000)
    } else {
      showToastMessage('Check-out thất bại! Vui lòng thử lại.', 'error')
    }
  } catch (error) {
    showToastMessage('Lỗi khi check-out! Vui lòng liên hệ lễ tân.', 'error')
  } finally {
    isProcessing.value = false
    actionType.value = ''
  }
}

const startTimer = () => {
  timerInterval.value = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value -= 0.1
    } else {
      clearInterval(timerInterval.value)
      showToastMessage('Mã QR đã hết hạn. Vui lòng tạo mã mới.', 'error')
    }
  }, 100)
}

const simulateQRScan = () => {
  const scanInterval = setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance of scan
      isScanning.value = true
      currentStep.value = 2
      
      setTimeout(() => {
        isScanning.value = false
        showToastMessage('Mã QR đã được quét thành công!', 'success')
        clearInterval(scanInterval)
      }, 2000)
    }
  }, 5000)
  
  return scanInterval
}

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  startTimer()
  const scanInterval = simulateQRScan()
  
  onUnmounted(() => {
    if (timerInterval.value) {
      clearInterval(timerInterval.value)
    }
    clearInterval(scanInterval)
  })
})
</script>

<style scoped>
.check-in-check-out {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  padding: 20px;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 40px;
}

.header-content {
  margin-bottom: 40px;
}

.header-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  color: white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

.title-main {
  color: #2c3e50;
  display: block;
}

.title-highlight {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

/* Progress Indicator */
.progress-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.progress-step.active .step-circle {
  background: #667eea;
  color: white;
}

.progress-step.completed .step-circle {
  background: #10b981;
  color: white;
}

.step-label {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

.progress-step.active .step-label {
  color: #667eea;
  font-weight: 600;
}

.progress-line {
  height: 2px;
  width: 80px;
  background: #e2e8f0;
  transition: all 0.3s ease;
}

.progress-line.active {
  background: #667eea;
}

/* Alert Section */
.alert-section {
  margin-bottom: 40px;
}

.alert-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.alert-card.pulse {
  animation: alertPulse 2s infinite;
}

@keyframes alertPulse {
  0%, 100% { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); }
  50% { box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2); }
}

.alert-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
}

.alert-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.alert-content p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.alert-timer {
  flex-shrink: 0;
}

.timer-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: conic-gradient(#667eea calc(var(--progress) * 1%), #e2e8f0 0%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.timer-circle::before {
  content: '';
  position: absolute;
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;
}

.timer-text {
  position: relative;
  font-weight: 700;
  color: #667eea;
  font-size: 1.1rem;
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* Room Card */
.room-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.room-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  border-bottom: 1px solid #f1f5f9;
}

.card-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.card-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  flex: 1;
  margin-left: 16px;
}

.room-status {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.room-status.available {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.room-image-container {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.room-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.room-image:hover {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.room-type-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 20px;
  color: #2c3e50;
  font-weight: 600;
}

.room-details {
  padding: 32px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.detail-item:hover {
  background: #f1f5f9;
  transform: translateY(-2px);
}

.detail-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.detail-content {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 2px;
}

.detail-value {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

/* QR Card */
.qr-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.qr-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.qr-card.scanning {
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.qr-icon {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.refresh-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: #f1f5f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.refresh-btn:hover {
  background: #e2e8f0;
}

.refresh-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.qr-container {
  padding: 32px;
  text-align: center;
}

.qr-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 24px;
}

.qrcode {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.qr-wrapper.scanning-effect .qrcode {
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
}

.qr-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  overflow: hidden;
}

.scanning-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #667eea, transparent);
  animation: scan 2s linear infinite;
}

@keyframes scan {
  0% { transform: translateY(-2px); }
  100% { transform: translateY(200px); }
}

.qr-corners {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 3px solid #667eea;
}

.corner.top-left {
  top: 10px;
  left: 10px;
  border-right: none;
  border-bottom: none;
}

.corner.top-right {
  top: 10px;
  right: 10px;
  border-left: none;
  border-bottom: none;
}

.corner.bottom-left {
  bottom: 10px;
  left: 10px;
  border-right: none;
  border-top: none;
}

.corner.bottom-right {
  bottom: 10px;
  right: 10px;
  border-left: none;
  border-top: none;
}

.qr-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.expiration-info,
.scan-instructions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #64748b;
}

.expiration-info {
  color: #dc2626;
  font-weight: 600;
}

/* Action Section */
.action-section {
  padding: 32px;
  border-top: 1px solid #f1f5f9;
}

.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.action-btn {
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.check-in-btn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.check-in-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
}

.check-out-btn {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.check-out-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.help-section {
  text-align: center;
}

.help-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.help-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

/* Modal */
.modal-overlay {
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

.help-modal {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideInUp 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid #f1f5f9;
}

.modal-header h3 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.close-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #e2e8f0;
}

.modal-content {
  padding: 32px;
}

.help-steps {
  margin-bottom: 32px;
}

.help-step {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.step-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.step-content p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.contact-info {
  padding-top: 24px;
  border-top: 1px solid #f1f5f9;
}

.contact-info h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  color: #64748b;
}

/* Toast */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 24px;
  border-radius: 12px;
  color: white;
  z-index: 1001;
  transform: translateX(400px);
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.toast.show {
  transform: translateX(0);
  opacity: 1;
}

.toast.success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.toast.error {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .check-in-check-out {
    padding: 16px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .progress-container {
    flex-direction: column;
    gap: 16px;
  }
  
  .progress-line {
    width: 2px;
    height: 40px;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    grid-template-columns: 1fr;
  }
  
  .alert-card {
    flex-direction: column;
    text-align: center;
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
</style>
