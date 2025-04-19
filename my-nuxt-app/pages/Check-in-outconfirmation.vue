<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->


<template>
  <div class="check-in-check-out">
    <h1>Xác nhận Check-in / Check-out</h1>

    <el-row :gutter="20">
      <!-- Phòng -->
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

      <!-- QR -->
      <el-col :span="12">
        <div class="qr-info">
          <h3>Thông tin mã QR</h3>
          <p>Mã QR có hiệu lực trong vòng 30 phút kể từ lúc tạo.</p>

          <!-- Mã QR -->
          <vue-qrcode :value="qrData" class="qrcode" />

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
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { ElButton, ElRow, ElCol } from 'element-plus'

const qrData = ref('https://hotel-booking-system.com/checkin/123456')

const expirationTime = computed(() => {
  const expiration = new Date()
  expiration.setMinutes(expiration.getMinutes() + 30)
  return expiration.toLocaleTimeString()
})

const handleCheckIn = () => {
  alert('Check-in thành công!')
}

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

.qrcode {
  margin: 20px 0;
  width: 200px;
  height: 200px;
}

.action-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
