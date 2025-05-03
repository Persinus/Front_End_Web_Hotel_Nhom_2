import { ref, mergeProps, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      HoTen: "",
      CanCuocCongDan: "",
      SoDienThoai: "",
      DiaChi: "",
      NgaySinh: "",
      GioiTinh: "Nu",
      NgheNghiep: "",
      TrangThai: "Hoat Dong",
      NgayTao: (/* @__PURE__ */ new Date()).toISOString(),
      Email: "",
      TenTaiKhoan: "",
      MatKhau: ""
    });
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "register-page min-h-screen flex items-center justify-center bg-white" }, _attrs))} data-v-8025a9db><div class="register-container max-w-5xl w-full p-6 flex flex-col md:flex-row" data-v-8025a9db><div class="register-form w-full md:w-1/2 pr-0 md:pr-8" data-v-8025a9db><div class="text-center md:text-left mb-6" data-v-8025a9db><div class="avatar-placeholder w-16 h-16 bg-gray-200 rounded-full mx-auto md:mx-0 mb-4" data-v-8025a9db></div><h1 class="text-2xl font-semibold text-gray-800" data-v-8025a9db>Create Customer Account</h1><p class="text-sm text-gray-600 mt-1" data-v-8025a9db> Already have an account? <a href="/login" class="text-black hover:underline" data-v-8025a9db>Log in</a></p></div><form class="space-y-4" data-v-8025a9db><div data-v-8025a9db><label for="name" class="block text-sm text-gray-700 mb-1" data-v-8025a9db>Full Name</label><input type="text" id="name"${ssrRenderAttr("value", form.value.HoTen)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-8025a9db></div><div data-v-8025a9db><label for="idCard" class="block text-sm text-gray-700 mb-1" data-v-8025a9db>ID Card</label><input type="text" id="idCard"${ssrRenderAttr("value", form.value.CanCuocCongDan)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-8025a9db></div><div data-v-8025a9db><label for="phone" class="block text-sm text-gray-700 mb-1" data-v-8025a9db>Phone Number</label><input type="tel" id="phone"${ssrRenderAttr("value", form.value.SoDienThoai)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-8025a9db></div><div data-v-8025a9db><label for="address" class="block text-sm text-gray-700 mb-1" data-v-8025a9db>Address</label><input type="text" id="address"${ssrRenderAttr("value", form.value.DiaChi)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-8025a9db></div><div data-v-8025a9db><label for="dob" class="block text-sm text-gray-700 mb-1" data-v-8025a9db>Date of Birth</label><input type="date" id="dob"${ssrRenderAttr("value", form.value.NgaySinh)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-8025a9db></div><div data-v-8025a9db><label for="email" class="block text-sm text-gray-700 mb-1" data-v-8025a9db>Email</label><input type="email" id="email"${ssrRenderAttr("value", form.value.Email)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-8025a9db></div><div data-v-8025a9db><label for="username" class="block text-sm text-gray-700 mb-1" data-v-8025a9db>Username</label><input type="text" id="username"${ssrRenderAttr("value", form.value.TenTaiKhoan)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-8025a9db></div><div data-v-8025a9db><label for="password" class="block text-sm text-gray-700 mb-1" data-v-8025a9db>Password</label><input type="password" id="password"${ssrRenderAttr("value", form.value.MatKhau)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-8025a9db></div><div data-v-8025a9db><button type="submit" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-md transition" data-v-8025a9db> Register </button></div>`);
      if (message.value) {
        _push(`<div class="mt-4 p-3 bg-green-100 text-green-800 rounded-md" data-v-8025a9db>${ssrInterpolate(message.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div><div class="hidden md:flex w-1/2 items-center justify-center" data-v-8025a9db><div class="geometric-illustration" data-v-8025a9db><svg viewBox="0 0 200 200" width="300" height="300" data-v-8025a9db><polygon points="100,10 40,180 190,60 10,60 160,180" fill="none" stroke="#000" stroke-width="1" data-v-8025a9db></polygon></svg></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8025a9db"]]);

export { Register as default };
//# sourceMappingURL=Register.vue.mjs.map
