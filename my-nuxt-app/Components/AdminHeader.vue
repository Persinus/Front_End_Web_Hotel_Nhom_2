<template>
  <div class="admin-header">
    <div class="header-left">
      <div class="logo">
        <i class="fas fa-hotel"></i>
        <span>Novotel</span>
      </div>
      
      <div class="search-container">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search for rooms and offers" class="search-input" />
      </div>
    </div>
    
    <div class="header-right">
      <div class="notification">
        <i class="fas fa-bell"></i>
      </div>
      <div class="user-avatar">
        <img src="https://i.pravatar.cc/40?img=11" alt="User" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Không cần logic cho component này
</script>

<style scoped>
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #006ee6;
  margin-right: 24px;
}

.logo i {
  margin-right: 8px;
}

.search-container {
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 24px;
  padding: 0 15px;
  width: 300px;
}

.search-container i {
  color: #5f6368;
  margin-right: 10px;
}

.search-input {
  border: none;
  background: transparent;
  outline: none;
  height: 36px;
  width: 100%;
  font-size: 14px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.notification {
  color: #5f6368;
  cursor: pointer;
  font-size: 18px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>