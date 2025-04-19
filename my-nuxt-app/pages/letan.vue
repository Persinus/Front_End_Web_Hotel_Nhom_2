<template>
  <div style="height: 100vh; display: flex;">
    <!-- Sidebar -->
    <VaSidebar color="primary" style="width: 250px;">
      <VaSidebarItem @click="currentTab = 'khachhang'">
        <VaSidebarItemContent>
          <VaIcon name="person" />
          <VaSidebarItemTitle>Khách hàng</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>

      <VaSidebarItem @click="currentTab = 'phong'">
        <VaSidebarItemContent>
          <VaIcon name="hotel" />
          <VaSidebarItemTitle>Phòng</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>

      <VaSidebarItem @click="currentTab = 'dichvu'">
        <VaSidebarItemContent>
          <VaIcon name="shopping_cart" />
          <VaSidebarItemTitle>Dịch vụ</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>

      <VaSpacer />

      <VaSidebarItem @click="currentTab = 'caidat'">
        <VaSidebarItemContent>
          <VaIcon name="settings" />
          <VaSidebarItemTitle>Cài đặt</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>
    </VaSidebar>

    <!-- Main content -->
    <div style="flex: 1; padding: 20px;">
      <h1>Trang Lễ Tân</h1>
      <div v-if="currentTab === 'khachhang'">
        <h2>Quản lý khách hàng</h2>
        <p>Danh sách, thêm/sửa/xóa khách hàng...</p>
      </div>
      <div v-else-if="currentTab === 'phong'">
        <h2>Quản lý phòng</h2>
        <p>Danh sách phòng, tình trạng, đặt phòng...</p>
      </div>
      <div v-else-if="currentTab === 'dichvu'">
        <h2>Quản lý dịch vụ</h2>
        <p>Thêm dịch vụ, giá, đơn vị tính...</p>
      </div>
      <div v-else-if="currentTab === 'caidat'">
        <h2>Cài đặt hệ thống</h2>
        <p>Cấu hình chung, tài khoản người dùng...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'khachhang',
    }
  },
}
</script>