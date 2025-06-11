<!-- Trang Mạnh Code xin đừng động vào -->
<template>
  <TheHeader />
  <div :class="['room-detail-theme', { 'dark-mode': theme.isDarkMode }]">
    <div class="room-detail-wrapper">
      <!-- Nửa trái: Hình ảnh -->
      <div class="room-detail-left">
        <div class="main-image">
          <img :src="room.urlAnhChinh" alt="Ảnh chính" />
        </div>
        <div class="sub-images">
          <img
            v-for="(img, idx) in room.urlAnhPhu"
            :key="idx"
            :src="img.urlAnh"
            alt="Ảnh phụ"
            class="sub-img"
          />
        </div>
      </div>
      <!-- Nửa phải: Thông tin -->
      <div class="room-detail-right">
        <h1 class="room-title">{{ room.loaiPhong }} (Mã: {{ room.maPhong }})</h1>
        <div class="room-price">
          <span>💵 Giá:</span>
          {{ room.giaPhong != null ? room.giaPhong.toLocaleString() : "Đang cập nhật" }}
          VND /
          {{ room.donViTinh || "" }}
        </div>
        <div class="room-status">
          <span>🔥 Trạng thái:</span>
          <span
            :class="room.tinhTrang === '1' ? 'status-available' : 'status-unavailable'"
          >
            {{ room.tinhTrang === "1" ? "Còn trống" : "Đã đặt" }}
          </span>
        </div>
        <div class="room-info-list">
          <div><strong>🏢 Tầng:</strong> {{ room.tang }}</div>
          <div><strong>🛏️ Kiểu giường:</strong> {{ room.kieuGiuong }}</div>
          <div><strong>👥 Sức chứa:</strong> {{ room.sucChua }} người</div>
          <div><strong>⭐ Đánh giá:</strong> {{ room.soSaoTrungBinh }}/5</div>
        </div>
        <div class="room-desc">
          <strong>📝 Mô tả:</strong> {{ room.moTa || room.motaPhong }}
        </div>
        <!-- Tiện nghi -->
        <div class="amenities">
          <strong>📶 Tiện nghi:</strong>
          <div class="amenity-list">
            <span
              v-for="t in tienNghi"
              :key="t.maTienNghi"
              class="amenity-item"
              :title="t.moTa"
            >
              <i class="fa fa-check-circle amenity-icon"></i> {{ t.tenTienNghi }}
            </span>
          </div>
        </div>
        <!-- Feedback -->
        <div class="feedbacks">
          <strong>🗨️ Đánh giá khách hàng:</strong>
          <div v-if="Array.isArray(feedbacks) && feedbacks.length">
            <div v-for="(fb, idx) in feedbacks" :key="idx" class="feedback-item">
              <span class="feedback-stars">{{ renderStars(fb.soSao) }}</span>
              <span
                class="feedback-type"
                :class="fb.phanLoai === 'Tích cực' ? 'positive' : 'negative'"
              >
                {{ fb.phanLoai }}
              </span>
              <div class="feedback-comment">{{ fb.binhLuan }}</div>
            </div>
          </div>
          <div v-else class="feedback-empty">Chưa có đánh giá nào.</div>
        </div>
        <!-- Đặt phòng -->
        <div class="actions">
          <va-button
            :disabled="room.tinhTrang !== '1'"
            color="primary"
            class="book-button"
            @click="goToBooking"
          >
            📩 Đặt phòng
          </va-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { axiosBase } from "@/utils/axiosBase";
import TheHeader from "@/Component/Header.vue";
import { useThemeStore } from "@/store/DarkMode";

const theme = useThemeStore();
theme.initializeDarkMode();

const route = useRoute();
const router = useRouter();

// Lấy mã phòng từ params (chuẩn Nuxt 3)
const maPhong = route.params.maPhong;

// Khai báo các biến dữ liệu
const room = ref({});
const subImages = ref([]);
const amenities = ref([]);
const discounts = ref([]);
const feedbacks = ref([]);
const favorites = ref([]);

// Gọi API lấy chi tiết phòng
onMounted(async () => {
  try {
    const res = await axiosBase.get(`/TatCaTruyCap/phong/${maPhong}`);
    const data = res.data?.data;
    if (data) {
      room.value = data;
      subImages.value = Array.isArray(data.urlAnhPhu) ? data.urlAnhPhu : [];
      amenities.value = Array.isArray(data.tienNghi) ? data.tienNghi : [];
      discounts.value = Array.isArray(data.giamGia) ? data.giamGia : [];
      feedbacks.value = Array.isArray(data.feedbacks) ? data.feedbacks : [];
      favorites.value = Array.isArray(data.yeuThich) ? data.yeuThich : [];
    }
  } catch (e) {
    // Xử lý lỗi nếu cần
  }
});

// Chuyển sang trang đặt phòng
function goToBooking() {
  router.push({ name: "DatPhong", params: { maPhong: room.value.maPhong } });
}

// Hàm render sao
function renderStars(soSao) {
  soSao = Number(soSao) || 0;
  return "★".repeat(soSao) + "☆".repeat(5 - soSao);
}
</script>

<style scoped>
.room-detail-theme {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 0;
  transition: background 0.3s, color 0.3s;
}
.room-detail-theme.dark-mode {
  background: #18181b;
  color: #fff;
}
.room-detail-wrapper {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  box-shadow: 0 4px 32px #0002;
  overflow: hidden;
  transition: background 0.3s, color 0.3s;
}
.room-detail-theme.dark-mode .room-detail-wrapper {
  background: #23232b;
  color: #fff;
}
.room-detail-left {
  flex: 1.1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 18px 32px 32px;
  background: transparent;
  gap: 18px;
  justify-content: center;
}
.main-image img {
  width: 100%;
  max-width: 340px;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 12px #0002;
}
.sub-images {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.sub-img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 7px;
  box-shadow: 0 1px 6px #0001;
  cursor: pointer;
  transition: transform 0.2s;
}
.sub-img:hover {
  transform: scale(1.08);
}
.room-detail-right {
  flex: 1.3;
  min-width: 0;
  padding: 32px 32px 32px 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 18px;
}
.room-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #2c3e50;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 8px;
}
.room-detail-theme.dark-mode .room-title {
  color: #fff;
  border-bottom: 2px solid #fff;
}
.room-price {
  font-size: 1.2rem;
  font-weight: 500;
  color: #0ea5e9;
}
.room-status {
  font-size: 1rem;
  margin-bottom: 6px;
}
.status-available {
  color: #22c55e;
  font-weight: bold;
}
.status-unavailable {
  color: #e74c3c;
  font-weight: bold;
}
.room-info-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px 32px;
  font-size: 1rem;
  margin-bottom: 6px;
}
.room-desc {
  font-size: 1rem;
  margin-bottom: 8px;
}
.amenities {
  margin-bottom: 8px;
}
.amenity-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 6px;
}
.amenity-item {
  background: #e0e7ff;
  color: #3730a3;
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 0.97em;
  display: flex;
  align-items: center;
  gap: 6px;
}
.room-detail-theme.dark-mode .amenity-item {
  background: #312e81;
  color: #fff;
}
.amenity-icon {
  color: #22c55e;
}
.feedbacks {
  margin-top: 10px;
}
.feedback-item {
  background: #f3f4f6;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 8px;
  font-size: 0.97em;
}
.room-detail-theme.dark-mode .feedback-item {
  background: #23232b;
  color: #fff;
}
.feedback-stars {
  color: #fbbf24;
  font-size: 1.1em;
  margin-right: 8px;
}
.feedback-type.positive {
  color: #22c55e;
  font-weight: 600;
  margin-right: 8px;
}
.feedback-type.negative {
  color: #e74c3c;
  font-weight: 600;
  margin-right: 8px;
}
.feedback-comment {
  margin-left: 24px;
  font-style: italic;
}
.feedback-empty {
  color: #888;
  font-style: italic;
}
.actions {
  margin-top: 18px;
}
.book-button {
  width: 100%;
  font-size: 1.1em;
  font-weight: 600;
}
@media (max-width: 900px) {
  .room-detail-wrapper {
    flex-direction: column;
    padding: 0;
    border-radius: 0;
  }
  .room-detail-left,
  .room-detail-right {
    padding: 24px 8px;
  }
  .main-image img {
    max-width: 100vw;
  }
}
</style>
