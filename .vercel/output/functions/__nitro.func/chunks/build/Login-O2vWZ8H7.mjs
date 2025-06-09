import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, isRef, toDisplayString, ref, computed, useSSRContext } from 'vue';
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
      facebookName,
      formEmail,
      formPassword,
      showPassword,
      togglePassword,
      facebookLogin,
      isLoading,
      loginError
    } = useLogin();
    const googleLogin = () => {
      if ((void 0).google && (void 0).google.accounts && (void 0).google.accounts.id) {
        (void 0).google.accounts.id.prompt();
      } else {
        alert("Google sign-in is not available yet. Please try again later.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_button = resolveComponent("va-button");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_alert = resolveComponent("va-alert");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "login-page min-h-screen w-full flex items-center justify-center bg-cover bg-center",
        style: { "background-image": "url('/images/login-bg.jpg')" }
      }, _attrs))} data-v-3a8d647d><div class="login-modal bg-white rounded-md shadow-lg w-full max-w-md p-8 relative" data-v-3a8d647d><button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600" data-v-3a8d647d><i class="fas fa-times" data-v-3a8d647d></i></button><div class="flex justify-center mb-5" data-v-3a8d647d><div class="avatar-placeholder w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center" data-v-3a8d647d><svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-3a8d647d><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-v-3a8d647d></path></svg></div></div><div class="text-center mb-6" data-v-3a8d647d><h1 class="text-xl font-semibold" data-v-3a8d647d>Log in</h1><p class="text-sm text-gray-500 mt-1" data-v-3a8d647d> Don&#39;t have an account? <a href="/Register" class="text-gray-900 font-medium hover:underline" data-v-3a8d647d>Sign up</a></p></div>`);
      _push(ssrRenderComponent(_component_va_button, {
        class: "w-full mb-3 justify-center",
        color: "transparent",
        border: "",
        onClick: unref(facebookLogin)
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-facebook text-blue-600 me-2" data-v-3a8d647d${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-facebook text-blue-600 me-2" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log in with Facebook `);
          } else {
            return [
              createTextVNode(" Log in with Facebook ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_va_button, {
        class: "w-full mb-6 justify-center",
        color: "transparent",
        border: "",
        onClick: googleLogin
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-google text-red-500 me-2" data-v-3a8d647d${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-google text-red-500 me-2" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log in with Google `);
          } else {
            return [
              createTextVNode(" Log in with Google ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center mb-6" data-v-3a8d647d><div class="flex-grow border-t border-gray-200" data-v-3a8d647d></div><div class="mx-4 text-gray-400 text-sm" data-v-3a8d647d>OR</div><div class="flex-grow border-t border-gray-200" data-v-3a8d647d></div></div><form data-v-3a8d647d><div class="mb-4" data-v-3a8d647d><label for="email" class="block text-sm font-normal text-gray-600 mb-1" data-v-3a8d647d>Your username</label>`);
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: unref(formEmail),
        "onUpdate:modelValue": ($event) => isRef(formEmail) ? formEmail.value = $event : null,
        id: "email",
        placeholder: "Username",
        class: "w-full",
        required: ""
      }, null, _parent));
      _push(`</div><div class="mb-1" data-v-3a8d647d><label for="password" class="block text-sm font-normal text-gray-600 mb-1" data-v-3a8d647d>Your password</label>`);
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
              onClick: unref(togglePassword)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="${ssrRenderClass(unref(showPassword) ? "fa fa-eye-slash" : "fa fa-eye")}" data-v-3a8d647d${_scopeId2}></i>`);
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
                onClick: unref(togglePassword)
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
      _push(`<div class="text-right mt-1" data-v-3a8d647d><a href="/ForgotPass" class="text-xs text-gray-600 hover:underline" data-v-3a8d647d>Forgot your password?</a></div></div>`);
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
        color: "#f0f0f0",
        "text-color": "#333",
        loading: unref(isLoading),
        disabled: unref(isLoading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isLoading) ? "Logging in..." : "Log in")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isLoading) ? "Logging in..." : "Log in"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (unref(email) || unref(facebookName)) {
        _push(ssrRenderComponent(_component_va_alert, {
          class: "mt-4",
          color: "success",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p data-v-3a8d647d${_scopeId}>${ssrInterpolate(unref(email))}</p><p data-v-3a8d647d${_scopeId}>${ssrInterpolate(unref(facebookName))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(unref(email)), 1),
                createVNode("p", null, toDisplayString(unref(facebookName)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a8d647d"]]);

export { Login as default };
//# sourceMappingURL=Login-O2vWZ8H7.mjs.map
