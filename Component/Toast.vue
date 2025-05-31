<template>
  <VaButton class="mr-2 mb-2" @click="showToast">
    {{ buttonText }}
  </VaButton>
</template>

<script setup>
import { h } from 'vue'
import { toRef } from 'vue'

const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  message: {
    type: [String, Function, Object],
    required: true,
  },
  useHtml: {
    type: Boolean,
    default: false,
  },
})

const message = toRef(props, 'message')

function showToast() {
  let content
  if (typeof message.value === 'function') {
    content = message.value()
  } else {
    content = message.value
  }

  $vaToast.init({
    message: content,
    dangerouslyUseHtmlString: props.useHtml,
  })
}
</script>