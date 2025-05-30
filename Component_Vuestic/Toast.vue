<template>
  <VaButton
    class="mr-2 mb-2"
    @click="$vaToast.init('Hello')"
  >
    Basic notification
  </VaButton>

  <VaButton
    class="mr-2 mb-2"
    @click="$vaToast.init({ message: getMessage })"
  >
    Message from function
  </VaButton>

  <VaButton
    class="mr-2 mb-2"
    @click="$vaToast.init({ message: getComponent() })"
  >
    Message from render
  </VaButton>

  <VaButton
    class="mb-2"
    @click="
      $vaToast.init({
        message:
          '<em>Message</em> <span style=\'color: var(--va-danger);\'>from</span> <strong>HTML</strong>',
        dangerouslyUseHtmlString: true,
      })
    "
  >
    Message from html
  </VaButton>
</template>

<script setup>
import { h } from 'vue'

function getMessage() {
  return 'Message from function'
}

function getComponent() {
  // Replace this with your custom component if needed
  return h('span', { style: 'color: var(--va-primary);' }, 'Message from render')
}
</script>
