<script setup lang="ts">
import { ref, defineProps } from 'vue'

const showSidebar = ref(false)
const page = ref(1)

const props = defineProps({
  pagesContent: {
    type: Array as () => Array<string>,
    required: true,
  },
})
</script>

<template>
  <VaLayout style="height: 500px">
    <template #top>
      <VaNavbar color="primary" class="py-2">
        <template #left>
          <VaButton
            :icon="showSidebar ? 'menu_open' : 'menu'"
            @click="showSidebar = !showSidebar"
          />
        </template>
        <template #center>
          <VaNavbarItem class="font-bold text-lg">
            LOGO
          </VaNavbarItem>
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <VaSidebar v-model="showSidebar" class="py-4" tag="nav">
        <VaSidebarItem :active="page === 1" @click="page = 1">
          <VaSidebarItemContent>
            <VaIcon name="home" />
            <VaSidebarItemTitle>Home</VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem :active="page === 2" @click="page = 2">
          <VaSidebarItemContent>
            <VaIcon name="phone" />
            <VaSidebarItemTitle>About</VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <main class="p-4" v-html="pagesContent[page - 1]" />
    </template>
  </VaLayout>
</template>
