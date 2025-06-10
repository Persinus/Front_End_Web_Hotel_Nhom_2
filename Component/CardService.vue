<template>
  <div class="services-grid">
    <div v-for="service in services" :key="service.maDichVu" class="service-card">
      <div class="service-image-container">
        <img
          class="service-image"
          :src="
            service.hinhAnhDichVu ||
            'https://i.pinimg.com/474x/4f/25/4c/4f254c0dc7c7175f5b05990585c9d1bc.jpg'
          "
          :alt="service.tenDichVu"
        />
        <div
          class="service-status"
          :class="service.trangThai === 'Hết hàng' ? 'status-out' : 'status-available'"
        >
          <va-icon
            :name="service.trangThai === 'Hết hàng' ? 'block' : 'check_circle'"
            :color="service.trangThai === 'Hết hàng' ? 'danger' : 'success'"
            size="small"
          />
          {{ service.trangThai === "Hết hàng" ? "Hết hàng" : "Còn" }}
        </div>
        <!-- Overlay chỉ hiện khi hover vào ảnh -->
        <div class="overlay-content">
          <div style="font-size: 1.1rem; font-weight: 700">
            Mã dịch vụ: {{ service.maDichVu }}
          </div>
          <div>{{ service.tenDichVu }}</div>
          <div>Giá: {{ formatPrice(service.donGia) }}</div>
          <div>Trạng thái: {{ service.trangThai }}</div>
        </div>
      </div>
      <div class="service-card-content">
        <h3 class="service-title">{{ service.tenDichVu }}</h3>
        <div class="service-info-row">
          <span class="service-type">{{ service.loaiDichVu }}</span>
          <span class="service-unit">{{ service.donViTinh }}</span>
        </div>
        <div class="service-desc">
          {{ service.moTaDichVu }}
        </div>
        <div class="service-price-group">
          <span class="service-price">{{ formatPrice(service.donGia) }}</span>
        </div>
        <button class="order-btn" :disabled="service.trangThai === 'Hết hàng'">
          <i class="fa fa-cart-plus"></i> Đặt dịch vụ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  services: { type: Array, required: true },
});
function formatPrice(val) {
  if (!val) return "";
  return val.toLocaleString("vi-VN") + "₫";
}
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px 22px;
  padding: 24px 0 24px 0;
  justify-items: center;
}
.service-card {
  width: 100%;
  max-width: 240px;
  min-width: 0;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 8px #0001;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  margin: 0 auto;
}
.service-card:hover {
  box-shadow: 0 2px 12px #0002;
}
.service-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  cursor: pointer;
}
.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.service-status {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 2px 10px;
  border-radius: 8px;
  font-size: 0.92em;
  font-weight: 500;
  color: #fff;
  background: #22c55e;
  z-index: 2;
}
.status-out {
  background: #f87171;
}
.status-available {
  background: #22c55e;
}

/* Overlay giống CardRooms */
.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
}
.service-image-container:hover .overlay-content {
  opacity: 1;
}
.service-card-content {
  padding: 10px 10px 10px 10px;
  border-top: 1px solid #f0f0f0;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.service-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.service-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  font-size: 0.93em;
}
.service-type {
  color: #0ea5e9;
  font-weight: 500;
}
.service-unit {
  color: #888;
  font-size: 0.93em;
}
.service-desc {
  color: #666;
  font-size: 0.97rem;
  margin-bottom: 10px;
  min-height: 36px;
}
.service-price-group {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
}
.service-price {
  font-size: 1.08rem;
  font-weight: bold;
  color: #0ea5e9;
}
.order-btn {
  width: 100%;
  background: #0ea5e9;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 7px 0;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: background 0.2s;
  margin-top: 4px;
}
.order-btn:disabled {
  background: #ccc;
  color: #fff;
  cursor: not-allowed;
}
.order-btn:hover:not(:disabled) {
  background: #0369a1;
}

@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .service-card {
    max-width: 100%;
  }
}
</style>
