<template>
  <div class="w-80">
    <VaSwitch
      v-model="model.isGalleryViewEnabled"
      label="Enable gallery view"
      class="mb-6"
    />
    <VaInput
      v-model.number="model.undoDuration"
      label="Undo duration"
      class="mb-6"
    />
    <VaInput
      v-model="model.deletedFileMessage"
      label="Deleted file message"
      class="mb-6"
    />
    <VaInput
      v-model="model.undoButtonText"
      label="Cancel button text"
      class="mb-6"
    />
  </div>
  <VaFileUpload
    v-model="model.basic"
    undo
    :type="model.isGalleryViewEnabled ? 'gallery' : 'list'"
    :undo-duration="model.undoDuration"
    :undo-button-text="model.undoButtonText"
    :deleted-file-message="model.deletedFileMessage"
  />
</template>

<script setup>
import { VaFileUpload, VaInput, VaSwitch } from 'vuestic-ui'
import { toRefs, reactive, watch, defineEmits, defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const model = reactive({ ...props.modelValue })

// Khi model thay đổi trong component con thì phát sự kiện update để cha đồng bộ
watch(model, (newVal) => {
  emit('update:modelValue', { ...newVal })
}, { deep: true })

// Khi props thay đổi từ cha, cập nhật model bên trong
watch(() => props.modelValue, (newVal) => {
  Object.assign(model, newVal)
}, { deep: true })
</script>
