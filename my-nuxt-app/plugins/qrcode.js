import QRCodeVue from 'qrcode.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('QRCodeVue', QRCodeVue);
});
