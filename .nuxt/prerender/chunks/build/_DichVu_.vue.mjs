import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import { useRoute, useRouter } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue-router/dist/vue-router.node.mjs';
import { b as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/axios/index.js';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vuestic-ui/dist/esm-node/main.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/qrcode.vue/dist/qrcode.vue.esm.js';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/element-plus/es/index.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unhead/dist/utils.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/devalue/index.js';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = {
  __name: "[DichVu]",
  __ssrInlineRender: true,
  setup(__props) {
    const service = ref({});
    ref(true);
    ref(null);
    const route = useRoute();
    const router = useRouter();
    const { $api } = useNuxtApp();
    route.params.DichVu;
    const bookService = () => {
      alert(`🎉 Bạn đã đặt dịch vụ: ${service.value.tenDichVu}`);
    };
    const goBack = () => {
      router.push("/DichVu");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_button = resolveComponent("va-button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-detail-container" }, _attrs))} data-v-469067b5><div class="service-image" data-v-469067b5><img${ssrRenderAttr("src", service.value.urlAnh)} alt="Hình ảnh dịch vụ" class="main-image" data-v-469067b5></div><div class="service-info" data-v-469067b5><h1 class="service-title" data-v-469067b5>${ssrInterpolate(service.value.tenDichVu)}</h1><p class="service-description" data-v-469067b5>${ssrInterpolate(service.value.moTaDichVu)}</p><p class="service-price" data-v-469067b5><strong data-v-469067b5>Giá:</strong>`);
      if (service.value.donGia > 0) {
        _push(`<span data-v-469067b5>${ssrInterpolate(service.value.donGia.toLocaleString())} VND</span>`);
      } else {
        _push(`<span data-v-469067b5>Miễn phí</span>`);
      }
      _push(`</p><div class="actions" data-v-469067b5>`);
      _push(ssrRenderComponent(_component_va_button, {
        color: "primary",
        class: "book-button",
        onClick: bookService
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đặt dịch vụ `);
          } else {
            return [
              createTextVNode(" Đặt dịch vụ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_va_button, {
        color: "secondary",
        class: "back-button",
        onClick: goBack
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Quay lại danh sách `);
          } else {
            return [
              createTextVNode(" Quay lại danh sách ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DichVu/[DichVu].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _DichVu_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-469067b5"]]);

export { _DichVu_ as default };
//# sourceMappingURL=_DichVu_.vue.mjs.map
