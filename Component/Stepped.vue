<template>
  <VaStepper
    v-model="modelValue"
    :steps="steps"
  >
    <template #step-content-0>
      <slot name="step-content-0" />
    </template>
    <template #step-content-1>
      <slot name="step-content-1" />
    </template>
    <template #step-content-2>
      <slot name="step-content-2" />
    </template>
    <template #step-content-3>
      <slot name="step-content-3" />
    </template>
  </VaStepper>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

// Define a local Step type for the steps prop
type Step = {
  label: string
  // Add other properties if needed
}

const props = defineProps<{
  modelValue: number,
  steps: Step[]
}>()

const emit = defineEmits(['update:modelValue'])

function updateValue(val: number) {
  emit('update:modelValue', val)
}
</script>
