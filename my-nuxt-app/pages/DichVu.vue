<template>
   <header>
      <TheHeader />
    </header>
  <div :class="['service-list-container', { 'dark-mode': theme.isDarkMode }]">
    <h1 class="page-title">Danh sách dịch vụ</h1>

    <!-- Bộ lọc -->
    <div class="filter-bar">
      <va-input
        v-model="filterName"
        placeholder="Tìm kiếm theo tên dịch vụ"
        class="filter-input"
      />
      <va-select
        v-model="filterPrice"
        :options="priceOptions"
        placeholder="Lọc theo giá"
        class="filter-select"
      />
    </div>

    <!-- Danh sách dịch vụ -->
    <div class="service-cards">
      <va-card
        v-for="service in filteredServices"
        :key="service.maChiTietDichVu"
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
          <nuxt-link :to="`/DichVu/${service.maChiTietDichVu}`" >
            <va-button color="primary">Xem Chi Tiết</va-button>
          </nuxt-link>
        </va-card-actions>
      </va-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'
import { useThemeStore } from '@/store/DarkMode'
import TheHeader from '../Components/Header.vue'
import TheFooter from '../Components/Footer.vue'
const theme = useThemeStore()
const services = ref([])
const filterName = ref('')
const filterPrice = ref(null)

const priceOptions = [
  { value: 'low', label: 'Dưới 500,000 VND' },
  { value: 'medium', label: '500,000 - 1,000,000 VND' },
  { value: 'high', label: 'Trên 1,000,000 VND' },
]

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

const filteredServices = computed(() => {
  return services.value.filter((service) => {
    const matchesName = service.tenDichVu
      .toLowerCase()
      .includes(filterName.value.toLowerCase())
    const matchesPrice =
      !filterPrice.value ||
      (filterPrice.value === 'low' && service.donGia < 500000) ||
      (filterPrice.value === 'medium' &&
        service.donGia >= 500000 &&
        service.donGia <= 1000000) ||
      (filterPrice.value === 'high' && service.donGia > 1000000)
    return matchesName && matchesPrice
  })
})


</script>

<style scoped>
/* Container styles */
.service-list-container {
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
  
}

.service-list-container.dark-mode {
  background-color: #000000; /* Nền đen */
  color: #f0f0f0;
}

/* Page title */
.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

.service-list-container.dark-mode .page-title {
  color: #f0f0f0;
}

/* Filter bar */
.filter-bar {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.filter-input {
  flex: 2;
}

.filter-select {
  flex: 1;
}

/* Service cards */
.service-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
}

@media (max-width: 1024px) {
  .service-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .service-cards {
    grid-template-columns: 1fr;
  }
}

.service-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, background-color 0.3s;
  background-color: #ffffff; /* Nền trắng mặc định */
}

.service-card:hover {
  transform: translateY(-5px);
}


.service-list-container.dark-mode .service-card .va-card-title,
.service-list-container.dark-mode .service-card .va-card-content,


.service-list-container.dark-mode .service-card .va-card-actions {
  background-color: #6a0dad; /* Nền tím cho nội dung thẻ */
  color: #ffffff; /* Chữ trắng */
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

.service-list-container.dark-mode .service-title {
  color: #ffffff; /* Chữ trắng */
}

.service-price {
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
  margin-top: 10px;
}

.service-list-container.dark-mode .service-price {
  color: #ffcc00; /* Màu vàng để nổi bật */
}

.va-button {
  width: 100%;
}

.service-list-container.dark-mode .va-button {
  background-color: #0056b3; /* Nút màu xanh lam */
  color: #ffffff;
}

.service-list-container.dark-mode .va-button:hover {
  background-color: #003d80; /* Màu xanh lam đậm hơn khi hover */
}
</style>