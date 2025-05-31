<template>
  <VaNavbar
    :color="navbarColors.color"
    class="mb-3"
  >
    <template #left>
      <VaNavbarItem class="logo">
        LOGO
      </VaNavbarItem>
    </template>
    <template #right>
      <VaNavbarItem class="hidden sm:block">
        Dashboard
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        Reports
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        Users
      </VaNavbarItem>
      <VaNavbarItem>
        <VaIcon
          :color="navbarColors.textColor"
          name="mdi-magnify"
        />
      </VaNavbarItem>
      <VaNavbarItem>
        <VaIcon
          :color="navbarColors.textColor"
          name="mdi-account-circle-outline"
        />
      </VaNavbarItem>
    </template>
  </VaNavbar>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  navbarColors: {
    type: Object,
    required: true,
    // Ví dụ: { color: '#FBCAF6', textColor: '#481269' }
  },
});
</script>

<style scoped>
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
