<template>
  <div class="ui-demo-layout">
    <div class="ui-list">
      <va-select
        v-model="selected"
        :options="options"
        label="Chọn component"
        class="mb-4"
      />
    </div>
    <div class="ui-preview">
      <component :is="selectedComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Alert from '@/Component_Vuestic/Alert.vue'
import Button from '@/Component_Vuestic/Button.vue'
import Carousel from '~/Component_Vuestic/Carousel.vue'
import DataTable from '~/Component_Vuestic/DataTable.vue'
import Icon from '~/Component_Vuestic/Icon.vue'
import Modal from '@/Component_Vuestic/Modal.vue'
import TableClickable from '@/Component_Vuestic/Table_Clickable.vue'
import Label from '~/Component_Vuestic/Label.vue'
import Date_Input from '~/Component_Vuestic/Date_Input.vue'
import FileUpload from '~/Component_Vuestic/FileUpload.vue'
import Form from '~/Component_Vuestic/Form.vue'
import Radio from '~/Component_Vuestic/Radio.vue'
import Rating from '~/Component_Vuestic/Rating.vue'
import Select from '~/Component_Vuestic/Select.vue'
import Toast from '~/Component_Vuestic/Toast.vue'
import Stepped from '~/Component_Vuestic/Stepped.vue'
import Pagination from '~/Component_Vuestic/Pagination.vue'
import Counter from '~/Component_Vuestic/Counter.vue'
import Layout from '~/Component_Vuestic/Layout.vue'
import List from '~/Component_Vuestic/List.vue'



const options = [
  'Alert',
  'Button',
  'Carousel',
  'DataTable',
  'Icon',
  'Modal',
  'TableClickable',
  'Label',
  'Date_Input',
  'FileUpload',
  'Form',
  'Radio',
  'Rating',
  'Select',
  'Toast',
  'Stepped',
    'Pagination',
  
    'Layout',
    'List',
    'Toast',
    'Stepped',
    'Pagination',
    'Counter',
    'Layout',
 
]

const selected = ref('Alert')

const componentsMap = {
  Alert,
  Button,
  Carousel,
  DataTable,
  Icon,
  Modal,
  TableClickable,
  Label,
  Date_Input,
  FileUpload,
  Form,
  Radio,
  Rating,
  Select,
  Toast,
    Stepped,
    Pagination,
    Counter,
    Layout,
    List,
    
}

const selectedComponent = computed(() => componentsMap[selected.value])
</script>

<style scoped>
.ui-demo-layout {
 
  min-height: 400px;
  max-width: 900px;
  margin: 20px auto;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fafbfc;
  box-shadow: 0 2px 8px #0001;
}

.ui-list {
  flex: 0 0 200px;
  border-right: 1px solid #eee;
  padding: 32px 16px;
  background: #f5f6fa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.ui-preview {
  flex: 1;
  padding: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
}
</style>
