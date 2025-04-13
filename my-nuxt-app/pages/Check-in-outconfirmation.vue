<template>
    <div class="check-in-check-out">
      <!-- Tiêu đề -->
      <h1>Xác nhận Check-in / Check-out</h1>
  
      <el-row :gutter="20">
        <!-- Phần bên trái: Thông tin phòng -->
        <el-col :span="12">
          <div class="room-info">
            <img
              src="https://i.pinimg.com/474x/c5/7d/17/c57d17ca6d5b5e3616f578a2b4887da7.jpg"
              alt="Room Image"
              class="room-image"
            />
            <div class="room-details">
              <h3>Phòng: Deluxe Suite</h3>
              <p>Tầng: 5</p>
              <p>Giá: 2,000,000 VND</p>
              <p>ID Phòng: 123456</p>
              <p>Người đặt: John Doe</p>
            </div>
          </div>
        </el-col>
  
        <!-- Phần bên phải: Mã QR và thông tin thời gian -->
        <el-col :span="12">
          <div class="qr-info">
            <h3>Thông tin mã QR</h3>
            <p>Mã QR có hiệu lực trong vòng 30 phút kể từ lúc tạo.</p>
  
            <!-- Mã QR -->
            <qrcode-vue :value="qrData" :size="200" />
  
            <!-- Thời gian hết hạn -->
            <p><strong>Thời gian hết hạn:</strong> {{ expirationTime }}</p>
  
            <div class="action-buttons">
              <el-button type="primary" @click="handleCheckIn">Check-in</el-button>
              <el-button type="danger" @click="handleCheckOut">Check-out</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import QRCodeVue from 'qrcode.vue' // Đảm bảo đã import chính xác
  import { ElButton, ElRow, ElCol } from 'element-plus'
  
  // Thông tin QR
  const qrData = ref('https://hotel-booking-system.com/checkin/123456')
  
  // Thời gian hết hạn
  const expirationTime = computed(() => {
    const expiration = new Date()
    expiration.setMinutes(expiration.getMinutes() + 30) // Thời gian hết hạn trong 30 phút
    return expiration.toLocaleTimeString()
  })
  
  // Xử lý check-in
  const handleCheckIn = () => {
    alert('Check-in thành công!')
  }
  
  // Xử lý check-out
  const handleCheckOut = () => {
    alert('Check-out thành công!')
  }
  </script>
  
  <style scoped>
  .check-in-check-out {
    padding: 20px;
  }
  
  .room-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .room-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .room-details {
    margin-top: 20px;
  }
  
  .qr-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .qr-info h3 {
    font-size: 24px;
  }
  
  .action-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  </style>