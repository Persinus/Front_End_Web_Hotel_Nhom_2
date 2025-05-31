<template>
  <VaModal v-model="modelValue" ok-text="Apply" @ok="handleOk">
    <h3 class="va-h3">{{ title }}</h3>
    <p>{{ content }}</p>
  </VaModal>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: String,
  content: String,
})

const emit = defineEmits(['update:modelValue', 'ok'])

function handleOk() {
  emit('ok')
  emit('update:modelValue', false)
}
</script>
