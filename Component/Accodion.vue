<!-- components/AccordionList.vue -->
<template>
  <VaAccordion v-model="value" class="max-w-sm">
    <VaCollapse
      v-for="(collapse, index) in collapses"
      :key="index"
      :header="collapse.title"
    >
      <template #content>
        {{ collapse.content }}
      </template>
    </VaCollapse>
  </VaAccordion>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue'

const props = defineProps({
  collapses: {
    type: Array,
    required: true,
  }
})

const { collapses } = toRefs(props)

// Tạo mảng value tương ứng số lượng collapses
const value = ref(collapses.value.map(() => false))

// Cập nhật nếu collapses thay đổi
watch(collapses, (newVal) => {
  value.value = newVal.map(() => false)
})
</script>
