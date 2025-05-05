import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useThemeStore } from "../store/DarkMode.mjs";
/* empty css             */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    const navItems = [
      { title: "Trang chủ", link: "/" },
      { title: "Đặt phòng", link: "/Phong" },
      { title: "Dịch vụ", link: "/DichVu" },
      { title: "Nội quy", link: "/HotelRegulations" },
      { title: "Game", link: "/Trangchoigame" }
    ];
    const isMenuOpen = ref(false);
    const isSettingsDropdownOpen = ref(false);
    const selectedLanguage = ref("vi");
    const isLoggedIn = ref(false);
    const username = ref("Nguyễn Văn A");
    const closeMenu = () => {
      isMenuOpen.value = false;
    };
    const isDarkMode = computed(() => theme.isDarkMode);
    const toggleDarkMode = () => {
      theme.toggleDarkMode();
    };
    const changeLanguage = () => {
      console.log(`Language changed to: ${selectedLanguage.value}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_va_switch = resolveComponent("va-switch");
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", { "dark": unref(theme).isDarkMode }]
      }, _attrs))} data-v-4600a3da><div class="container" data-v-4600a3da>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "logo",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`🏨 OceanView`);
          } else {
            return [
              createTextVNode("🏨 OceanView")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="menu-toggle" data-v-4600a3da><span class="menu-icon" data-v-4600a3da></span></button><nav class="${ssrRenderClass(["nav", { "nav-open": isMenuOpen.value }])}" data-v-4600a3da><ul class="nav-list" data-v-4600a3da><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li class="nav-item" data-v-4600a3da>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link",
          to: item.link,
          "active-class": "active",
          "exact-active-class": "active",
          onClick: closeMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><div class="auth-section" data-v-4600a3da>`);
      if (!isLoggedIn.value) {
        _push(`<div class="auth-buttons" data-v-4600a3da>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "btn btn-outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Đăng nhập`);
            } else {
              return [
                createTextVNode("Đăng nhập")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="user-avatar" data-v-4600a3da><img src="https://i.imgur.com/6VBx3io.png" alt="Avatar" class="avatar" data-v-4600a3da><span class="username" data-v-4600a3da>${ssrInterpolate(username.value)}</span></div>`);
      }
      _push(`</div><div class="settings-dropdown" data-v-4600a3da><button class="settings-icon" data-v-4600a3da><span class="gear-icon" data-v-4600a3da>⚙️</span></button>`);
      if (isSettingsDropdownOpen.value) {
        _push(`<div class="settings-menu" data-v-4600a3da><div class="settings-item" data-v-4600a3da><label for="darkModeSwitch" data-v-4600a3da>Chế độ tối:</label>`);
        _push(ssrRenderComponent(_component_va_switch, {
          id: "darkModeSwitch",
          modelValue: isDarkMode.value,
          "onUpdate:modelValue": ($event) => isDarkMode.value = $event,
          onChange: toggleDarkMode
        }, null, _parent));
        _push(`<div class="va-text-center" data-v-4600a3da></div></div><div class="settings-item" data-v-4600a3da><label for="languageSwitch" data-v-4600a3da>Ngôn ngữ:</label>`);
        _push(ssrRenderComponent(_component_va_switch, {
          id: "languageSwitch",
          modelValue: selectedLanguage.value,
          "onUpdate:modelValue": ($event) => selectedLanguage.value = $event,
          "true-label": "Tiếng Việt",
          "false-label": "English",
          onChange: changeLanguage
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4600a3da"]]);
export {
  TheHeader as default
};
//# sourceMappingURL=Header.vue.mjs.map
