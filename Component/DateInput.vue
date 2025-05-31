<template>
  <VaDateInput v-model="modelValue" />
</template>

<script setup>
const modelValue = defineModel() // hỗ trợ v-model từ component cha
</script>