<template>
  <VaAlert :description="description" />
</template>

<script setup>
defineProps({
  description: {
    type: String,
    default: '',
  }
})
</script>
