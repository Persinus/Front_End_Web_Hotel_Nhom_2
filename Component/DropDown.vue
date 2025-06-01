<template>
  <div class="dropdown-wrapper" ref="wrapper">
    <div @click="toggleDropdown">
      <slot name="anchor" />
    </div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="dropdown-content"
        :style="dropdownStyle"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  offset: { type: Number, default: 0 },
  placement: { type: String, default: 'bottom-end' }
})

const isOpen = ref(false)
const wrapper = ref(null)

function toggleDropdown(e) {
  isOpen.value = !isOpen.value
}

function onClickOutside(event) {
  if (wrapper.value && !wrapper.value.contains(event.target)) {
    isOpen.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', onClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})

// Simple placement logic
const dropdownStyle = computed(() => {
  let style = `margin-top:${props.offset}px;`
  if (props.placement.includes('top')) {
    style = `bottom:100%;${props.placement.includes('end') ? 'right:0;' : 'left:0;'}margin-bottom:${props.offset}px;`
  } else {
    style += props.placement.includes('end') ? 'right:0;' : 'left:0;'
  }
  return style
})
</script>

<style scoped>
.dropdown-wrapper {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  position: absolute;
  min-width: 180px;
  background: #fff;
  color: #222;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0002;
  z-index: 1001;
  padding: 8px 0;
}
.header.dark .dropdown-content,
.dark .dropdown-content {
  background: #23272f;
  color: #fff;
  border-color: #444;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>