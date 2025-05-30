import { defineComponent, h } from "vue";
import ExampleComponent from "../Component_Vuestic/Toast.vue";

export default defineComponent({
  setup() {
    return {
      getMessage: () => "Message from function",
      getComponent: () => h(ExampleComponent),
    };
  },
});