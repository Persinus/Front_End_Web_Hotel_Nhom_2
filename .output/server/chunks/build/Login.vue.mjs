import { ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, isRef, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

function useLogin() {
  const email = ref("");
  const facebookName = ref("");
  const formEmail = ref("");
  const formPassword = ref("");
  const showPassword = ref(false);
  const images = [
    "https://i.pinimg.com/474x/a0/fb/38/a0fb38a030da2a14a39767bfd21d48d2.jpg",
    "https://i.pinimg.com/474x/d4/54/76/d45476a670996cd4ae936d99ad0b24e2.jpg",
    "https://i.pinimg.com/474x/f7/41/c8/f741c8636021870390f124e5acaa55e4.jpg"
  ];
  const currentImageIndex = ref(0);
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  const emailLogin = () => {
    if (formEmail.value === "admin@example.com" && formPassword.value === "password") {
      email.value = `Đăng nhập email: ${formEmail.value}`;
      facebookName.value = "";
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };
  const facebookLogin = () => {
    FB.login((response) => {
      if (response.status === "connected") {
        FB.api("/me", { fields: "name,email" }, (userInfo) => {
          facebookName.value = `Đăng nhập Facebook: ${userInfo.name}`;
          email.value = `Email: ${userInfo.email}`;
        });
      } else {
        facebookName.value = "Chưa đăng nhập Facebook";
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
    facebookLogin
  };
}

const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      email,
      facebookName,
      formEmail,
      formPassword,
      showPassword,
      togglePassword,
      facebookLogin
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
      }, _attrs))} data-v-2a492e54><div class="login-modal bg-white rounded-md shadow-lg w-full max-w-md p-8 relative" data-v-2a492e54><button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600" data-v-2a492e54><i class="fas fa-times" data-v-2a492e54></i></button><div class="flex justify-center mb-5" data-v-2a492e54><div class="avatar-placeholder w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center" data-v-2a492e54><svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-2a492e54><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-v-2a492e54></path></svg></div></div><div class="text-center mb-6" data-v-2a492e54><h1 class="text-xl font-semibold" data-v-2a492e54>Log in</h1><p class="text-sm text-gray-500 mt-1" data-v-2a492e54> Don&#39;t have an account? <a href="/Register" class="text-gray-900 font-medium hover:underline" data-v-2a492e54>Sign up</a></p></div>`);
      _push(ssrRenderComponent(_component_va_button, {
        class: "w-full mb-3 justify-center",
        color: "transparent",
        border: "",
        onClick: unref(facebookLogin)
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-facebook text-blue-600 me-2" data-v-2a492e54${_scopeId}></i>`);
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
            _push2(`<i class="fab fa-google text-red-500 me-2" data-v-2a492e54${_scopeId}></i>`);
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
      _push(`<div class="flex items-center mb-6" data-v-2a492e54><div class="flex-grow border-t border-gray-200" data-v-2a492e54></div><div class="mx-4 text-gray-400 text-sm" data-v-2a492e54>OR</div><div class="flex-grow border-t border-gray-200" data-v-2a492e54></div></div><form data-v-2a492e54><div class="mb-4" data-v-2a492e54><label for="email" class="block text-sm font-normal text-gray-600 mb-1" data-v-2a492e54>Your email</label>`);
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: unref(formEmail),
        "onUpdate:modelValue": ($event) => isRef(formEmail) ? formEmail.value = $event : null,
        id: "email",
        type: "email",
        placeholder: "Email address",
        class: "w-full",
        required: ""
      }, null, _parent));
      _push(`</div><div class="mb-1" data-v-2a492e54><label for="password" class="block text-sm font-normal text-gray-600 mb-1" data-v-2a492e54>Your password</label>`);
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
                  _push3(`<i class="${ssrRenderClass(unref(showPassword) ? "fa fa-eye-slash" : "fa fa-eye")}" data-v-2a492e54${_scopeId2}></i>`);
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
      _push(`<div class="text-right mt-1" data-v-2a492e54><a href="/ForgotPass" class="text-xs text-gray-600 hover:underline" data-v-2a492e54>Forgot your password?</a></div></div>`);
      _push(ssrRenderComponent(_component_va_button, {
        type: "submit",
        class: "w-full mt-4",
        color: "#f0f0f0",
        "text-color": "#333"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log in `);
          } else {
            return [
              createTextVNode(" Log in ")
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
              _push2(`<p data-v-2a492e54${_scopeId}>${ssrInterpolate(unref(email))}</p><p data-v-2a492e54${_scopeId}>${ssrInterpolate(unref(facebookName))}</p>`);
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
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a492e54"]]);

export { Login as default };
//# sourceMappingURL=Login.vue.mjs.map
