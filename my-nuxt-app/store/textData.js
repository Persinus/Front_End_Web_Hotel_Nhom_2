import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useTextStore = defineStore('textData', () => {
  const textData = ref('')
  const isLoading = ref(false)
  const alertMessage = ref('')
  const alertType = ref('info')

  const fetchTextData = async () => {
    isLoading.value = true
    const { $axios } = useNuxtApp()

    try {
      const response = await $axios.get('http://nhom2webkhachsan.runasp.net/api/DichVu') // Thay URL backend của bạn
      textData.value = response.data.text
      alertMessage.value = 'Dữ liệu đã được tải thành công!'
      alertType.value = 'success'
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error)
      alertMessage.value = 'Đã xảy ra lỗi khi tải dữ liệu!'
      alertType.value = 'error'
    } finally {
      isLoading.value = false
    }
  }

  return {
    textData,
    isLoading,
    alertMessage,
    alertType,
    fetchTextData,
  }
})
