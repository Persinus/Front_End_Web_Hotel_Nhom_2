<template>
  <header>
    <TheHeader />
  </header>

  <div :class="['service-list-container', { 'dark-mode': theme.isDarkMode }]">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content" :class="{ 'animate-in': isVisible }">
        <div class="hero-icon">
          <va-icon name="room_service" size="large" />
        </div>
        <h1 class="page-title">
          <span class="title-line">Dịch vụ</span>
          <span class="title-highlight">Đẳng cấp</span>
        </h1>
        <p class="page-subtitle">
          Khám phá những dịch vụ cao cấp được thiết kế đặc biệt để mang đến trải nghiệm
          hoàn hảo
        </p>

        <!-- Service Stats -->
        <div class="service-stats">
          <div class="stat-item">
            <div class="stat-number">{{ services.length }}+</div>
            <div class="stat-label">Dịch vụ</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Hỗ trợ</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5★</div>
            <div class="stat-label">Đánh giá</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="filter-container" :class="{ 'animate-in': isVisible }">
        <div class="filter-header">
          <h2>
            <va-icon name="tune" />
            Tìm kiếm dịch vụ
          </h2>
          <p>Lọc theo nhu cầu của bạn</p>
        </div>

        <div class="filter-bar">
          <div class="filter-group">
            <label class="filter-label">
              <va-icon name="search" />
              Tìm kiếm dịch vụ
            </label>
            <div class="input-wrapper">
              <va-icon name="search" class="input-icon" />
              <va-input
                v-model="filterName"
                placeholder="Nhập tên dịch vụ..."
                class="filter-input"
                @input="onFilterChange"
              />
            </div>
          </div>

          <div class="filter-group">
            <label class="filter-label">
              <va-icon name="attach_money" />
              Khoảng giá
            </label>
            <va-select
              v-model="filterPrice"
              :options="priceOptions"
              placeholder="Chọn khoảng giá"
              class="filter-select"
              @update:model-value="onFilterChange"
            />
          </div>

          <div class="filter-group">
            <label class="filter-label">
              <va-icon name="sort" />
              Sắp xếp theo
            </label>
            <va-select
              v-model="sortBy"
              :options="sortOptions"
              placeholder="Sắp xếp"
              class="filter-select"
              @update:model-value="onFilterChange"
            />
          </div>

          <div class="filter-actions">
            <button
              class="clear-filters-btn"
              @click="clearFilters"
              v-if="hasActiveFilters"
            >
              <va-icon name="clear" />
              Xóa bộ lọc
            </button>
          </div>
        </div>

        <!-- Quick Filters -->
        <div class="quick-filters">
          <h3>Danh mục phổ biến</h3>
          <div class="category-chips">
            <div
              class="category-chip"
              :class="{ active: selectedCategory === category.value }"
              v-for="category in serviceCategories"
              :key="category.value"
              @click="selectCategory(category.value)"
            >
              <va-icon :name="category.icon" />
              <span>{{ category.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Header -->
    <section class="results-section" v-if="filteredServices.length > 0">
      <div class="results-header">
        <div class="results-info">
          <h2>
            Tìm thấy
            <span class="highlight-number">{{ filteredServices.length }}</span> dịch vụ
          </h2>
          <p>{{ getResultsDescription() }}</p>
        </div>

        <div class="view-controls">
          <div class="view-toggle">
            <button
              class="view-btn"
              :class="{ active: viewMode === 'grid' }"
              @click="viewMode = 'grid'"
              title="Xem dạng lưới"
            >
              <va-icon name="grid_view" />
            </button>
            <button
              class="view-btn"
              :class="{ active: viewMode === 'list' }"
              @click="viewMode = 'list'"
              title="Xem dạng danh sách"
            >
              <va-icon name="view_list" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Cards -->
    <section class="services-section">
      <div class="service-cards" :class="[`view-${viewMode}`, { loading: isLoading }]">
        <CardService :services="filteredServices" />
      </div>

      <!-- Empty State -->
      <div v-if="filteredServices.length === 0 && !isLoading" class="empty-state">
        <div class="empty-icon">
          <va-icon name="search_off" />
        </div>
        <h3>Không tìm thấy dịch vụ phù hợp</h3>
        <p>Hãy thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác</p>
        <button class="clear-filters-btn" @click="clearFilters">
          <va-icon name="refresh" />
          Xóa bộ lọc
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="loading-state">
        <div class="loading-spinner">
          <div class="spinner"></div>
        </div>
        <p>Đang tải dịch vụ...</p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <div class="cta-text">
          <h2>Cần tư vấn dịch vụ?</h2>
          <p>Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ bạn 24/7</p>
        </div>
        <div class="cta-actions">
          <button class="cta-btn primary">
            <va-icon name="phone" />
            Gọi ngay: 1900-1234
          </button>
          <button class="cta-btn secondary">
            <va-icon name="chat" />
            Chat trực tuyến
          </button>
        </div>
      </div>
    </section>

    <!-- Route con -->
    <NuxtChild />

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" :class="[toastType, { show: showToast }]">
      <div class="toast-content">
        <va-icon
          :name="toastType === 'success' ? 'check_circle' : 'info'"
          class="toast-icon"
        />
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useThemeStore } from "@/store/DarkMode";
import { useRouter } from "vue-router";
import TheHeader from "../Component/Header.vue";
import CardService from "../Component/CardService.vue"; // Đảm bảo đúng đường dẫn
import { axiosBase } from "~/utils/axiosBase";

const theme = useThemeStore();
const router = useRouter();

// Reactive data
const services = ref([]);
const filterName = ref("");
const filterPrice = ref(null);
const sortBy = ref("name");
const selectedCategory = ref("");
const viewMode = ref("grid");
const isLoading = ref(true);
const isVisible = ref(false);
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");

// Filter options
const priceOptions = [
  { value: null, text: "Tất cả mức giá" },
  { value: "low", text: "Dưới 500,000₫" },
  { value: "medium", text: "500,000₫ - 1,000,000₫" },
  { value: "high", text: "Trên 1,000,000₫" },
];

const sortOptions = [
  { value: "name", text: "Tên A-Z" },
  { value: "price-asc", text: "Giá tăng dần" },
  { value: "price-desc", text: "Giá giảm dần" },
  { value: "popular", text: "Phổ biến nhất" },
];

const serviceCategories = [
  { value: "", label: "Tất cả", icon: "apps" },
  { value: "spa", label: "Spa & Wellness", icon: "spa" },
  { value: "food", label: "Ẩm thực", icon: "restaurant" },
  { value: "transport", label: "Vận chuyển", icon: "directions_car" },
  { value: "entertainment", label: "Giải trí", icon: "sports_esports" },
  { value: "business", label: "Doanh nghiệp", icon: "business_center" },
];

// Computed properties
const hasActiveFilters = computed(() => {
  return (
    filterName.value ||
    filterPrice.value ||
    selectedCategory.value ||
    sortBy.value !== "name"
  );
});

const filteredServices = computed(() => {
  let filtered = [...services.value];

  // Filter by name
  if (filterName.value) {
    filtered = filtered.filter((service) =>
      service.tenDichVu.toLowerCase().includes(filterName.value.toLowerCase())
    );
  }

  // Filter by price
  if (filterPrice.value) {
    filtered = filtered.filter((service) => {
      const price = service.donGia;
      switch (filterPrice.value) {
        case "low":
          return price < 500000;
        case "medium":
          return price >= 500000 && price <= 1000000;
        case "high":
          return price > 1000000;
        default:
          return true;
      }
    });
  }

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter((service) =>
      getServiceCategory(service.tenDichVu).toLowerCase().includes(selectedCategory.value)
    );
  }

  // Sort
  switch (sortBy.value) {
    case "name":
      filtered.sort((a, b) => a.tenDichVu.localeCompare(b.tenDichVu));
      break;
    case "price-asc":
      filtered.sort((a, b) => a.donGia - b.donGia);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.donGia - a.donGia);
      break;
    case "popular":
      filtered.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
      break;
  }

  return filtered;
});

// Methods
const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN").format(price);
};

const getServiceIcon = (serviceName) => {
  const name = serviceName.toLowerCase();
  if (name.includes("spa") || name.includes("massage")) return "spa";
  if (name.includes("ăn") || name.includes("thức ăn") || name.includes("buffet"))
    return "restaurant";
  if (name.includes("xe") || name.includes("đưa đón")) return "directions_car";
  if (name.includes("game") || name.includes("giải trí")) return "sports_esports";
  if (name.includes("hội nghị") || name.includes("meeting")) return "business_center";
  return "room_service";
};

const getServiceCategory = (serviceName) => {
  const name = serviceName.toLowerCase();
  if (name.includes("spa") || name.includes("massage")) return "Spa & Wellness";
  if (name.includes("ăn") || name.includes("thức ăn") || name.includes("buffet"))
    return "Ẩm thực";
  if (name.includes("xe") || name.includes("đưa đón")) return "Vận chuyển";
  if (name.includes("game") || name.includes("giải trí")) return "Giải trí";
  if (name.includes("hội nghị") || name.includes("meeting")) return "Doanh nghiệp";
  return "Dịch vụ khác";
};

const getServiceDescription = (serviceName) => {
  const descriptions = {
    spa: "Thư giãn và tái tạo năng lượng với các liệu pháp chuyên nghiệp",
    massage: "Massage thư giãn với kỹ thuật truyền thống và hiện đại",
    buffet: "Thưởng thức ẩm thực đa dạng với chất lượng cao cấp",
    xe: "Dịch vụ vận chuyển an toàn và tiện lợi",
    game: "Giải trí đa dạng cho mọi lứa tuổi",
  };

  const name = serviceName.toLowerCase();
  for (const [key, desc] of Object.entries(descriptions)) {
    if (name.includes(key)) return desc;
  }
  return "Dịch vụ chất lượng cao với đội ngũ chuyên nghiệp";
};

const getServiceFeatures = (serviceName) => {
  const features = {
    spa: ["Chuyên viên có kinh nghiệm", "Sản phẩm thiên nhiên", "Không gian riêng tư"],
    massage: ["Kỹ thuật chuyên nghiệp", "Thời gian linh hoạt", "Giá cả hợp lý"],
    buffet: ["Đa dạng món ăn", "Nguyên liệu tươi ngon", "Phục vụ 24/7"],
    xe: ["Xe đời mới", "Tài xế kinh nghiệm", "An toàn tuyệt đối"],
    game: ["Thiết bị hiện đại", "Không gian rộng rãi", "Giá ưu đãi"],
  };

  const name = serviceName.toLowerCase();
  for (const [key, featureList] of Object.entries(features)) {
    if (name.includes(key)) return featureList;
  }
  return ["Chất lượng cao", "Giá cả hợp lý", "Dịch vụ tận tâm"];
};

const getServiceRating = () => {
  return Math.floor(Math.random() * 2) + 4; // Random 4-5 stars
};

const getDefaultServiceImage = () => {
  return "https://images.unsplash.com/photo-1571896349842-33c89424de2d";
};

const handleImageError = (event) => {
  event.target.src = getDefaultServiceImage();
};

const navigateToDetail = (serviceId) => {
  router.push(`/DichVu/${serviceId}`);
};

const toggleFavorite = (service) => {
  service.isFavorite = !service.isFavorite;
  showToastMessage(
    service.isFavorite ? "Đã thêm vào yêu thích" : "Đã xóa khỏi yêu thích",
    "success"
  );
};

const selectCategory = (category) => {
  selectedCategory.value = selectedCategory.value === category ? "" : category;
  onFilterChange();
};

const clearFilters = () => {
  filterName.value = "";
  filterPrice.value = null;
  sortBy.value = "name";
  selectedCategory.value = "";
};

const onFilterChange = () => {
  // Add filter change animation or effects here
};

const getResultsDescription = () => {
  if (hasActiveFilters.value) {
    return "Kết quả được lọc theo tiêu chí của bạn";
  }
  return "Tất cả dịch vụ có sẵn";
};

const showToastMessage = (message, type = "success") => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

// Lifecycle
onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await axiosBase.get("/TatCaTruyCap/dichvu");
    // Đảm bảo lấy đúng mảng dịch vụ
    const arr = Array.isArray(response.data) ? response.data : response.data.data;
    services.value = (arr || []).map((service) => ({
      ...service,
      isFavorite: false,
      isPopular: Math.random() > 0.7,
    }));
    setTimeout(() => {
      isVisible.value = true;
    }, 100);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách dịch vụ:", error);
    showToastMessage("Không thể tải danh sách dịch vụ", "error");
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.service-list-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: "Inter", "Segoe UI", sans-serif;
  position: relative;
  overflow-x: hidden;
}

.service-list-container.dark-mode {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #e2e8f0;
}

/* Background Animation */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.floating-shape {
  position: absolute;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 30%;
  animation-delay: 4s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 10%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  z-index: 2;
  padding: 80px 20px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.hero-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px auto;
  color: white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

.title-line {
  color: #2c3e50;
  display: block;
}

.title-highlight {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.service-list-container.dark-mode .title-line {
  color: #e2e8f0;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 48px;
  line-height: 1.6;
}

.service-list-container.dark-mode .page-subtitle {
  color: #94a3b8;
}

/* Service Stats */
.service-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 48px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

.service-list-container.dark-mode .stat-label {
  color: #94a3b8;
}

/* Filter Section */
.filter-section {
  position: relative;
  z-index: 2;
  padding: 0 20px 40px 20px;
}

.filter-container {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.filter-container.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.service-list-container.dark-mode .filter-container {
  background: rgba(26, 26, 46, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.filter-header {
  text-align: center;
  margin-bottom: 32px;
}

.filter-header h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.service-list-container.dark-mode .filter-header h2 {
  color: #e2e8f0;
}

.filter-header p {
  color: #64748b;
  font-size: 1rem;
}

.service-list-container.dark-mode .filter-header p {
  color: #94a3b8;
}

/* Filter Bar */
.filter-bar {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 24px;
  margin-bottom: 32px;
  align-items: end;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.service-list-container.dark-mode .filter-label {
  color: #d1d5db;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  z-index: 2;
}

.filter-input {
  padding-left: 44px !important;
}

.clear-filters-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.clear-filters-btn:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

/* Quick Filters */
.quick-filters {
  border-top: 1px solid #e2e8f0;
  padding-top: 24px;
}

.service-list-container.dark-mode .quick-filters {
  border-top-color: #374151;
}

.quick-filters h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
}

.service-list-container.dark-mode .quick-filters h3 {
  color: #d1d5db;
}

.category-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.category-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
  color: #64748b;
}

.category-chip:hover {
  border-color: #667eea;
  background: #f0f4ff;
  transform: translateY(-1px);
}

.category-chip.active {
  background: #667eea;
  border-color: #667eea;
  color: white;
}

.service-list-container.dark-mode .category-chip {
  background: #374151;
  border-color: #4b5563;
  color: #d1d5db;
}

.service-list-container.dark-mode .category-chip:hover {
  border-color: #667eea;
  background: #4c1d95;
}

/* Results Section */
.results-section {
  position: relative;
  z-index: 2;
  padding: 0 20px 20px 20px;
}

.results-header {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.results-info h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.service-list-container.dark-mode .results-info h2 {
  color: #e2e8f0;
}

.highlight-number {
  color: #667eea;
  font-weight: 700;
}

.results-info p {
  color: #64748b;
  font-size: 0.95rem;
}

.service-list-container.dark-mode .results-info p {
  color: #94a3b8;
}

.view-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.view-toggle {
  display: flex;
  gap: 4px;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 8px;
}

.service-list-container.dark-mode .view-toggle {
  background: #374151;
}

.view-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
}

.view-btn.active {
  background: #667eea;
  color: white;
}

.view-btn:hover:not(.active) {
  background: #e2e8f0;
}

.service-list-container.dark-mode .view-btn:hover:not(.active) {
  background: #4b5563;
}

/* Services Section */
.services-section {
  position: relative;
  z-index: 2;
  padding: 0 20px 80px 20px;
}

.service-cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 32px;
  transition: opacity 0.3s ease;
}

.service-cards.view-grid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.service-cards.view-list {
  grid-template-columns: 1fr;
}

.service-cards.loading {
  opacity: 0.6;
  pointer-events: none;
}

/* Service Card */
.service-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  animation: slideUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-list-container.dark-mode .service-card {
  background: #1e293b;
  border: 1px solid #334155;
}

/* Service Image */
.service-image-container {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .image-overlay {
  opacity: 1;
}

.service-category {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 12px;
  border-radius: 16px;
  color: #2c3e50;
  font-size: 0.85rem;
  font-weight: 600;
}

.favorite-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
}

.favorite-btn:hover {
  background: white;
  transform: scale(1.1);
}

.favorite-btn.active {
  background: #ef4444;
  color: white;
}

.service-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fbbf24;
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Service Content */
.service-content {
  padding: 24px;
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.service-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.service-list-container.dark-mode .service-title {
  color: #e2e8f0;
}

.service-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #d1d5db;
  font-size: 14px;
}

.star.filled {
  color: #fbbf24;
}

.rating-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}

.service-list-container.dark-mode .rating-text {
  color: #d1d5db;
}

.service-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.service-list-container.dark-mode .service-description {
  color: #94a3b8;
}

/* Service Features */
.service-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #64748b;
}

.service-list-container.dark-mode .feature-item {
  color: #94a3b8;
}

.feature-item va-icon {
  color: #10b981;
  font-size: 16px;
}

/* Service Footer */
.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #f1f5f9;
  padding-top: 20px;
}

.service-list-container.dark-mode .service-footer {
  border-top-color: #334155;
}

.price-section {
  display: flex;
  flex-direction: column;
}

.price-main {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 4px;
}

.currency {
  font-size: 1rem;
  color: #667eea;
  font-weight: 600;
}

.price {
  font-size: 1.8rem;
  font-weight: 700;
  color: #667eea;
}

.price-unit {
  font-size: 0.9rem;
  color: #64748b;
}

.service-list-container.dark-mode .price-unit {
  color: #94a3b8;
}

.price-note {
  font-size: 0.8rem;
  color: #94a3b8;
}

/* Service Actions */
.service-actions {
  display: flex;
  gap: 8px;
}

.detail-btn,
.book-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.detail-btn {
  background: #f1f5f9;
  color: #64748b;
}

.detail-btn:hover {
  background: #e2e8f0;
  color: #667eea;
}

.book-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.book-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.service-list-container.dark-mode .detail-btn {
  background: #374151;
  color: #d1d5db;
}

.service-list-container.dark-mode .detail-btn:hover {
  background: #4b5563;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 80px 20px;
  max-width: 600px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 4rem;
  color: #d1d5db;
  margin-bottom: 24px;
}

.service-list-container.dark-mode .empty-icon {
  color: #4b5563;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
}

.service-list-container.dark-mode .empty-state h3 {
  color: #d1d5db;
}

.empty-state p {
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.6;
}

.service-list-container.dark-mode .empty-state p {
  color: #94a3b8;
}

/* Loading State */
.loading-state {
  text-align: center;
  padding: 80px 20px;
}

.loading-spinner {
  margin-bottom: 24px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-state p {
  color: #64748b;
  font-size: 1.1rem;
}

.service-list-container.dark-mode .loading-state p {
  color: #94a3b8;
}

/* CTA Section */
.cta-section {
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  margin: 0 20px;
  border-radius: 20px;
  margin-bottom: 40px;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.cta-text h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.cta-text p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 16px;
  flex-shrink: 0;
}

.cta-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.cta-btn.primary {
  background: white;
  color: #667eea;
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Toast */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 24px;
  border-radius: 12px;
  color: white;
  z-index: 1000;
  transform: translateX(400px);
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.toast.show {
  transform: translateX(0);
  opacity: 1;
}

.toast.success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.toast.error {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .filter-bar {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .service-stats {
    gap: 24px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .hero-section {
    padding: 60px 20px;
  }

  .filter-container {
    padding: 24px;
  }

  .service-stats {
    flex-direction: column;
    gap: 16px;
  }

  .category-chips {
    justify-content: center;
  }

  .results-header {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .service-cards.view-grid {
    grid-template-columns: 1fr;
  }

  .service-actions {
    flex-direction: column;
  }

  .toast {
    right: 16px;
    left: 16px;
    transform: translateY(-100px);
  }

  .toast.show {
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .floating-shape {
    display: none;
  }

  .filter-container {
    margin: 0 16px;
    padding: 20px;
  }

  .service-footer {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .service-actions {
    justify-content: space-between;
  }
}
</style>
