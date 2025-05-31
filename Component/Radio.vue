<template>
  <div>
    <VaRadio
      v-for="option in options"
      :key="option"
      :option="option"
      :name="name"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      class="mb-2"
    />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'radio-group',
    },
  },
};
</script>
