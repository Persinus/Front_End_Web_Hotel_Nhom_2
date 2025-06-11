import { resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { s as setAuthToken } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'chokidar';
import 'anymatch';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    isLoading: false,
    error: null
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    authToken: (state) => state.token,
    userInfo: (state) => state.user,
    // Getter để trả về Bearer token format để sử dụng trong headers
    bearerToken: (state) => state.token ? `Bearer ${state.token}` : null
  },
  actions: {
    // Đăng nhập bằng email và mật khẩu
    async login(tenTaiKhoan, matKhau) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch("https://nhom2webkhachsan.runasp.net/api/allowanonymous/dangnhap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ tenTaiKhoan, matKhau })
        });
        const data = await response.json();
        if (response.ok) {
          this.setUser({ username: tenTaiKhoan });
          this.setToken(data.token);
          return { success: true };
        } else {
          this.error = data.message || "Sai t\xEAn t\xE0i kho\u1EA3n ho\u1EB7c m\u1EADt kh\u1EA9u!";
          return { success: false, error: this.error };
        }
      } catch (error) {
        this.error = "L\u1ED7i k\u1EBFt n\u1ED1i \u0111\u1EBFn m\xE1y ch\u1EE7. Vui l\xF2ng th\u1EED l\u1EA1i sau.";
        console.error("Login error:", error);
        return { success: false, error: this.error };
      } finally {
        this.isLoading = false;
      }
    },
    // Đăng nhập bằng Google
    async loginWithGoogle(googleUser) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch("https://nhom2webkhachsan.runasp.net/api/allowanonymous/dangnhapgoogle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: googleUser.email,
            googleId: googleUser.id
          })
        });
        const data = await response.json();
        if (response.ok) {
          this.setUser({
            username: googleUser.email,
            email: googleUser.email,
            name: googleUser.name,
            provider: "google"
          });
          this.setToken(data.token || "google-token");
          return { success: true };
        } else {
          this.error = data.message || "\u0110\u0103ng nh\u1EADp Google th\u1EA5t b\u1EA1i";
          return { success: false, error: this.error };
        }
      } catch (error) {
        console.error("Google login error:", error);
        this.setUser({
          username: googleUser.email,
          email: googleUser.email,
          name: googleUser.name,
          provider: "google"
        });
        this.setToken("google-token");
        return { success: true };
      } finally {
        this.isLoading = false;
      }
    },
    // Đăng nhập bằng Facebook
    async loginWithFacebook(fbUser) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch("https://nhom2webkhachsan.runasp.net/api/allowanonymous/dangnhapfacebook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: fbUser.email,
            facebookId: fbUser.id
          })
        });
        const data = await response.json();
        if (response.ok) {
          this.setUser({
            username: fbUser.email,
            email: fbUser.email,
            name: fbUser.name,
            provider: "facebook"
          });
          this.setToken(data.token || "facebook-token");
          return { success: true };
        } else {
          this.error = data.message || "\u0110\u0103ng nh\u1EADp Facebook th\u1EA5t b\u1EA1i";
          return { success: false, error: this.error };
        }
      } catch (error) {
        console.error("Facebook login error:", error);
        this.setUser({
          username: fbUser.email,
          email: fbUser.email,
          name: fbUser.name,
          provider: "facebook"
        });
        this.setToken("facebook-token");
        return { success: true };
      } finally {
        this.isLoading = false;
      }
    },
    // Đăng xuất
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("userToken");
      localStorage.removeItem("userName");
      localStorage.removeItem("userInfo");
      setAuthToken(null);
    },
    // Thiết lập thông tin người dùng
    setUser(user) {
      this.user = user;
      localStorage.setItem("userInfo", JSON.stringify(user));
      localStorage.setItem("userName", user.username);
    },
    // Thiết lập token
    setToken(token) {
      this.token = token;
      localStorage.setItem("userToken", token);
      setAuthToken(token);
    },
    // Khởi tạo trạng thái từ localStorage
    initAuth() {
      const token = localStorage.getItem("userToken");
      const userInfo = localStorage.getItem("userInfo");
      if (token) {
        this.token = token;
        setAuthToken(token);
      }
      if (userInfo) {
        try {
          this.user = JSON.parse(userInfo);
        } catch (e) {
          console.error("Error parsing user info from localStorage");
        }
      }
    }
  }
});
function useLogin() {
  const email = ref("");
  const facebookName = ref("");
  const formEmail = ref("");
  const formPassword = ref("");
  const showPassword = ref(false);
  const loginError = ref("");
  const router = useRouter();
  const authStore = useAuthStore();
  const images = [
    "https://i.pinimg.com/474x/a0/fb/38/a0fb38a030da2a14a39767bfd21d48d2.jpg",
    "https://i.pinimg.com/474x/d4/54/76/d45476a670996cd4ae936d99ad0b24e2.jpg",
    "https://i.pinimg.com/474x/f7/41/c8/f741c8636021870390f124e5acaa55e4.jpg"
  ];
  const currentImageIndex = ref(0);
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  const emailLogin = async () => {
    try {
      loginError.value = "";
      const result = await authStore.login(formEmail.value, formPassword.value);
      if (result.success) {
        email.value = `\u0110\u0103ng nh\u1EADp th\xE0nh c\xF4ng: ${formEmail.value}`;
        facebookName.value = "";
        setTimeout(() => {
          router.push("/");
        }, 1e3);
      } else {
        loginError.value = result.error;
      }
    } catch (error) {
      loginError.value = "L\u1ED7i k\u1EBFt n\u1ED1i \u0111\u1EBFn m\xE1y ch\u1EE7. Vui l\xF2ng th\u1EED l\u1EA1i sau.";
      console.error("Login error:", error);
    }
  };
  const facebookLogin = () => {
    FB.login((response) => {
      if (response.status === "connected") {
        FB.api("/me", { fields: "name,email" }, (userInfo) => {
          authStore.loginWithFacebook({
            email: userInfo.email,
            name: userInfo.name
          });
          facebookName.value = `\u0110\u0103ng nh\u1EADp Facebook: ${userInfo.name}`;
          email.value = `Email: ${userInfo.email}`;
        });
      } else {
        facebookName.value = "Ch\u01B0a \u0111\u0103ng nh\u1EADp Facebook";
      }
    }, { scope: "email" });
  };
  return {
    email,
    facebookName,
    formEmail,
    formPassword,
    images,
    currentImageIndex,
    showPassword,
    togglePassword,
    emailLogin,
    facebookLogin,
    isLoading: computed(() => authStore.isLoading),
    loginError
  };
}
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useAuthStore();
    const {
      email,
      formEmail,
      formPassword,
      showPassword,
      togglePassword,
      isLoading,
      loginError
    } = useLogin();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_input = resolveComponent("va-input");
      const _component_va_button = resolveComponent("va-button");
      const _component_va_alert = resolveComponent("va-alert");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page min-h-screen w-full flex items-center justify-center bg-cover bg-center" }, _attrs))} data-v-1fe3d8ff><div class="login-modal flex w-full max-w-3xl rounded-md shadow-lg overflow-hidden bg-white" data-v-1fe3d8ff><div class="login-left flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-1/2" data-v-1fe3d8ff><img alt="OceanView Hotels" class="mb-6 w-20 h-20 object-contain" data-v-1fe3d8ff><h2 class="text-2xl font-bold mb-2" data-v-1fe3d8ff>OceanView Hotels</h2><div class="text-lg font-semibold mb-4" data-v-1fe3d8ff>Luxury Experience</div><div class="text-base mb-1" data-v-1fe3d8ff>Ch\xE0o m\u1EEBng tr\u1EDF l\u1EA1i</div><div class="text-base" data-v-1fe3d8ff>\u0110\u0103ng nh\u1EADp \u0111\u1EC3 truy c\u1EADp t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n</div></div><div class="login-right flex flex-col justify-center w-1/2 p-8" data-v-1fe3d8ff><div class="text-center mb-6" data-v-1fe3d8ff><h1 class="text-xl font-semibold" data-v-1fe3d8ff>\u0110\u0103ng nh\u1EADp</h1><p class="text-sm text-gray-500 mt-1" data-v-1fe3d8ff> Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? <a href="/Register" class="text-blue-600 font-medium hover:underline" data-v-1fe3d8ff>\u0110\u0103ng k\xFD</a></p></div><form data-v-1fe3d8ff><div class="mb-4" data-v-1fe3d8ff><label for="email" class="block text-sm font-normal text-gray-600 mb-1" data-v-1fe3d8ff>T\xEAn \u0111\u0103ng nh\u1EADp</label>`);
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: unref(formEmail),
        "onUpdate:modelValue": ($event) => isRef(formEmail) ? formEmail.value = $event : null,
        id: "email",
        placeholder: "Username",
        class: "w-full",
        required: ""
      }, null, _parent));
      _push(`</div><div class="mb-1" data-v-1fe3d8ff><label for="password" class="block text-sm font-normal text-gray-600 mb-1" data-v-1fe3d8ff>M\u1EADt kh\u1EA9u</label>`);
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: unref(formPassword),
        "onUpdate:modelValue": ($event) => isRef(formPassword) ? formPassword.value = $event : null,
        id: "password",
        type: unref(showPassword) ? "text" : "password",
        placeholder: "Password",
        class: "w-full",
        required: ""
      }, {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_va_button, {
              icon: "",
              size: "small",
              color: "gray",
              onClick: unref(togglePassword),
              type: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="${ssrRenderClass(unref(showPassword) ? "fa fa-eye-slash" : "fa fa-eye")}" data-v-1fe3d8ff${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", {
                      class: unref(showPassword) ? "fa fa-eye-slash" : "fa fa-eye"
                    }, null, 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_va_button, {
                icon: "",
                size: "small",
                color: "gray",
                onClick: unref(togglePassword),
                type: "button"
              }, {
                default: withCtx(() => [
                  createVNode("i", {
                    class: unref(showPassword) ? "fa fa-eye-slash" : "fa fa-eye"
                  }, null, 2)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-right mt-1" data-v-1fe3d8ff><a href="/ForgotPass" class="text-xs text-gray-600 hover:underline" data-v-1fe3d8ff>Qu\xEAn m\u1EADt kh\u1EA9u?</a></div></div>`);
      if (unref(loginError)) {
        _push(ssrRenderComponent(_component_va_alert, {
          class: "mt-2 mb-2",
          color: "danger",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(loginError))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(loginError)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_va_button, {
        type: "submit",
        class: "w-full mt-4",
        color: "#0ea5e9",
        "text-color": "#fff",
        loading: unref(isLoading),
        disabled: unref(isLoading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isLoading) ? "\u0110ang \u0111\u0103ng nh\u1EADp..." : "\u0110\u0103ng nh\u1EADp")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isLoading) ? "\u0110ang \u0111\u0103ng nh\u1EADp..." : "\u0110\u0103ng nh\u1EADp"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (unref(email)) {
        _push(ssrRenderComponent(_component_va_alert, {
          class: "mt-4",
          color: "success",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-1fe3d8ff${_scopeId}>${ssrInterpolate(unref(email))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(unref(email)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1fe3d8ff"]]);

export { Login as default };
//# sourceMappingURL=Login-BX_47uG3.mjs.map
