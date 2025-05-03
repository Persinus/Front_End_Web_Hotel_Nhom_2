import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const wheelBackground = "https://i.imgur.com/MRyOcpy.png";
const _sfc_main = {
  __name: "trangchoigame",
  __ssrInlineRender: true,
  setup(__props) {
    const rotation = ref(0);
    ref(0);
    ref(0);
    const history = ref([]);
    const showHistory = ref(false);
    const showGuide = ref(false);
    const showPrizeModal = ref(false);
    const currentPrize = ref(0);
    ref(false);
    const prizes = [
      { name: "Gấu bông tự chọn", img: "https://i.pinimg.com/474x/c1/55/51/c15551371c0606d1a7dc7963b132066c.jpg" },
      { name: "Bánh kem", img: "https://i.pinimg.com/474x/3c/92/af/3c92aff4aca619b833b4c2561f682c71.jpg" },
      { name: "Nước ngọt", img: "https://i.pinimg.com/474x/d9/90/b4/d990b4e3fafb7073f2ab7241e48aea0b.jpg" },
      { name: "Trà sữa", img: "https://i.pinimg.com/474x/ce/7d/a4/ce7da4eb27d85e6dba3d0ab5691f12ca.jpg" },
      { name: "Ốp điện thoại", img: "https://i.pinimg.com/474x/bb/6c/ad/bb6cad0667fbb72af4181010254b8375.jpg" },
      { name: "Phiếu spa mini miễn phí", img: "https://i.imgur.com/QzG1Svt.png" },
      { name: "Cốc sứ dễ thương", img: "https://i.imgur.com/Y3RYJWz.png" },
      { name: "Quạt điện dễ thương", img: "https://i.imgur.com/MRyOcpy.png" }
      // Lặp lại hình nền
    ];
    const spinButtonStyle = ref({
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      opacity: "1",
      boxShadow: "0 5px 1.5px #999",
      transform: "translate(0%, 0%)",
      pointerEvents: "auto"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-d547d9fe><img id="hand" src="https://i.imgur.com/vJx9k4T.png" alt="Hand" data-v-d547d9fe><img id="wheel" style="${ssrRenderStyle({ transform: `rotate(${rotation.value}deg)` })}"${ssrRenderAttr("src", wheelBackground)} alt="Wheel" data-v-d547d9fe><div id="button" style="${ssrRenderStyle(spinButtonStyle.value)}" data-v-d547d9fe>SPIN</div><div id="button2" data-v-d547d9fe>HISTORY</div><div id="guide" data-v-d547d9fe>HƯỚNG DẪN</div><div id="history" class="${ssrRenderClass({ hide: !showHistory.value })}" data-v-d547d9fe><div id="historytext" data-v-d547d9fe>${ssrInterpolate(history.value.join("\n"))}</div></div>`);
      if (showGuide.value) {
        _push(`<div class="modal" data-v-d547d9fe><div class="modal-content" data-v-d547d9fe><h2 data-v-d547d9fe>🎯 Phần Thưởng Mini Game</h2><ul data-v-d547d9fe><!--[-->`);
        ssrRenderList(prizes, (prize, index) => {
          _push(`<li data-v-d547d9fe><img${ssrRenderAttr("src", prize.img)} class="pic" alt="Prize" data-v-d547d9fe> ➔ ${ssrInterpolate(prize.name)}</li>`);
        });
        _push(`<!--]--></ul><button data-v-d547d9fe>Đóng</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showPrizeModal.value) {
        _push(`<div class="prize-modal" data-v-d547d9fe><div class="prize-content" data-v-d547d9fe><h2 data-v-d547d9fe>🎉 Bạn nhận được!</h2><img${ssrRenderAttr("src", (_a = prizes[currentPrize.value - 1]) == null ? void 0 : _a.img)} class="prize-img" alt="Prize" data-v-d547d9fe><p class="prize-name" data-v-d547d9fe>${ssrInterpolate((_b = prizes[currentPrize.value - 1]) == null ? void 0 : _b.name)}</p><button data-v-d547d9fe>Chơi lại</button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trangchoigame.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trangchoigame = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d547d9fe"]]);

export { trangchoigame as default };
//# sourceMappingURL=trangchoigame.vue.mjs.map
