<template>
  <VaRating
    v-model="modelValue"
    :texts="texts"
    text-color="danger"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    texts: {
      type: Array,
      default: () => ['Bad', 'Quite bad', 'Normal', 'Not bad', 'Good'],
    },
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue(newVal) {
      this.$emit('update:modelValue', newVal)
    }
  }
};
</script>
