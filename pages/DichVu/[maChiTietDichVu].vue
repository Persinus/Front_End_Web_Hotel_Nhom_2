<template>
  <div class="service-detail-container" v-if="service && service.donGia">
    <h1 class="service-title">{{ service.tenDichVu }}</h1>
    <img :src="service.urlAnh" alt="Hình ảnh dịch vụ" class="service-image" />
    <p class="service-price">{{ service.donGia.toLocaleString() }} VND / 1 đêm</p>
    <p class="service-description">{{ service.moTaDichVu }}</p>
  </div>
  <div v-else>
    <p>Đang tải dữ liệu hoặc không tìm thấy dịch vụ.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const service = ref({});

onMounted(async () => {
  const maChiTietDichVu = route.params.maChiTietDichVu; // Lấy mã chi tiết dịch vụ từ URL
  try {
    // Gọi middleware để lấy chi tiết dịch vụ
    const response = await $fetch(`http://nhom2webkhachsan.runasp.net/api/DichVu/${maChiTietDichVu}`);
    service.value = response;
  } catch (error) {
    console.error('Lỗi khi lấy chi tiết dịch vụ:', error);
  }
});
</script>

<style scoped>
.service-detail-container {
  padding: 20px;
  text-align: center;
}

.service-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.service-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
}

.service-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 20px;
}

.service-description {
  font-size: 1rem;
  line-height: 1.5;
}
</style>