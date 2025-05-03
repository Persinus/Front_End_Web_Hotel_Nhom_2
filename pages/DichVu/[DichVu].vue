<template>
  <div class="service-detail-container">
    <!-- Hình ảnh dịch vụ -->
    <div class="service-image">
      <img :src="service.urlAnh" alt="Hình ảnh dịch vụ" class="main-image" />
    </div>

    <!-- Thông tin dịch vụ -->
    <div class="service-info">
      <h1 class="service-title">{{ service.tenDichVu }}</h1>
      <p class="service-description">{{ service.moTaDichVu }}</p>
      <p class="service-price">
        <strong>Giá:</strong>
        <span v-if="service.donGia > 0">{{ service.donGia.toLocaleString() }} VND</span>
        <span v-else>Miễn phí</span>
      </p>

      <!-- Nút hành động -->
      <div class="actions">
        <va-button color="primary" class="book-button" @click="bookService">
          Đặt dịch vụ
        </va-button>
        <va-button color="secondary" class="back-button" @click="goBack">
          Quay lại danh sách
        </va-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNuxtApp } from '#app'

const service = ref({})
const loading = ref(true)
const error = ref(null)

const route = useRoute()
const router = useRouter()
const { $api } = useNuxtApp()

const maDichVu = route.params.DichVu

onMounted(async () => {
  try {
    const response = await $api.get(`/DichVu/${maDichVu}`)
    if (response.data) {
      service.value = response.data
    } else {
      error.value = 'Không tìm thấy thông tin dịch vụ.'
    }
  } catch (err) {
    error.value = `Lỗi: ${err.message}`
    console.error('Lỗi:', err)
  } finally {
    loading.value = false
  }
})

const bookService = () => {
  alert(`🎉 Bạn đã đặt dịch vụ: ${service.value.tenDichVu}`)
}

const goBack = () => {
  router.push('/DichVu')
}
</script>

<style scoped>
.service-detail-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
}

.service-image {
  flex: 1;
  max-width: 600px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.service-info {
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
}

.service-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.service-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.actions {
  display: flex;
  gap: 10px;
}

.book-button {
  background-color: #4caf50;
  color: white;
}

.book-button:hover {
  background-color: #388e3c;
}

.back-button {
  background-color: #ccc;
  color: #333;
}

.back-button:hover {
  background-color: #bbb;
}
</style>