import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "[maChiTietDichVu]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const service = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      if (service.value && service.value.donGia) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-detail-container" }, _attrs))} data-v-2b3f92c2><h1 class="service-title" data-v-2b3f92c2>${ssrInterpolate(service.value.tenDichVu)}</h1><img${ssrRenderAttr("src", service.value.urlAnh)} alt="H\xECnh \u1EA3nh d\u1ECBch v\u1EE5" class="service-image" data-v-2b3f92c2><p class="service-price" data-v-2b3f92c2>${ssrInterpolate(service.value.donGia.toLocaleString())} VND / 1 \u0111\xEAm</p><p class="service-description" data-v-2b3f92c2>${ssrInterpolate(service.value.moTaDichVu)}</p></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-2b3f92c2><p data-v-2b3f92c2>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u ho\u1EB7c kh\xF4ng t\xECm th\u1EA5y d\u1ECBch v\u1EE5.</p></div>`);
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

export { _maChiTietDichVu_ as default };
//# sourceMappingURL=_maChiTietDichVu_-DiDi02br.mjs.map
