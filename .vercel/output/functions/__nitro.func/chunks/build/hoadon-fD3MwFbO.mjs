import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import QrcodeVue from 'qrcode.vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "hoadon",
  __ssrInlineRender: true,
  setup(__props) {
    const invoiceData = ref({
      tenKhachHang: "Nguy\u1EC5n V\u0103n A",
      tenPhong: "Deluxe - P203",
      ngayNhan: "2025-04-29",
      ngayTra: "2025-05-02",
      tongTien: 24e5,
      tienDaThanhToan: 24e5
    });
    const formatCurrency = (amount) => {
      return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    };
    const generateQRCodeData = () => {
      return JSON.stringify({
        tenKhachHang: invoiceData.value.tenKhachHang,
        tenPhong: invoiceData.value.tenPhong,
        ngayNhan: invoiceData.value.ngayNhan,
        ngayTra: invoiceData.value.ngayTra,
        tongTien: invoiceData.value.tongTien,
        tienDaThanhToan: invoiceData.value.tienDaThanhToan
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_card = resolveComponent("va-card");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "invoice-page" }, _attrs))} data-v-fa51421c><div class="invoice-details" data-v-fa51421c>`);
      _push(ssrRenderComponent(_component_va_card, {
        outlined: "",
        class: "invoice-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="invoice-title" data-v-fa51421c${_scopeId}>H\xF3a \u0110\u01A1n Th\xE0nh C\xF4ng</h2><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>\u{1F464} T\xEAn Kh\xE1ch H\xE0ng:</strong> ${ssrInterpolate(invoiceData.value.tenKhachHang)}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>\u{1F3E0} Ph\xF2ng \u0110\xE3 \u0110\u1EB7t:</strong> ${ssrInterpolate(invoiceData.value.tenPhong)}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>\u{1F4C5} Ng\xE0y Nh\u1EADn Ph\xF2ng:</strong> ${ssrInterpolate(invoiceData.value.ngayNhan)}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>\u{1F4C5} Ng\xE0y Tr\u1EA3 Ph\xF2ng:</strong> ${ssrInterpolate(invoiceData.value.ngayTra)}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>\u{1F4B5} S\u1ED1 Ti\u1EC1n:</strong> ${ssrInterpolate(formatCurrency(invoiceData.value.tongTien))}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>\u{1F4B3} S\u1ED1 Ti\u1EC1n \u0110\xE3 Thanh To\xE1n:</strong> ${ssrInterpolate(formatCurrency(invoiceData.value.tienDaThanhToan))}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>\u{1F525} Tr\u1EA1ng Th\xE1i Thanh To\xE1n:</strong><span class="${ssrRenderClass(invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan ? "status-paid" : "status-unpaid")}" data-v-fa51421c${_scopeId}>${ssrInterpolate(invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan ? "\u0110\xE3 Thanh To\xE1n" : "Ch\u01B0a Thanh To\xE1n")}</span></p>`);
          } else {
            return [
              createVNode("h2", { class: "invoice-title" }, "H\xF3a \u0110\u01A1n Th\xE0nh C\xF4ng"),
              createVNode("p", null, [
                createVNode("strong", null, "\u{1F464} T\xEAn Kh\xE1ch H\xE0ng:"),
                createTextVNode(" " + toDisplayString(invoiceData.value.tenKhachHang), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "\u{1F3E0} Ph\xF2ng \u0110\xE3 \u0110\u1EB7t:"),
                createTextVNode(" " + toDisplayString(invoiceData.value.tenPhong), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "\u{1F4C5} Ng\xE0y Nh\u1EADn Ph\xF2ng:"),
                createTextVNode(" " + toDisplayString(invoiceData.value.ngayNhan), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "\u{1F4C5} Ng\xE0y Tr\u1EA3 Ph\xF2ng:"),
                createTextVNode(" " + toDisplayString(invoiceData.value.ngayTra), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "\u{1F4B5} S\u1ED1 Ti\u1EC1n:"),
                createTextVNode(" " + toDisplayString(formatCurrency(invoiceData.value.tongTien)), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "\u{1F4B3} S\u1ED1 Ti\u1EC1n \u0110\xE3 Thanh To\xE1n:"),
                createTextVNode(" " + toDisplayString(formatCurrency(invoiceData.value.tienDaThanhToan)), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "\u{1F525} Tr\u1EA1ng Th\xE1i Thanh To\xE1n:"),
                createVNode("span", {
                  class: invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan ? "status-paid" : "status-unpaid"
                }, toDisplayString(invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan ? "\u0110\xE3 Thanh To\xE1n" : "Ch\u01B0a Thanh To\xE1n"), 3)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="invoice-qr" data-v-fa51421c>`);
      _push(ssrRenderComponent(_component_va_card, {
        outlined: "",
        class: "qr-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="qr-title" data-v-fa51421c${_scopeId}>M\xE3 QR Th\xF4ng Tin H\xF3a \u0110\u01A1n</h2>`);
            _push2(ssrRenderComponent(QrcodeVue, {
              value: generateQRCodeData(),
              size: 200,
              class: "qr-code"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "qr-title" }, "M\xE3 QR Th\xF4ng Tin H\xF3a \u0110\u01A1n"),
              createVNode(QrcodeVue, {
                value: generateQRCodeData(),
                size: 200,
                class: "qr-code"
              }, null, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hoadon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hoadon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa51421c"]]);

export { hoadon as default };
//# sourceMappingURL=hoadon-fD3MwFbO.mjs.map
