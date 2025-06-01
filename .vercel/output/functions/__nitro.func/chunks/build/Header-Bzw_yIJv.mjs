import { _ as __nuxt_component_0 } from './nuxt-link-UMPBbWdB.mjs';
import { ref, computed, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { e as useThemeStore, f as axiosBase } from './server.mjs';
import { u as usePhanQuyenStore } from './PhanQuyenCookie-BjQyveNS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = {
  __name: "DropDown",
  __ssrInlineRender: true,
  props: {
    offset: { type: Number, default: 0 },
    placement: { type: String, default: "bottom-end" }
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const wrapper = ref(null);
    const dropdownStyle = computed(() => {
      let style = `margin-top:${props.offset}px;`;
      if (props.placement.includes("top")) {
        style = `bottom:100%;${props.placement.includes("end") ? "right:0;" : "left:0;"}margin-bottom:${props.offset}px;`;
      } else {
        style += props.placement.includes("end") ? "right:0;" : "left:0;";
      }
      return style;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "dropdown-wrapper",
        ref_key: "wrapper",
        ref: wrapper
      }, _attrs))} data-v-8d3eba3b><div data-v-8d3eba3b>`);
      ssrRenderSlot(_ctx.$slots, "anchor", {}, null, _push, _parent);
      _push(`</div>`);
      if (isOpen.value) {
        _push(`<div class="dropdown-content" style="${ssrRenderStyle(dropdownStyle.value)}" data-v-8d3eba3b>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/DropDown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DropDown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8d3eba3b"]]);
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    const navItems = [
      { title: "Trang ch\u1EE7", link: "/" },
      { title: "\u0110\u1EB7t ph\xF2ng", link: "/Phong" },
      { title: "D\u1ECBch v\u1EE5", link: "/DichVu" },
      { title: "N\u1ED9i quy", link: "/HotelRegulations" },
      { title: "Game", link: "/Trangchoigame" }
    ];
    const isMenuOpen = ref(false);
    const phanQuyenStore = usePhanQuyenStore();
    const isLoggedIn = computed(() => phanQuyenStore.isLoggedIn());
    const userProfile = ref(null);
    const isDarkMode = computed({
      get: () => theme.isDarkMode,
      set: (val) => theme.setDarkMode(val)
    });
    const toastRef = ref(null);
    const closeMenu = () => {
      isMenuOpen.value = false;
    };
    const logout = () => {
      phanQuyenStore.logout();
      userProfile.value = null;
      (void 0).location.href = "/";
    };
    const fetchProfile = async () => {
      try {
        const res = await axiosBase.get("/xacthuc/profile");
        userProfile.value = res.data.profile;
      } catch {
        userProfile.value = null;
      }
    };
    watch(isLoggedIn, (val) => {
      if (val) fetchProfile();
      else userProfile.value = null;
    });
    function handleToggleDarkMode() {
      theme.toggleDarkMode();
      if (toastRef.value) {
        toastRef.value.showToast(
          isDarkMode.value ? "\u0110\xE3 chuy\u1EC3n sang dark mode" : "\u0110\xE3 chuy\u1EC3n l\u1EA1i light mode"
        );
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_va_switch = resolveComponent("va-switch");
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", { "dark": unref(theme).isDarkMode }]
      }, _attrs))} data-v-17af181c><div class="container" data-v-17af181c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "logo",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F3E8} OceanView`);
          } else {
            return [
              createTextVNode("\u{1F3E8} OceanView")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="menu-toggle" data-v-17af181c></button><nav class="${ssrRenderClass(["nav", { "nav-open": isMenuOpen.value }])}" data-v-17af181c><ul class="nav-list" data-v-17af181c><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li class="nav-item" data-v-17af181c>`);
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
      _push(`<!--]--></ul></nav><div class="auth-section" data-v-17af181c>`);
      if (isLoggedIn.value) {
        _push(ssrRenderComponent(DropDown, { placement: "bottom-end" }, {
          anchor: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d, _e, _f;
            if (_push2) {
              _push2(`<div class="user-avatar" data-v-17af181c${_scopeId}><img${ssrRenderAttr("src", ((_a = userProfile.value) == null ? void 0 : _a.HinhAnhURL) && userProfile.value.HinhAnhURL !== "string" ? userProfile.value.HinhAnhURL : "https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg")} alt="Avatar" class="avatar" data-v-17af181c${_scopeId}><span class="username" data-v-17af181c${_scopeId}>${ssrInterpolate(((_b = userProfile.value) == null ? void 0 : _b.HoTen) || ((_c = userProfile.value) == null ? void 0 : _c.TenTaiKhoan) || "Ng\u01B0\u1EDDi d\xF9ng")}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "user-avatar" }, [
                  createVNode("img", {
                    src: ((_d = userProfile.value) == null ? void 0 : _d.HinhAnhURL) && userProfile.value.HinhAnhURL !== "string" ? userProfile.value.HinhAnhURL : "https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg",
                    alt: "Avatar",
                    class: "avatar"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "username" }, toDisplayString(((_e = userProfile.value) == null ? void 0 : _e.HoTen) || ((_f = userProfile.value) == null ? void 0 : _f.TenTaiKhoan) || "Ng\u01B0\u1EDDi d\xF9ng"), 1)
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<div class="dropdown-item" data-v-17af181c${_scopeId}><b data-v-17af181c${_scopeId}>\u{1F4E7} Email:</b> ${ssrInterpolate((_a = userProfile.value) == null ? void 0 : _a.Email)}</div><div class="dropdown-item" data-v-17af181c${_scopeId}><b data-v-17af181c${_scopeId}>\u{1F6E1}\uFE0F Vai tr\xF2:</b> ${ssrInterpolate((_b = userProfile.value) == null ? void 0 : _b.Vaitro)}</div><div class="dropdown-item" data-v-17af181c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_switch, {
                modelValue: isDarkMode.value,
                "onUpdate:modelValue": ($event) => isDarkMode.value = $event,
                onChange: handleToggleDarkMode,
                color: "primary",
                label: isDarkMode.value ? "\u{1F319} Dark mode" : "\u2600\uFE0F Light mode"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="dropdown-item" data-v-17af181c${_scopeId}><button class="btn btn-outline" data-v-17af181c${_scopeId}>\u0110\u0103ng xu\u1EA5t</button></div>`);
            } else {
              return [
                createVNode("div", { class: "dropdown-item" }, [
                  createVNode("b", null, "\u{1F4E7} Email:"),
                  createTextVNode(" " + toDisplayString((_c = userProfile.value) == null ? void 0 : _c.Email), 1)
                ]),
                createVNode("div", { class: "dropdown-item" }, [
                  createVNode("b", null, "\u{1F6E1}\uFE0F Vai tr\xF2:"),
                  createTextVNode(" " + toDisplayString((_d = userProfile.value) == null ? void 0 : _d.Vaitro), 1)
                ]),
                createVNode("div", { class: "dropdown-item" }, [
                  createVNode(_component_va_switch, {
                    modelValue: isDarkMode.value,
                    "onUpdate:modelValue": ($event) => isDarkMode.value = $event,
                    onChange: handleToggleDarkMode,
                    color: "primary",
                    label: isDarkMode.value ? "\u{1F319} Dark mode" : "\u2600\uFE0F Light mode"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                ]),
                createVNode("div", { class: "dropdown-item" }, [
                  createVNode("button", {
                    class: "btn btn-outline",
                    onClick: logout
                  }, "\u0110\u0103ng xu\u1EA5t")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/DangNhapPhu",
          class: "btn btn-outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0110\u0103ng nh\u1EADp`);
            } else {
              return [
                createTextVNode("\u0110\u0103ng nh\u1EADp")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div>`);
      if (!unref(theme).isDarkMode) {
        _push(`<div class="header-underline" data-v-17af181c></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17af181c"]]);

export { TheHeader as T };
//# sourceMappingURL=Header-Bzw_yIJv.mjs.map
