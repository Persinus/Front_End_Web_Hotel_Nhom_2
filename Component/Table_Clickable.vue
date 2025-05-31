<template>
  <div class="va-table-responsive">
    <table class="va-table va-table--clickable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <td>{{ user.fullName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.country }}</td>
          <td>
            <VaBadge
              :text="user.status"
              :color="user.status"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

interface User {
  id: number
  fullName: string
  email: string
  country: string
  status: string
}

const props = defineProps({
  users: {
    type: Array as PropType<User[]>,
    required: true
  }
})
</script>

<style>
.va-table-responsive {
  overflow: auto;
}
</style>
