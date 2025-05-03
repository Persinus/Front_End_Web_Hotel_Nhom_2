<template>
    <el-dialog
      :visible="localVisible"
      :title="isEdit ? `Edit ${entityName}` : `Add ${entityName}`"
      @close="close"
    >
      <el-form :model="localForm" :rules="rules" ref="formRef">
        <template v-for="(field, index) in fields" :key="index">
          <el-form-item :label="field.label" :prop="field.prop">
            <component
              :is="field.type === 'input' ? 'el-input' : 'el-select'"
              v-model="localForm[field.prop]"
              v-bind="field.props"
            >
              <el-option
                v-for="(option, index) in field.options || []"
                :key="index"
                :label="option.label"
                :value="option.value"
              />
            </component>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="submitForm">Save</el-button>
      </div>
    </el-dialog>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  // Props được định nghĩa với "modelValue" thay vì "visible"
  const props = defineProps({
    modelValue: Boolean, // Được sử dụng cho v-model
    isEdit: Boolean,
    fields: Array,
    rules: Object,
    form: Object,
    entityName: String,
  });
  
  // Emit các sự kiện để thông báo về component cha
  const emit = defineEmits(["update:modelValue", "submit", "close"]);
  
  // Biến local để quản lý visible
  const localVisible = ref(props.modelValue);
  
  // Local copy của form để không thay đổi prop trực tiếp
  const localForm = ref({ ...props.form });
  
  const formRef = ref(null);
  
  function close() {
    emit("update:modelValue", false); // Phát sự kiện để đóng modal
    emit("close");
  }
  
  function submitForm() {
    formRef.value.validate((valid) => {
      if (valid) {
        emit("submit", { ...localForm.value }); // Gửi dữ liệu form về component cha
        close(); // Đóng modal sau khi submit
      }
    });
  }
  
  // Đồng bộ giá trị của modelValue từ cha xuống
  watch(
    () => props.modelValue,
    (newVal) => {
      localVisible.value = newVal;
    }
  );
  
  // Đồng bộ localVisible với component cha
  watch(
    () => localVisible.value,
    (newVal) => {
      emit("update:modelValue", newVal);
    }
  );
  
  // Đồng bộ dữ liệu form khi giá trị của prop form thay đổi
  watch(
    () => props.form,
    (newVal) => {
      localForm.value = { ...newVal };
    }
  );
  </script>