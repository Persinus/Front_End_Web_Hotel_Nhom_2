<template>
  <div class="booking-page">
    <TheHeader />

    <!-- Hero Search Section -->
    <section class="hero-search">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-line">Tìm kiếm</span>
            <span class="title-highlight">Phòng Hoàn Hảo</span>
          </h1>
          <p class="hero-subtitle">
            Khám phá những phòng nghỉ tuyệt vời với giá tốt nhất
          </p>
        </div>

        <!-- Advanced Search Form -->
        <div class="search-form-container">
          <div class="search-form" :class="{ 'form-focused': isFormFocused }">
            <h2 class="search-title">
              <va-icon name="search" class="search-icon" />
              Tìm phòng lý tưởng
            </h2>

            <div class="form-grid">
              <div class="form-group">
                <label>Ngày nhận phòng</label>
                <div class="input-wrapper">
                  <va-icon name="calendar_today" class="input-icon" />
                  <input
                    type="date"
                    v-model="search.checkIn"
                    @focus="isFormFocused = true"
                    @blur="isFormFocused = false"
                    class="form-input"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Ngày trả phòng</label>
                <div class="input-wrapper">
                  <va-icon name="calendar_today" class="input-icon" />
                  <input
                    type="date"
                    v-model="search.checkOut"
                    @focus="isFormFocused = true"
                    @blur="isFormFocused = false"
                    class="form-input"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Người lớn</label>
                <div class="input-wrapper">
                  <va-icon name="person" class="input-icon" />
                  <input
                    type="number"
                    v-model="search.adults"
                    placeholder="1"
                    min="1"
                    class="form-input"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Trẻ em</label>
                <div class="input-wrapper">
                  <va-icon name="child_care" class="input-icon" />
                  <input
                    type="number"
                    v-model="search.children"
                    placeholder="0"
                    min="0"
                    class="form-input"
                  />
                </div>
              </div>
            </div>

            <button
              class="search-btn"
              @click="filterRooms"
              :class="{ searching: isSearching }"
            >
              <va-icon name="search" v-if="!isSearching" />
              <va-icon name="refresh" v-else class="spinning" />
              <span>{{ isSearching ? "Đang tìm kiếm..." : "Tìm phòng" }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section">
      <div class="container">
        <div class="filters-container">
          <div class="filters-header">
            <h3>
              <va-icon name="tune" />
              Bộ lọc tìm kiếm
            </h3>
            <button class="clear-filters" @click="clearFilters" v-if="hasActiveFilters">
              <va-icon name="clear" />
              Xóa bộ lọc
            </button>
          </div>

          <div class="filters-grid">
            <div class="filter-group">
              <label>Loại phòng</label>
              <va-select
                v-model="filter.type"
                :options="roomTypes"
                placeholder="Tất cả loại phòng"
                class="filter-select"
              />
            </div>

            <div class="filter-group">
              <label>Sắp xếp theo giá</label>
              <va-select
                v-model="filter.sort"
                :options="sortOptions"
                class="filter-select"
              />
            </div>

            <div class="filter-group">
              <label>Giá phòng (VNĐ)</label>
              <div class="price-range">
                <input
                  type="range"
                  v-model="filter.priceMin"
                  min="0"
                  max="5000000"
                  step="100000"
                  class="price-slider"
                />
                <div class="price-display">
                  {{ formatPrice(filter.priceMin) }} - {{ formatPrice(filter.priceMax) }}
                </div>
              </div>
            </div>
          </div>

          <div class="amenities-filters">
            <h4>Tiện nghi</h4>
            <div class="amenity-chips">
              <div
                class="amenity-chip"
                :class="{ active: filter.viewSea }"
                @click="filter.viewSea = !filter.viewSea"
              >
                <va-icon name="waves" />
                <span>View biển</span>
              </div>
              <div
                class="amenity-chip"
                :class="{ active: filter.hasPool }"
                @click="filter.hasPool = !filter.hasPool"
              >
                <va-icon name="pool" />
                <span>Hồ bơi</span>
              </div>
              <div
                class="amenity-chip"
                :class="{ active: filter.hasWifi }"
                @click="filter.hasWifi = !filter.hasWifi"
              >
                <va-icon name="wifi" />
                <span>Wifi miễn phí</span>
              </div>
              <div
                class="amenity-chip"
                :class="{ active: filter.hasBreakfast }"
                @click="filter.hasBreakfast = !filter.hasBreakfast"
              >
                <va-icon name="restaurant" />
                <span>Ăn sáng</span>
              </div>
              <div
                class="amenity-chip"
                :class="{ active: filter.hasSpa }"
                @click="filter.hasSpa = !filter.hasSpa"
              >
                <va-icon name="spa" />
                <span>Spa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Header -->
    <section class="results-header" v-if="filteredRooms.length > 0">
      <div class="container">
        <div class="results-info">
          <h2>Tìm thấy {{ filteredRooms.length }} phòng phù hợp</h2>
          <p>
            Được sắp xếp theo
            {{ filter.sort === "asc" ? "giá tăng dần" : "giá giảm dần" }}
          </p>
        </div>
        <div class="view-toggle">
          <button
            class="view-btn"
            :class="{ active: viewMode === 'grid' }"
            @click="viewMode = 'grid'"
          >
            <va-icon name="grid_view" />
          </button>
          <button
            class="view-btn"
            :class="{ active: viewMode === 'list' }"
            @click="viewMode = 'list'"
          >
            <va-icon name="view_list" />
          </button>
        </div>
      </div>
    </section>

    <!-- Room List -->
    <section class="rooms-section">
      <div class="container">
        <div class="room-list" :class="[`view-${viewMode}`, { loading: isSearching }]">
          <div
            v-for="(room, index) in filteredRooms"
            :key="room.id"
            class="room-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="selectRoom(room)"
            :class="{ selected: selectedRoom?.id === room.id }"
          >
            <div class="room-image-container">
              <img :src="room.image" :alt="room.name" class="room-image" />
              <div class="room-badge" v-if="room.isPopular">
                <va-icon name="star" />
                Phổ biến
              </div>
              <button
                class="wishlist-btn"
                @click.stop="toggleWishlist(room)"
                :class="{ active: room.isWishlisted }"
              >
                <va-icon :name="room.isWishlisted ? 'favorite' : 'favorite_border'" />
              </button>
              <div class="room-gallery-indicator">
                <va-icon name="photo_library" />
                <span>{{ room.galleryCount || 8 }}+</span>
              </div>
            </div>

            <div class="room-content">
              <div class="room-header">
                <h3 class="room-name">{{ room.name }}</h3>
                <div class="room-rating">
                  <div class="stars">
                    <va-icon
                      v-for="n in 5"
                      :key="n"
                      name="star"
                      :class="{ filled: n <= room.rating }"
                    />
                  </div>
                  <span class="rating-text">{{ room.rating }}/5</span>
                </div>
              </div>

              <p class="room-description">{{ room.description }}</p>

              <div class="room-features">
                <div class="feature-item">
                  <va-icon name="square_foot" />
                  <span>{{ room.area }} m²</span>
                </div>
                <div class="feature-item">
                  <va-icon name="bed" />
                  <span>{{ room.beds }} giường</span>
                </div>
                <div class="feature-item" v-if="room.maxGuests">
                  <va-icon name="people" />
                  <span>{{ room.maxGuests }} khách</span>
                </div>
              </div>

              <div class="room-amenities">
                <div class="amenity-tag" v-if="room.hasWifi">
                  <va-icon name="wifi" />
                  <span>Wifi</span>
                </div>
                <div class="amenity-tag" v-if="room.hasPool">
                  <va-icon name="pool" />
                  <span>Hồ bơi</span>
                </div>
                <div class="amenity-tag" v-if="room.viewSea">
                  <va-icon name="waves" />
                  <span>View biển</span>
                </div>
                <div class="amenity-tag" v-if="room.hasBreakfast">
                  <va-icon name="restaurant" />
                  <span>Ăn sáng</span>
                </div>
              </div>

              <div class="room-footer">
                <div class="price-section">
                  <div class="price-main">
                    <span class="currency">₫</span>
                    <span class="price">{{ formatPrice(room.price) }}</span>
                  </div>
                  <div class="price-unit">/đêm</div>
                  <div class="price-total" v-if="calculateNights() > 0">
                    Tổng: {{ formatPrice(room.price * calculateNights()) }} ({{
                      calculateNights()
                    }}
                    đêm)
                  </div>
                </div>

                <button class="book-btn" @click.stop="selectRoom(room)">
                  <va-icon name="hotel" />
                  Chọn phòng
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredRooms.length === 0 && !isSearching" class="empty-state">
          <div class="empty-icon">
            <va-icon name="search_off" />
          </div>
          <h3>Không tìm thấy phòng phù hợp</h3>
          <p>Hãy thử điều chỉnh bộ lọc hoặc thay đổi ngày để tìm thêm lựa chọn</p>
          <button class="clear-filters-btn" @click="clearFilters">
            <va-icon name="refresh" />
            Xóa bộ lọc
          </button>
        </div>
      </div>
    </section>

    <!-- Service Addons Modal -->
    <div v-if="selectedRoom" class="modal-overlay" @click="closeModal">
      <div class="service-modal" @click.stop>
        <div class="modal-header">
          <h3>
            <va-icon name="room_service" />
            Dịch vụ kèm theo
          </h3>
          <button class="close-btn" @click="closeModal">
            <va-icon name="close" />
          </button>
        </div>

        <div class="modal-content">
          <div class="selected-room-info">
            <img :src="selectedRoom.image" :alt="selectedRoom.name" class="room-thumb" />
            <div>
              <h4>{{ selectedRoom.name }}</h4>
              <p class="room-price">{{ formatPrice(selectedRoom.price) }}₫/đêm</p>
            </div>
          </div>

          <div class="addons-section">
            <h4>Chọn dịch vụ bổ sung</h4>
            <div class="addon-list">
              <div
                class="addon-item"
                :class="{ selected: addons.breakfast }"
                @click="addons.breakfast = !addons.breakfast"
              >
                <div class="addon-icon">
                  <va-icon name="restaurant" />
                </div>
                <div class="addon-info">
                  <h5>Ăn sáng buffet</h5>
                  <p>Buffet sáng phong phú với món Á - Âu</p>
                  <span class="addon-price">+200,000₫/người/ngày</span>
                </div>
                <div class="addon-checkbox">
                  <va-icon
                    :name="addons.breakfast ? 'check_circle' : 'radio_button_unchecked'"
                  />
                </div>
              </div>

              <div
                class="addon-item"
                :class="{ selected: addons.spa }"
                @click="addons.spa = !addons.spa"
              >
                <div class="addon-icon">
                  <va-icon name="spa" />
                </div>
                <div class="addon-info">
                  <h5>Spa thư giãn</h5>
                  <p>Massage toàn thân 60 phút</p>
                  <span class="addon-price">+800,000₫/lần</span>
                </div>
                <div class="addon-checkbox">
                  <va-icon
                    :name="addons.spa ? 'check_circle' : 'radio_button_unchecked'"
                  />
                </div>
              </div>

              <div
                class="addon-item"
                :class="{ selected: addons.shuttle }"
                @click="addons.shuttle = !addons.shuttle"
              >
                <div class="addon-icon">
                  <va-icon name="airport_shuttle" />
                </div>
                <div class="addon-info">
                  <h5>Đưa đón sân bay</h5>
                  <p>Dịch vụ đưa đón 2 chiều</p>
                  <span class="addon-price">+500,000₫/chuyến</span>
                </div>
                <div class="addon-checkbox">
                  <va-icon
                    :name="addons.shuttle ? 'check_circle' : 'radio_button_unchecked'"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="booking-summary">
            <div class="summary-row">
              <span>Giá phòng ({{ calculateNights() }} đêm)</span>
              <span>{{ formatPrice(selectedRoom.price * calculateNights()) }}₫</span>
            </div>
            <div class="summary-row" v-if="addons.breakfast">
              <span
                >Ăn sáng ({{ search.adults }} người × {{ calculateNights() }} ngày)</span
              >
              <span>{{ formatPrice(200000 * search.adults * calculateNights()) }}₫</span>
            </div>
            <div class="summary-row" v-if="addons.spa">
              <span>Spa thư giãn</span>
              <span>800,000₫</span>
            </div>
            <div class="summary-row" v-if="addons.shuttle">
              <span>Đưa đón sân bay</span>
              <span>500,000₫</span>
            </div>
            <div class="summary-total">
              <span>Tổng cộng</span>
              <span>{{ formatPrice(calculateTotal()) }}₫</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-secondary" @click="closeModal">Hủy</button>
          <button class="btn-primary" @click="confirmBooking">
            <va-icon name="check" />
            Xác nhận đặt phòng
          </button>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="message" class="success-toast" :class="{ show: showMessage }">
      <div class="toast-content">
        <va-icon name="check_circle" class="toast-icon" />
        <span>{{ message }}</span>
      </div>
    </div>

    <!-- Service Selection Section -->
    <div class="booking-service-wrapper">
      <!-- Nửa trái: Chọn dịch vụ -->
      <div class="service-left">
        <h3>Chọn dịch vụ kèm theo</h3>
        <va-select
          v-model="selectedServices"
          :options="serviceOptions"
          multiple
          placeholder="Chọn dịch vụ"
          class="service-dropdown"
          :clearable="false"
        >
          <template #option="{ option }">
            <div class="service-option">
              <img :src="option.hinhAnhDichVu" alt="" class="service-img" />
              <span>{{ option.tenDichVu }}</span>
              <span class="service-price"
                >{{ formatPrice(option.donGia) }}₫/{{ option.donViTinh }}</span
              >
            </div>
          </template>
          <template #selected="{ option }">
            <span>{{ option.tenDichVu }}</span>
          </template>
        </va-select>
        <div v-if="selectedServices.length" class="service-counter-list">
          <div
            v-for="service in selectedServices"
            :key="service.maDichVu"
            class="service-counter-item"
          >
            <img :src="service.hinhAnhDichVu" alt="" class="service-img-small" />
            <span>{{ service.tenDichVu }}</span>
            <div class="counter">
              <button @click="decrease(service)">-</button>
              <span>{{ service.soLuong }}</span>
              <button @click="increase(service)">+</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Nửa phải: Tóm tắt dịch vụ đã chọn -->
      <div class="service-right">
        <h3>Dịch vụ đã chọn</h3>
        <div v-if="selectedServices.length">
          <div
            v-for="service in selectedServices"
            :key="service.maDichVu"
            class="summary-item"
          >
            <span>{{ service.tenDichVu }}</span>
            <span>x{{ service.soLuong }}</span>
            <span>{{ formatPrice(service.donGia * service.soLuong) }}₫</span>
          </div>
          <div class="summary-total">
            Tổng cộng: <b>{{ formatPrice(totalServicePrice) }}₫</b>
          </div>
        </div>
        <div v-else class="empty">Chưa chọn dịch vụ nào</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import TheHeader from "~/Component/Header.vue";

const search = ref({
  checkIn: "",
  checkOut: "",
  adults: 1,
  children: 0,
});

const filter = ref({
  type: "",
  sort: "asc",
  viewSea: false,
  hasPool: false,
  hasWifi: false,
  hasBreakfast: false,
  hasSpa: false,
  priceMin: 0,
  priceMax: 5000000,
});

const rooms = ref([
  {
    id: 1,
    name: "Phòng đơn tiêu chuẩn",
    description: "Phòng cho 1 người với thiết kế hiện đại, tiện nghi cơ bản đầy đủ.",
    price: 600000,
    area: 20,
    beds: 1,
    maxGuests: 1,
    type: "Phòng đơn",
    rating: 4.2,
    hasWifi: true,
    hasPool: false,
    viewSea: false,
    hasBreakfast: false,
    hasSpa: false,
    isPopular: false,
    isWishlisted: false,
    galleryCount: 6,
    image: "https://images.unsplash.com/photo-1552903023-4ec5593ec660",
  },
  {
    id: 2,
    name: "Phòng đôi view biển",
    description:
      "Thoải mái cho 2 người với tầm nhìn hướng biển tuyệt đẹp và ban công riêng.",
    price: 1200000,
    area: 35,
    beds: 2,
    maxGuests: 2,
    type: "Phòng đôi",
    rating: 4.8,
    hasWifi: true,
    hasPool: true,
    viewSea: true,
    hasBreakfast: true,
    hasSpa: false,
    isPopular: true,
    isWishlisted: false,
    galleryCount: 12,
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d3",
  },
  {
    id: 3,
    name: "Suite Gia đình",
    description: "Không gian rộng rãi cho gia đình 4 người với phòng khách riêng biệt.",
    price: 1900000,
    area: 60,
    beds: 3,
    maxGuests: 4,
    type: "Gia đình",
    rating: 4.6,
    hasWifi: true,
    hasPool: true,
    viewSea: false,
    hasBreakfast: true,
    hasSpa: true,
    isPopular: false,
    isWishlisted: true,
    galleryCount: 15,
    image: "https://images.unsplash.com/photo-1560067174-894dc1c5079a",
  },
]);

const selectedRoom = ref(null);
const addons = ref({
  breakfast: false,
  spa: false,
  shuttle: false,
});

const message = ref("");
const showMessage = ref(false);
const isSearching = ref(false);
const isFormFocused = ref(false);
const viewMode = ref("grid");

const roomTypes = [
  { text: "Tất cả loại phòng", value: "" },
  { text: "Phòng đơn", value: "Phòng đơn" },
  { text: "Phòng đôi", value: "Phòng đôi" },
  { text: "Gia đình", value: "Gia đình" },
  { text: "Suite", value: "Suite" },
];

const sortOptions = [
  { text: "Giá tăng dần", value: "asc" },
  { text: "Giá giảm dần", value: "desc" },
  { text: "Đánh giá cao nhất", value: "rating" },
];

const hasActiveFilters = computed(() => {
  return (
    filter.value.type ||
    filter.value.viewSea ||
    filter.value.hasPool ||
    filter.value.hasWifi ||
    filter.value.hasBreakfast ||
    filter.value.hasSpa
  );
});

const filterRooms = async () => {
  isSearching.value = true;
  selectedRoom.value = null;
  message.value = "";

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isSearching.value = false;
};

const selectRoom = (room) => {
  selectedRoom.value = room;
  message.value = "";
};

const closeModal = () => {
  selectedRoom.value = null;
};

const toggleWishlist = (room) => {
  room.isWishlisted = !room.isWishlisted;
};

const clearFilters = () => {
  filter.value = {
    type: "",
    sort: "asc",
    viewSea: false,
    hasPool: false,
    hasWifi: false,
    hasBreakfast: false,
    hasSpa: false,
    priceMin: 0,
    priceMax: 5000000,
  };
};

const calculateNights = () => {
  if (!search.value.checkIn || !search.value.checkOut) return 0;
  const checkIn = new Date(search.value.checkIn);
  const checkOut = new Date(search.value.checkOut);
  const diffTime = Math.abs(checkOut - checkIn);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const calculateTotal = () => {
  if (!selectedRoom.value) return 0;

  let total = selectedRoom.value.price * calculateNights();

  if (addons.value.breakfast) {
    total += 200000 * search.value.adults * calculateNights();
  }
  if (addons.value.spa) {
    total += 800000;
  }
  if (addons.value.shuttle) {
    total += 500000;
  }

  return total;
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN").format(price);
};

const confirmBooking = () => {
  const selectedAddons = Object.entries(addons.value)
    .filter(([key, value]) => value)
    .map(([key]) => {
      const addonNames = {
        breakfast: "Ăn sáng",
        spa: "Spa thư giãn",
        shuttle: "Đưa đón sân bay",
      };
      return addonNames[key];
    });

  message.value = `Đặt phòng thành công! ${selectedRoom.value.name} ${
    selectedAddons.length ? "kèm " + selectedAddons.join(", ") : ""
  }`;
  showMessage.value = true;

  selectedRoom.value = null;
  addons.value = { breakfast: false, spa: false, shuttle: false };

  setTimeout(() => {
    showMessage.value = false;
    setTimeout(() => (message.value = ""), 300);
  }, 3000);
};

const filteredRooms = computed(() => {
  let filtered = rooms.value;

  if (filter.value.type) {
    filtered = filtered.filter((r) => r.type === filter.value.type);
  }
  if (filter.value.viewSea) {
    filtered = filtered.filter((r) => r.viewSea);
  }
  if (filter.value.hasPool) {
    filtered = filtered.filter((r) => r.hasPool);
  }
  if (filter.value.hasWifi) {
    filtered = filtered.filter((r) => r.hasWifi);
  }
  if (filter.value.hasBreakfast) {
    filtered = filtered.filter((r) => r.hasBreakfast);
  }
  if (filter.value.hasSpa) {
    filtered = filtered.filter((r) => r.hasSpa);
  }

  // Price filter
  filtered = filtered.filter(
    (r) => r.price >= filter.value.priceMin && r.price <= filter.value.priceMax
  );

  // Sort
  if (filter.value.sort === "asc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (filter.value.sort === "desc") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (filter.value.sort === "rating") {
    filtered = filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
});

// Set default dates
onMounted(() => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  search.value.checkIn = today.toISOString().split("T")[0];
  search.value.checkOut = tomorrow.toISOString().split("T")[0];
});

const serviceOptions = [
  {
    maDichVu: 1,
    tenDichVu: "Ăn sáng buffet",
    donGia: 200000,
    donViTinh: "người/ngày",
    hinhAnhDichVu: "https://example.com/images/breakfast.jpg",
  },
  {
    maDichVu: 2,
    tenDichVu: "Spa thư giãn",
    donGia: 800000,
    donViTinh: "lần",
    hinhAnhDichVu: "https://example.com/images/spa.jpg",
  },
  {
    maDichVu: 3,
    tenDichVu: "Đưa đón sân bay",
    donGia: 500000,
    donViTinh: "chuyến",
    hinhAnhDichVu: "https://example.com/images/shuttle.jpg",
  },
];

const selectedServices = ref([]);

const totalServicePrice = computed(() => {
  return selectedServices.value.reduce((total, service) => {
    return total + service.donGia * service.soLuong;
  }, 0);
});

const increase = (service) => {
  const found = selectedServices.value.find((s) => s.maDichVu === service.maDichVu);
  if (found) {
    found.soLuong++;
  } else {
    selectedServices.value.push({ ...service, soLuong: 1 });
  }
};

const decrease = (service) => {
  const found = selectedServices.value.find((s) => s.maDichVu === service.maDichVu);
  if (found) {
    if (found.soLuong > 1) {
      found.soLuong--;
    } else {
      selectedServices.value = selectedServices.value.filter(
        (s) => s.maDichVu !== service.maDichVu
      );
    }
  }
};
</script>

<style scoped>
.booking-page {
  min-height: 100vh;
  background: #fafbfc;
  font-family: "Inter", "Segoe UI", sans-serif;
}

/* Hero Search Section */
.hero-search {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 80px 0;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.hero-content {
  text-align: center;
  margin-bottom: 60px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

.title-line {
  display: block;
}

.title-highlight {
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 0;
}

/* Search Form */
.search-form-container {
  display: flex;
  justify-content: center;
}

.search-form {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  width: 100%;
  transition: all 0.3s ease;
}

.search-form.form-focused {
  transform: translateY(-5px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
}

.search-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 32px;
  text-align: center;
  justify-content: center;
}

.search-icon {
  color: #667eea;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
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

.form-input {
  width: 100%;
  padding: 14px 14px 14px 44px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.search-btn.searching {
  background: #94a3b8;
  cursor: not-allowed;
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Filters Section */
.filters-section {
  background: white;
  padding: 40px 0;
  border-bottom: 1px solid #e2e8f0;
}

.filters-container {
  background: #f8fafc;
  border-radius: 16px;
  padding: 32px;
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.filters-header h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.clear-filters {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-filters:hover {
  background: #dc2626;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.filter-select {
  width: 100%;
}

.price-range {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.price-slider {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.price-slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: #667eea;
  border-radius: 50%;
  cursor: pointer;
}

.price-display {
  font-size: 0.9rem;
  font-weight: 600;
  color: #667eea;
  text-align: center;
}

.amenities-filters h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
}

.amenity-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.amenity-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
}

.amenity-chip:hover {
  border-color: #667eea;
  transform: translateY(-1px);
}

.amenity-chip.active {
  background: #667eea;
  border-color: #667eea;
  color: white;
}

/* Results Header */
.results-header {
  background: white;
  padding: 24px 0;
  border-bottom: 1px solid #e2e8f0;
}

.results-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.results-info h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 4px 0;
}

.results-info p {
  color: #64748b;
  margin: 0;
}

.view-toggle {
  display: flex;
  gap: 8px;
}

.view-btn {
  width: 40px;
  height: 40px;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-btn.active {
  border-color: #667eea;
  background: #667eea;
  color: white;
}

/* Rooms Section */
.rooms-section {
  padding: 40px 0 80px 0;
}

.room-list {
  display: grid;
  gap: 24px;
}

.room-list.view-grid {
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
}

.room-list.view-list {
  grid-template-columns: 1fr;
}

.room-list.loading {
  opacity: 0.6;
  pointer-events: none;
}

.room-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  animation: slideUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.room-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.room-card.selected {
  border: 2px solid #667eea;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
}

.room-image-container {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.room-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.room-card:hover .room-image {
  transform: scale(1.05);
}

.room-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #fbbf24;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

.wishlist-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.wishlist-btn:hover {
  background: white;
  transform: scale(1.1);
}

.wishlist-btn.active {
  background: #ef4444;
  color: white;
}

.room-gallery-indicator {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.room-content {
  padding: 24px;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.room-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.room-rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  display: flex;
  gap: 2px;
}

.stars va-icon {
  color: #d1d5db;
  font-size: 14px;
}

.stars va-icon.filled {
  color: #fbbf24;
}

.rating-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}

.room-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
}

.room-features {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: #64748b;
}

.room-amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.amenity-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #f1f5f9;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #475569;
}

.room-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.price-section {
  display: flex;
  flex-direction: column;
}

.price-main {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.currency {
  font-size: 1rem;
  color: #667eea;
  font-weight: 600;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.price-unit {
  font-size: 0.9rem;
  color: #64748b;
}

.price-total {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 4px;
}

.book-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.book-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-icon {
  font-size: 4rem;
  color: #d1d5db;
  margin-bottom: 24px;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
}

.empty-state p {
  color: #64748b;
  margin-bottom: 32px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.clear-filters-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-filters-btn:hover {
  background: #5a67d8;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.service-modal {
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideInUp 0.3s ease;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h3 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.close-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #e2e8f0;
}

.modal-content {
  padding: 32px;
}

.selected-room-info {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
}

.room-thumb {
  width: 80px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.selected-room-info h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 4px 0;
}

.room-price {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin: 0;
}

.addons-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
}

.addon-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.addon-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.addon-item:hover {
  border-color: #667eea;
  background: #f8fafc;
}

.addon-item.selected {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

.addon-icon {
  width: 48px;
  height: 48px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  font-size: 1.2rem;
}

.addon-item.selected .addon-icon {
  background: #667eea;
  color: white;
}

.addon-info {
  flex: 1;
}

.addon-info h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 4px 0;
}

.addon-info p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0 0 8px 0;
}

.addon-price {
  font-size: 0.9rem;
  font-weight: 600;
  color: #667eea;
}

.addon-checkbox {
  color: #667eea;
  font-size: 1.5rem;
}

.booking-summary {
  background: #f8fafc;
  border-radius: 12px;
  padding: 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 2px solid #e2e8f0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2c3e50;
}

.modal-footer {
  display: flex;
  gap: 16px;
  padding: 24px 32px;
  border-top: 1px solid #e2e8f0;
}

.btn-secondary {
  flex: 1;
  padding: 12px 24px;
  background: #f1f5f9;
  color: #64748b;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.btn-primary {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

/* Success Toast */
.success-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #10b981;
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  transform: translateX(400px);
  opacity: 0;
  transition: all 0.3s ease;
}

.success-toast.show {
  transform: translateX(0);
  opacity: 1;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  font-size: 1.2rem;
}

/* Service Selection Section */
.booking-service-wrapper {
  display: flex;
  gap: 32px;
  margin-top: 40px;
}

.service-left,
.service-right {
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.service-left {
  position: relative;
}

.service-left h3,
.service-right h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.service-dropdown {
  width: 100%;
  margin-bottom: 24px;
}

.service-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.service-option:hover {
  border-color: #667eea;
  background: #f8fafc;
}

.service-img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 12px;
}

.service-price {
  font-weight: 600;
  color: #667eea;
}

.service-counter-list {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.service-counter-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;
}

.service-img-small {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  object-fit: cover;
  margin-right: 8px;
}

.counter {
  display: flex;
  align-items: center;
  gap: 8px;
}

button {
  background: none;
  border: none;
  color: #667eea;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  color: #ef4444;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
}

.summary-total {
  font-weight: 600;
  color: #2c3e50;
  padding-top: 12px;
  border-top: 2px solid #e2e8f0;
  margin-top: 12px;
}
</style>
