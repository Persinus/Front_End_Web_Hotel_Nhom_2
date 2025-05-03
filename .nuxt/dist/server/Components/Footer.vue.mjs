import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../Assets/logo.png.mjs";
/* empty css             */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-088b3d70><div class="footer-container" data-v-088b3d70><div class="footer-section company-info" data-v-088b3d70><img${ssrRenderAttr("src", _imports_0)} alt="Logo Mixivivu" class="logo" data-v-088b3d70><p data-v-088b3d70>Công ty TNHH Du Lịch và Dịch Vụ Mixivivu</p><p data-v-088b3d70> Tầng 7, số nhà 25, ngõ 38 phố Yên Lãng,<br data-v-088b3d70> phường Láng Hạ, quận Đống Đa, TP. Hà Nội </p><p data-v-088b3d70> Mã số doanh nghiệp: 0110376372<br data-v-088b3d70> do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 05/06/2023 </p></div><div class="footer-section" data-v-088b3d70><h3 data-v-088b3d70>Giới thiệu</h3><ul data-v-088b3d70><li data-v-088b3d70><a href="/about" data-v-088b3d70>Về chúng tôi</a></li><li data-v-088b3d70><a href="/terms" data-v-088b3d70>Điều khoản và điều kiện</a></li><li data-v-088b3d70><a href="/privacy" data-v-088b3d70>Chính sách riêng tư</a></li><li data-v-088b3d70><a href="/guide" data-v-088b3d70>Hướng dẫn sử dụng</a></li><li data-v-088b3d70><a href="/payment" data-v-088b3d70>Hình thức thanh toán</a></li><li data-v-088b3d70><a href="/contact" data-v-088b3d70>Liên hệ</a></li></ul></div><div class="footer-section" data-v-088b3d70><h3 data-v-088b3d70>Điểm đến</h3><ul data-v-088b3d70><li data-v-088b3d70><a href="/ha-long" data-v-088b3d70>Hạ Long</a></li><li data-v-088b3d70><a href="/ha-noi" data-v-088b3d70>Hà Nội</a></li><li data-v-088b3d70><a href="/sapa" data-v-088b3d70>Sapa</a></li><li data-v-088b3d70><a href="/ninh-binh" data-v-088b3d70>Ninh Bình</a></li><li data-v-088b3d70><a href="/da-nang" data-v-088b3d70>Đà Nẵng</a></li><li data-v-088b3d70><a href="/da-lat" data-v-088b3d70>Đà Lạt</a></li><li data-v-088b3d70><a href="/nha-trang" data-v-088b3d70>Nha Trang</a></li><li data-v-088b3d70><a href="/phu-quoc" data-v-088b3d70>Phú Quốc</a></li><li data-v-088b3d70><a href="/quy-nhon" data-v-088b3d70>Quy Nhơn</a></li></ul></div><div class="footer-section" data-v-088b3d70><h3 data-v-088b3d70>Khách sạn</h3><ul data-v-088b3d70><li data-v-088b3d70><a href="/blog" data-v-088b3d70>Blog</a></li><li data-v-088b3d70><a href="/rules" data-v-088b3d70>Quy định chung và lưu ý</a></li><li data-v-088b3d70><a href="/faq" data-v-088b3d70>Câu hỏi thường gặp</a></li></ul></div></div><div class="footer-bottom" data-v-088b3d70><p data-v-088b3d70>Hotline: 0922222016 | Email: info@mixivivu.com</p></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-088b3d70"]]);
export {
  TheFooter as default
};
//# sourceMappingURL=Footer.vue.mjs.map
