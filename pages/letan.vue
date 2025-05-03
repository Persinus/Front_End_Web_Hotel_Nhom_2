<template>
  <div :class="['letan-page', { 'dark-mode': theme.isDarkMode }]">
    <!-- Sidebar -->
    <VaSidebar color="primary" class="sidebar">
      <VaSidebarItem
        v-for="item in sidebarItems"
        :key="item.key"
        @click="currentTab = item.key"
        :class="{ active: currentTab === item.key }"
      >
        <VaSidebarItemContent>
          <VaIcon :name="item.icon" />
          <VaSidebarItemTitle>{{ item.title }}</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>
    </VaSidebar>

    <!-- Main content -->
    <div class="main-content">
      <h1 class="page-title">Trang Lễ Tân</h1>

      <!-- Quản lý phòng -->
      <div v-if="currentTab === 'phong'" class="tab-content">
        <h2 class="section-title">Quản lý phòng</h2>
        <p class="section-description">Danh sách phòng, tình trạng phòng, và đặt phòng.</p>

        <!-- Table -->
        <div class="table-wrapper">
          <table class="custom-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Tên phòng</th>
                <th>Tiện nghi</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(room, index) in paginatedRooms"
                :key="room.maPhong"
              >
                <td>{{ currentPage * itemsPerPage + index + 1 }}</td>
                <td>{{ room.loaiPhong }}</td>
                <td>{{ room.tienNghiList.join(', ') }}</td>
                <td>
                  <span :class="getStatusClass(room.tinhTrang)">
                    {{ getStatusText(room.tinhTrang) }}
                  </span>
                </td>
                <td>
                  <button
                    class="btn-edit"
                    @click="openEditModal(room)"
                  >
                    <VaIcon name="edit" /> Sửa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page - 1 }"
            @click="currentPage = page - 1"
          >
            {{ page }}
          </button>
        </div>
      </div>

      <!-- Modal sửa -->
      <div v-if="showEditModal" class="modal">
        <div class="modal-content">
          <h3>Sửa thông tin phòng</h3>
          <label for="roomName">Tên phòng:</label>
          <input
            id="roomName"
            type="text"
            v-model="editingRoom.loaiPhong"
          />

          <label for="roomStatus">Trạng thái:</label>
          <select
            id="roomStatus"
            v-model="editingRoom.tinhTrang"
          >
            <option value="1">Còn Trống</option>
            <option value="2">Đã Đặt</option>
            <option value="3">Đang Sử Dụng</option>
            <option value="4">Đang Vệ Sinh</option>
          </select>

          <div class="modal-actions">
            <button class="btn-primary" @click="saveChanges">Lưu</button>
            <button class="btn-secondary" @click="closeEditModal">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useThemeStore } from '@/store/DarkMode';

// States
const theme = useThemeStore();
theme.initializeDarkMode();

const currentTab = ref('phong');
const rooms = ref([]);
const currentPage = ref(0); // Trang hiện tại
const itemsPerPage = 5; // Số lượng phòng trên mỗi trang
const showEditModal = ref(false);
const editingRoom = ref(null);

// Sidebar items
const sidebarItems = [
  { key: 'khachhang', title: 'Khách hàng', icon: 'person' },
  { key: 'phong', title: 'Phòng', icon: 'hotel' },
  { key: 'dichvu', title: 'Dịch vụ', icon: 'shopping_cart' },
  { key: 'caidat', title: 'Cài đặt', icon: 'settings' },
];

// API setup
const { $api } = useNuxtApp();

// Lấy danh sách phòng
onMounted(async () => {
  try {
    const response = await $api.get('/PhongWithTienNghi');
    rooms.value = response.data.map((room) => ({
      ...room,
      tienNghiList: JSON.parse(room.tienNghi),
    }));
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu phòng:', error);
  }
});

// Pagination logic
const paginatedRooms = computed(() => {
  const start = currentPage.value * itemsPerPage;
  return rooms.value.slice(start, start + itemsPerPage);
});
const totalPages = computed(() => Math.ceil(rooms.value.length / itemsPerPage));

// Modal logic
const openEditModal = (room) => {
  editingRoom.value = { ...room }; // Tạo bản sao để chỉnh sửa
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
  editingRoom.value = null;
};

// Lưu thay đổi
const saveChanges = async () => {
  try {
    const updatedRoom = editingRoom.value;
    await $api.put(`/Phong/${updatedRoom.maPhong}`, updatedRoom);
    // Cập nhật danh sách phòng
    const roomIndex = rooms.value.findIndex(
      (room) => room.maPhong === updatedRoom.maPhong
    );
    if (roomIndex !== -1) {
      rooms.value[roomIndex] = { ...updatedRoom };
    }
    closeEditModal();
  } catch (error) {
    console.error('Lỗi khi cập nhật phòng:', error);
  }
};

// Helpers
const getStatusText = (status) => {
  switch (status) {
    case '1':
      return 'Còn Trống';
    case '2':
      return 'Đã Đặt';
    case '3':
      return 'Đang Sử Dụng';
    case '4':
      return 'Đang Vệ Sinh';
    default:
      return 'Không xác định';
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case '1':
      return 'status-available';
    case '2':
      return 'status-booked';
    case '3':
      return 'status-in-use';
    case '4':
      return 'status-cleaning';
    default:
      return '';
  }
};
</script>

<style scoped>
/* Layout styles */
.letan-page {
  display: flex;
  height: 100vh;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
}

.letan-page.dark-mode {
  background-color: #2c3e50;
  color: #f0f0f0;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
}

.sidebar .va-sidebar-item.active {
  background-color: #1abc9c;
  color: white;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.letan-page.dark-mode .page-title {
  color: #f0f0f0;
}

/* Table styles */
.table-wrapper {
  overflow-x: auto;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.custom-table th {
  background-color: #f4f4f4;
}

.letan-page.dark-mode .custom-table th {
  background-color: #34495e;
  color: #f0f0f0;
}

.custom-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.letan-page.dark-mode .custom-table tr:nth-child(even) {
  background-color: #3b4a5a;
}

/* Status styles */
.status-available {
  color: green;
  font-weight: bold;
}

.status-booked {
  color: red;
  font-weight: bold;
}

.status-in-use {
  color: orange;
  font-weight: bold;
}

.status-cleaning {
  color: blue;
  font-weight: bold;
}
</style>
