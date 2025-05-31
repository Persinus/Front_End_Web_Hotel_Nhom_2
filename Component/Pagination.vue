<script>
export default {
  props: {
    totalPages: {
      type: Number,
      default: 15,
    },
    modelValue: {
      type: Number,
      default: 1,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      },
    },
  },
};
</script>

<template>
  <VaPagination
    v-model="value"
    :pages="totalPages"
    :visible-pages="4"
    class="justify-center sm:justify-start"
  />
</template>
