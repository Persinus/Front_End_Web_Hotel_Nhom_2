<script setup>
import { ref } from 'vue'

const dichVuList = ref([
  {
    MaChiTietDichVu: 'DV001',
    TenDichVu: 'Nhà hàng Á – Âu',
    DonGia: 50000,
    MoTaDichVu: 'Phục vụ buffet sáng, trưa, tối đa dạng món ăn',
    ImgUrl: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=60'
  },
  {
    MaChiTietDichVu: 'DV002',
    TenDichVu: 'Quầy bar & lounge',
    DonGia: 80000,
    MoTaDichVu: 'Thư giãn với cocktail, view biển về đêm',
    ImgUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=60'
  },
  {
    MaChiTietDichVu: 'DV003',
    TenDichVu: 'Spa & massage',
    DonGia: 150000,
    MoTaDichVu: 'Liệu trình trị liệu, thải độc, thư giãn toàn thân',
    ImgUrl: 'https://images.unsplash.com/photo-1588776814546-ec7d92f879b4?auto=format&fit=crop&w=800&q=60'
  },
  {
    MaChiTietDichVu: 'DV004',
    TenDichVu: 'Hồ bơi vô cực',
    DonGia: 200000,
    MoTaDichVu: 'Ngoài trời, view biển, có phục vụ đồ uống',
    ImgUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60'
  }
  // Thêm các dịch vụ khác theo cấu trúc tương tự...
])
</script>

<template>
  <div class="service-page">
    <h1 class="page-title">Dịch vụ khách sạn</h1>

    <div class="services-grid">
      <va-card
        v-for="dv in dichVuList"
        :key="dv.MaChiTietDichVu"
        class="service-card"
        outlined
        hover
      >
        <img
          :src="dv.ImgUrl || 'https://via.placeholder.com/400x200?text=No+Image'"
          class="service-img"
          alt="Ảnh dịch vụ"
        />

        <va-card-content class="card-body">
          <div class="service-title">
            <va-icon name="room_service" size="small" class="mr-2" />
            {{ dv.TenDichVu }}
          </div>

          <p class="service-description">{{ dv.MoTaDichVu }}</p>

          <va-chip
            :color="dv.DonGia > 0 ? 'primary' : 'success'"
            size="small"
            class="price-chip"
          >
            {{ dv.DonGia > 0 ? dv.DonGia.toLocaleString() + '₫' : 'Miễn phí' }}
          </va-chip>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<style scoped>
.service-page {
  padding: 40px;
  background: #f5f7fa;
  min-height: 100vh;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.service-card {
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

.service-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
}

.service-title {
  font-size: 18px;
  font-weight: 600;
  color: #34495e;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.service-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.price-chip {
  font-weight: 500;
}
</style>