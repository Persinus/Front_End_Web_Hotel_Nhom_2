import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  __name: "SetNewPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const password = ref("");
    const confirmPassword = ref("");
    const showPassword = ref(false);
    ref(false);
    const hasMinLength = computed(() => {
      return password.value.length >= 8;
    });
    const hasSpecialChar = computed(() => {
      const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      return specialChars.test(password.value);
    });
    const isFormValid = computed(() => {
      return hasMinLength.value && hasSpecialChar.value && password.value === confirmPassword.value && password.value !== "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "set-password-page min-h-screen flex items-center justify-center bg-white" }, _attrs))} data-v-1feaf0f9><div class="set-password-container max-w-md w-full px-6 py-8" data-v-1feaf0f9><div class="flex justify-center mb-6" data-v-1feaf0f9><div class="lock-icon w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center" data-v-1feaf0f9><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1feaf0f9><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-v-1feaf0f9></path></svg></div></div><h1 class="text-2xl font-semibold text-center mb-2" data-v-1feaf0f9>Set new password</h1><p class="text-center text-gray-600 text-sm mb-6" data-v-1feaf0f9> Your new password must be different to<br data-v-1feaf0f9> previously used passwords. </p><form class="space-y-4" data-v-1feaf0f9><div data-v-1feaf0f9><label for="password" class="block text-sm text-gray-700 mb-1" data-v-1feaf0f9>Password</label><input${ssrRenderAttr("type", showPassword.value ? "text" : "password")} id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", password.value, null)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500" data-v-1feaf0f9></div><div data-v-1feaf0f9><label for="confirmPassword" class="block text-sm text-gray-700 mb-1" data-v-1feaf0f9>Confirm password</label><input${ssrRenderAttr("type", showPassword.value ? "text" : "password")} id="confirmPassword"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", confirmPassword.value, null)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500" data-v-1feaf0f9></div><div class="space-y-2 mt-4" data-v-1feaf0f9><div class="flex items-center" data-v-1feaf0f9><div class="${ssrRenderClass(["w-4 h-4 rounded-full flex-shrink-0", hasMinLength.value ? "bg-purple-600" : "bg-gray-200"])}" data-v-1feaf0f9></div><span class="ml-2 text-xs text-gray-600" data-v-1feaf0f9>Must be at least 8 characters</span></div><div class="flex items-center" data-v-1feaf0f9><div class="${ssrRenderClass(["w-4 h-4 rounded-full flex-shrink-0", hasSpecialChar.value ? "bg-purple-600" : "bg-gray-200"])}" data-v-1feaf0f9></div><span class="ml-2 text-xs text-gray-600" data-v-1feaf0f9>Must contain one special character</span></div></div><button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition mt-6"${ssrIncludeBooleanAttr(!isFormValid.value) ? " disabled" : ""} data-v-1feaf0f9> Reset password </button></form><div class="mt-6 text-center" data-v-1feaf0f9><a href="/Login" class="inline-flex items-center text-sm text-gray-600 hover:text-gray-800" data-v-1feaf0f9><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-1feaf0f9><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-1feaf0f9></path></svg> Back to log in </a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SetNewPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SetNewPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1feaf0f9"]]);

export { SetNewPassword as default };
//# sourceMappingURL=SetNewPassword.vue.mjs.map
