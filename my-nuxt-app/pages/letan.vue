<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->

<template>
  <div style="height: 100vh; display: flex;">
    <!-- Sidebar -->
    <VaSidebar color="primary" style="width: 250px;">
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
    <div style="flex: 1; padding: 20px;">
      <h1>Trang Lễ Tân</h1>
      <div v-if="currentTab === 'khachhang'">
        <h2>Quản lý khách hàng</h2>
        <p>Danh sách khách hàng, thêm mới, chỉnh sửa hoặc xóa khách hàng.</p>
        <ul>
          <li>Khách hàng 1</li>
          <li>Khách hàng 2</li>
          <li>Khách hàng 3</li>
        </ul>
      </div>
      <div v-else-if="currentTab === 'phong'">
        <h2>Quản lý phòng</h2>
        <p>Danh sách phòng, tình trạng phòng, và đặt phòng.</p>
        <ul>
          <li>Phòng 101 - Trống</li>
          <li>Phòng 102 - Đã đặt</li>
          <li>Phòng 103 - Đang dọn dẹp</li>
        </ul>
      </div>
      <div v-else-if="currentTab === 'dichvu'">
        <h2>Quản lý dịch vụ</h2>
        <p>Thêm mới dịch vụ, chỉnh sửa giá và đơn vị tính.</p>
        <ul>
          <li>Dịch vụ 1: Massage - 500,000 VND</li>
          <li>Dịch vụ 2: Giặt ủi - 100,000 VND</li>
          <li>Dịch vụ 3: Đưa đón sân bay - 300,000 VND</li>
        </ul>
      </div>
      <div v-else-if="currentTab === 'caidat'">
        <h2>Cài đặt hệ thống</h2>
        <p>Cấu hình chung, quản lý tài khoản người dùng và quyền truy cập.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentTab = ref('khachhang');

const sidebarItems = [
  { key: 'khachhang', title: 'Khách hàng', icon: 'person' },
  { key: 'phong', title: 'Phòng', icon: 'hotel' },
  { key: 'dichvu', title: 'Dịch vụ', icon: 'shopping_cart' },
  { key: 'caidat', title: 'Cài đặt', icon: 'settings' },
];
</script>

<style scoped>
/* Tùy chỉnh giao diện sidebar */
.va-sidebar {
  background-color: #2c3e50;
  color: white;
}

.va-sidebar-item {
  transition: background-color 0.3s, color 0.3s;
}

.va-sidebar-item:hover {
  background-color: #34495e;
}

.va-sidebar-item.active {
  background-color: #1abc9c;
  color: white;
}

.va-sidebar-item-title {
  font-weight: bold;
}

h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 20px;
}

h2 {
  color: #34495e;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

ul li {
  margin-bottom: 5px;
}
</style>