<template>
  <div>
    <VaCounter
      v-if="type === 'default'"
      v-model="modelValue"
      increase-icon="add_circle_outline"
      decrease-icon="remove_circle_outline"
      color="#6938D1"
    />

    <VaCounter
      v-else-if="type === 'outline1'"
      v-model="modelValue"
      outline
      increase-icon="arrow_upward"
      decrease-icon="arrow_downward"
      color="#0FB58D"
    />

    <VaCounter
      v-else-if="type === 'outline2'"
      v-model="modelValue"
      outline
      preset="secondary"
      margins="0"
      color="#262824"
      buttons
    />
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'default',
  },
  modelValue: {
    type: Number,
    default: 0,
  },
})
defineEmits(['update:modelValue'])
</script>
