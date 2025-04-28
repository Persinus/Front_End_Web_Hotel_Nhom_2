// store/DarkMode.js
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: false,
  }),
  actions: {
    initializeDarkMode() {
      // Kiểm tra xem có đang ở client-side không (window có sẵn trên client-side)
      if (typeof window !== 'undefined') {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        this.isDarkMode = darkMode;
      }
    },
    toggleDarkMode() {
      // Kiểm tra nếu đang ở client-side
      if (typeof window !== 'undefined') {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
      }
    }
  }
})
