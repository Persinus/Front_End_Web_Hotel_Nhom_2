<script setup>
import { ref, computed, onMounted } from "vue";
import { axiosBase } from "../utils/axiosBase";
import CardService from "../Component/CardService.vue";
import TheHeader from "../Component/Header.vue";
import Pagination from "../Component/Pagination.vue";

const services = ref([]);
const loading = ref(true);
const error = ref(null);
const page = ref(1);
const pageSize = 8;

onMounted(async () => {
  try {
    const res = await axiosBase.get("/TatCaTruyCap/dichvu");
    services.value = res.data;
  } catch (err) {
    error.value = err.message || "Lỗi khi gọi API";
  } finally {
    loading.value = false;
  }
});

// Phân trang
const totalPages = computed(() => Math.ceil(services.value.length / pageSize));
const pagedServices = computed(() =>
  services.value.slice((page.value - 1) * pageSize, page.value * pageSize)
);
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
      <CardService :services="pagedServices" />
      <Pagination
        v-model="page"
        :total-pages="totalPages"
        class="mt-6"
      />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 40px 30px 40px 30px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 28px;
  justify-items: center;
}

.service-card {
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
  .service-card {
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