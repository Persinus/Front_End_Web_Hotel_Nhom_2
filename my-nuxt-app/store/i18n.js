import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'vi', // Default language is Vietnamese
  }),
  actions: {
    setLanguage(lang) {
      this.currentLanguage = lang
      // Change the language using vue-i18n
      const i18n = useI18n()
      i18n.locale.value = lang
    }
  }
})
