import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  __name: "CheckYourEmail",
  __ssrInlineRender: true,
  setup(__props) {
    ref("olivia@untitledui.com");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "check-email-page min-h-screen flex items-center justify-center bg-white" }, _attrs))} data-v-9507c7f3><div class="check-email-container max-w-md w-full px-6 py-12 text-center" data-v-9507c7f3><div class="email-icon-container flex justify-center mb-6" data-v-9507c7f3><div class="email-icon w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center" data-v-9507c7f3><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-9507c7f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-9507c7f3></path></svg></div></div><h1 class="text-2xl font-semibold text-gray-900 mb-2" data-v-9507c7f3>Check your email</h1><p class="text-gray-600 mb-6" data-v-9507c7f3> We sent a password reset link to<br data-v-9507c7f3><span class="text-gray-900 font-medium" data-v-9507c7f3>olivia@untitledui.com</span></p><button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-md transition mb-6" data-v-9507c7f3> Open email app </button><p class="text-sm text-gray-600 mb-6" data-v-9507c7f3> Didn&#39;t receive the email? <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium" data-v-9507c7f3>Click to resend</a></p><div class="flex justify-center" data-v-9507c7f3><a href="/Login" class="inline-flex items-center text-sm text-gray-600 hover:text-gray-800" data-v-9507c7f3><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-9507c7f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-9507c7f3></path></svg> Back to log in </a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/CheckYourEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckYourEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9507c7f3"]]);

export { CheckYourEmail as default };
//# sourceMappingURL=CheckYourEmail.vue.mjs.map
