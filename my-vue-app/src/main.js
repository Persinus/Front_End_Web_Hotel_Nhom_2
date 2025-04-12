vv// Import các module cần thiết từ Vue và các thư viện khác
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from 'vuex'
import App from './App.vue'
import router from '../src/Router/index'
import axios from 'axios'
import VueResource from 'vue-resource'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'

// Khởi tạo Vuex store
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

// Khởi tạo Pinia
const pinia = createPinia()

// Cấu hình Axios
axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['Authorization'] = 'Bearer token'

// Cấu hình dayjs
dayjs.locale('vi')

// Khởi tạo ứng dụng
const app = createApp(App)

// Đăng ký plugins và components
app.use(router)
app.use(store)
app.use(pinia)
app.use(VueResource)

// Thêm các instance vào global properties
app.config.globalProperties.$axios = axios
app.config.globalProperties.$dayjs = dayjs

// Mount ứng dụng
app.mount('#app')