<template>
    <div>
      <el-header>
        <h2>{{ title }}</h2>
        <el-button type="primary" @click="onAdd">Add {{ entityName }}</el-button>
      </el-header>
  
      <el-table :data="data" style="width: 100%">
        <el-table-column
          v-for="(column, index) in columns"
          :key="index"
          :prop="column.prop"
          :label="column.label"
        />
        <el-table-column label="Actions">
          <template #default="scope">
            <el-button @click="onEdit(scope.row)" type="text">Edit</el-button>
            <el-button @click="onDelete(scope.row.id)" type="text" danger>Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    entityName: String,
    data: Array,
    columns: Array,
  });
  
  const emit = defineEmits(["add", "edit", "delete"]);
  
  function onAdd() {
    emit("add");
  }
  
  function onEdit(row) {
    emit("edit", row);
  }
  
  function onDelete(id) {
    emit("delete", id);
  }
  </script>