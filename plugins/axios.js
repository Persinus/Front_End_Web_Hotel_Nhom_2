// ~/plugins/axios.js
import axios from 'axios';

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: useRuntimeConfig().public.apiBase // Lấy URL từ runtimeConfig
  });

  return {
    provide: {
      api // Cung cấp api cho ứng dụng Nuxt
    }
  };
});