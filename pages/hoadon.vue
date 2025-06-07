<template>
  <div class="invoice-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <!-- Header Section -->
    <div class="invoice-header" :class="{ 'animate-in': isVisible }">
      <div class="header-content">
        <div class="success-icon">
          <svg viewBox="0 0 24 24" class="check-icon">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <h1 class="page-title">
          <span class="title-line">Hóa đơn</span>
          <span class="title-highlight">Thành công</span>
        </h1>
        <p class="page-subtitle">Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="invoice-container">
      <!-- Invoice Details -->
      <div class="invoice-details" :class="{ 'animate-in': isVisible }">
        <div class="invoice-card">
          <!-- Hotel Branding -->
          <div class="hotel-branding">
            <div class="logo-section">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" class="logo-svg">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
                  <path d="M12 7v5l4 2-4 2v5"/>
                </svg>
              </div>
              <div class="logo-text">
                <h2>OceanView Hotels</h2>
                <p>Luxury Experience</p>
              </div>
            </div>
            <div class="invoice-number">
              <span class="invoice-label">Số hóa đơn</span>
              <span class="invoice-id">#{{ generateInvoiceNumber() }}</span>
            </div>
          </div>

          <!-- Invoice Status Banner -->
          <div class="status-banner" :class="paymentStatusClass">
            <div class="status-icon">
              <svg v-if="isFullyPaid" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <svg v-else viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div class="status-content">
              <h3>{{ paymentStatusText }}</h3>
              <p>{{ paymentStatusDescription }}</p>
            </div>
          </div>

          <!-- Customer Information -->
          <div class="info-section">
            <h3 class="section-title">
              <svg viewBox="0 0 24 24" class="section-icon">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Thông tin khách hàng
            </h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">Tên khách hàng</span>
                  <span class="info-value">{{ invoiceData.tenKhachHang }}</span>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">Ngày tạo hóa đơn</span>
                  <span class="info-value">{{ formatDate(new Date()) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Booking Information -->
          <div class="info-section">
            <h3 class="section-title">
              <svg viewBox="0 0 24 24" class="section-icon">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              Chi tiết đặt phòng
            </h3>
            <div class="booking-details">
              <div class="booking-item">
                <div class="booking-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                  </svg>
                </div>
                <div class="booking-content">
                  <span class="booking-label">Phòng đã đặt</span>
                  <span class="booking-value">{{ invoiceData.tenPhong }}</span>
                </div>
              </div>
              
              <div class="date-range">
                <div class="date-item">
                  <div class="date-icon checkin">
                    <svg viewBox="0 0 24 24">
                      <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM20 20H4V4h16v16z"/>
                    </svg>
                  </div>
                  <div class="date-content">
                    <span class="date-label">Ngày nhận phòng</span>
                    <span class="date-value">{{ formatDate(invoiceData.ngayNhan) }}</span>
                  </div>
                </div>
                
                <div class="date-separator">
                  <svg viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
                  </svg>
                </div>
                
                <div class="date-item">
                  <div class="date-icon checkout">
                    <svg viewBox="0 0 24 24">
                      <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM20 20H4V4h16v16z"/>
                    </svg>
                  </div>
                  <div class="date-content">
                    <span class="date-label">Ngày trả phòng</span>
                    <span class="date-value">{{ formatDate(invoiceData.ngayTra) }}</span>
                  </div>
                </div>
              </div>
              
              <div class="stay-duration">
                <span class="duration-label">Thời gian lưu trú:</span>
                <span class="duration-value">{{ calculateNights() }} đêm</span>
              </div>
            </div>
          </div>

          <!-- Payment Summary -->
          <div class="payment-section">
            <h3 class="section-title">
              <svg viewBox="0 0 24 24" class="section-icon">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
              Thông tin thanh toán
            </h3>
            <div class="payment-breakdown">
              <div class="payment-row">
                <span class="payment-label">Tổng tiền phòng</span>
                <span class="payment-value">{{ formatCurrency(invoiceData.tongTien) }}</span>
              </div>
              <div class="payment-row">
                <span class="payment-label">Số tiền đã thanh toán</span>
                <span class="payment-value paid">{{ formatCurrency(invoiceData.tienDaThanhToan) }}</span>
              </div>
              <div class="payment-row remaining" v-if="!isFullyPaid">
                <span class="payment-label">Số tiền còn lại</span>
                <span class="payment-value">{{ formatCurrency(invoiceData.tongTien - invoiceData.tienDaThanhToan) }}</span>
              </div>
              <div class="payment-total">
                <span class="total-label">Tổng cộng</span>
                <span class="total-value">{{ formatCurrency(invoiceData.tongTien) }}</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="btn btn-primary" @click="downloadInvoice">
              <svg viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Tải xuống PDF
            </button>
            <button class="btn btn-secondary" @click="printInvoice">
              <svg viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              In hóa đơn
            </button>
            <button class="btn btn-outline" @click="sendEmail">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Gửi email
            </button>
          </div>
        </div>
      </div>

      <!-- QR Code Section -->
      <div class="invoice-qr" :class="{ 'animate-in': isVisible }">
        <div class="qr-card">
          <div class="qr-header">
            <h3 class="qr-title">
              <svg viewBox="0 0 24 24" class="qr-icon">
                <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4z"/>
              </svg>
              Mã QR Hóa Đơn
            </h3>
            <p class="qr-description">Quét mã để xem chi tiết hóa đơn</p>
          </div>
          
          <div class="qr-container">
            <div class="qr-wrapper">
              <qrcode-vue
                :value="generateQRCodeData()"
                :size="220"
                class="qr-code"
                level="M"
                render-as="svg"
              />
              <div class="qr-overlay">
                <div class="qr-logo">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div class="qr-info">
            <div class="qr-features">
              <div class="feature-item">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V5l-9-4z"/>
                </svg>
                <span>Bảo mật cao</span>
              </div>
              <div class="feature-item">
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Xác thực nhanh</span>
              </div>
              <div class="feature-item">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Dễ sử dụng</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="additional-info">
          <div class="info-card">
            <h4>Chính sách hủy phòng</h4>
            <p>Miễn phí hủy phòng trước 24h. Phí hủy 50% nếu hủy trong vòng 24h.</p>
          </div>
          
          <div class="info-card">
            <h4>Liên hệ hỗ trợ</h4>
            <div class="contact-info">
              <div class="contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>1900-1234</span>
              </div>
              <div class="contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>support@oceanview.com</span>
              </div>
            </div>
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
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import QrcodeVue from 'qrcode.vue'

// Reactive data
const isVisible = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

// Dữ liệu hóa đơn (giả lập - có thể nhận từ API)
const invoiceData = ref({
  tenKhachHang: 'Nguyễn Văn A',
  tenPhong: 'Deluxe Suite - P203',
  ngayNhan: '2025-04-29',
  ngayTra: '2025-05-02',
  tongTien: 2400000,
  tienDaThanhToan: 2400000
})

// Computed properties
const isFullyPaid = computed(() => {
  return invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan
})

const paymentStatusClass = computed(() => {
  return isFullyPaid.value ? 'status-paid' : 'status-unpaid'
})

const paymentStatusText = computed(() => {
  return isFullyPaid.value ? 'Đã thanh toán đầy đủ' : 'Chưa thanh toán đầy đủ'
})

const paymentStatusDescription = computed(() => {
  return isFullyPaid.value 
    ? 'Cảm ơn bạn đã hoàn tất thanh toán. Chúc bạn có kỳ nghỉ tuyệt vời!'
    : `Còn lại ${formatCurrency(invoiceData.value.tongTien - invoiceData.value.tienDaThanhToan)} cần thanh toán`
})

// Methods
const formatCurrency = (amount) => {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
}

const formatDate = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const calculateNights = () => {
  const checkIn = new Date(invoiceData.value.ngayNhan)
  const checkOut = new Date(invoiceData.value.ngayTra)
  const diffTime = Math.abs(checkOut - checkIn)
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

const generateInvoiceNumber = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `OV${year}${month}${day}${random}`
}

const generateQRCodeData = () => {
  return JSON.stringify({
    hotelName: 'OceanView Hotels',
    invoiceNumber: generateInvoiceNumber(),
    tenKhachHang: invoiceData.value.tenKhachHang,
    tenPhong: invoiceData.value.tenPhong,
    ngayNhan: invoiceData.value.ngayNhan,
    ngayTra: invoiceData.value.ngayTra,
    tongTien: invoiceData.value.tongTien,
    tienDaThanhToan: invoiceData.value.tienDaThanhToan,
    trangThai: isFullyPaid.value ? 'Đã thanh toán' : 'Chưa thanh toán',
    timestamp: new Date().toISOString()
  })
}

const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const downloadInvoice = () => {
  // Logic tải xuống PDF
  showToastMessage('Đang chuẩn bị tải xuống hóa đơn...')
  // Simulate download
  setTimeout(() => {
    showToastMessage('Hóa đơn đã được tải xuống thành công!')
  }, 2000)
}

const printInvoice = () => {
  // Logic in hóa đơn
  window.print()
  showToastMessage('Đang chuẩn bị in hóa đơn...')
}

const sendEmail = () => {
  // Logic gửi email
  showToastMessage('Hóa đơn đã được gửi qua email!')
}

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.invoice-page {
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
.invoice-header {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.invoice-header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
}

.success-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  animation: successPulse 2s infinite;
}

@keyframes successPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.check-icon {
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
  background: linear-gradient(45deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.6;
}

/* Main Container */
.invoice-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Invoice Details */
.invoice-details {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.invoice-details.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.invoice-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Hotel Branding */
.hotel-branding {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid #f1f5f9;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-svg {
  width: 30px;
  height: 30px;
  fill: white;
}

.logo-text h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px 0;
}

.logo-text p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  font-style: italic;
}

.invoice-number {
  text-align: right;
}

.invoice-label {
  display: block;
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 4px;
}

.invoice-id {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

/* Status Banner */
.status-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 32px;
}

.status-banner.status-paid {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.status-banner.status-unpaid {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.status-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.status-banner.status-paid .status-icon {
  background: #10b981;
}

.status-banner.status-unpaid .status-icon {
  background: #ef4444;
}

.status-icon svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.status-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.status-banner.status-paid .status-content h3 {
  color: #065f46;
}

.status-banner.status-unpaid .status-content h3 {
  color: #991b1b;
}

.status-content p {
  margin: 0;
  font-size: 0.9rem;
}

.status-banner.status-paid .status-content p {
  color: #047857;
}

.status-banner.status-unpaid .status-content p {
  color: #dc2626;
}

/* Info Sections */
.info-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f1f5f9;
}

.info-section:last-of-type {
  border-bottom: none;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
}

.section-icon {
  width: 24px;
  height: 24px;
  fill: #667eea;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
}

.info-icon {
  width: 40px;
  height: 40px;
  background: #667eea;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.info-content {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 2px;
}

.info-value {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

/* Booking Details */
.booking-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.booking-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
}

.booking-icon {
  width: 40px;
  height: 40px;
  background: #667eea;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.booking-icon svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.booking-content {
  display: flex;
  flex-direction: column;
}

.booking-label {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 2px;
}

.booking-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
}

.date-range {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
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
  background: rgba(255, 255, 255, 0.2);
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
  opacity: 0.9;
  margin-bottom: 2px;
}

.date-value {
  font-size: 1rem;
  font-weight: 600;
}

.date-separator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.date-separator svg {
  width: 24px;
  height: 24px;
  fill: white;
  opacity: 0.8;
}

.stay-duration {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
  font-size: 1rem;
}

.duration-label {
  color: #64748b;
}

.duration-value {
  font-weight: 600;
  color: #667eea;
  font-size: 1.1rem;
}

/* Payment Section */
.payment-section {
  background: #f8fafc;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 32px;
}

.payment-breakdown {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.payment-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.payment-row.remaining {
  color: #ef4444;
  font-weight: 600;
}

.payment-label {
  font-size: 0.95rem;
  color: #64748b;
}

.payment-value {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.payment-value.paid {
  color: #10b981;
}

.payment-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 2px solid #e2e8f0;
  margin-top: 12px;
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

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #10b981;
  color: white;
}

.btn-secondary:hover {
  background: #059669;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

/* QR Section */
.invoice-qr {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.invoice-qr.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.qr-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 24px;
}

.qr-header {
  text-align: center;
  margin-bottom: 24px;
}

.qr-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.qr-icon {
  width: 24px;
  height: 24px;
  fill: #667eea;
}

.qr-description {
  color: #64748b;
  font-size: 0.95rem;
}

.qr-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.qr-wrapper {
  position: relative;
  padding: 20px;
  background: #f8fafc;
  border-radius: 16px;
  border: 2px dashed #e2e8f0;
}

.qr-code {
  display: block;
}

.qr-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.qr-logo svg {
  width: 24px;
  height: 24px;
  fill: #667eea;
}

.qr-info {
  text-align: center;
}

.qr-features {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  min-width: 80px;
}

.feature-item svg {
  width: 20px;
  height: 20px;
  fill: #10b981;
}

.feature-item span {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
  text-align: center;
}

/* Additional Info */
.additional-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.info-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.info-card p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #667eea;
}

.contact-item svg {
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
  .invoice-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .hotel-branding {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .invoice-page {
    padding: 20px 16px;
  }
  
  .invoice-card,
  .qr-card {
    padding: 24px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .date-range {
    flex-direction: column;
    gap: 16px;
  }
  
  .date-separator {
    transform: rotate(90deg);
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .qr-features {
    flex-direction: column;
    gap: 8px;
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
  
  .invoice-card,
  .qr-card {
    padding: 20px;
  }
  
  .logo-section {
    flex-direction: column;
    text-align: center;
  }
  
  .status-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
