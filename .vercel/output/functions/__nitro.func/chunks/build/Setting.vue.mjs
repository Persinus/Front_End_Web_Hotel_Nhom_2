import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { a as useThemeStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';
import 'pinia';
import 'element-plus';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {
  __name: "Setting",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    const isDarkMode = computed(() => theme.isDarkMode);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "dark": unref(theme).isDarkMode }, "settings-container"]
      }, _attrs))} data-v-478fc32a><h1 data-v-478fc32a>Cài đặt</h1><div data-v-478fc32a><label for="darkModeSwitch" data-v-478fc32a>Chế độ tối:</label><input id="darkModeSwitch" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isDarkMode.value) ? ssrLooseContain(isDarkMode.value, null) : isDarkMode.value) ? " checked" : ""} data-v-478fc32a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-478fc32a"]]);

export { Setting as default };
//# sourceMappingURL=Setting.vue.mjs.map
