<template>
  <VaCarousel
    v-model="modelValue"
    :items="items"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  items: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(['update:modelValue'])
</script>
