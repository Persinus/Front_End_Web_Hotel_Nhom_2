import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

export default {
  setup() {
    const { $axios } = useNuxtApp() // Lấy axios từ plugin
    const data = ref([])

    onMounted(async () => {
      try {
        const response = await $axios.get('/DichVu') // Gọi API
        data.value = response.data
      } catch (error) {
        console.error('Lỗi khi gọi API:', error)
      }
    })

    return { data }
  },
}
