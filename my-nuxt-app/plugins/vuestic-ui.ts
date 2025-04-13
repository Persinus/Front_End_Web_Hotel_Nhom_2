import { defineNuxtPlugin } from '#app';
import { createVuestic} from 'vuestic-ui';
import 'vuestic-ui/dist/vuestic-ui.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createVuestic());
});
