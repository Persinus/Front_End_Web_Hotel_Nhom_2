<template>
  <div class="hotels-grid">
    <div class="hotel-card" v-for="room in sortedRooms" :key="room.maPhong">
      <div class="hotel-image-container">
        <img
          :src="
            room.urlAnhChinh ||
            'https://i.pinimg.com/736x/5c/f2/cd/5cf2cd74c675ddbd78c0defbce34a63d.jpg'
          "
          class="hotel-img"
          :alt="room.loaiPhong || 'Phòng khách sạn'"
        />
        <div class="hotel-badge">
          <va-icon name="verified" size="small" />
          Đã xác minh
        </div>
        <!-- Badge đặc biệt, có thể nhiều badge trên 1 card -->
        <div class="special-badges">
          <div
            v-if="room.soSaoTrungBinh === maxRating"
            class="special-badge"
            style="background: #a78bfa; color: white"
          >
            Best
          </div>
          <div
            v-if="room.giaPhong === minPrice"
            class="special-badge"
            style="background: #22c55e; color: white"
          >
            Low
          </div>
          <div
            v-if="room.giaPhong === maxPrice"
            class="special-badge"
            style="background: #ef4444; color: white"
          >
            High
          </div>
          <div
            v-if="room.isNew"
            class="special-badge"
            style="background: #f59e42; color: white"
          >
            Mới
          </div>
          <div
            v-if="room.isHot"
            class="special-badge"
            style="background: #ef4444; color: white"
          >
            Hot
          </div>
        </div>
        <!-- Overlay chỉ hiện khi hover vào ảnh -->
        <div class="overlay-content">
          <div style="font-size: 1.3rem; font-weight: 700">
            Mã phòng: {{ room.maPhong }}
          </div>
        </div>
      </div>
      <div class="hotel-content">
        <div class="hotel-header">
          <h3 class="hotel-title">{{ room.loaiPhong }}</h3>
          <div class="hotel-rating">
            <div class="stars">
              <va-icon
                name="star"
                color="warning"
                v-for="n in Math.round(room.soSaoTrungBinh || 0)"
                :key="n"
                size="small"
              />
            </div>
            <span class="rating-text">{{ room.soSaoTrungBinh || 0 }}</span>
          </div>
        </div>
        <div class="hotel-info">
          <span class="info-item">Tầng: {{ room.tang }}</span>
          <span class="info-item">
            Tình trạng:
            <span
              :class="room.tinhTrang === '1' ? 'status-available' : 'status-unavailable'"
            >
              <va-icon
                :name="room.tinhTrang === '1' ? 'check_circle' : 'block'"
                :color="room.tinhTrang === '1' ? 'success' : 'danger'"
              />
              {{ room.tinhTrang === "1" ? "Còn trống" : "Đã được đặt" }}
            </span>
          </span>
        </div>
        <div class="hotel-footer">
          <div class="price-group">
            <span class="price" v-if="room.giaUuDai && room.giaUuDai < room.giaPhong">
              <span class="old-price">{{ formatPrice(room.giaPhong) }}</span>
              <span class="discount-price">{{ formatPrice(room.giaUuDai) }}</span>
            </span>
            <span class="price" v-else>
              {{ formatPrice(room.giaPhong) }}
            </span>
            <span class="price-unit">/ {{ room.donViTinh || "đêm" }}</span>
          </div>
          <va-button color="primary" size="medium" class="book-btn">Đặt ngay</va-button>
        </div>
      </div>
      <div
        class="pixelated-image-card"
        style="position: relative; overflow: hidden"
        @mouseenter="toggleAnimation(true)"
        @mouseleave="toggleAnimation(false)"
      >
        <PixelatedImageCard
          :first-content="room"
          :second-content="room"
          :grid-size="10"
          :pixel-color="'#000'"
          :animation-step-duration="0.2"
          :aspect-ratio="'75%'"
        >
          <template #firstContent>
            <!-- Card bình thường ở đây -->
            <img
              :src="room.urlAnhChinh"
              style="width: 100%; height: 200px; object-fit: cover"
            />
            <div>{{ room.loaiPhong }}</div>
          </template>
          <template #secondContent>
            <!-- Overlay đen, chữ trắng -->
            <div class="overlay-content">
              <div>Mã phòng: {{ room.maPhong }}</div>
              <div>Loại phòng: {{ room.loaiPhong }}</div>
              <div>Giá: {{ room.giaPhong.toLocaleString("vi-VN") }}₫</div>
              <div>Giá ưu đãi: {{ room.giaUuDai.toLocaleString("vi-VN") }}₫</div>
              <div>Tầng: {{ room.tang }}</div>
              <div>Tình trạng: {{ room.tinhTrang === "1" ? "Còn trống" : "Đã đặt" }}</div>
              <div>Đơn vị: {{ room.donViTinh }}</div>
              <div>Sao: {{ room.soSaoTrungBinh }}</div>
            </div>
          </template>
        </PixelatedImageCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rooms: { type: Array, required: true },
  maxPrice: Number,
  minPrice: Number,
  maxRating: Number,
});
function formatPrice(val) {
  if (!val) return "";
  return val.toLocaleString("vi-VN") + "₫";
}
// Sắp xếp theo mã phòng tăng dần (P001, P002,...)
const sortedRooms = computed(() =>
  [...props.rooms].sort((a, b) => a.maPhong.localeCompare(b.maPhong))
);

const toggleAnimation = (show) => {
  isActive.value = show;
  const pixels = pixelGrid.value.querySelectorAll(".pixel");
  pixels.forEach((pixel, index) => {
    setTimeout(() => {
      pixel.style.opacity = isActive.value ? "1" : "0";
    }, (index * props.animationStepDuration * 1000) / pixels.length);
  });
  setTimeout(() => {
    activeContent.value.style.display = isActive.value ? "block" : "none";
  }, props.animationStepDuration * 1000);
};
</script>

<style scoped>
.badges-bar {
  display: flex;
  gap: 16px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.badge {
  background: #e0e7ff;
  color: #3730a3;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 1rem;
}

.hotels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.hotel-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hotel-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.hotel-image-container {
  position: relative;
  cursor: pointer;
}

.hotel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.hotel-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.hotel-content {
  padding: 24px;
}

.hotel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.hotel-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
}

.hotel-rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rating-text {
  font-weight: 600;
  color: #333;
}

.hotel-info {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #555;
}
.info-item {
  background: #f8f9fa;
  padding: 4px 12px;
  border-radius: 16px;
}
.status-available {
  color: #10b981;
  font-weight: 600;
}
.status-unavailable {
  color: #ef4444;
  font-weight: 600;
}

.hotel-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.price-group {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #667eea;
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.old-price {
  text-decoration: line-through;
  color: #aaa;
  font-size: 1rem;
  margin-right: 4px;
}
.discount-price {
  color: #ef4444;
  font-size: 1.3rem;
  font-weight: 700;
}

.price-unit {
  font-size: 0.95rem;
  color: #666;
  margin-left: 4px;
}

.book-btn {
  font-size: 1rem !important;
  font-weight: 700;
  padding: 10px 24px !important;
  border-radius: 8px;
}

.special-badges {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  z-index: 2;
}
.special-badge {
  padding: 6px 16px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 2px 8px #0002;
  letter-spacing: 1px;
}

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.95);
  color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.hotel-image-container:hover .overlay-content {
  opacity: 1;
  pointer-events: auto;
}
</style>
