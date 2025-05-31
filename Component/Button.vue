<template>
  <div>
    <VaButton
      v-for="(btn, index) in buttons"
      :key="index"
      :color="btn.color"
      gradient
      class="mr-3 mb-2"
      :class="{ 'border-4 border-white': selectedIndex === index }"
      @click="$emit('update:selectedIndex', index)"
    >
      {{ btn.label }}
    </VaButton>
  </div>
</template>

<script setup>
defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  selectedIndex: {
    type: Number,
    default: 0,
  }
})

defineEmits(['update:selectedIndex'])
</script>

<style scoped>
/* Tuỳ chỉnh nút được chọn */
.border-4 {
  box-shadow: 0 0 0 2px white inset;
}
</style>
