import { ref, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderClass } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const isLoading = ref(false);
    const message = ref("");
    const messageType = ref("");
    const errors = reactive({});
    const form = ref({
      email: "",
      tenTaiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDienThoai: "",
      diaChi: "",
      ngaySinh: "",
      gioiTinh: "Nu",
      hinhAnhUrl: "",
      canCuocCongDan: "",
      ngayTao: (/* @__PURE__ */ new Date()).toISOString()
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "register-page min-h-screen flex items-center justify-center bg-white" }, _attrs))} data-v-6ab5e924><div class="register-container max-w-5xl w-full p-6 flex flex-col md:flex-row" data-v-6ab5e924><div class="register-form w-full md:w-1/2 pr-0 md:pr-8" data-v-6ab5e924><div class="text-center md:text-left mb-6" data-v-6ab5e924><div class="avatar-placeholder w-16 h-16 bg-gray-200 rounded-full mx-auto md:mx-0 mb-4" data-v-6ab5e924></div><h1 class="text-2xl font-semibold text-gray-800" data-v-6ab5e924>Create Customer Account</h1><p class="text-sm text-gray-600 mt-1" data-v-6ab5e924> Already have an account? <a href="/login" class="text-black hover:underline" data-v-6ab5e924>Log in</a></p></div><form class="space-y-4" data-v-6ab5e924><div data-v-6ab5e924><label for="name" class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>Full Name</label><input type="text" id="name"${ssrRenderAttr("value", form.value.hoTen)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-6ab5e924>`);
      if (errors.hoTen) {
        _push(`<span class="text-red-500 text-xs" data-v-6ab5e924>${ssrInterpolate(errors.hoTen)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-6ab5e924><label for="idCard" class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>ID Card</label><input type="text" id="idCard"${ssrRenderAttr("value", form.value.canCuocCongDan)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-6ab5e924>`);
      if (errors.canCuocCongDan) {
        _push(`<span class="text-red-500 text-xs" data-v-6ab5e924>${ssrInterpolate(errors.canCuocCongDan)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-6ab5e924><label for="phone" class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>Phone Number</label><input type="tel" id="phone"${ssrRenderAttr("value", form.value.soDienThoai)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-6ab5e924>`);
      if (errors.soDienThoai) {
        _push(`<span class="text-red-500 text-xs" data-v-6ab5e924>${ssrInterpolate(errors.soDienThoai)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-6ab5e924><label for="address" class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>Address</label><input type="text" id="address"${ssrRenderAttr("value", form.value.diaChi)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-6ab5e924>`);
      if (errors.diaChi) {
        _push(`<span class="text-red-500 text-xs" data-v-6ab5e924>${ssrInterpolate(errors.diaChi)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-6ab5e924><label for="dob" class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>Date of Birth</label><input type="date" id="dob"${ssrRenderAttr("value", form.value.ngaySinh)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-6ab5e924>`);
      if (errors.ngaySinh) {
        _push(`<span class="text-red-500 text-xs" data-v-6ab5e924>${ssrInterpolate(errors.ngaySinh)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-6ab5e924><label class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>Gender</label><div class="flex items-center space-x-4" data-v-6ab5e924><label class="inline-flex items-center" data-v-6ab5e924><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.gioiTinh, "Nam")) ? " checked" : ""} value="Nam" class="form-radio" data-v-6ab5e924><span class="ml-2" data-v-6ab5e924>Male</span></label><label class="inline-flex items-center" data-v-6ab5e924><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.gioiTinh, "Nu")) ? " checked" : ""} value="Nu" class="form-radio" data-v-6ab5e924><span class="ml-2" data-v-6ab5e924>Female</span></label></div></div><div data-v-6ab5e924><label for="email" class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>Email</label><input type="email" id="email"${ssrRenderAttr("value", form.value.email)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-6ab5e924>`);
      if (errors.email) {
        _push(`<span class="text-red-500 text-xs" data-v-6ab5e924>${ssrInterpolate(errors.email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-6ab5e924><label for="username" class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>Username</label><input type="text" id="username"${ssrRenderAttr("value", form.value.tenTaiKhoan)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-6ab5e924>`);
      if (errors.tenTaiKhoan) {
        _push(`<span class="text-red-500 text-xs" data-v-6ab5e924>${ssrInterpolate(errors.tenTaiKhoan)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-6ab5e924><label for="password" class="block text-sm text-gray-700 mb-1" data-v-6ab5e924>Password</label><input type="password" id="password"${ssrRenderAttr("value", form.value.matKhau)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400" data-v-6ab5e924>`);
      if (errors.matKhau) {
        _push(`<span class="text-red-500 text-xs" data-v-6ab5e924>${ssrInterpolate(errors.matKhau)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-6ab5e924><button type="submit" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-md transition"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-6ab5e924>${ssrInterpolate(isLoading.value ? "Processing..." : "Register")}</button></div>`);
      if (message.value) {
        _push(`<div class="${ssrRenderClass(["mt-4 p-3 rounded-md", messageType.value === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"])}" data-v-6ab5e924>${ssrInterpolate(message.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div><div class="hidden md:flex w-1/2 items-center justify-center" data-v-6ab5e924><div class="geometric-illustration" data-v-6ab5e924><svg viewBox="0 0 200 200" width="300" height="300" data-v-6ab5e924><polygon points="100,10 40,180 190,60 10,60 160,180" fill="none" stroke="#000" stroke-width="1" data-v-6ab5e924></polygon></svg></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ab5e924"]]);

export { Register as default };
//# sourceMappingURL=Register-IpeaC8i8.mjs.map
