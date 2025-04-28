<template>
    <div :class="{'dark': theme.isDarkMode}" class="settings-container">
      <h1>Cài đặt</h1>
      <div>
        <label for="darkModeSwitch">Chế độ tối:</label>
        <input
          id="darkModeSwitch"
          type="checkbox"
          v-model="isDarkMode"   
          @change="toggleDarkMode" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useThemeStore } from '@/store/DarkMode'
  import { computed } from 'vue'
  
  // Sử dụng store để lấy trạng thái dark mode
  const theme = useThemeStore()
  
  // Liên kết trạng thái isDarkMode từ store
  const isDarkMode = computed(() => theme.isDarkMode)
  
  // Toggle chế độ sáng/tối khi người dùng thay đổi
  const toggleDarkMode = () => {
    theme.toggleDarkMode()  // Cập nhật trạng thái trong store
  }
  </script>
  
  <style scoped>
  .settings-container {
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 1.2rem;
  }
  
  input[type="checkbox"] {
    margin-left: 10px;
  }
  
  .dark {
    background-color: #333;
    color: white;
  }
  
  </style>
  