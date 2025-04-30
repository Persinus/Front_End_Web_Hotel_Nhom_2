<template>
   <header>
      <TheHeader />
    </header>
    <div class="booking-page">
      <!-- Bên trái: Thông tin phòng -->
      <div class="room-info">
        <va-card outlined class="room-card">
          <div v-if="loading" class="loading-container">
            <va-loading />
          </div>
          <div v-else>
            <h2 class="room-title">{{ roomData.loaiPhong }}</h2>
            <p><strong>Mã phòng:</strong> {{ roomData.maPhong }}</p>
            <p><strong>Giá:</strong> {{ roomData.giaPhong.toLocaleString() }} VND</p>
            <p><strong>Tầng:</strong> {{ roomData.tang }}</p>
            <p><strong>Kiểu giường:</strong> {{ roomData.kieuGiuong }}</p>
            <p><strong>Mô tả:</strong> {{ roomData.moTa }}</p>
            
            <!-- Tiện nghi -->
            <div class="amenities">
              <h3>📶 Tiện nghi:</h3>
              <ul>
                <li v-for="(amenity, index) in parsedAmenities" :key="index" class="amenity-item">
                  <img :src="getAmenityIcon(amenity)" alt="icon" class="amenity-icon" />
                  <span class="amenity-text">{{ amenity }}</span>
                </li>
              </ul>
            </div>
  
            <!-- Trạng thái -->
            <p>
              <strong>🔥 Trạng thái:</strong>
              <span
                :class="roomData.tinhTrang === '1' ? 'status-available' : 'status-unavailable'"
              >
                {{ roomData.tinhTrang === '1' ? 'Còn trống' : 'Đã đặt' }}
              </span>
            </p>
          </div>
        </va-card>
      </div>
  
      <!-- Bên phải: Form đặt phòng -->
      <div class="booking-form-container">
        <va-card outlined class="booking-form">
          <h2 class="form-title">Đặt Phòng</h2>
  
          <!-- Số CCCD -->
          <div class="form-group">
            <va-input
              v-model="bookingData.cccd"
              label="Số CCCD *"
              placeholder="Nhập số CCCD"
              outlined
              required
            />
          </div>
  
          <!-- Số Điện Thoại -->
          <div class="form-group">
            <va-input
              v-model="bookingData.sdt"
              label="Số Điện Thoại *"
              placeholder="Nhập số điện thoại"
              outlined
              required
            />
          </div>
  
          <!-- Ngày Nhận Phòng -->
          <div class="form-group">
            <va-input
              v-model="bookingData.ngayNhan"
              label="Ngày Nhận Phòng *"
              placeholder="YYYY-MM-DD"
              outlined
              required
              type="date"
            />
          </div>
  
          <!-- Ngày Trả Phòng -->
          <div class="form-group">
            <va-input
              v-model="bookingData.ngayTra"
              label="Ngày Trả Phòng *"
              placeholder="YYYY-MM-DD"
              outlined
              required
              type="date"
            />
          </div>
  
          <!-- Số Người -->
          <div class="form-group">
            <label class="counter-label">Số Người Lớn *</label>
            <VaCounter
              v-model="bookingData.soNguoiLon"
              :min="1"
              :max="10"
              decrease-button-text="-"
              increase-button-text="+"
            />
          </div>
          <div class="form-group">
            <label class="counter-label">Số Trẻ Em *</label>
            <VaCounter
              v-model="bookingData.soTreEm"
              :min="0"
              :max="10"
              decrease-button-text="-"
              increase-button-text="+"
            />
          </div>
  
          <!-- Yêu cầu đặc biệt -->
          <div class="form-group">
            <va-input
              v-model="bookingData.yeuCau"
              label="Yêu cầu của bạn"
              type="textarea"
              placeholder="Nhập các yêu cầu đặc biệt (nếu có)"
              outlined
            />
          </div>
  
          <!-- Nút Xác Nhận -->
          <div class="form-actions">
            <va-button
              color="primary"
              class="submit-button"
              :disabled="!roomData.tinhTrang === '1'"
              @click="submitBooking"
            >
              Xác Nhận Đặt Phòng
            </va-button>
          </div>
        </va-card>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useNuxtApp } from '#app'
  
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
    tienNghiList: []
  })
  const loading = ref(true)
  const route = useRoute()
  const { $api } = useNuxtApp()
  const maPhong = route.params.maPhong
  
  // Lấy dữ liệu phòng từ API
  onMounted(async () => {
    try {
      const response = await $api.get(`http://nhom2webkhachsan.runasp.net/api/PhongWithTienNghi/${maPhong}`)
      if (response.data) {
        roomData.value = {
          ...response.data,
          tienNghiList: JSON.parse(response.data.tienNghi)
        }
      } else {
        console.error('Không tìm thấy thông tin phòng.')
      }
    } catch (error) {
      console.error('Lỗi:', error)
    } finally {
      loading.value = false
    }
  })
  
  // Hàm lấy icon tiện nghi
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
  
  // Xử lý danh sách tiện nghi
  const parsedAmenities = ref([])
  onMounted(() => {
    parsedAmenities.value = roomData.value.tienNghiList || []
  })
  
  // Submit form
  const submitBooking = () => {
    if (!bookingData.value.cccd || !bookingData.value.sdt || !bookingData.value.ngayNhan || !bookingData.value.ngayTra) {
      alert('❌ Vui lòng điền đầy đủ thông tin!')
      return
    }
    alert('🎉 Đặt phòng thành công!')
    console.log('Dữ liệu đặt phòng:', bookingData.value)
  }
  </script>
  
  <style scoped>
  .booking-page {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
  
  .room-info {
    flex: 1;
  }
  
  .booking-form-container {
    flex: 1;
  }
  
  .room-card,
  .booking-form {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .room-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .amenities {
    margin-top: 15px;
  }
  
  .amenity-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .amenity-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  
  .status-available {
    color: green;
    font-weight: bold;
  }
  
  .status-unavailable {
    color: red;
    font-weight: bold;
  }
  
  .counter-label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
  
  .submit-button {
    width: 100%;
  }
  
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  </style>
  