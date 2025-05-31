<template>
  <div class="max-w-xs">
    <VaSelect
      v-model="modelValue"
      :options="options"
      placeholder="Select an option"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue(newVal) {
      this.$emit('update:modelValue', newVal)
    }
  }
};
</script>
