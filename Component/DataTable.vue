<template>
  <VaDataTable
    :items="items"
    :columns="columns"
  />
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Tên đầy đủ' },
  { key: 'username', label: 'Tên tài khoản' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'SĐT' },
  { key: 'website', label: 'Website' },
]
</script>
