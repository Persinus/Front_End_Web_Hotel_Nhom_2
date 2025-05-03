import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  __name: "Payment",
  __ssrInlineRender: true,
  setup(__props) {
    const order = ref({
      room: {
        name: "Suite Ocean View",
        price: 18e5
      },
      checkIn: "2025-04-20",
      checkOut: "2025-04-23",
      services: ["Ăn sáng", "Spa thư giãn"]
    });
    const method = ref("prepay");
    const gateway = ref("");
    const nights = computed(() => {
      const inDate = new Date(order.value.checkIn);
      const outDate = new Date(order.value.checkOut);
      const diff = (outDate - inDate) / (1e3 * 3600 * 24);
      return Math.max(1, diff);
    });
    const baseTotal = computed(() => {
      return order.value.room.price * nights.value;
    });
    const serviceFee = computed(() => {
      return order.value.services.length * 1e5;
    });
    const taxFee = computed(() => {
      return Math.round((baseTotal.value + serviceFee.value) * 0.1);
    });
    const total = computed(() => {
      return baseTotal.value + serviceFee.value + taxFee.value;
    });
    const status = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-page" }, _attrs))} data-v-de9b62dd><h2 data-v-de9b62dd><i class="fa-solid fa-pen-nib" data-v-de9b62dd></i> Xác nhận đơn hàng &amp; Thanh toán</h2><section class="order-summary" data-v-de9b62dd><h3 data-v-de9b62dd><i class="fa-regular fa-bookmark" data-v-de9b62dd></i> Thông tin đơn hàng</h3><p data-v-de9b62dd><strong data-v-de9b62dd>Phòng:</strong> ${ssrInterpolate(order.value.room.name)}</p><p data-v-de9b62dd><strong data-v-de9b62dd>Ngày nhận:</strong> ${ssrInterpolate(order.value.checkIn)}</p><p data-v-de9b62dd><strong data-v-de9b62dd>Ngày trả:</strong> ${ssrInterpolate(order.value.checkOut)}</p><p data-v-de9b62dd><strong data-v-de9b62dd>Số đêm:</strong> ${ssrInterpolate(nights.value)} đêm</p><ul data-v-de9b62dd><li data-v-de9b62dd><i class="fa-solid fa-check" data-v-de9b62dd></i> Giá phòng mỗi đêm: ${ssrInterpolate(order.value.room.price.toLocaleString())} VND</li>`);
      if (order.value.services.length) {
        _push(`<li data-v-de9b62dd><i class="fa-solid fa-check" data-v-de9b62dd></i> Dịch vụ kèm theo: <ul data-v-de9b62dd><!--[-->`);
        ssrRenderList(order.value.services, (svc) => {
          _push(`<li data-v-de9b62dd>${ssrInterpolate(svc)}</li>`);
        });
        _push(`<!--]--></ul></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul><p data-v-de9b62dd><i class="fa-solid fa-coins" data-v-de9b62dd></i> Thuế &amp; phí (10%): ${ssrInterpolate(taxFee.value.toLocaleString())} VND</p><p class="total" data-v-de9b62dd><i class="fa-solid fa-arrow-right" data-v-de9b62dd></i> <strong data-v-de9b62dd>Tổng cộng:</strong> ${ssrInterpolate(total.value.toLocaleString())} VND</p></section><section class="payment-methods" data-v-de9b62dd><h3 data-v-de9b62dd><i class="fa-solid fa-money-bill" data-v-de9b62dd></i> Chọn phương thức thanh toán</h3><div class="method-options" data-v-de9b62dd><button class="${ssrRenderClass({ active: method.value === "prepay" })}" data-v-de9b62dd>Trả trước</button><button class="${ssrRenderClass({ active: method.value === "postpay" })}" data-v-de9b62dd>Trả sau</button></div>`);
      if (method.value === "prepay") {
        _push(`<div class="gateway-options" data-v-de9b62dd><label data-v-de9b62dd><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "visa")) ? " checked" : ""} value="visa" data-v-de9b62dd> <i class="fa-solid fa-credit-card" data-v-de9b62dd></i> Thẻ Visa/Mastercard</label><label data-v-de9b62dd><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "momo")) ? " checked" : ""} value="momo" data-v-de9b62dd> 📱 MoMo</label><label data-v-de9b62dd><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "paypal")) ? " checked" : ""} value="paypal" data-v-de9b62dd> <i class="fa-solid fa-wallet" data-v-de9b62dd></i> PayPal</label><label data-v-de9b62dd><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "bank")) ? " checked" : ""} value="bank" data-v-de9b62dd> <i class="fa-solid fa-landmark" data-v-de9b62dd></i> Chuyển khoản ngân hàng</label></div>`);
      } else {
        _push(`<!---->`);
      }
      if (method.value === "postpay") {
        _push(`<div class="note" data-v-de9b62dd><i class="fa-solid fa-comments-dollar" data-v-de9b62dd></i> Bạn sẽ thanh toán khi nhận phòng tại khách sạn. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="confirm" data-v-de9b62dd><button class="btn-primary" data-v-de9b62dd>Xác nhận thanh toán</button></section>`);
      if (status.value === "success") {
        _push(`<div class="result success-msg" data-v-de9b62dd> ✅ Thanh toán thành công! Hóa đơn đã gửi qua email. </div>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value === "error") {
        _push(`<div class="result error-msg" data-v-de9b62dd> ❌ Thanh toán thất bại. Vui lòng thử lại hoặc chọn phương thức khác. </div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Payment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de9b62dd"]]);

export { Payment as default };
//# sourceMappingURL=Payment.vue.mjs.map
