import axios from 'axios';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'https://api.example.com', // Thay bằng URL của bạn
  });

  return {
    provide: {
      axios: instance,
    },
  };
});