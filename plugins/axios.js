// ~/plugins/axios.js
import { axiosBase } from '../utils/axiosBase';

export default defineNuxtPlugin((nuxtApp) => {
  // Interceptor để thêm Bearer token vào mỗi request
  axiosBase.interceptors.request.use(config => {
    // Sử dụng localStorage để lấy token vì Pinia store có thể chưa khởi tạo
    const token = localStorage.getItem('userToken');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  }, error => {
    return Promise.reject(error);
  });

  return {
    provide: {
      api: axiosBase // Cung cấp axiosBase cho ứng dụng Nuxt
    }
  };
});