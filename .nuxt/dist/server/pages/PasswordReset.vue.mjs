import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
/* empty css                    */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "PasswordReset",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "password-reset-page min-h-screen flex items-center justify-center bg-white" }, _attrs))} data-v-362e5532><div class="password-reset-container max-w-md w-full px-6 py-8 text-center" data-v-362e5532><div class="flex justify-center mb-6" data-v-362e5532><div class="success-icon w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center" data-v-362e5532><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-362e5532><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-362e5532></path></svg></div></div><h1 class="text-2xl font-semibold text-gray-900 mb-2" data-v-362e5532>Password reset</h1><p class="text-gray-600 mb-8" data-v-362e5532> Your password has been successfully reset.<br data-v-362e5532> Click below to log in magically. </p><button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition mb-6" data-v-362e5532> Continue </button><div class="flex justify-center" data-v-362e5532><a href="/Login" class="inline-flex items-center text-sm text-gray-600 hover:text-gray-800" data-v-362e5532><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-362e5532><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-362e5532></path></svg> Back to log in </a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/PasswordReset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PasswordReset = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-362e5532"]]);
export {
  PasswordReset as default
};
//# sourceMappingURL=PasswordReset.vue.mjs.map
