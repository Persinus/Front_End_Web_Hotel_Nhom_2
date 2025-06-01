<script setup>
import { ref, computed, onMounted } from 'vue'
import { axiosBase } from '../utils/axiosBase'
import CardRooms from '../Component/CardRooms.vue'
import TheHeader from '../Component/Header.vue'
const rooms = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await axiosBase.get('/TatCaTruyCap/phong')
    rooms.value = res.data
  } catch (err) {
    error.value = err.message || 'Lỗi khi gọi API'
  } finally {
    loading.value = false
  }
})

// Tính toán các giá trị max/min cho badge
const maxRating = computed(() => Math.max(...rooms.value.map(r => r.soSaoTrungBinh || 0)))
const maxPrice = computed(() => Math.max(...rooms.value.map(r => r.giaPhong || 0)))
const minPrice = computed(() => Math.min(...rooms.value.map(r => r.giaPhong || 0)))
// Số lượt đặt giả lập (nếu chưa có trường này từ API)
const bookedMap = computed(() =>
  Object.fromEntries(rooms.value.map(r => [r.maPhong, Math.floor(Math.random() * 500) + 1]))
)
const maxBooked = computed(() => Math.max(...Object.values(bookedMap.value)))
</script>

<template>
  <TheHeader />
  <div class="page-container">
    <div v-if="loading" class="modal-loading">
      <div class="modal-loading-backdrop"></div>
      <div class="modal-loading-content">
        <span class="loader"></span>
        <span>Đang tải dữ liệu...</span>
      </div>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-else>
      <CardRooms
        :rooms="rooms"
        :max-rating="maxRating"
        :max-booked="maxBooked"
        :max-price="maxPrice"
        :min-price="minPrice"
        :booked-map="bookedMap"
      />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 40px 30px 40px 30px; /* lề ngoài lớn hơn */
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 28px; /* tăng khoảng cách giữa các card */
  justify-items: center;
}

.hotel-card {
  max-width: 220px; /* card nhỏ lại */
  margin: 0 auto;
}

.modal-loading {
  position: fixed;
  z-index: 9999;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-loading-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}

.modal-loading-content {
  position: relative;
  background: #fff;
  padding: 32px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 24px #0002;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.loader {
  width: 36px;
  height: 36px;
  border: 4px solid #0ea5e9;
  border-top: 4px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


</style>