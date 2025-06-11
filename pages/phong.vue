<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { axiosBase } from "../utils/axiosBase";
import CardRooms from "../Component/CardRooms.vue";
import TheHeader from "../Component/Header.vue";
import Pagination from "../Component/Pagination.vue";

const router = useRouter();
const rooms = ref([]);
const loading = ref(true);
const error = ref(null);
const page = ref(1);
const pageSize = 9;
const totalPages = ref(1);

const fetchRooms = async () => {
  loading.value = true;
  try {
    const res = await axiosBase.get(
      `/TatCaTruyCap/phong-rutgon?page=${page.value}&pageSize=${pageSize}`
    );
    rooms.value = res.data.data || res.data;
    totalPages.value = 3;
  } catch (err) {
    error.value = err.message || "Lỗi khi gọi API";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchRooms);
watch(page, fetchRooms);

const maxRating = computed(() =>
  Math.max(...rooms.value.map((r) => r.soSaoTrungBinh || 0))
);
const maxPrice = computed(() => Math.max(...rooms.value.map((r) => r.giaPhong || 0)));
const minPrice = computed(() => Math.min(...rooms.value.map((r) => r.giaPhong || 0)));
const bookedMap = computed(() =>
  Object.fromEntries(
    rooms.value.map((r) => [r.maPhong, Math.floor(Math.random() * 500) + 1])
  )
);
const maxBooked = computed(() => Math.max(...Object.values(bookedMap.value)));

function goToBooking(room) {
  router.push(`/phong/${room.maPhong}`); // KHÔNG dùng `{ path: ... }`
}
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
        @book-room="goToBooking"
      />
      <Pagination v-model="page" :total-pages="totalPages" class="mt-6" />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 40px 30px 40px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 28px;
  justify-items: center;
}

.hotel-card {
  max-width: 220px;
  margin: 0 auto;
}

/* Responsive: 4 -> 3 -> 2 -> 1 card mỗi hàng */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .hotel-card {
    max-width: 100%;
  }
}

/* Center pagination */
.mt-6 {
  margin-top: 32px;
  display: flex;
  justify-content: center;
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

.error-message {
  color: red;
  text-align: center;
  margin-top: 20px;
}
</style>
