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

    <!-- Ghi chú -->
    <div class="notes">
      <p><strong>Ghi chú:</strong> Vui lòng quét mã QR để xác nhận check-in hoặc check-out. Mã QR có hiệu lực trong vòng 30 phút kể từ lúc tạo.</p>
    </div>

    <el-row :gutter="20">
      <!-- Phòng -->
      <el-col :span="8">
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
      <el-col :span="16">
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
import { ref, computed, onMounted } from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { ElButton, ElRow, ElCol } from 'element-plus'
import { useToast } from 'vuestic-ui'
import { useRouter } from 'vue-router'

const qrData = ref('https://hotel-booking-system.com/checkin/123456')
const expirationTime = computed(() => {
  const expiration = new Date()
  expiration.setMinutes(expiration.getMinutes() + 30)
  return expiration.toLocaleTimeString()
})

const toast = useToast()
const router = useRouter()

const handleCheckIn = () => {
  toast.success('Check-in thành công!', { duration: 3000 })
}

const handleCheckOut = () => {
  toast.error('Check-out thành công!', { duration: 3000 })
}

// Tự động cập nhật trạng thái khi quét mã QR
onMounted(() => {
  const interval = setInterval(() => {
    // Giả lập trạng thái quét mã QR
    const isScanned = Math.random() > 0.5 // 50% xác suất quét thành công
    if (isScanned) {
      toast.info('Mã QR đã được quét thành công!', { duration: 3000 })
      clearInterval(interval) // Dừng kiểm tra sau khi quét thành công

      // Chuyển đến trang xác nhận
      router.push('/xac-nhan') // Thay '/xac-nhan' bằng đường dẫn trang xác nhận của bạn
    }
  }, 5000) // Kiểm tra mỗi 5 giây
})
</script>

<style scoped>
.check-in-check-out {
  padding: 20px;
}

.notes {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 10px;
  border-left: 5px solid #007bff;
  border-radius: 5px;
}

.room-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.room-image {
  width: 80%; /* Thu nhỏ ảnh */
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
