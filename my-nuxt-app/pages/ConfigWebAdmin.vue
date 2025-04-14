<template>
  <div class="admin-page">
    <!-- Sidebar for Navigation -->
    <Sidebar @select="currentPage = $event" />

    <!-- Main Content Area -->
    <div class="content">
      <!-- Rooms Management -->
      <AdminTable
        v-if="currentPage === 'rooms'"
        :title="'Room Management'"
        :entityName="'Room'"
        :data="rooms"
        :columns="roomColumns"
        @add="onAddRoom"
        @edit="onEditRoom"
        @delete="onDeleteRoom"
      />

      <!-- Customers Management -->
      <AdminTable
        v-if="currentPage === 'customers'"
        :title="'Customer Management'"
        :entityName="'Customer'"
        :data="customers"
        :columns="customerColumns"
        @add="onAddCustomer"
        @edit="onEditCustomer"
        @delete="onDeleteCustomer"
      />

      <!-- Add/Edit Modal -->
      <AddEditModal
        v-model:modelValue="showModal"
        :isEdit="isEdit"
        :form="form"
        :fields="fields"
        :rules="rules"
        :entityName="currentPage === 'rooms' ? 'Room' : 'Customer'"
        @submit="saveEntity"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import AdminTable from "./components/AdminTable.vue";
import AddEditModal from "./components/Modals/AddEditModal.vue";

// State Management for Current Page
const currentPage = ref("rooms");

// Modal Visibility and Form Data
const showModal = ref(false);
const isEdit = ref(false);
const form = ref({ id: null, name: "", type: "", status: "" });

// Sample Room Data
const rooms = ref([
  { id: 1, name: "Room 101", type: "Single", status: "Available" },
  { id: 2, name: "Room 102", type: "Double", status: "Occupied" },
]);

// Sample Customer Data
const customers = ref([
  { id: 1, name: "John Doe", email: "johndoe@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", email: "janesmith@example.com", phone: "987-654-3210" },
]);

// Room Table Columns
const roomColumns = [
  { label: "ID", prop: "id" },
  { label: "Name", prop: "name" },
  { label: "Type", prop: "type" },
  { label: "Status", prop: "status" },
];

// Customer Table Columns
const customerColumns = [
  { label: "ID", prop: "id" },
  { label: "Name", prop: "name" },
  { label: "Email", prop: "email" },
  { label: "Phone", prop: "phone" },
];

// Add/Edit Modal Fields
const fields = ref([]);

// Add a New Room or Customer
function onAddEntity() {
  form.value = currentPage.value === "rooms"
    ? { id: null, name: "", type: "", status: "" }
    : { id: null, name: "", email: "", phone: "" };

  fields.value = currentPage.value === "rooms"
    ? [
        { label: "Name", prop: "name", type: "input" },
        {
          label: "Type",
          prop: "type",
          type: "select",
          options: [
            { label: "Single", value: "single" },
            { label: "Double", value: "double" },
            { label: "Suite", value: "suite" },
          ],
        },
        {
          label: "Status",
          prop: "status",
          type: "select",
          options: [
            { label: "Available", value: "available" },
            { label: "Occupied", value: "occupied" },
          ],
        },
      ]
    : [
        { label: "Name", prop: "name", type: "input" },
        { label: "Email", prop: "email", type: "input" },
        { label: "Phone", prop: "phone", type: "input" },
      ];

  isEdit.value = false;
  showModal.value = true;
}

// Edit an Existing Room or Customer
function onEditEntity(row) {
  form.value = { ...row };
  fields.value = currentPage.value === "rooms"
    ? [
        { label: "Name", prop: "name", type: "input" },
        {
          label: "Type",
          prop: "type",
          type: "select",
          options: [
            { label: "Single", value: "single" },
            { label: "Double", value: "double" },
            { label: "Suite", value: "suite" },
          ],
        },
        {
          label: "Status",
          prop: "status",
          type: "select",
          options: [
            { label: "Available", value: "available" },
            { label: "Occupied", value: "occupied" },
          ],
        },
      ]
    : [
        { label: "Name", prop: "name", type: "input" },
        { label: "Email", prop: "email", type: "input" },
        { label: "Phone", prop: "phone", type: "input" },
      ];

  isEdit.value = true;
  showModal.value = true;
}

// Save Room or Customer (Add/Edit)
function saveEntity(newEntity) {
  const targetList = currentPage.value === "rooms" ? rooms.value : customers.value;

  if (isEdit.value) {
    // Edit Existing
    const index = targetList.findIndex((item) => item.id === newEntity.id);
    if (index !== -1) targetList[index] = { ...newEntity };
  } else {
    // Add New
    const newId = targetList.length > 0 ? targetList[targetList.length - 1].id + 1 : 1;
    targetList.push({ ...newEntity, id: newId });
  }

  showModal.value = false;
}

// Delete Room or Customer
function onDeleteEntity(id) {
  const targetList = currentPage.value === "rooms" ? rooms.value : customers.value;
  const index = targetList.findIndex((item) => item.id === id);
  if (index !== -1) targetList.splice(index, 1);
}
</script>

<style>
.admin-page {
  display: flex; /* Flexbox for sidebar and content */
}

.content {
  margin-left: 250px; /* Leave space for sidebar */
  padding: 20px;
  width: calc(100% - 250px); /* Adjust content width */
}
</style>
