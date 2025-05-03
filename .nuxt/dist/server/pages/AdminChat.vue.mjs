import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
/* empty css                */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const defaultAvatar = "https://via.placeholder.com/50";
const _sfc_main = {
  __name: "AdminChat",
  __ssrInlineRender: true,
  setup(__props) {
    const customers = ref([]);
    const selectedCustomer = ref(null);
    const messages = ref([]);
    const newMessage = ref("");
    new HubConnectionBuilder().withUrl("http://nhom2webkhachsan.runasp.net/chathub").configureLogging(LogLevel.Information).build();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-container" }, _attrs))} data-v-2ca7ad1c>`);
      if (customers.value.length > 0) {
        _push(`<div class="sidebar" data-v-2ca7ad1c><h2 data-v-2ca7ad1c>Danh sách khách hàng</h2><ul data-v-2ca7ad1c><!--[-->`);
        ssrRenderList(customers.value, (customer) => {
          var _a;
          _push(`<li class="${ssrRenderClass({ active: ((_a = selectedCustomer.value) == null ? void 0 : _a.maKhachHang) === customer.maKhachHang })}" data-v-2ca7ad1c><img${ssrRenderAttr("src", customer.hinhAnh || defaultAvatar)} alt="Avatar" class="avatar" data-v-2ca7ad1c><span data-v-2ca7ad1c>${ssrInterpolate(customer.hoTen)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div class="no-customer" data-v-2ca7ad1c><p data-v-2ca7ad1c>Không có khách hàng nào để hiển thị.</p></div>`);
      }
      if (selectedCustomer.value) {
        _push(`<div class="chat-box" data-v-2ca7ad1c><h2 data-v-2ca7ad1c>Chat với ${ssrInterpolate(selectedCustomer.value.hoTen)}</h2><div class="messages" data-v-2ca7ad1c><!--[-->`);
        ssrRenderList(messages.value, (message, index) => {
          _push(`<div class="${ssrRenderClass(message.isAdmin ? "admin-message" : "customer-message")}" data-v-2ca7ad1c>${ssrInterpolate(message.text)}</div>`);
        });
        _push(`<!--]--></div><div class="chat-input" data-v-2ca7ad1c><input type="text"${ssrRenderAttr("value", newMessage.value)} placeholder="Nhập tin nhắn..." data-v-2ca7ad1c><button data-v-2ca7ad1c>Gửi</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AdminChat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminChat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ca7ad1c"]]);
export {
  AdminChat as default
};
//# sourceMappingURL=AdminChat.vue.mjs.map
