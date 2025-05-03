import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
/* empty css                    */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "KhachHangChat",
  __ssrInlineRender: true,
  setup(__props) {
    const messages = ref([]);
    const newMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-container" }, _attrs))} data-v-d5b37e4d><h1 data-v-d5b37e4d>💬 Chat với Quản Trị Viên</h1><div class="chat-box" data-v-d5b37e4d><div class="messages" data-v-d5b37e4d><!--[-->`);
      ssrRenderList(messages.value, (message, index) => {
        _push(`<div class="${ssrRenderClass(message.isAdmin ? "admin-message" : "customer-message")}" data-v-d5b37e4d>${ssrInterpolate(message.text)}</div>`);
      });
      _push(`<!--]--></div><div class="chat-input" data-v-d5b37e4d><input type="text"${ssrRenderAttr("value", newMessage.value)} placeholder="Nhập tin nhắn..." data-v-d5b37e4d><button data-v-d5b37e4d>Gửi</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/KhachHangChat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const KhachHangChat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5b37e4d"]]);
export {
  KhachHangChat as default
};
//# sourceMappingURL=KhachHangChat.vue.mjs.map
