import axios from "axios";
import { defineNuxtPlugin, useRuntimeConfig } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const axios_noAkUduv0vf78s7vht2Hls1EDqDfAXigM3_vcuRZv2s = defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: useRuntimeConfig().public.apiBase
    // Lấy URL từ runtimeConfig
  });
  return {
    provide: {
      api
      // Cung cấp api cho ứng dụng Nuxt
    }
  };
});
export {
  axios_noAkUduv0vf78s7vht2Hls1EDqDfAXigM3_vcuRZv2s as default
};
//# sourceMappingURL=axios.mjs.map
