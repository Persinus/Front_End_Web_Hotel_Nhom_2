import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import QrcodeVue from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/qrcode.vue/dist/qrcode.vue.esm.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  __name: "hoadon",
  __ssrInlineRender: true,
  setup(__props) {
    const invoiceData = ref({
      tenKhachHang: "Nguyễn Văn A",
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
            _push2(`<h2 class="invoice-title" data-v-fa51421c${_scopeId}>Hóa Đơn Thành Công</h2><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>👤 Tên Khách Hàng:</strong> ${ssrInterpolate(invoiceData.value.tenKhachHang)}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>🏠 Phòng Đã Đặt:</strong> ${ssrInterpolate(invoiceData.value.tenPhong)}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>📅 Ngày Nhận Phòng:</strong> ${ssrInterpolate(invoiceData.value.ngayNhan)}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>📅 Ngày Trả Phòng:</strong> ${ssrInterpolate(invoiceData.value.ngayTra)}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>💵 Số Tiền:</strong> ${ssrInterpolate(formatCurrency(invoiceData.value.tongTien))}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>💳 Số Tiền Đã Thanh Toán:</strong> ${ssrInterpolate(formatCurrency(invoiceData.value.tienDaThanhToan))}</p><p data-v-fa51421c${_scopeId}><strong data-v-fa51421c${_scopeId}>🔥 Trạng Thái Thanh Toán:</strong><span class="${ssrRenderClass(invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan ? "status-paid" : "status-unpaid")}" data-v-fa51421c${_scopeId}>${ssrInterpolate(invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan ? "Đã Thanh Toán" : "Chưa Thanh Toán")}</span></p>`);
          } else {
            return [
              createVNode("h2", { class: "invoice-title" }, "Hóa Đơn Thành Công"),
              createVNode("p", null, [
                createVNode("strong", null, "👤 Tên Khách Hàng:"),
                createTextVNode(" " + toDisplayString(invoiceData.value.tenKhachHang), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "🏠 Phòng Đã Đặt:"),
                createTextVNode(" " + toDisplayString(invoiceData.value.tenPhong), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "📅 Ngày Nhận Phòng:"),
                createTextVNode(" " + toDisplayString(invoiceData.value.ngayNhan), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "📅 Ngày Trả Phòng:"),
                createTextVNode(" " + toDisplayString(invoiceData.value.ngayTra), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "💵 Số Tiền:"),
                createTextVNode(" " + toDisplayString(formatCurrency(invoiceData.value.tongTien)), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "💳 Số Tiền Đã Thanh Toán:"),
                createTextVNode(" " + toDisplayString(formatCurrency(invoiceData.value.tienDaThanhToan)), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "🔥 Trạng Thái Thanh Toán:"),
                createVNode("span", {
                  class: invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan ? "status-paid" : "status-unpaid"
                }, toDisplayString(invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan ? "Đã Thanh Toán" : "Chưa Thanh Toán"), 3)
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
            _push2(`<h2 class="qr-title" data-v-fa51421c${_scopeId}>Mã QR Thông Tin Hóa Đơn</h2>`);
            _push2(ssrRenderComponent(QrcodeVue, {
              value: generateQRCodeData(),
              size: 200,
              class: "qr-code"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "qr-title" }, "Mã QR Thông Tin Hóa Đơn"),
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
//# sourceMappingURL=hoadon.vue.mjs.map
