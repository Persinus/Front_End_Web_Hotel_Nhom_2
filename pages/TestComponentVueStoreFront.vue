<template>
  <div class="ui-demo-layout">
    <aside class="ui-list">
      <select v-model="selected">
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </aside>
    <main class="ui-preview">
      <component :is="selectedComponent" />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CardDetail from '@/Component_VueStoreFront/CardDetail.vue'
import RatingForm from '@/Component_VueStoreFront/RatingForm.vue'
import NewsletterBox from '@/Component_VueStoreFront/NewsletterBox.vue'
import FormFields from '~/Component_VueStoreFront/FormFields.vue'

const options = [
  { label: 'CardDetail', value: 'CardDetail' },
  { label: 'RatingForm', value: 'RatingForm' },
  { label: 'NewsletterBox', value: 'NewsletterBox' },
  { label: 'FormFields', value: 'FormFields' },
]
const selected = ref('CardDetail')

const componentsMap = {
  CardDetail,
  RatingForm,
  NewsletterBox,
  FormFields,
}

const selectedComponent = computed(() => componentsMap[selected.value ? selected.value : selected])
// Hoặc đơn giản hơn, vì selected là string:
/// const selectedComponent = computed(() => componentsMap[selected.value || selected])
// Hoặc tốt nhất:
/// const selectedComponent = computed(() => componentsMap[selected])
</script>

<style scoped>
.ui-demo-layout {
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  background: #fafbfc;
}

.ui-list {
  flex: 0 0 220px;
  height: 100vh;
  border-right: 1px solid #eee;
  padding: 32px 16px;
  background: #f5f6fa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
}

.ui-preview {
  flex: 1 1 0;
  min-width: 0;
  padding: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  overflow: auto;
  height: 100vh;
  box-sizing: border-box;
}
</style>