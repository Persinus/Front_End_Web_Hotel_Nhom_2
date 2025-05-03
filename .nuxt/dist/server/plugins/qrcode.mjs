import QrcodeVue from "qrcode.vue";
import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const qrcode_bAGVCAwEAfUpSRXAcR75PuzMz3GzrPwt05qCBPgwl6M = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("QRCodeVue", QrcodeVue);
});
export {
  qrcode_bAGVCAwEAfUpSRXAcR75PuzMz3GzrPwt05qCBPgwl6M as default
};
//# sourceMappingURL=qrcode.mjs.map
