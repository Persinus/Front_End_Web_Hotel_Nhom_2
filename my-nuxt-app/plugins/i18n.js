import { createI18n } from 'vue-i18n'

// Define the available languages
const messages = {
  en: {
    welcome: "Welcome",
    booking: "Booking",
    services: "Services",
    account: "Account",
    darkMode: "Dark Mode",
    language: "Language",
  },
  vi: {
    welcome: "Chào mừng",
    booking: "Đặt phòng",
    services: "Dịch vụ",
    account: "Tài khoản",
    darkMode: "Chế độ tối",
    language: "Ngôn ngữ",
  },
}

// Create i18n instance
const i18n = createI18n({
  locale: 'vi', // Default language
  messages, // Language messages
})

export default i18n
