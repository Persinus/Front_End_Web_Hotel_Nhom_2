<template>
  <div class="service-list-container">
    <h1 class="page-title">Danh sách dịch vụ</h1>
    <div class="service-cards">
      <va-card
        v-for="service in services"
        :key="service.maDichVu"
        class="service-card"
        outlined
      >
        <img :src="service.urlAnh" alt="Hình ảnh dịch vụ" class="service-image" />
        <va-card-title>
          <div class="service-title" :title="service.tenDichVu">
            {{ service.tenDichVu }}
          </div>
        </va-card-title>
        <va-card-content>
          <p class="service-price">
            {{ service.donGia.toLocaleString() }} VND / 1 đêm
          </p>
        </va-card-content>
        <va-card-actions>
          <va-button
            color="primary"
            @click="viewServiceDetail(service.maDichVu)"
          >
            Xem chi tiết
          </va-button>
        </va-card-actions>
      </va-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'

const services = ref([])
const { $api } = useNuxtApp()
const router = useRouter()

onMounted(async () => {
  try {
    const response = await $api.get('/DichVu')
    services.value = response.data
  } catch (error) {
    console.error('Lỗi khi lấy danh sách dịch vụ:', error)
  }
})

const viewServiceDetail = (maDichVu) => {
  router.push(`/DichVu/${maDichVu}`)
}
</script>

<style scoped>
.service-list-container {
  padding: 20px;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.service-card {
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.service-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.service-title:hover {
  text-decoration: underline;
}

.service-price {
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
  margin-top: 10px;
}

.va-button {
  width: 100%;
}
</style>