<template>
    <div class="payment-page">
      <!-- Background Animation -->
      <div class="background-animation">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
      </div>
  
      <!-- Header Section -->
      <div class="payment-header" :class="{ 'animate-in': isVisible }">
        <div class="header-content">
          <div class="header-icon">
            <svg viewBox="0 0 24 24" class="icon-svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <h2 class="page-title">
            <span class="title-line">Xác nhận đơn hàng</span>
            <span class="title-highlight">& Thanh toán</span>
          </h2>
          <p class="page-subtitle">Hoàn tất đặt phòng với quy trình thanh toán an toàn</p>
        </div>
      </div>
  
      <!-- Progress Steps -->
      <div class="progress-container" :class="{ 'animate-in': isVisible }">
        <div class="progress-steps">
          <div class="step" :class="{ 'active': currentStep >= 1, 'completed': currentStep > 1 }">
            <div class="step-circle">
              <svg v-if="currentStep > 1" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span v-else>1</span>
            </div>
            <span class="step-label">Thông tin đơn hàng</span>
          </div>
          <div class="progress-line" :class="{ 'active': currentStep >= 2 }"></div>
          <div class="step" :class="{ 'active': currentStep >= 2, 'completed': currentStep > 2 }">
            <div class="step-circle">
              <svg v-if="currentStep > 2" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span v-else>2</span>
            </div>
            <span class="step-label">Phương thức thanh toán</span>
          </div>
          <div class="progress-line" :class="{ 'active': currentStep >= 3 }"></div>
          <div class="step" :class="{ 'active': currentStep >= 3 }">
            <div class="step-circle">
              <span>3</span>
            </div>
            <span class="step-label">Xác nhận</span>
          </div>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="payment-content">
        <!-- Order Summary Section -->
        <section class="order-summary" :class="{ 'animate-in': isVisible }">
          <div class="section-header">
            <h3 class="section-title">
              <svg viewBox="0 0 24 24" class="section-icon">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
              </svg>
              Thông tin đơn hàng
            </h3>
            <div class="booking-id">
              <span class="id-label">Mã đặt phòng:</span>
              <span class="id-value">#{{ generateBookingId() }}</span>
            </div>
          </div>
  
          <div class="order-details">
            <!-- Room Information -->
            <div class="detail-card room-card">
              <div class="card-header">
                <div class="room-image">
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="Room" />
                </div>
                <div class="room-info">
                  <h4 class="room-name">{{ order.room.name }}</h4>
                  <div class="room-rating">
                    <div class="stars">
                      <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" class="star">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span class="rating-text">4.8/5</span>
                  </div>
                </div>
              </div>
              
              <div class="booking-dates">
                <div class="date-item checkin">
                  <div class="date-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <div class="date-content">
                    <span class="date-label">Ngày nhận phòng</span>
                    <span class="date-value">{{ formatDate(order.checkIn) }}</span>
                  </div>
                </div>
                
                <div class="date-separator">
                  <svg viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
                  </svg>
                </div>
                
                <div class="date-item checkout">
                  <div class="date-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6l-1 1H5v2h14V4z"/>
                    </svg>
                  </div>
                  <div class="date-content">
                    <span class="date-label">Ngày trả phòng</span>
                    <span class="date-value">{{ formatDate(order.checkOut) }}</span>
                  </div>
                </div>
              </div>
              
              <div class="stay-duration">
                <span class="duration-label">Thời gian lưu trú:</span>
                <span class="duration-value">{{ nights }} đêm</span>
              </div>
            </div>
  
            <!-- Price Breakdown -->
            <div class="detail-card price-card">
              <h4 class="card-title">
                <svg viewBox="0 0 24 24" class="title-icon">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
                Chi tiết giá
              </h4>
              
              <div class="price-breakdown">
                <div class="price-row">
                  <span class="price-label">Giá phòng ({{ nights }} đêm)</span>
                  <span class="price-value">{{ formatPrice(baseTotal) }}₫</span>
                </div>
                
                <div v-if="order.services.length" class="price-row">
                  <span class="price-label">Dịch vụ kèm theo</span>
                  <span class="price-value">{{ formatPrice(serviceFee) }}₫</span>
                </div>
                
                <div class="price-row">
                  <span class="price-label">Thuế & phí (10%)</span>
                  <span class="price-value">{{ formatPrice(taxFee) }}₫</span>
                </div>
                
                <div class="price-total">
                  <span class="total-label">Tổng cộng</span>
                  <span class="total-value">{{ formatPrice(total) }}₫</span>
                </div>
              </div>
            </div>
  
            <!-- Services -->
            <div v-if="order.services.length" class="detail-card services-card">
              <h4 class="card-title">
                <svg viewBox="0 0 24 24" class="title-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Dịch vụ đã chọn
              </h4>
              <ul class="services-list">
                <li v-for="service in order.services" :key="service" class="service-item">
                  <svg viewBox="0 0 24 24" class="service-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>{{ service }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
  
        <!-- Payment Methods Section -->
        <section class="payment-methods" :class="{ 'animate-in': isVisible }">
          <div class="section-header">
            <h3 class="section-title">
              <svg viewBox="0 0 24 24" class="section-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Phương thức thanh toán
            </h3>
          </div>
  
          <div class="payment-options">
            <div class="method-selection">
              <button 
                class="method-btn" 
                :class="{ 'active': method === 'prepay' }" 
                @click="selectMethod('prepay')"
              >
                <div class="method-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <span class="method-title">Thanh toán trước</span>
                  <span class="method-desc">Thanh toán ngay để đảm bảo đặt phòng</span>
                </div>
              </button>
              
              <button 
                class="method-btn" 
                :class="{ 'active': method === 'postpay' }" 
                @click="selectMethod('postpay')"
              >
                <div class="method-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <span class="method-title">Thanh toán sau</span>
                  <span class="method-desc">Thanh toán khi nhận phòng tại khách sạn</span>
                </div>
              </button>
            </div>
  
            <!-- Gateway Options -->
            <div v-if="method === 'prepay'" class="gateway-section">
              <h4 class="gateway-title">Chọn cổng thanh toán</h4>
              <div class="gateway-options">
                <label class="gateway-option" :class="{ 'selected': gateway === 'visa' }">
                  <input type="radio" v-model="gateway" value="visa" />
                  <div class="gateway-content">
                    <div class="gateway-icon visa">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div class="gateway-info">
                      <span class="gateway-name">Thẻ Visa/Mastercard</span>
                      <span class="gateway-desc">Thanh toán bằng thẻ tín dụng/ghi nợ</span>
                    </div>
                  </div>
                </label>
                
                <label class="gateway-option" :class="{ 'selected': gateway === 'momo' }">
                  <input type="radio" v-model="gateway" value="momo" />
                  <div class="gateway-content">
                    <div class="gateway-icon momo">
                      <span>📱</span>
                    </div>
                    <div class="gateway-info">
                      <span class="gateway-name">Ví MoMo</span>
                      <span class="gateway-desc">Thanh toán qua ví điện tử MoMo</span>
                    </div>
                  </div>
                </label>
                
                <label class="gateway-option" :class="{ 'selected': gateway === 'paypal' }">
                  <input type="radio" v-model="gateway" value="paypal" />
                  <div class="gateway-content">
                    <div class="gateway-icon paypal">
                      <svg viewBox="0 0 24 24">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81.394.45.67.96.074 1.107z"/>
                      </svg>
                    </div>
                    <div class="gateway-info">
                      <span class="gateway-name">PayPal</span>
                      <span class="gateway-desc">Thanh toán an toàn qua PayPal</span>
                    </div>
                  </div>
                </label>
                
                <label class="gateway-option" :class="{ 'selected': gateway === 'bank' }">
                  <input type="radio" v-model="gateway" value="bank" />
                  <div class="gateway-content">
                    <div class="gateway-icon bank">
                      <svg viewBox="0 0 24 24">
                        <path d="M11.5 1L2 6v2h20V6m-5 4v7h3v-7M2 22h20v-2H2m1.5-4h4v-7h-4m6 0v7h4v-7"/>
                      </svg>
                    </div>
                    <div class="gateway-info">
                      <span class="gateway-name">Chuyển khoản ngân hàng</span>
                      <span class="gateway-desc">Chuyển khoản trực tiếp</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
  
            <!-- Post-pay Note -->
            <div v-if="method === 'postpay'" class="postpay-note">
              <div class="note-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div class="note-content">
                <h4>Thanh toán khi nhận phòng</h4>
                <p>Bạn sẽ thanh toán trực tiếp tại quầy lễ tân khi làm thủ tục nhận phòng. Chúng tôi chấp nhận tiền mặt và thẻ.</p>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Confirmation Section -->
        <section class="confirmation" :class="{ 'animate-in': isVisible }">
          <div class="confirm-card">
            <div class="security-info">
              <div class="security-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V5l-9-4z"/>
                </svg>
              </div>
              <div class="security-text">
                <h4>Thanh toán an toàn</h4>
                <p>Thông tin của bạn được bảo mật với mã hóa SSL 256-bit</p>
              </div>
            </div>
            
            <button 
              class="confirm-btn" 
              @click="handlePayment"
              :disabled="isProcessing || (method === 'prepay' && !gateway)"
              :class="{ 'loading': isProcessing }"
            >
              <div class="btn-content">
                <svg v-if="!isProcessing" viewBox="0 0 24 24" class="btn-icon">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <div v-else class="loading-spinner"></div>
                <span>{{ getButtonText() }}</span>
              </div>
            </button>
          </div>
        </section>
      </div>
  
      <!-- Result Messages -->
      <div v-if="status === 'success'" class="result-overlay">
        <div class="result-modal success">
          <div class="result-icon">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <h3>Thanh toán thành công!</h3>
          <p>Hóa đơn đã được gửi qua email. Cảm ơn bạn đã chọn dịch vụ của chúng tôi.</p>
          <button class="result-btn" @click="closeResult">
            <svg viewBox="0 0 24 24">
              <path d="M10 17l5-5-5-5v10z"/>
            </svg>
            Tiếp tục
          </button>
        </div>
      </div>
  
      <div v-if="status === 'error'" class="result-overlay">
        <div class="result-modal error">
          <div class="result-icon">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </div>
          <h3>Thanh toán thất bại</h3>
          <p>Có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại hoặc chọn phương thức khác.</p>
          <button class="result-btn" @click="closeResult">
            <svg viewBox="0 0 24 24">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
            Thử lại
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
  const order = ref({
    room: {
      name: 'Suite Ocean View',
      price: 1800000
    },
    checkIn: '2025-04-20',
    checkOut: '2025-04-23',
    services: ['Ăn sáng buffet', 'Spa thư giãn', 'Đưa đón sân bay']
  })
  
  const method = ref('prepay')
  const gateway = ref('')
  const status = ref('')
  const isProcessing = ref(false)
  const isVisible = ref(false)
  const currentStep = ref(1)
  const showToast = ref(false)
  const toastMessage = ref('')
  const toastType = ref('success')
  
  // Computed properties
  const nights = computed(() => {
    const inDate = new Date(order.value.checkIn)
    const outDate = new Date(order.value.checkOut)
    const diff = (outDate - inDate) / (1000 * 3600 * 24)
    return Math.max(1, diff)
  })
  
  const baseTotal = computed(() => {
    return order.value.room.price * nights.value
  })
  
  const serviceFee = computed(() => {
    return order.value.services.length * 150000
  })
  
  const taxFee = computed(() => {
    return Math.round((baseTotal.value + serviceFee.value) * 0.1)
  })
  
  const total = computed(() => {
    return baseTotal.value + serviceFee.value + taxFee.value
  })
  
  // Methods
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price)
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  const generateBookingId = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `OV${year}${month}${day}${random}`
  }
  
  const selectMethod = (selectedMethod) => {
    method.value = selectedMethod
    gateway.value = ''
    currentStep.value = 2
  }
  
  const getButtonText = () => {
    if (isProcessing.value) {
      return 'Đang xử lý...'
    }
    if (method.value === 'prepay') {
      return `Thanh toán ${formatPrice(total.value)}₫`
    }
    return 'Xác nhận đặt phòng'
  }
  
  const showToastMessage = (message, type = 'success') => {
    toastMessage.value = message
    toastType.value = type
    showToast.value = true
    
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }
  
  const handlePayment = () => {
    if (method.value === 'prepay' && !gateway.value) {
      showToastMessage('Vui lòng chọn cổng thanh toán', 'error')
      return
    }
  
    isProcessing.value = true
    currentStep.value = 3
    status.value = ''
  
    // Simulate payment processing
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2
      status.value = isSuccess ? 'success' : 'error'
      isProcessing.value = false
      
      if (isSuccess) {
        showToastMessage('Thanh toán thành công!')
      } else {
        showToastMessage('Thanh toán thất bại', 'error')
      }
    }, 3000)
  }
  
  const closeResult = () => {
    status.value = ''
    if (status.value === 'success') {
      // Redirect to confirmation page or reset form
    }
  }
  
  // Lifecycle
  onMounted(() => {
    setTimeout(() => {
      isVisible.value = true
    }, 100)
  })
  </script>
  
  <style scoped>
  .payment-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    font-family: 'Inter', 'Segoe UI', sans-serif;
    position: relative;
    overflow-x: hidden;
    padding: 40px 20px;
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
  
  /* Header Section */
  .payment-header {
    position: relative;
    z-index: 2;
    text-align: center;
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  
  .payment-header.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .header-content {
    max-width: 600px;
    margin: 0 auto;
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
  
  .page-title {
    font-size: 3rem;
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
  
  .page-subtitle {
    font-size: 1.2rem;
    color: #64748b;
    line-height: 1.6;
  }
  
  /* Progress Steps */
  .progress-container {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
    animation-delay: 0.2s;
  }
  
  .progress-container.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .progress-steps {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 600px;
  }
  
  .step {
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
    font-weight: 600;
  }
  
  .step.active .step-circle {
    background: #667eea;
    color: white;
    transform: scale(1.1);
  }
  
  .step.completed .step-circle {
    background: #10b981;
    color: white;
  }
  
  .step-circle svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  
  .step-label {
    font-size: 0.9rem;
    color: #64748b;
    font-weight: 500;
    text-align: center;
  }
  
  .step.active .step-label {
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
  
  /* Main Content */
  .payment-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  /* Section Styles */
  .order-summary,
  .payment-methods,
  .confirmation {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  
  .order-summary.animate-in,
  .payment-methods.animate-in,
  .confirmation.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .order-summary {
    animation-delay: 0.3s;
  }
  
  .payment-methods {
    animation-delay: 0.4s;
  }
  
  .confirmation {
    grid-column: span 2;
    animation-delay: 0.5s;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  
  .section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
  }
  
  .section-icon {
    width: 24px;
    height: 24px;
    fill: #667eea;
  }
  
  .booking-id {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .id-label {
    font-size: 0.85rem;
    color: #64748b;
  }
  
  .id-value {
    font-size: 1rem;
    font-weight: 700;
    color: #667eea;
  }
  
  /* Detail Cards */
  .detail-card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .card-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 16px;
  }
  
  .title-icon {
    width: 20px;
    height: 20px;
    fill: #667eea;
  }
  
  /* Room Card */
  .room-card .card-header {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
  }
  
  .room-image {
    width: 80px;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .room-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .room-info {
    flex: 1;
  }
  
  .room-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 8px;
  }
  
  .room-rating {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .stars {
    display: flex;
    gap: 2px;
  }
  
  .star {
    width: 14px;
    height: 14px;
    fill: #fbbf24;
  }
  
  .rating-text {
    font-size: 0.9rem;
    color: #64748b;
    font-weight: 500;
  }
  
  .booking-dates {
    display: flex;
    align-items: center;
    gap: 20px;
    background: #f8fafc;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 16px;
  }
  
  .date-item {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }
  
  .date-icon {
    width: 40px;
    height: 40px;
    background: #667eea;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .date-icon svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
  
  .date-content {
    display: flex;
    flex-direction: column;
  }
  
  .date-label {
    font-size: 0.85rem;
    color: #64748b;
    margin-bottom: 2px;
  }
  
  .date-value {
    font-size: 0.95rem;
    font-weight: 600;
    color: #2c3e50;
  }
  
  .date-separator {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .date-separator svg {
    width: 24px;
    height: 24px;
    fill: #667eea;
  }
  
  .stay-duration {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: rgba(102, 126, 234, 0.1);
    border-radius: 8px;
  }
  
  .duration-label {
    color: #64748b;
  }
  
  .duration-value {
    font-weight: 600;
    color: #667eea;
    font-size: 1.1rem;
  }
  
  /* Price Card */
  .price-breakdown {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
  }
  
  .price-label {
    color: #64748b;
  }
  
  .price-value {
    font-weight: 600;
    color: #2c3e50;
  }
  
  .price-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-top: 2px solid #e2e8f0;
    margin-top: 8px;
  }
  
  .total-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
  }
  
  .total-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #667eea;
  }
  
  /* Services Card */
  .services-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .service-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    color: #64748b;
  }
  
  .service-icon {
    width: 16px;
    height: 16px;
    fill: #10b981;
  }
  
  /* Payment Methods */
  .payment-options {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  
  .method-selection {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }
  
  .method-btn {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .method-btn:hover {
    border-color: #667eea;
    background: #f8fafc;
  }
  
  .method-btn.active {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.05);
  }
  
  .method-icon {
    width: 48px;
    height: 48px;
    background: #f1f5f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .method-btn.active .method-icon {
    background: #667eea;
    color: white;
  }
  
  .method-icon svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
  
  .method-content {
    display: flex;
    flex-direction: column;
  }
  
  .method-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 4px;
  }
  
  .method-desc {
    font-size: 0.9rem;
    color: #64748b;
  }
  
  /* Gateway Section */
  .gateway-section {
    border-top: 1px solid #e2e8f0;
    padding-top: 20px;
  }
  
  .gateway-title {
    font-size: 1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 16px;
  }
  
  .gateway-options {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .gateway-option {
    display: flex;
    align-items: center;
    padding: 12px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .gateway-option:hover {
    border-color: #667eea;
    background: #f8fafc;
  }
  
  .gateway-option.selected {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.05);
  }
  
  .gateway-option input[type="radio"] {
    display: none;
  }
  
  .gateway-content {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
  }
  
  .gateway-icon {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  
  .gateway-icon.visa {
    background: #1a1f71;
    color: white;
  }
  
  .gateway-icon.momo {
    background: #d82d8b;
    color: white;
  }
  
  .gateway-icon.paypal {
    background: #003087;
    color: white;
  }
  
  .gateway-icon.bank {
    background: #2563eb;
    color: white;
  }
  
  .gateway-icon svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
  
  .gateway-info {
    display: flex;
    flex-direction: column;
  }
  
  .gateway-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 2px;
  }
  
  .gateway-desc {
    font-size: 0.85rem;
    color: #64748b;
  }
  
  /* Post-pay Note */
  .postpay-note {
    display: flex;
    gap: 16px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 12px;
    padding: 20px;
  }
  
  .note-icon {
    width: 48px;
    height: 48px;
    background: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .note-icon svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
  
  .note-content h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #065f46;
    margin-bottom: 8px;
  }
  
  .note-content p {
    color: #047857;
    line-height: 1.6;
    margin: 0;
  }
  
  /* Confirmation */
  .confirm-card {
    background: white;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
  }
  
  .security-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 32px;
    padding: 16px;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 12px;
  }
  
  .security-icon {
    width: 40px;
    height: 40px;
    background: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .security-icon svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
  
  .security-text h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #065f46;
    margin-bottom: 4px;
  }
  
  .security-text p {
    font-size: 0.9rem;
    color: #047857;
    margin: 0;
  }
  
  .confirm-btn {
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
  
  .confirm-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
  
  .confirm-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .confirm-btn.loading {
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
  
  /* Result Modals */
  .result-overlay {
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
  
  .result-modal {
    background: white;
    border-radius: 20px;
    padding: 40px;
    max-width: 400px;
    width: 100%;
    text-align: center;
    animation: slideInUp 0.3s ease;
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
  
  .result-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px auto;
  }
  
  .result-modal.success .result-icon {
    background: #10b981;
  }
  
  .result-modal.error .result-icon {
    background: #ef4444;
  }
  
  .result-icon svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
  
  .result-modal h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 16px;
  }
  
  .result-modal.success h3 {
    color: #065f46;
  }
  
  .result-modal.error h3 {
    color: #991b1b;
  }
  
  .result-modal p {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 32px;
  }
  
  .result-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 auto;
  }
  
  .result-modal.success .result-btn {
    background: #10b981;
    color: white;
  }
  
  .result-modal.error .result-btn {
    background: #ef4444;
    color: white;
  }
  
  .result-btn svg {
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
  @media (max-width: 1024px) {
    .payment-content {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    
    .confirmation {
      grid-column: span 1;
    }
    
    .page-title {
      font-size: 2.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .payment-page {
      padding: 20px 16px;
    }
    
    .page-title {
      font-size: 2rem;
    }
    
    .progress-steps {
      flex-direction: column;
      gap: 16px;
    }
    
    .progress-line {
      width: 2px;
      height: 40px;
    }
    
    .booking-dates {
      flex-direction: column;
      gap: 16px;
    }
    
    .date-separator {
      transform: rotate(90deg);
    }
    
    .method-selection {
      gap: 8px;
    }
    
    .method-btn {
      padding: 12px;
    }
    
    .gateway-options {
      gap: 6px;
    }
    
    .gateway-option {
      padding: 10px;
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
    
    .detail-card {
      padding: 16px;
    }
    
    .payment-options {
      padding: 16px;
    }
    
    .confirm-card {
      padding: 20px;
    }
    
    .result-modal {
      padding: 24px;
      margin: 16px;
    }
  }
  </style>
  