import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "ForgotPass",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "forgot-password-page min-h-screen flex items-center justify-center bg-white" }, _attrs))} data-v-4aa84bdd><div class="forgot-form-container max-w-md w-full p-6" data-v-4aa84bdd><div class="flex justify-center mb-6" data-v-4aa84bdd><div class="lock-icon w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center" data-v-4aa84bdd><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-4aa84bdd><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-v-4aa84bdd></path></svg></div></div><h1 class="text-2xl font-semibold text-center mb-2" data-v-4aa84bdd>Forgot password?</h1><p class="text-center text-gray-600 mb-6" data-v-4aa84bdd>No worries, we&#39;ll send you reset instructions.</p><form class="space-y-4" data-v-4aa84bdd><div data-v-4aa84bdd><label for="email" class="block text-sm text-gray-700 mb-1" data-v-4aa84bdd>Email</label><input type="email" id="email"${ssrRenderAttr("value", email.value)} required placeholder="Enter your email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" data-v-4aa84bdd></div><button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition" data-v-4aa84bdd> Reset password </button></form><div class="mt-6 text-center" data-v-4aa84bdd><a href="/Login" class="inline-flex items-center text-sm text-gray-600 hover:text-gray-800" data-v-4aa84bdd><i class="fas fa-arrow-left mr-2" data-v-4aa84bdd></i> Back to log in </a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ForgotPass.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForgotPass = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4aa84bdd"]]);

export { ForgotPass as default };
//# sourceMappingURL=ForgotPass-Cln7NnH-.mjs.map
