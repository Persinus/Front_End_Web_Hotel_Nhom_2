import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "../../utils/axiosBase.mjs";
/* empty css                        */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "[maChiTietDichVu]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const service = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      if (service.value && service.value.donGia) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-detail-container" }, _attrs))} data-v-2b3f92c2><h1 class="service-title" data-v-2b3f92c2>${ssrInterpolate(service.value.tenDichVu)}</h1><img${ssrRenderAttr("src", service.value.urlAnh)} alt="Hình ảnh dịch vụ" class="service-image" data-v-2b3f92c2><p class="service-price" data-v-2b3f92c2>${ssrInterpolate(service.value.donGia.toLocaleString())} VND / 1 đêm</p><p class="service-description" data-v-2b3f92c2>${ssrInterpolate(service.value.moTaDichVu)}</p></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-2b3f92c2><p data-v-2b3f92c2>Đang tải dữ liệu hoặc không tìm thấy dịch vụ.</p></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DichVu/[maChiTietDichVu].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _maChiTietDichVu_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b3f92c2"]]);
export {
  _maChiTietDichVu_ as default
};
//# sourceMappingURL=_maChiTietDichVu_.vue.mjs.map
