<template>
  <header>
    <TheHeader />
  </header>
  
  <div class="booking-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <!-- Progress Steps -->
    <div class="progress-container">
      <div class="progress-steps">
        <div class="step" :class="{ 'active': currentStep >= 1, 'completed': currentStep > 1 }">
          <div class="step-circle">
            <va-icon :name="currentStep > 1 ? 'check' : 'hotel'" />
          </div>
          <span class="step-label">Thông tin phòng</span>
        </div>
        <div class="progress-line" :class="{ 'active': currentStep >= 2 }"></div>
        <div class="step" :class="{ 'active': currentStep >= 2, 'completed': currentStep > 2 }">
          <div class="step-circle">
            <va-icon :name="currentStep > 2 ? 'check' : 'person'" />
          </div>
          <span class="step-label">Thông tin khách</span>
        </div>
        <div class="progress-line" :class="{ 'active': currentStep >= 3 }"></div>
        <div class="step" :class="{ 'active': currentStep >= 3 }">
          <div class="step-circle">
            <va-icon name="payment" />
          </div>
          <span class="step-label">Xác nhận</span>
        </div>
      </div>
    </div>

    <div class="main-content">
      <!-- Bên trái: Thông tin phòng -->
      <div class="room-info" :class="{ 'animate-in': isVisible }">
        <div class="room-card">
          <div v-if="loading" class="loading-container">
            <div class="loading-spinner">
              <div class="spinner"></div>
              <p>Đang tải thông tin phòng...</p>
            </div>
          </div>
          
          <div v-else class="room-content">
            <!-- Room Header -->
            <div class="room-header">
              <div class="room-badge" v-if="roomData.tinhTrang === '1'">
                <va-icon name="verified" />
                <span>Còn trống</span>
              </div>
              <h2 class="room-title">{{ roomData.loaiPhong }}</h2>
              <div class="room-rating">
                <div class="stars">
                  <va-icon name="star" v-for="n in 5" :key="n" class="star" />
                </div>
                <span class="rating-text">4.8/5</span>
              </div>
            </div>

            <!-- Room Gallery -->
            <div class="room-gallery">
              <div class="main-image">
                <img 
                  :src="roomImages[currentImageIndex]" 
                  :alt="roomData.loaiPhong"
                  class="room-image"
                />
                <div class="image-overlay">
                  <button class="gallery-btn prev" @click="prevImage">
                    <va-icon name="chevron_left" />
                  </button>
                  <button class="gallery-btn next" @click="nextImage">
                    <va-icon name="chevron_right" />
                  </button>
                </div>
                <div class="image-indicators">
                  <span 
                    v-for="(img, index) in roomImages" 
                    :key="index"
                    class="indicator"
                    :class="{ 'active': index === currentImageIndex }"
                    @click="currentImageIndex = index"
                  ></span>
                </div>
              </div>
            </div>

            <!-- Room Details -->
            <div class="room-details">
              <div class="detail-grid">
                <div class="detail-item">
                  <div class="detail-icon">
                    <va-icon name="meeting_room" />
                  </div>
                  <div class="detail-content">
                    <span class="detail-label">Mã phòng</span>
                    <span class="detail-value">{{ roomData.maPhong }}</span>
                  </div>
                </div>
                
                <div class="detail-item">
                  <div class="detail-icon">
                    <va-icon name="layers" />
                  </div>
                  <div class="detail-content">
                    <span class="detail-label">Tầng</span>
                    <span class="detail-value">{{ roomData.tang }}</span>
                  </div>
                </div>
                
                <div class="detail-item">
                  <div class="detail-icon">
                    <va-icon name="bed" />
                  </div>
                  <div class="detail-content">
                    <span class="detail-label">Kiểu giường</span>
                    <span class="detail-value">{{ roomData.kieuGiuong }}</span>
                  </div>
                </div>
                
                <div class="detail-item price-item">
                  <div class="detail-icon">
                    <va-icon name="attach_money" />
                  </div>
                  <div class="detail-content">
                    <span class="detail-label">Giá phòng</span>
                    <span class="detail-value price">{{ formatPrice(roomData.giaPhong) }}₫</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Room Description -->
            <div class="room-description">
              <h3>
                <va-icon name="description" />
                Mô tả phòng
              </h3>
              <p>{{ roomData.moTa }}</p>
            </div>

            <!-- Amenities -->
            <div class="amenities-section">
              <h3>
                <va-icon name="star" />
                Tiện nghi phòng
              </h3>
              <div class="amenities-grid">
                <div 
                  v-for="(amenity, index) in parsedAmenities" 
                  :key="index" 
                  class="amenity-item"
                  :style="{ animationDelay: `${index * 0.1}s` }"
                >
                  <div class="amenity-icon">
                    <img :src="getAmenityIcon(amenity)" :alt="amenity" />
                  </div>
                  <span class="amenity-text">{{ amenity }}</span>
                </div>
              </div>
            </div>

            <!-- Room Status -->
            <div class="room-status">
              <div class="status-indicator" :class="roomData.tinhTrang === '1' ? 'available' : 'unavailable'">
                <va-icon :name="roomData.tinhTrang === '1' ? 'check_circle' : 'cancel'" />
                <span>{{ roomData.tinhTrang === '1' ? 'Phòng còn trống' : 'Phòng đã được đặt' }}</span>
              </div>
            </div>

            <!-- Urgency Message -->
            <div v-if="roomData.tinhTrang === '1'" class="urgency-message">
              <va-icon name="schedule" class="urgency-icon" />
              <div class="urgency-content">
                <p><strong>Chỉ còn 2 phòng với giá này!</strong></p>
                <p>{{ urgencyMessage }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bên phải: Form đặt phòng -->
      <div class="booking-form-container" :class="{ 'animate-in': isVisible }">
        <div class="booking-form">
          <div class="form-header">
            <h2 class="form-title">
              <va-icon name="hotel" />
              Đặt phòng ngay
            </h2>
            <p class="form-subtitle">Điền thông tin để hoàn tất đặt phòng</p>
          </div>

          <div class="form-content">
            <!-- Personal Information -->
            <div class="form-section">
              <h3 class="section-title">
                <va-icon name="person" />
                Thông tin cá nhân
              </h3>
              
              <div class="form-group">
                <div class="input-wrapper">
                  <va-icon name="credit_card" class="input-icon" />
                  <va-input
                    v-model="bookingData.cccd"
                    label="Số CCCD/Passport *"
                    placeholder="Nhập số CCCD hoặc Passport"
                    class="form-input"
                    :error="errors.cccd"
                    :error-messages="errors.cccd"
                    @input="validateField('cccd')"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-wrapper">
                  <va-icon name="phone" class="input-icon" />
                  <va-input
                    v-model="bookingData.sdt"
                    label="Số điện thoại *"
                    placeholder="Nhập số điện thoại"
                    class="form-input"
                    :error="errors.sdt"
                    :error-messages="errors.sdt"
                    @input="validateField('sdt')"
                  />
                </div>
              </div>
            </div>

            <!-- Booking Dates -->
            <div class="form-section">
              <h3 class="section-title">
                <va-icon name="calendar_today" />
                Thời gian lưu trú
              </h3>
              
              <div class="date-inputs">
                <div class="form-group">
                  <div class="input-wrapper">
                    <va-icon name="login" class="input-icon" />
                    <va-input
                      v-model="bookingData.ngayNhan"
                      label="Ngày nhận phòng *"
                      type="date"
                      class="form-input"
                      :min="minDate"
                      :error="errors.ngayNhan"
                      :error-messages="errors.ngayNhan"
                      @input="validateField('ngayNhan')"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-wrapper">
                    <va-icon name="logout" class="input-icon" />
                    <va-input
                      v-model="bookingData.ngayTra"
                      label="Ngày trả phòng *"
                      type="date"
                      class="form-input"
                      :min="bookingData.ngayNhan || minDate"
                      :error="errors.ngayTra"
                      :error-messages="errors.ngayTra"
                      @input="validateField('ngayTra')"
                    />
                  </div>
                </div>
              </div>

              <div v-if="totalNights > 0" class="stay-summary">
                <div class="summary-item">
                  <span>Số đêm lưu trú:</span>
                  <strong>{{ totalNights }} đêm</strong>
                </div>
                <div class="summary-item total-price">
                  <span>Tổng tiền:</span>
                  <strong>{{ formatPrice(totalPrice) }}₫</strong>
                </div>
              </div>
            </div>

            <!-- Guest Information -->
            <div class="form-section">
              <h3 class="section-title">
                <va-icon name="people" />
                Số lượng khách
              </h3>
              
              <div class="guest-counters">
                <div class="counter-group">
                  <div class="counter-info">
                    <va-icon name="person" class="counter-icon" />
                    <div class="counter-details">
                      <span class="counter-label">Người lớn</span>
                      <span class="counter-desc">Từ 12 tuổi trở lên</span>
                    </div>
                  </div>
                  <div class="counter-controls">
                    <button 
                      class="counter-btn" 
                      @click="decrementGuests('soNguoiLon')"
                      :disabled="bookingData.soNguoiLon <= 1"
                    >
                      <va-icon name="remove" />
                    </button>
                    <span class="counter-value">{{ bookingData.soNguoiLon }}</span>
                    <button 
                      class="counter-btn" 
                      @click="incrementGuests('soNguoiLon')"
                      :disabled="bookingData.soNguoiLon >= 10"
                    >
                      <va-icon name="add" />
                    </button>
                  </div>
                </div>

                <div class="counter-group">
                  <div class="counter-info">
                    <va-icon name="child_care" class="counter-icon" />
                    <div class="counter-details">
                      <span class="counter-label">Trẻ em</span>
                      <span class="counter-desc">Từ 2-11 tuổi</span>
                    </div>
                  </div>
                  <div class="counter-controls">
                    <button 
                      class="counter-btn" 
                      @click="decrementGuests('soTreEm')"
                      :disabled="bookingData.soTreEm <= 0"
                    >
                      <va-icon name="remove" />
                    </button>
                    <span class="counter-value">{{ bookingData.soTreEm }}</span>
                    <button 
                      class="counter-btn" 
                      @click="incrementGuests('soTreEm')"
                      :disabled="bookingData.soTreEm >= 10"
                    >
                      <va-icon name="add" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Special Requests -->
            <div class="form-section">
              <h3 class="section-title">
                <va-icon name="note" />
                Yêu cầu đặc biệt
              </h3>
              
              <div class="form-group">
                <va-textarea
                  v-model="bookingData.yeuCau"
                  label="Ghi chú thêm"
                  placeholder="Ví dụ: Phòng tầng cao, giường đôi, không hút thuốc..."
                  class="form-textarea"
                  :max-length="500"
                  counter
                />
              </div>
            </div>

            <!-- Booking Summary -->
            <div class="booking-summary">
              <h3 class="summary-title">
                <va-icon name="receipt" />
                Tóm tắt đặt phòng
              </h3>
              
              <div class="summary-details">
                <div class="summary-row">
                  <span>Loại phòng:</span>
                  <span>{{ roomData.loaiPhong }}</span>
                </div>
                <div class="summary-row">
                  <span>Mã phòng:</span>
                  <span>{{ roomData.maPhong }}</span>
                </div>
                <div class="summary-row" v-if="totalNights > 0">
                  <span>Số đêm:</span>
                  <span>{{ totalNights }} đêm</span>
                </div>
                <div class="summary-row">
                  <span>Số khách:</span>
                  <span>{{ bookingData.soNguoiLon + bookingData.soTreEm }} người</span>
                </div>
                <div class="summary-row price-breakdown">
                  <span>Giá phòng/đêm:</span>
                  <span>{{ formatPrice(roomData.giaPhong) }}₫</span>
                </div>
                <div class="summary-row total-row" v-if="totalNights > 0">
                  <span>Tổng cộng:</span>
                  <span class="total-amount">{{ formatPrice(totalPrice) }}₫</span>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="form-actions">
              <button
                class="submit-button"
                :disabled="!isFormValid || roomData.tinhTrang !== '1' || isSubmitting"
                @click="submitBooking"
                :class="{ 'loading': isSubmitting }"
              >
                <div class="btn-content">
                  <va-icon name="hotel" v-if="!isSubmitting" />
                  <div v-else class="loading-spinner-btn"></div>
                  <span>{{ isSubmitting ? 'Đang xử lý...' : 'Xác nhận đặt phòng' }}</span>
                </div>
              </button>
              
              <p class="form-note">
                <va-icon name="info" />
                Bằng cách đặt phòng, bạn đồng ý với 
                <a href="#" class="terms-link">Điều khoản & Điều kiện</a> của chúng tôi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal-overlay" @click="closeSuccessModal">
      <div class="success-modal" @click.stop>
        <div class="success-icon">
          <va-icon name="check_circle" />
        </div>
        <h3>Đặt phòng thành công!</h3>
        <p>Cảm ơn bạn đã chọn khách sạn của chúng tôi. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
        <div class="modal-actions">
          <button class="btn-primary" @click="closeSuccessModal">
            Hoàn tất
          </button>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" :class="[toastType, { 'show': showToast }]">
      <div class="toast-content">
        <va-icon :name="toastType === 'success' ? 'check_circle' : 'error'" class="toast-icon" />
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useNuxtApp } from '#app'

const route = useRoute()
const { $api } = useNuxtApp()

// Reactive data
const bookingData = ref({
  cccd: '',
  sdt: '',
  ngayNhan: '',
  ngayTra: '',
  soNguoiLon: 1,
  soTreEm: 0,
  yeuCau: ''
})

const roomData = ref({
  tienNghiList: [],
  giaPhong: 0
})

const loading = ref(true)
const isVisible = ref(false)
const isSubmitting = ref(false)
const showSuccessModal = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')
const currentStep = ref(1)
const currentImageIndex = ref(0)

const errors = ref({
  cccd: '',
  sdt: '',
  ngayNhan: '',
  ngayTra: ''
})

const maPhong = route.params.maPhong

// Room images (placeholder)
const roomImages = ref([
  'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
  'https://images.unsplash.com/photo-1595576508898-0ad5c879a061'
])

// Urgency message
const urgencyMessage = ref('')

// Computed properties
const minDate = computed(() => {
  return new Date().toISOString().split('T')[0]
})

const totalNights = computed(() => {
  if (!bookingData.value.ngayNhan || !bookingData.value.ngayTra) return 0
  const checkIn = new Date(bookingData.value.ngayNhan)
  const checkOut = new Date(bookingData.value.ngayTra)
  const diffTime = checkOut - checkIn
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
})

const totalPrice = computed(() => {
  return roomData.value.giaPhong * totalNights.value
})

const isFormValid = computed(() => {
  return bookingData.value.cccd && 
         bookingData.value.sdt && 
         bookingData.value.ngayNhan && 
         bookingData.value.ngayTra &&
         !Object.values(errors.value).some(error => error)
})

const parsedAmenities = computed(() => {
  return roomData.value.tienNghiList || []
})

// Methods
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price)
}

const validateField = (field) => {
  switch (field) {
    case 'cccd':
      errors.value.cccd = bookingData.value.cccd.length < 9 ? 'CCCD phải có ít nhất 9 số' : ''
      break
    case 'sdt':
      const phoneRegex = /^[0-9]{10,11}$/
      errors.value.sdt = !phoneRegex.test(bookingData.value.sdt) ? 'Số điện thoại không hợp lệ' : ''
      break
    case 'ngayNhan':
      const today = new Date().toISOString().split('T')[0]
      errors.value.ngayNhan = bookingData.value.ngayNhan < today ? 'Ngày nhận phòng không thể là quá khứ' : ''
      break
    case 'ngayTra':
      errors.value.ngayTra = bookingData.value.ngayTra <= bookingData.value.ngayNhan ? 'Ngày trả phòng phải sau ngày nhận phòng' : ''
      break
  }
}

const incrementGuests = (type) => {
  if (type === 'soNguoiLon' && bookingData.value.soNguoiLon < 10) {
    bookingData.value.soNguoiLon++
  } else if (type === 'soTreEm' && bookingData.value.soTreEm < 10) {
    bookingData.value.soTreEm++
  }
}

const decrementGuests = (type) => {
  if (type === 'soNguoiLon' && bookingData.value.soNguoiLon > 1) {
    bookingData.value.soNguoiLon--
  } else if (type === 'soTreEm' && bookingData.value.soTreEm > 0) {
    bookingData.value.soTreEm--
  }
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % roomImages.value.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? roomImages.value.length - 1 : currentImageIndex.value - 1
}

const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const submitBooking = async () => {
  if (!isFormValid.value) {
    showToastMessage('Vui lòng điền đầy đủ thông tin!', 'error')
    return
  }

  isSubmitting.value = true
  currentStep.value = 3

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    showSuccessModal.value = true
    showToastMessage('Đặt phòng thành công!')
    
    console.log('Dữ liệu đặt phòng:', {
      ...bookingData.value,
      maPhong: maPhong,
      tongTien: totalPrice.value
    })
  } catch (error) {
    showToastMessage('Có lỗi xảy ra. Vui lòng thử lại!', 'error')
  } finally {
    isSubmitting.value = false
  }
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
  // Reset form or redirect
}

const getAmenityIcon = (amenity) => {
  const icons = {
    "Máy lạnh": "https://cdn-icons-png.flaticon.com/512/606/606792.png",
    "Tivi": "https://cdn-icons-png.flaticon.com/512/5110/5110853.png",
    "Wifi miễn phí": "https://cdn-icons-png.flaticon.com/512/2957/2957496.png",
    "Minibar": "https://cdn-icons-png.flaticon.com/512/1511/1511863.png",
    "Bộ trà/cà phê": "https://cdn-icons-png.flaticon.com/512/892/892668.png",
    "Tivi 55 inch": "https://cdn-icons-png.flaticon.com/512/1762/1762766.png"
  }
  return icons[amenity] || "https://cdn-icons-png.flaticon.com/512/565/565547.png"
}

const generateUrgencyMessage = () => {
  const messages = [
    "12 người khác đang xem phòng này",
    "Đã có 3 lượt đặt trong 24h qua",
    "Ưu đãi kết thúc trong 2 giờ nữa"
  ]
  urgencyMessage.value = messages[Math.floor(Math.random() * messages.length)]
}

// Lifecycle
onMounted(async () => {
  try {
    const response = await $api.get(`http://nhom2webkhachsan.runasp.net/api/PhongWithTienNghi/${maPhong}`)
    if (response.data) {
      roomData.value = {
        ...response.data,
        tienNghiList: JSON.parse(response.data.tienNghi || '[]')
      }
      currentStep.value = 1
    } else {
      showToastMessage('Không tìm thấy thông tin phòng.', 'error')
    }
  } catch (error) {
    showToastMessage('Lỗi khi tải thông tin phòng.', 'error')
    console.error('Lỗi:', error)
  } finally {
    loading.value = false
    setTimeout(() => {
      isVisible.value = true
    }, 100)
  }
  
  generateUrgencyMessage()
})

// Watch for form changes to update step
watch(() => [bookingData.value.cccd, bookingData.value.sdt], () => {
  if (bookingData.value.cccd && bookingData.value.sdt) {
    currentStep.value = 2
  }
})
</script>

<style scoped>
.booking-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  position: relative;
  overflow-x: hidden;
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

/* Progress Steps */
.progress-container {
  position: relative;
  z-index: 2;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
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
  font-size: 1.2rem;
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
.main-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 0 20px 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Room Info */
.room-info {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.room-info.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.room-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  flex-direction: column;
}

.loading-spinner {
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Room Content */
.room-content {
  padding: 32px;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.room-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;
}

.room-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  flex: 1;
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
  color: #fbbf24;
  font-size: 16px;
}

.rating-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}

/* Room Gallery */
.room-gallery {
  margin-bottom: 32px;
}

.main-image {
  position: relative;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
}

.room-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.main-image:hover .image-overlay {
  opacity: 1;
}

.gallery-btn {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-btn:hover {
  background: white;
  transform: scale(1.1);
}

.image-indicators {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

/* Room Details */
.room-details {
  margin-bottom: 32px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
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

.detail-item.price-item {
  grid-column: span 2;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.detail-icon {
  width: 36px;
  height: 36px;
  background: #667eea;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.detail-item.price-item .detail-icon {
  background: rgba(255, 255, 255, 0.2);
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

.detail-item.price-item .detail-label {
  color: rgba(255, 255, 255, 0.8);
}

.detail-value {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.detail-value.price {
  font-size: 1.5rem;
  color: white;
}

/* Room Description */
.room-description {
  margin-bottom: 32px;
}

.room-description h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.room-description p {
  color: #64748b;
  line-height: 1.6;
}

/* Amenities */
.amenities-section {
  margin-bottom: 32px;
}

.amenities-section h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: slideInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.amenity-item:hover {
  background: #f1f5f9;
  transform: translateY(-2px);
}

.amenity-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  padding: 6px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.amenity-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.amenity-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
}

/* Room Status */
.room-status {
  margin-bottom: 24px;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 600;
}

.status-indicator.available {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-indicator.unavailable {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

/* Urgency Message */
.urgency-message {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: white;
  border-radius: 12px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.urgency-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.urgency-content p {
  margin: 0;
  line-height: 1.4;
}

.urgency-content p:first-child {
  font-weight: 600;
  margin-bottom: 4px;
}

/* Booking Form */
.booking-form-container {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.booking-form-container.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.booking-form {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 20px;
}

.form-header {
  padding: 32px 32px 0 32px;
  text-align: center;
  margin-bottom: 32px;
}

.form-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
}

.form-subtitle {
  color: #64748b;
  font-size: 1rem;
}

.form-content {
  padding: 0 32px 32px 32px;
}

/* Form Sections */
.form-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f1f5f9;
}

.form-section:last-of-type {
  border-bottom: none;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

/* Form Groups */
.form-group {
  margin-bottom: 20px;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  z-index: 2;
}

.form-input {
  padding-left: 44px !important;
}

.form-textarea {
  min-height: 100px;
}

/* Date Inputs */
.date-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Stay Summary */
.stay-summary {
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
  margin-top: 16px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.summary-item:last-child {
  margin-bottom: 0;
}

.summary-item.total-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #667eea;
  padding-top: 8px;
  border-top: 1px solid #e2e8f0;
}

/* Guest Counters */
.guest-counters {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.counter-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
}

.counter-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.counter-icon {
  color: #667eea;
  font-size: 1.2rem;
}

.counter-details {
  display: flex;
  flex-direction: column;
}

.counter-label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 2px;
}

.counter-desc {
  font-size: 0.85rem;
  color: #64748b;
}

.counter-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.counter-btn {
  width: 32px;
  height: 32px;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.counter-btn:hover:not(:disabled) {
  border-color: #667eea;
  color: #667eea;
}

.counter-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.counter-value {
  font-weight: 600;
  color: #2c3e50;
  min-width: 20px;
  text-align: center;
}

/* Booking Summary */
.booking-summary {
  background: #f8fafc;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 32px;
}

.summary-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #64748b;
}

.summary-row.price-breakdown {
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
}

.summary-row.total-row {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2c3e50;
  padding-top: 12px;
  border-top: 2px solid #e2e8f0;
}

.total-amount {
  color: #667eea;
}

/* Form Actions */
.form-actions {
  text-align: center;
}

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
  margin-bottom: 16px;
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

.loading-spinner-btn {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.form-note {
  font-size: 0.85rem;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 0;
}

.terms-link {
  color: #667eea;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}

/* Success Modal */
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

.success-modal {
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
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

.success-icon {
  width: 80px;
  height: 80px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  color: white;
  font-size: 2rem;
}

.success-modal h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
}

.success-modal p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 32px;
}

.modal-actions {
  display: flex;
  justify-content: center;
}

.btn-primary {
  padding: 12px 32px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #5a67d8;
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
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .booking-form {
    position: static;
  }
}

@media (max-width: 768px) {
  .progress-steps {
    flex-direction: column;
    gap: 16px;
  }
  
  .progress-line {
    width: 2px;
    height: 40px;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
  }
  
  .detail-item.price-item {
    grid-column: span 1;
  }
  
  .date-inputs {
    grid-template-columns: 1fr;
  }
  
  .amenities-grid {
    grid-template-columns: 1fr;
  }
  
  .form-content {
    padding: 0 20px 20px 20px;
  }
  
  .form-header {
    padding: 20px 20px 0 20px;
  }
  
  .room-content {
    padding: 20px;
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
