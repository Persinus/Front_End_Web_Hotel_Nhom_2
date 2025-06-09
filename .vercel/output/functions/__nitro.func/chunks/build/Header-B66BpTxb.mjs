import { _ as __nuxt_component_0 } from './nuxt-link-UMPBbWdB.mjs';
import { ref, computed, watch, resolveComponent, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { e as useThemeStore, f as axiosBase } from './server.mjs';
import { u as usePhanQuyenStore } from './PhanQuyenCookie-BHQDydup.mjs';
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
      { title: "Trang ch\u1EE7", link: "/", icon: "home" },
      { title: "\u0110\u1EB7t ph\xF2ng", link: "/Phong", icon: "hotel" },
      { title: "D\u1ECBch v\u1EE5", link: "/DichVu", icon: "room_service" },
      { title: "N\u1ED9i quy", link: "/HotelRegulations", icon: "rule" },
      { title: "Game", link: "/Trangchoigame", icon: "games" }
    ];
    const languageOptions = [
      { text: "\u{1F1FB}\u{1F1F3} Ti\u1EBFng Vi\u1EC7t", value: "vi" },
      { text: "\u{1F1FA}\u{1F1F8} English", value: "en" },
      { text: "\u{1F1EF}\u{1F1F5} \u65E5\u672C\u8A9E", value: "ja" }
    ];
    const currencyOptions = [
      { text: "VND", value: "vnd" },
      { text: "USD", value: "usd" },
      { text: "EUR", value: "eur" }
    ];
    const isMenuOpen = ref(false);
    const isScrolled = ref(false);
    const scrollProgress = ref(0);
    const selectedLanguage = ref("vi");
    const selectedCurrency = ref("vnd");
    const showNotifications = ref(false);
    const notificationCount = ref(3);
    const notifications = ref([
      { id: 1, message: "\u0110\u1EB7t ph\xF2ng c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c x\xE1c nh\u1EADn", time: "5 ph\xFAt tr\u01B0\u1EDBc" },
      { id: 2, message: "\u01AFu \u0111\xE3i \u0111\u1EB7c bi\u1EC7t: Gi\u1EA3m 20% cho l\u1EA7n \u0111\u1EB7t ti\u1EBFp theo", time: "1 gi\u1EDD tr\u01B0\u1EDBc" },
      { id: 3, message: "Check-in s\u1EDBm \u0111\xE3 \u0111\u01B0\u1EE3c ch\u1EA5p thu\u1EADn", time: "2 gi\u1EDD tr\u01B0\u1EDBc" }
    ]);
    const phanQuyenStore = usePhanQuyenStore();
    const isLoggedIn = computed(() => phanQuyenStore.isLoggedIn());
    const userProfile = ref(null);
    const isDarkMode = computed({
      get: () => theme.isDarkMode,
      set: (val) => theme.setDarkMode(val)
    });
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_va_icon = resolveComponent("va-icon");
      const _component_va_select = resolveComponent("va-select");
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", { "dark": unref(theme).isDarkMode, "scrolled": isScrolled.value }]
      }, _attrs))} data-v-5d8f5474><div class="container" data-v-5d8f5474>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "logo",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo-icon" data-v-5d8f5474${_scopeId}><svg viewBox="0 0 24 24" class="logo-svg" data-v-5d8f5474${_scopeId}><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-5d8f5474${_scopeId}></path><path d="M12 7v5l4 2-4 2v5" data-v-5d8f5474${_scopeId}></path></svg></div><div class="logo-text" data-v-5d8f5474${_scopeId}><span class="brand-name" data-v-5d8f5474${_scopeId}>OceanView</span><span class="brand-tagline" data-v-5d8f5474${_scopeId}>Luxury Hotels</span></div>`);
          } else {
            return [
              createVNode("div", { class: "logo-icon" }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  class: "logo-svg"
                }, [
                  createVNode("path", { d: "M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" }),
                  createVNode("path", { d: "M12 7v5l4 2-4 2v5" })
                ]))
              ]),
              createVNode("div", { class: "logo-text" }, [
                createVNode("span", { class: "brand-name" }, "OceanView"),
                createVNode("span", { class: "brand-tagline" }, "Luxury Hotels")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="${ssrRenderClass([{ "active": isMenuOpen.value }, "menu-toggle"])}" data-v-5d8f5474><span class="hamburger-line" data-v-5d8f5474></span><span class="hamburger-line" data-v-5d8f5474></span><span class="hamburger-line" data-v-5d8f5474></span></button><nav class="${ssrRenderClass(["nav", { "nav-open": isMenuOpen.value }])}" data-v-5d8f5474><ul class="nav-list" data-v-5d8f5474><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li class="nav-item" data-v-5d8f5474>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link",
          to: item.link,
          "active-class": "active",
          "exact-active-class": "active",
          onClick: closeMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_va_icon, {
                name: item.icon,
                size: "small",
                class: "nav-icon"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-5d8f5474${_scopeId}>${ssrInterpolate(item.title)}</span>`);
            } else {
              return [
                createVNode(_component_va_icon, {
                  name: item.icon,
                  size: "small",
                  class: "nav-icon"
                }, null, 8, ["name"]),
                createVNode("span", null, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><div class="header-actions" data-v-5d8f5474><div class="language-selector" data-v-5d8f5474>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: selectedLanguage.value,
        "onUpdate:modelValue": ($event) => selectedLanguage.value = $event,
        options: languageOptions,
        class: "language-select",
        preset: "bordered",
        "max-visible-options": 3
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_va_icon, {
              name: "language",
              size: "small"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_va_icon, {
                name: "language",
                size: "small"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="currency-selector" data-v-5d8f5474>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: selectedCurrency.value,
        "onUpdate:modelValue": ($event) => selectedCurrency.value = $event,
        options: currencyOptions,
        class: "currency-select",
        preset: "bordered",
        "max-visible-options": 3
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_va_icon, {
              name: "attach_money",
              size: "small"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_va_icon, {
                name: "attach_money",
                size: "small"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="theme-toggle"${ssrRenderAttr("title", isDarkMode.value ? "Chuy\u1EC3n sang Light Mode" : "Chuy\u1EC3n sang Dark Mode")} data-v-5d8f5474>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: isDarkMode.value ? "light_mode" : "dark_mode"
      }, null, _parent));
      _push(`</button>`);
      if (isLoggedIn.value) {
        _push(`<div class="notifications" data-v-5d8f5474><button class="notification-btn" data-v-5d8f5474>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "notifications" }, null, _parent));
        if (notificationCount.value > 0) {
          _push(`<span class="notification-badge" data-v-5d8f5474>${ssrInterpolate(notificationCount.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
        if (showNotifications.value) {
          _push(`<div class="notification-dropdown" data-v-5d8f5474><div class="notification-header" data-v-5d8f5474><h4 data-v-5d8f5474>Th\xF4ng b\xE1o</h4><button class="mark-all-read" data-v-5d8f5474>\u0110\xE1nh d\u1EA5u \u0111\xE3 \u0111\u1ECDc</button></div><div class="notification-list" data-v-5d8f5474><!--[-->`);
          ssrRenderList(notifications.value, (notification) => {
            _push(`<div class="notification-item" data-v-5d8f5474><div class="notification-content" data-v-5d8f5474><p data-v-5d8f5474>${ssrInterpolate(notification.message)}</p><span class="notification-time" data-v-5d8f5474>${ssrInterpolate(notification.time)}</span></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="auth-section" data-v-5d8f5474>`);
      if (isLoggedIn.value) {
        _push(ssrRenderComponent(DropDown, {
          placement: "bottom-end",
          class: "user-dropdown"
        }, {
          anchor: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (_push2) {
              _push2(`<div class="user-avatar" data-v-5d8f5474${_scopeId}><div class="avatar-container" data-v-5d8f5474${_scopeId}><img${ssrRenderAttr("src", ((_a = userProfile.value) == null ? void 0 : _a.HinhAnhURL) && userProfile.value.HinhAnhURL !== "string" ? userProfile.value.HinhAnhURL : "https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg")} alt="Avatar" class="avatar" data-v-5d8f5474${_scopeId}><div class="status-indicator online" data-v-5d8f5474${_scopeId}></div></div><div class="user-info" data-v-5d8f5474${_scopeId}><span class="username" data-v-5d8f5474${_scopeId}>${ssrInterpolate(((_b = userProfile.value) == null ? void 0 : _b.HoTen) || ((_c = userProfile.value) == null ? void 0 : _c.TenTaiKhoan) || "Ng\u01B0\u1EDDi d\xF9ng")}</span><span class="user-role" data-v-5d8f5474${_scopeId}>${ssrInterpolate((_d = userProfile.value) == null ? void 0 : _d.Vaitro)}</span></div>`);
              _push2(ssrRenderComponent(_component_va_icon, {
                name: "expand_more",
                size: "small",
                class: "dropdown-arrow"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "user-avatar" }, [
                  createVNode("div", { class: "avatar-container" }, [
                    createVNode("img", {
                      src: ((_e = userProfile.value) == null ? void 0 : _e.HinhAnhURL) && userProfile.value.HinhAnhURL !== "string" ? userProfile.value.HinhAnhURL : "https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg",
                      alt: "Avatar",
                      class: "avatar"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "status-indicator online" })
                  ]),
                  createVNode("div", { class: "user-info" }, [
                    createVNode("span", { class: "username" }, toDisplayString(((_f = userProfile.value) == null ? void 0 : _f.HoTen) || ((_g = userProfile.value) == null ? void 0 : _g.TenTaiKhoan) || "Ng\u01B0\u1EDDi d\xF9ng"), 1),
                    createVNode("span", { class: "user-role" }, toDisplayString((_h = userProfile.value) == null ? void 0 : _h.Vaitro), 1)
                  ]),
                  createVNode(_component_va_icon, {
                    name: "expand_more",
                    size: "small",
                    class: "dropdown-arrow"
                  })
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d, _e, _f;
            if (_push2) {
              _push2(`<div class="dropdown-content" data-v-5d8f5474${_scopeId}><div class="user-profile-section" data-v-5d8f5474${_scopeId}><div class="profile-header" data-v-5d8f5474${_scopeId}><img${ssrRenderAttr("src", ((_a = userProfile.value) == null ? void 0 : _a.HinhAnhURL) || "https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg")} class="profile-avatar" data-v-5d8f5474${_scopeId}><div data-v-5d8f5474${_scopeId}><h4 data-v-5d8f5474${_scopeId}>${ssrInterpolate(((_b = userProfile.value) == null ? void 0 : _b.HoTen) || "Ng\u01B0\u1EDDi d\xF9ng")}</h4><p data-v-5d8f5474${_scopeId}>${ssrInterpolate((_c = userProfile.value) == null ? void 0 : _c.Email)}</p></div></div></div><div class="dropdown-divider" data-v-5d8f5474${_scopeId}></div><div class="dropdown-menu-items" data-v-5d8f5474${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/profile",
                class: "dropdown-item"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_va_icon, { name: "person" }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-5d8f5474${_scopeId2}>H\u1ED3 s\u01A1 c\xE1 nh\xE2n</span>`);
                  } else {
                    return [
                      createVNode(_component_va_icon, { name: "person" }),
                      createVNode("span", null, "H\u1ED3 s\u01A1 c\xE1 nh\xE2n")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/bookings",
                class: "dropdown-item"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_va_icon, { name: "hotel" }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-5d8f5474${_scopeId2}>\u0110\u1EB7t ph\xF2ng c\u1EE7a t\xF4i</span>`);
                  } else {
                    return [
                      createVNode(_component_va_icon, { name: "hotel" }),
                      createVNode("span", null, "\u0110\u1EB7t ph\xF2ng c\u1EE7a t\xF4i")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/favorites",
                class: "dropdown-item"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_va_icon, { name: "favorite" }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-5d8f5474${_scopeId2}>Y\xEAu th\xEDch</span>`);
                  } else {
                    return [
                      createVNode(_component_va_icon, { name: "favorite" }),
                      createVNode("span", null, "Y\xEAu th\xEDch")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/settings",
                class: "dropdown-item"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_va_icon, { name: "settings" }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-5d8f5474${_scopeId2}>C\xE0i \u0111\u1EB7t</span>`);
                  } else {
                    return [
                      createVNode(_component_va_icon, { name: "settings" }),
                      createVNode("span", null, "C\xE0i \u0111\u1EB7t")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="dropdown-divider" data-v-5d8f5474${_scopeId}></div><div class="dropdown-item logout-item" data-v-5d8f5474${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_icon, { name: "logout" }, null, _parent2, _scopeId));
              _push2(`<span data-v-5d8f5474${_scopeId}>\u0110\u0103ng xu\u1EA5t</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "dropdown-content" }, [
                  createVNode("div", { class: "user-profile-section" }, [
                    createVNode("div", { class: "profile-header" }, [
                      createVNode("img", {
                        src: ((_d = userProfile.value) == null ? void 0 : _d.HinhAnhURL) || "https://i.pinimg.com/736x/cd/62/46/cd624642b71af4a1d73f69b1290c751a.jpg",
                        class: "profile-avatar"
                      }, null, 8, ["src"]),
                      createVNode("div", null, [
                        createVNode("h4", null, toDisplayString(((_e = userProfile.value) == null ? void 0 : _e.HoTen) || "Ng\u01B0\u1EDDi d\xF9ng"), 1),
                        createVNode("p", null, toDisplayString((_f = userProfile.value) == null ? void 0 : _f.Email), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "dropdown-divider" }),
                  createVNode("div", { class: "dropdown-menu-items" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/profile",
                      class: "dropdown-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_va_icon, { name: "person" }),
                        createVNode("span", null, "H\u1ED3 s\u01A1 c\xE1 nh\xE2n")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "/bookings",
                      class: "dropdown-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_va_icon, { name: "hotel" }),
                        createVNode("span", null, "\u0110\u1EB7t ph\xF2ng c\u1EE7a t\xF4i")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "/favorites",
                      class: "dropdown-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_va_icon, { name: "favorite" }),
                        createVNode("span", null, "Y\xEAu th\xEDch")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "/settings",
                      class: "dropdown-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_va_icon, { name: "settings" }),
                        createVNode("span", null, "C\xE0i \u0111\u1EB7t")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "dropdown-divider" }),
                  createVNode("div", {
                    class: "dropdown-item logout-item",
                    onClick: logout
                  }, [
                    createVNode(_component_va_icon, { name: "logout" }),
                    createVNode("span", null, "\u0110\u0103ng xu\u1EA5t")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="auth-buttons" data-v-5d8f5474>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/DangNhapPhu",
          class: "btn btn-outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_va_icon, {
                name: "login",
                size: "small"
              }, null, _parent2, _scopeId));
              _push2(` \u0110\u0103ng nh\u1EADp `);
            } else {
              return [
                createVNode(_component_va_icon, {
                  name: "login",
                  size: "small"
                }),
                createTextVNode(" \u0110\u0103ng nh\u1EADp ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/DangKy",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_va_icon, {
                name: "person_add",
                size: "small"
              }, null, _parent2, _scopeId));
              _push2(` \u0110\u0103ng k\xFD `);
            } else {
              return [
                createVNode(_component_va_icon, {
                  name: "person_add",
                  size: "small"
                }),
                createTextVNode(" \u0110\u0103ng k\xFD ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div>`);
      if (isMenuOpen.value) {
        _push(`<div class="mobile-overlay" data-v-5d8f5474></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="scroll-progress" style="${ssrRenderStyle({ width: scrollProgress.value + "%" })}" data-v-5d8f5474></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d8f5474"]]);

export { TheHeader as T };
//# sourceMappingURL=Header-B66BpTxb.mjs.map
