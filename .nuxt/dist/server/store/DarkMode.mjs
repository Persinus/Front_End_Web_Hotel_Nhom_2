import { defineStore } from "pinia";
const useThemeStore = defineStore("theme", {
  state: () => ({
    isDarkMode: false
  }),
  actions: {
    initializeDarkMode() {
    },
    toggleDarkMode() {
    }
  }
});
export {
  useThemeStore
};
//# sourceMappingURL=DarkMode.mjs.map
