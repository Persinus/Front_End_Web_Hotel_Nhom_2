<template>
  <div class="sidebar">
    <nuxt-link to="/Dashboard" class="sidebar-item">
      <i class="fas fa-tachometer-alt"></i>
      <span>Dashboard</span>
    </nuxt-link>
    
    <nuxt-link to="/FrontDesk" class="sidebar-item">
      <i class="fas fa-desktop"></i>
      <span>Front desk</span>
    </nuxt-link>
    
    <nuxt-link to="/Guest" class="sidebar-item">
      <i class="fas fa-user"></i>
      <span>Guest</span>
    </nuxt-link>
    
    <nuxt-link to="/Room" class="sidebar-item">
      <i class="fas fa-bed"></i>
      <span>Room</span>
    </nuxt-link>
    
    <nuxt-link to="/Deal" class="sidebar-item active">
      <i class="fas fa-handshake"></i>
      <span>Deal</span>
    </nuxt-link>
    
    <nuxt-link to="/Rate" class="sidebar-item">
      <i class="fas fa-chart-line"></i>
      <span>Rate</span>
    </nuxt-link>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: white;
  height: 100%;
  padding-top: 20px;
  box-shadow: 1px 0 3px rgba(0,0,0,0.1);
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #5f6368;
  text-decoration: none;
  font-size: 14px;
}

.sidebar-item:hover {
  background-color: #f8f9fa;
}

.sidebar-item.active {
  color: #006ee6;
  background-color: #e8f0fe;
  font-weight: 500;
}

.sidebar-item i {
  margin-right: 12px;
  width: 20px;
  text-align: center;
}
</style>