<template>
    <el-menu
      class="sidebar"
      :default-active="activeItem"
      @select="handleSelect"
    >
      <el-menu-item index="rooms">
        <i class="el-icon-house"></i>
        <span>Rooms</span>
      </el-menu-item>
      <el-menu-item index="receptionists">
        <i class="el-icon-user"></i>
        <span>Receptionists</span>
      </el-menu-item>
      <el-menu-item index="customers">
        <i class="el-icon-s-custom"></i>
        <span>Customers</span>
      </el-menu-item>
      <el-menu-item index="feedback">
        <i class="el-icon-chat-line-round"></i>
        <span>Feedback</span>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script setup>
  import { defineEmits } from "vue";
  
  // Emit the selected page to the parent
  const emit = defineEmits(["select"]);
  
  const handleSelect = (index) => {
    emit("select", index); // Emit the selected menu index
  };
  </script>