import __nuxt_component_0 from "./node_modules/nuxt/dist/pages/runtime/page.mjs";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useThemeStore } from "./store/DarkMode.mjs";
import "C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/hookable/dist/index.mjs";
import { useHead } from "./node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
import "C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/klona/dist/index.mjs";
import "C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { useLanguageStore } from "./store/Language.mjs";
const _sfc_main = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    theme.initializeDarkMode();
    const languageStore = useLanguageStore();
    languageStore.initializeLanguage();
    useHead({
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/element-plus/dist/index.css" },
        { rel: "stylesheet", href: "https://unpkg.com/vuestic-ui/dist/vuestic-ui.css" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }
      ],
      script: [
        { src: "https://cdn.tailwindcss.com" },
        { src: "https://unpkg.com/vue@3/dist/vue.global.js" },
        { src: "https://cdn.jsdelivr.net/npm/element-plus" },
        { src: "https://unpkg.com/vuestic-ui" },
        { src: "https://cdn.jsdelivr.net/npm/qrcode.vue@3.4.1/dist/qrcode.vue.browser.min.js" },
        { src: "https://cdn.jsdelivr.net/npm/chart.js" },
        { src: "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" },
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "dark": unref(theme).isDarkMode }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=app.vue.mjs.map
