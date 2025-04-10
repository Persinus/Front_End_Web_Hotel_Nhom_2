<template>
    <div class="config-wrapper">
      <h1 class="title">⚙️ Cấu Hình Khách Sạn</h1>
  
      <div class="tab-buttons">
        <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="{ active: activeTab === tab }">
          {{ tab }}
        </button>
      </div>
  
      <div class="tab-content">
        <HotelInfo v-if="activeTab === 'Thông tin khách sạn'" />
        <TouristSpots v-if="activeTab === 'Địa điểm du lịch'" />
        <PaymentMethods v-if="activeTab === 'Thanh toán'" />
        <RoomPricing v-if="activeTab === 'Giá phòng'" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import HotelInfo from './tabs/HotelInfo.vue'
  import TouristSpots from './tabs/TouristSpots.vue'
  import PaymentMethods from './tabs/PaymentMethods.vue'
  import RoomPricing from './tabs/RoomPricing.vue'
  
  const tabs = ['Thông tin khách sạn', 'Địa điểm du lịch', 'Thanh toán', 'Giá phòng']
  const activeTab = ref(tabs[0])
  </script>
  
  <style scoped>
  .config-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 32px;
  }
  .title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
  }
  .tab-buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 24px;
  }
  .tab-buttons button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background-color: #eee;
    cursor: pointer;
    font-weight: bold;
  }
  .tab-buttons button.active {
    background-color: #2c3e50;
    color: white;
  }
  </style>
  