<template>
  <div class="data-display">
    <h1>Danh Sách Dịch Vụ</h1>

    <!-- Hiển thị vòng tròn tiến trình khi đang tải -->
    <div v-if="isLoading" class="loading">
      Đang tải dữ liệu...
    </div>

    <!-- Hiển thị dữ liệu -->
    <ul v-if="services.length > 0">
      <li v-for="service in services" :key="service.id">
        {{ service.name }} - Giá: {{ service.price }} VND
      </li>
    </ul>

    <!-- Hiển thị thông báo lỗi -->
    <div v-else-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>

    <!-- Hiển thị khi không có dữ liệu -->
    <div v-else>
      Không có dữ liệu!
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Khởi tạo các biến trạng thái
const services = ref([]) // Lưu trữ danh sách dịch vụ
const isLoading = ref(true) // Trạng thái tải dữ liệu
const errorMessage = ref('') // Lưu trữ thông báo lỗi

// Hàm lấy dữ liệu từ API
const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts') // Gọi API
    services.value = response.data // Gán dữ liệu trả về
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error)
    errorMessage.value = 'Không thể tải dữ liệu từ API!'
  } finally {
    isLoading.value = false // Tắt trạng thái tải
  }
}

// Gọi hàm fetchData khi component được mounted
onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.data-display {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.loading {
  color: blue;
  font-weight: bold;
}

.error {
  color: red;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>