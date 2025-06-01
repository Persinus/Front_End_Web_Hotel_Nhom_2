import { ref, computed, defineComponent, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, isRef, Fragment, renderList, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderVNode, ssrRenderComponent, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { useDisclosure, useDropdown, useTrapFocus, SfButton, SfIconMenu, SfInput, SfIconSearch, SfIconShoppingCart, SfIconFavorite, SfIconPerson, SfIconChevronRight, SfListItem, SfDrawer, SfIconClose, SfIconArrowBack, SfCounter, SfLink, SfRating, useId, SfSwitch, SfIconEmail, SfSelect, SfIconExpandMore, SfIconCheck, SfCheckbox, SfRadio, SfIconCheckCircle, SfRatingButton, SfIconSell, SfIconShoppingCartCheckout, SfIconRemove, SfIconAdd, SfIconCompareArrows, SfIconPackage, SfIconWarehouse, SfIconSafetyCheck } from '@storefront-ui/vue';
import { useCounter, unrefElement } from '@vueuse/core';
import { offset } from '@floating-ui/vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CardDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const inputId = useId();
    const min = ref(1);
    const max = ref(999);
    const { count, inc, dec, set } = useCounter(1, { min: min.value, max: max.value });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "md:max-w-[640px]" }, _attrs))}><div class="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4">`);
      _push(ssrRenderComponent(unref(SfIconSell), {
        size: "sm",
        class: "mr-1.5"
      }, null, _parent));
      _push(` Sale </div><h1 class="mb-1 font-bold typography-headline-4">Mini Foldable Drone with HD Camera FPV Wifi RC Quadcopter</h1><strong class="block font-bold typography-headline-3">$2,345.99</strong><div class="inline-flex items-center mt-4 mb-2">`);
      _push(ssrRenderComponent(unref(SfRating), {
        size: "xs",
        value: 3,
        max: 5
      }, null, _parent));
      _push(ssrRenderComponent(unref(SfCounter), {
        class: "ml-1",
        size: "xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`123`);
          } else {
            return [
              createTextVNode("123")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        variant: "secondary",
        class: "ml-2 text-xs text-neutral-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 123 reviews `);
          } else {
            return [
              createTextVNode(" 123 reviews ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="mb-4 font-normal typography-text-sm"><li>HD Pictures &amp; Videos and FPV Function</li><li>Intelligent Voice Control</li><li>Multiple Fun Flights</li><li>Easy to Use</li><li>Foldable Design &amp; Double Flight Time</li></ul><div class="py-4 mb-4 border-gray-200 border-y"><div class="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md">`);
      _push(ssrRenderComponent(unref(SfIconShoppingCartCheckout), null, null, _parent));
      _push(` 1 in cart </div><div class="items-start xs:flex"><div class="flex flex-col items-stretch xs:items-center xs:inline-flex"><div class="flex border border-neutral-300 rounded-md">`);
      _push(ssrRenderComponent(unref(SfButton), {
        variant: "tertiary",
        disabled: unref(count) <= min.value,
        square: "",
        class: "rounded-r-none p-3",
        "aria-controls": unref(inputId),
        "aria-label": "Decrease value",
        onClick: ($event) => unref(dec)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconRemove), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconRemove))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input${ssrRenderAttr("id", unref(inputId))}${ssrRenderAttr("value", unref(count))} type="number" class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:display-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:display-none [&amp;::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"${ssrRenderAttr("min", min.value)}${ssrRenderAttr("max", max.value)}>`);
      _push(ssrRenderComponent(unref(SfButton), {
        variant: "tertiary",
        disabled: unref(count) >= max.value,
        square: "",
        class: "rounded-l-none p-3",
        "aria-controls": unref(inputId),
        "aria-label": "Increase value",
        onClick: ($event) => unref(inc)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconAdd), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconAdd))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0"><strong class="text-neutral-900">${ssrInterpolate(max.value)}</strong> in stock </p></div>`);
      _push(ssrRenderComponent(unref(SfButton), {
        size: "lg",
        class: "w-full xs:ml-4"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconShoppingCart), { size: "sm" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconShoppingCart), { size: "sm" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add to cart `);
          } else {
            return [
              createTextVNode(" Add to cart ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center mt-4 gap-x-4">`);
      _push(ssrRenderComponent(unref(SfButton), {
        size: "sm",
        variant: "tertiary"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconCompareArrows), { size: "sm" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconCompareArrows), { size: "sm" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Compare `);
          } else {
            return [
              createTextVNode(" Compare ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(SfButton), {
        size: "sm",
        variant: "tertiary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconFavorite), { size: "sm" }, null, _parent2, _scopeId));
            _push2(` Add to list `);
          } else {
            return [
              createVNode(unref(SfIconFavorite), { size: "sm" }),
              createTextVNode(" Add to list ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex first:mt-4">`);
      _push(ssrRenderComponent(unref(SfIconPackage), {
        size: "sm",
        class: "flex-shrink-0 mr-1 text-neutral-500"
      }, null, _parent));
      _push(`<p class="text-sm"> Free shipping, arrives by Thu, Apr 7. Want it faster? `);
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        variant: "secondary",
        class: "mx-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add an address `);
          } else {
            return [
              createTextVNode(" Add an address ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` to see options </p></div><div class="flex mt-4">`);
      _push(ssrRenderComponent(unref(SfIconWarehouse), {
        size: "sm",
        class: "flex-shrink-0 mr-1 text-neutral-500"
      }, null, _parent));
      _push(`<p class="text-sm"> Pickup not available at your shop. `);
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        variant: "secondary",
        class: "ml-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Check availability nearby `);
          } else {
            return [
              createTextVNode(" Check availability nearby ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="flex mt-4">`);
      _push(ssrRenderComponent(unref(SfIconSafetyCheck), {
        size: "sm",
        class: "flex-shrink-0 mr-1 text-neutral-500"
      }, null, _parent));
      _push(`<p class="text-sm"> Free 30-days returns. `);
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        variant: "secondary",
        class: "ml-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Details `);
          } else {
            return [
              createTextVNode(" Details ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_VueStoreFront/CardDetail.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RatingForm",
  __ssrInlineRender: true,
  setup(__props) {
    const ratingLabelId = useId();
    const ratingModelValue = ref();
    const usernameModelValue = ref("");
    const reviewModelValue = ref("");
    const reviewCharacterLimit = ref(5e3);
    const reviewIsAboveLimit = computed(() => reviewModelValue.value.length > reviewCharacterLimit.value);
    const reviewCharsCount = computed(() => reviewCharacterLimit.value - reviewModelValue.value.length);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[376px] md:max-w-[768px]" }, _attrs))}><h3 class="font-bold py-2 pl-4 pr-3 typography-headline-4">Leave a review</h3><form class="grid grid-cols-[100px_1fr] py-2 px-4 gap-4 md:grid-cols-[176px_1fr] grid-rows-[100px_1fr] md:grid-rows-[28px_1fr] items-center md:items-start"><img src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/smartwatch.png" alt="Smartwatch" width="100" height="100" class="mx-auto border border-neutral-200 rounded-md aspect-square w-[100px] md:w-[176px]"><p class="text-left text-neutral-900 md:typography-text-lg">Smartwatch Fitness Tracker</p><div class="col-span-2 md:col-start-2"><div class="flex items-center justify-between"><p${ssrRenderAttr("id", unref(ratingLabelId))} class="typography-label-sm font-medium text-neutral-900">Your rating:</p>`);
      _push(ssrRenderComponent(unref(SfRatingButton), {
        modelValue: ratingModelValue.value,
        "onUpdate:modelValue": ($event) => ratingModelValue.value = $event,
        "aria-labelledby": unref(ratingLabelId),
        class: "p-1 gap-x-2"
      }, null, _parent));
      _push(`</div><label class="my-4 block"><span class="block typography-label-sm font-medium mb-0.5 text-neutral-900">Product review (optional)</span><textarea placeholder="Describe your experience eg. Great product! The quality exceeded my expectations, and it&#39;s incredibly versatile. I highly recommend it to anyone looking for a reliable and durable solution." class="block w-full py-2 pl-4 pr-3 min-h-[138px] rounded-md ring-1 ring-neutral-300 placeholder:text-neutral-500">${ssrInterpolate(reviewModelValue.value)}</textarea><span class="${ssrRenderClass([
        "block text-xs mt-0.5 text-right",
        reviewIsAboveLimit.value ? "text-negative-700 font-medium" : "text-neutral-500"
      ])}">${ssrInterpolate(reviewCharsCount.value)}</span></label><label class="block mb-6"><span class="block mb-0.5 typography-label-sm font-medium text-neutral-900">Your name (optional)</span>`);
      _push(ssrRenderComponent(unref(SfInput), {
        modelValue: usernameModelValue.value,
        "onUpdate:modelValue": ($event) => usernameModelValue.value = $event
      }, null, _parent));
      _push(`</label><div class="flex justify-end gap-x-4">`);
      _push(ssrRenderComponent(unref(SfButton), {
        variant: "secondary",
        class: "flex-1 md:flex-initial"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(SfButton), {
        type: "submit",
        class: "flex-1 md:flex-initial"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Submit Review`);
          } else {
            return [
              createTextVNode("Submit Review")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_VueStoreFront/RatingForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NewsletterBox",
  __ssrInlineRender: true,
  setup(__props) {
    const inputValue = ref("");
    const showPositiveAlert = ref(false);
    const showErrorAlert = ref(false);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-neutral-100 p-4 sm:p-10 text-center"><p class="typography-headline-4 sm:typography-headline-3 font-bold"> Subscribe and get discount on your first purchase! </p><p class="typography-text-sm sm:typography-text-base my-2 mb-4"> Be aware of upcoming sales and events. Receive gifts and special offers! </p><form class="mb-4 flex flex-col sm:flex-row gap-4 max-w-[688px] mx-auto">`);
      _push(ssrRenderComponent(unref(SfInput), {
        modelValue: inputValue.value,
        "onUpdate:modelValue": ($event) => inputValue.value = $event,
        type: "email",
        "wrapper-class": "grow",
        placeholder: "Type your email"
      }, null, _parent));
      _push(ssrRenderComponent(unref(SfButton), {
        type: "submit",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Subscribe to Newsletter `);
          } else {
            return [
              createTextVNode(" Subscribe to Newsletter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div class="typography-text-xs text-neutral-600"> To learn how we process your data, visit our `);
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        class: "!text-neutral-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Notice`);
          } else {
            return [
              createTextVNode("Privacy Notice")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. You can `);
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        class: "!text-neutral-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`unsubscribe`);
          } else {
            return [
              createTextVNode("unsubscribe")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` at any time without costs. </div></div><div class="absolute top-0 right-0 mx-2 mt-2 sm:mr-6">`);
      if (showPositiveAlert.value) {
        _push(`<div role="alert" class="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md">`);
        _push(ssrRenderComponent(unref(SfIconCheckCircle), { class: "mr-2 my-2 text-positive-700" }, null, _parent));
        _push(`<p class="py-2 mr-2">Your email has been added to the newsletter subscription.</p><button type="button" class="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900" aria-label="Close positive alert">`);
        _push(ssrRenderComponent(unref(SfIconClose), { class: "hidden md:block" }, null, _parent));
        _push(ssrRenderComponent(unref(SfIconClose), {
          size: "sm",
          class: "md:hidden block"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showErrorAlert.value) {
        _push(`<div role="alert" class="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"><p class="py-2 mr-2">This email is already subscribed for our newsletter.</p><button type="button" class="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900" aria-label="Close error alert">`);
        _push(ssrRenderComponent(unref(SfIconClose), { class: "hidden md:block" }, null, _parent));
        _push(ssrRenderComponent(unref(SfIconClose), {
          size: "sm",
          class: "md:hidden block"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_VueStoreFront/NewsletterBox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormFields",
  __ssrInlineRender: true,
  setup(__props) {
    const personalInformationModelValue = ref(true);
    const usernameModelValue = ref("");
    const emailModelValue = ref("");
    const websiteModelValue = ref("");
    const phoneNumberModelValue = ref("");
    const areaCode = ref("");
    const descriptionValue = ref("");
    const emailNotificationsModelValue = ref(["safety-alerts"]);
    const pushNotificationsModelValue = ref("");
    const usernameIsInvalid = ref(false);
    const emailIsInvalid = ref(false);
    const areaCodeIsInvalid = ref(false);
    const phoneNumberIsInvalid = ref(false);
    const pushNotificationIsInvalid = ref(false);
    const emailNotificationOptions = [
      {
        label: "Safety Alerts and Messages *",
        value: "safety-alerts",
        hint: "Get notified when something goes wrong on your profile",
        disabled: true
      },
      {
        label: "Deals and Offers",
        value: "deals-and-offers",
        hint: "Once a week you will receive information about upcoming offers"
      },
      {
        label: "Company Information",
        value: "company-information",
        hint: "Reports and information about planned changes"
      }
    ];
    const radioOptions = [
      {
        label: "Everything",
        value: "everything",
        name: "radio-1"
      },
      {
        label: "Same as email",
        value: "same-as-email",
        name: "radio-1"
      },
      {
        label: "No push notifications",
        value: "no-push",
        name: "radio-1"
      }
    ];
    const dropdownOptions = [
      {
        label: "Fashion and Apparel",
        value: "Fashion and Apparel"
      },
      {
        label: "Health and Wellness",
        value: "Health and Wellness"
      },
      {
        label: "Home Decor",
        value: "Home Decor"
      },
      {
        label: "Technology and Gadgets",
        value: "Technology and Gadgets"
      },
      {
        label: "Beauty and Cosmetics",
        value: "Beauty and Cosmetics"
      },
      {
        label: "Outdoor and Adventure",
        value: "Outdoor and Adventure"
      },
      {
        label: "Parenting and Baby Products",
        value: "Parenting and Baby Products"
      },
      {
        label: "Books and Literature",
        value: "Books and Literature"
      },
      {
        label: "Sports and Fitness",
        value: "Sports and Fitness"
      },
      {
        label: "Food and Cooking",
        value: "Food and Cooking"
      }
    ];
    const options = [
      {
        label: "Afghanistan",
        value: "afghanistan"
      },
      {
        label: "Albania",
        value: "albania"
      },
      {
        label: "Angola",
        value: "angola"
      },
      {
        label: "Bahamas",
        value: "bahamas"
      },
      {
        label: "Bangladesh",
        value: "bangladesh"
      },
      {
        label: "Canada",
        value: "canada"
      },
      {
        label: "Chile",
        value: "chile"
      },
      {
        label: "Czech Republic",
        value: "czech Republic"
      },
      {
        label: "Colombia",
        value: "colombia"
      },
      {
        label: "Congo",
        value: "congo"
      },
      {
        label: "Croatia",
        value: "croatia"
      },
      {
        label: "Cuba",
        value: "cuba"
      },
      {
        label: "Denmark",
        value: "denmark"
      },
      {
        label: "Dominica",
        value: "dominica"
      },
      {
        label: "Egypt",
        value: "egypt"
      },
      {
        label: "Ethiopia",
        value: "ethiopia"
      },
      {
        label: "Estonia",
        value: "estonia"
      }
    ];
    const areaCodes = [
      { label: "1", value: "1" },
      { label: "20", value: "20" },
      { label: "45", value: "45" },
      { label: "53", value: "53" },
      { label: "56", value: "56" },
      { label: "57", value: "57" },
      { label: "93", value: "93" },
      { label: "243", value: "243" },
      { label: "244", value: "244" },
      { label: "251", value: "251" },
      { label: "355", value: "355" },
      { label: "372", value: "372" },
      { label: "385", value: "385" },
      { label: "420", value: "420" },
      { label: "880", value: "880" }
    ];
    const { close: dropdownClose, toggle: dropdownToggle, isOpen: dropdownOpen } = useDisclosure();
    const selectedOption = ref();
    const dropdownID = useId();
    const listboxId = `select-dropdown-${dropdownID}`;
    const selectTriggerRef = ref();
    const {
      referenceRef: dropdownReferenceRef,
      floatingRef: dropdownFloatingRef,
      style: dropdownStyle
    } = useDropdown({
      isOpen: dropdownOpen,
      onClose: dropdownClose
    });
    useTrapFocus(dropdownFloatingRef, {
      arrowKeysUpDown: true,
      activeState: dropdownOpen,
      initialFocusContainerFallback: true
    });
    const dropdownSelectOption = (option) => {
      var _a;
      selectedOption.value = option;
      dropdownClose();
      (_a = unrefElement(selectTriggerRef)) == null ? void 0 : _a.focus();
    };
    const countryModelValue = ref("");
    const inputRef = ref();
    const dropdownRef = ref();
    const id = useId();
    const listId = useId();
    const isDisabled = ref(false);
    const snippets = ref([]);
    const isValid = ref();
    const isSelected = ref(false);
    const { isOpen, close, open, toggle } = useDisclosure();
    const { referenceRef, floatingRef, style } = useDropdown({
      isOpen,
      onClose: close,
      placement: "bottom-start",
      middleware: [offset(4)]
    });
    const {
      current: currentFocus,
      focusables: focusableElements,
      updateFocusableElements
    } = useTrapFocus(dropdownRef, {
      trapTabs: false,
      arrowKeysUpDown: true,
      activeState: isOpen,
      initialFocus: false
    });
    useTrapFocus(floatingRef, {
      arrowKeysOn: true,
      activeState: dropdownOpen,
      initialFocusContainerFallback: true
    });
    const handleFocusInput = () => {
      var _a;
      const inputEl = (_a = unrefElement(inputRef)) == null ? void 0 : _a.querySelector("input");
      inputEl == null ? void 0 : inputEl.focus();
    };
    const handleReset = () => {
      countryModelValue.value = "";
      snippets.value = [];
      close();
      handleFocusInput();
    };
    const handleInputKeyDown = (event) => {
      if (event.key === "Escape") handleReset();
      if (event.key === "Enter") close();
      if (event.key === "ArrowUp") {
        open();
        if (isOpen && focusableElements.value.length > 0) {
          focusableElements.value[focusableElements.value.length - 1].focus();
        }
      }
      if (event.key === "ArrowDown") {
        open();
        if (isOpen && focusableElements.value.length > 0) {
          focusableElements.value[0].focus();
        }
      }
    };
    const selectOption = (phrase) => {
      countryModelValue.value = phrase;
      isSelected.value = true;
      close();
      handleFocusInput();
    };
    watch(countryModelValue, () => {
      if (countryModelValue.value === "") {
        handleReset();
      } else if (countryModelValue.value && isSelected.value === false) {
        const getSnippets = async () => {
          open();
          try {
            const data = await mockAutocompleteRequest(countryModelValue.value);
            snippets.value = data;
            updateFocusableElements();
          } catch (error) {
            close();
            console.error(error);
          }
        };
        getSnippets();
      } else {
        isSelected.value = false;
      }
    });
    const mockAutocompleteRequest = (phrase) => {
      const results = options.filter((option) => option.value.toLowerCase().startsWith(phrase.toLowerCase()));
      return results;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4" }, _attrs))}><h1 class="mb-4 typography-headline-4 font-bold">Personal information</h1><form><label class="flex justify-between cursor-pointer mb-4 gap-2"> Don\u2019t display my personal information on a public profile `);
      _push(ssrRenderComponent(unref(SfSwitch), {
        modelValue: personalInformationModelValue.value,
        "onUpdate:modelValue": ($event) => personalInformationModelValue.value = $event
      }, null, _parent));
      _push(`</label><label><span class="typography-label-sm font-medium">Username *</span>`);
      _push(ssrRenderComponent(unref(SfInput), {
        modelValue: usernameModelValue.value,
        "onUpdate:modelValue": [($event) => usernameModelValue.value = $event, ($event) => usernameIsInvalid.value = !usernameModelValue.value],
        required: "",
        invalid: usernameIsInvalid.value
      }, null, _parent));
      if (usernameIsInvalid.value) {
        _push(`<p class="mt-0.5 text-negative-700 typography-text-sm font-medium"> The field cannot be empty </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="block my-4"><span class="typography-label-sm font-medium">Email *</span>`);
      _push(ssrRenderComponent(unref(SfInput), {
        modelValue: emailModelValue.value,
        "onUpdate:modelValue": [($event) => emailModelValue.value = $event, ($event) => emailIsInvalid.value = !emailModelValue.value],
        type: "email",
        invalid: emailIsInvalid.value,
        required: ""
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconEmail), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconEmail))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (emailIsInvalid.value) {
        _push(`<p class="mt-0.5 text-negative-700 typography-text-sm font-medium"> The field cannot be empty </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label><span class="typography-label-sm font-medium">Website</span>`);
      _push(ssrRenderComponent(unref(SfInput), {
        modelValue: websiteModelValue.value,
        "onUpdate:modelValue": ($event) => websiteModelValue.value = $event
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>https://</span>`);
          } else {
            return [
              createVNode("span", null, "https://")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label><fieldset class="flex flex-wrap my-4"><legend class="hidden">Phone number</legend><label class="w-full md:w-[122px] md:mr-4"><span class="typography-label-sm font-medium"> Code * </span>`);
      _push(ssrRenderComponent(unref(SfSelect), {
        modelValue: areaCode.value,
        "onUpdate:modelValue": [($event) => areaCode.value = $event, ($event) => areaCodeIsInvalid.value = !areaCode.value],
        required: "",
        placeholder: "--",
        invalid: areaCodeIsInvalid.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(areaCodes, ({ value, label }, index) => {
              _push2(`<option${ssrRenderAttr("value", value)}${_scopeId}>${ssrInterpolate(label)}</option>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(areaCodes, ({ value, label }, index) => {
                return createVNode("option", {
                  key: `${value}-${index}`,
                  value
                }, toDisplayString(label), 9, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (areaCodeIsInvalid.value) {
        _push(`<p class="mt-0.5 text-negative-700 typography-text-sm font-medium"> No option selected </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><span class="mt-4 md:mt-0 grow"><label><span class="typography-label-sm font-medium"> Phone * </span>`);
      _push(ssrRenderComponent(unref(SfInput), {
        modelValue: phoneNumberModelValue.value,
        "onUpdate:modelValue": [($event) => phoneNumberModelValue.value = $event, ($event) => phoneNumberIsInvalid.value = !phoneNumberModelValue.value],
        type: "tel",
        required: "",
        invalid: phoneNumberIsInvalid.value,
        placeholder: "eg. 123 456 7890",
        class: "placeholder:text-neutral-500"
      }, null, _parent));
      if (phoneNumberIsInvalid.value) {
        _push(`<p class="mt-0.5 text-negative-700 typography-text-sm font-medium"> The field cannot be empty </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></span></fieldset><div class="relative"><label class="${ssrRenderClass(["font-medium typography-label-sm", { "text-disabled-900": isDisabled.value }])}"${ssrRenderAttr("for", unref(id))}> Country </label>`);
      _push(ssrRenderComponent(unref(SfInput), {
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        modelValue: countryModelValue.value,
        "onUpdate:modelValue": ($event) => countryModelValue.value = $event,
        role: "combobox",
        "aria-label": "Select from the list",
        placeholder: "Select from the list",
        "aria-controls": unref(listId),
        "aria-autocomplete": "list",
        "aria-disabled": isDisabled.value,
        "aria-expanded": unref(isOpen),
        "aria-activedescendant": (_a = unref(currentFocus)) == null ? void 0 : _a.id,
        invalid: isValid.value === false && !unref(isOpen),
        disabled: isDisabled.value,
        class: [
          "cursor-pointer placeholder:text-neutral-500",
          {
            "!text-disabled-500": isDisabled.value
          }
        ],
        "wrapper-class": {
          "!bg-disabled-100 !ring-disabled-300 !hover:ring-disabled-300 !ring-1": isDisabled.value
        },
        onFocus: ($event) => isValid.value = void 0,
        onClick: ($event) => unref(toggle)(),
        onKeydown: handleInputKeyDown
      }, {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconExpandMore), {
              class: [
                "ml-auto text-neutral-500 transition-transform ease-in-out duration-300",
                {
                  "rotate-180": unref(isOpen),
                  "!text-disabled-500 cursor-not-allowed": isDisabled.value
                }
              ],
              onClick: ($event) => !isDisabled.value && unref(toggle)()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconExpandMore), {
                class: [
                  "ml-auto text-neutral-500 transition-transform ease-in-out duration-300",
                  {
                    "rotate-180": unref(isOpen),
                    "!text-disabled-500 cursor-not-allowed": isDisabled.value
                  }
                ],
                onClick: ($event) => !isDisabled.value && unref(toggle)()
              }, null, 8, ["class", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isOpen)) {
        _push(`<div style="${ssrRenderStyle(unref(style))}" class="left-0 right-0 z-10"><ul${ssrRenderAttr("id", unref(listId))} role="listbox" aria-label="Country list" class="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md">`);
        if (snippets.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(snippets.value, (option) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(SfListItem), {
              id: `${unref(listId)}-${option.value}`,
              tag: "button",
              type: "button",
              class: "flex justify-start",
              "aria-selected": option.value === countryModelValue.value,
              onClick: ($event) => selectOption(option.label),
              onKeydown: [($event) => selectOption(option.label), handleFocusInput]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<p class="text-left"${_scopeId}><span${_scopeId}>${ssrInterpolate(option.label)}</span></p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-left" }, [
                      createVNode("span", null, toDisplayString(option.label), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]-->`);
        } else if (countryModelValue.value) {
          _push(`<p class="inline-flex px-4 py-2 w-full text-left" aria-label="No options"><span>No options</span></p>`);
        } else {
          _push(`<!--[-->`);
          ssrRenderList(options, (option) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(SfListItem), {
              id: `${unref(listId)}-${option.value}`,
              tag: "button",
              type: "button",
              class: "flex justify-start",
              "aria-selected": option.value === countryModelValue.value,
              onClick: ($event) => selectOption(option.label),
              onKeydown: [($event) => selectOption(option.label), handleFocusInput]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<p class="text-left"${_scopeId}><span${_scopeId}>${ssrInterpolate(option.label)}</span></p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-left" }, [
                      createVNode("span", null, toDisplayString(option.label), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]-->`);
        }
        _push(`</ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!isDisabled.value && isValid.value === false) {
        _push(`<p class="text-negative-700 typography-text-sm font-medium mt-0.5"> No option selected </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="font-medium typography-label-sm block mt-4"${ssrRenderAttr("for", unref(dropdownID))}>Your Interests</label><div class="relative mb-4"><div${ssrRenderAttr("id", unref(dropdownID))} role="combobox"${ssrRenderAttr("aria-controls", listboxId)}${ssrRenderAttr("aria-expanded", unref(dropdownOpen))} aria-label="Select one option"${ssrRenderAttr("aria-activedescendant", selectedOption.value ? `${listboxId}-${selectedOption.value.value}` : void 0)} class="mt-0.5 flex items-center gap-8 font-normal typography-text-base ring-1 ring-neutral-300 ring-inset rounded-md py-2 px-4 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 focus-visible:outline focus-visible:outline-offset cursor-pointer" tabindex="0">`);
      if (selectedOption.value) {
        _push(`<!--[-->${ssrInterpolate(selectedOption.value.label)}<!--]-->`);
      } else {
        _push(`<span class="text-neutral-500">Select from the list</span>`);
      }
      _push(ssrRenderComponent(unref(SfIconExpandMore), {
        class: ["ml-auto text-neutral-500 transition-transform ease-in-out duration-300", { "rotate-180": unref(dropdownOpen) }]
      }, null, _parent));
      _push(`</div><ul style="${ssrRenderStyle([
        unref(dropdownOpen) ? null : { display: "none" },
        unref(dropdownStyle)
      ])}"${ssrRenderAttr("id", listboxId)} role="listbox" aria-label="Select one option" class="w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10"><!--[-->`);
      ssrRenderList(dropdownOptions, (option) => {
        var _a2, _b;
        _push(ssrRenderComponent(unref(SfListItem), {
          id: `${listboxId}-${option.value}`,
          key: option.value,
          role: "option",
          tabindex: "0",
          "aria-selected": option.value === ((_a2 = selectedOption.value) == null ? void 0 : _a2.value),
          class: ["block", { "font-medium": option.value === ((_b = selectedOption.value) == null ? void 0 : _b.value) }],
          onClick: ($event) => dropdownSelectOption(option),
          onKeydown: [($event) => dropdownSelectOption(option), ($event) => dropdownSelectOption(option)]
        }, {
          suffix: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2;
            if (_push2) {
              if (option.value === ((_a3 = selectedOption.value) == null ? void 0 : _a3.value)) {
                _push2(ssrRenderComponent(unref(SfIconCheck), { class: "text-primary-700" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                option.value === ((_b2 = selectedOption.value) == null ? void 0 : _b2.value) ? (openBlock(), createBlock(unref(SfIconCheck), {
                  key: 0,
                  class: "text-primary-700"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(option.label)} `);
            } else {
              return [
                createTextVNode(toDisplayString(option.label) + " ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div><label><span class="typography-label-sm font-medium">Description</span><textarea placeholder="Write something about yourself..." class="block w-full py-2 pl-4 pr-7 rounded-md border border-neutral-300 placeholder:text-neutral-500">${ssrInterpolate(descriptionValue.value)}</textarea></label><h2 class="typography-headline-4 font-bold mt-14 mb-4">Notifications</h2><fieldset><legend class="mb-0.5 typography-text-sm font-medium">By Email</legend><!--[-->`);
      ssrRenderList(emailNotificationOptions, ({ label, value, hint, disabled }, index) => {
        _push(`<label class="${ssrRenderClass([
          "flex items-start mb-4 mr-6 rounded first-of-type:mt-2 last-of-type:mb-6",
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        ])}">`);
        _push(ssrRenderComponent(unref(SfCheckbox), {
          modelValue: emailNotificationsModelValue.value,
          "onUpdate:modelValue": ($event) => emailNotificationsModelValue.value = $event,
          disabled,
          value,
          class: "m-0.5"
        }, null, _parent));
        _push(`<span class="ml-2"><span class="${ssrRenderClass(["typography-text-base font-normal leading-6 font-body", { "text-disabled-900": disabled }])}">${ssrInterpolate(label)}</span><span class="${ssrRenderClass(["typography-hint-xs block mt-0.5", { "text-disabled-500": disabled }])}">${ssrInterpolate(hint)}</span></span></label>`);
      });
      _push(`<!--]--></fieldset><fieldset role="radiogroup"><legend class="mt-4 mb-0.5 typography-text-sm font-medium">Push Notifications *</legend><!--[-->`);
      ssrRenderList(radioOptions, ({ label, name, value }) => {
        _push(`<label class="flex items-center mb-4 mr-6 rounded cursor-pointer first-of-type:mt-2 last-of-type:mb-2">`);
        _push(ssrRenderComponent(unref(SfRadio), {
          modelValue: pushNotificationsModelValue.value,
          "onUpdate:modelValue": ($event) => pushNotificationsModelValue.value = $event,
          invalid: pushNotificationIsInvalid.value,
          required: "",
          value,
          name
        }, null, _parent));
        _push(`<span class="ml-2 text-base font-normal leading-6 font-body">${ssrInterpolate(label)}</span></label>`);
      });
      _push(`<!--]--></fieldset><p class="text-neutral-500 typography-text-sm mt-8">* marked fields are required</p><div class="flex gap-x-4 md:justify-end mt-6">`);
      _push(ssrRenderComponent(unref(SfButton), {
        variant: "secondary",
        class: "flex-grow md:flex-grow-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Clear all `);
          } else {
            return [
              createTextVNode(" Clear all ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(SfButton), {
        type: "submit",
        class: "flex-grow md:flex-grow-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Submit `);
          } else {
            return [
              createTextVNode(" Submit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_VueStoreFront/FormFields.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Phong1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]" }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png" alt="Great product" class="block object-cover h-auto rounded-md aspect-square" width="300" height="300"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png",
                alt: "Great product",
                class: "block object-cover h-auto rounded-md aspect-square",
                width: "300",
                height: "300"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(SfButton), {
        variant: "tertiary",
        size: "sm",
        square: "",
        class: "absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full",
        "aria-label": "Add to wishlist"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconFavorite), { size: "sm" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconFavorite), { size: "sm" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-4 border-t border-neutral-200">`);
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        variant: "secondary",
        class: "no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Athletic mens walking sneakers `);
          } else {
            return [
              createTextVNode(" Athletic mens walking sneakers ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center pt-1">`);
      _push(ssrRenderComponent(unref(SfRating), {
        size: "xs",
        value: 5,
        max: 5
      }, null, _parent));
      _push(ssrRenderComponent(unref(SfLink), {
        href: "#",
        variant: "secondary",
        class: "pl-1 no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfCounter), { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`123`);
                } else {
                  return [
                    createTextVNode("123")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfCounter), { size: "xs" }, {
                default: withCtx(() => [
                  createTextVNode("123")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"> Lightweight \u2022 Non slip \u2022 Flexible outsole \u2022 Easy to wear on and off </p><span class="block pb-2 font-bold typography-text-lg">$2345,99</span>`);
      _push(ssrRenderComponent(unref(SfButton), { size: "sm" }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconShoppingCart), { size: "sm" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconShoppingCart), { size: "sm" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add to cart `);
          } else {
            return [
              createTextVNode(" Add to cart ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_VueStoreFront/Phong1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MegaMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const findNode = (keys, node) => {
      var _a, _b;
      if (keys.length > 1) {
        const [currentKey, ...restKeys] = keys;
        return findNode(restKeys, ((_a = node.children) == null ? void 0 : _a.find((child) => child.key === currentKey)) || node);
      } else {
        return ((_b = node.children) == null ? void 0 : _b.find((child) => child.key === keys[0])) || node;
      }
    };
    const { close, open, isOpen } = useDisclosure();
    const { referenceRef, floatingRef, style } = useDropdown({
      isOpen,
      onClose: close,
      placement: "bottom-start",
      middleware: []
    });
    const drawerRef = ref();
    const megaMenuRef = ref();
    const triggerRefs = ref();
    const activeNode = ref([]);
    const activeMenu = computed(() => findNode(activeNode.value, content));
    const bannerNode = computed(() => findNode(activeNode.value.slice(0, 1), content));
    const trapFocusOptions = {
      activeState: isOpen,
      arrowKeysUpDown: true,
      initialFocus: "container"
    };
    useTrapFocus(
      computed(() => {
        var _a;
        return (_a = megaMenuRef.value) == null ? void 0 : _a[0];
      }),
      trapFocusOptions
    );
    useTrapFocus(drawerRef, trapFocusOptions);
    const openMenu = (menuType) => {
      activeNode.value = menuType;
      open();
    };
    const goBack = () => {
      activeNode.value = activeNode.value.slice(0, activeNode.value.length - 1);
    };
    const goNext = (key) => {
      activeNode.value = [...activeNode.value, key];
    };
    const inputValue = ref("");
    const actionItems = [
      {
        icon: SfIconShoppingCart,
        label: "",
        ariaLabel: "Cart",
        role: "button"
      },
      {
        icon: SfIconFavorite,
        label: "",
        ariaLabel: "Wishlist",
        role: "button"
      },
      {
        icon: SfIconPerson,
        label: "Log in",
        ariaLabel: "Log in",
        role: "login"
      }
    ];
    const content = {
      key: "root",
      value: { label: "", counter: 0 },
      isLeaf: false,
      children: [
        {
          key: "WOMEN",
          value: {
            label: "Women",
            counter: 515,
            banner: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/glasses.png",
            bannerTitle: "The world in a new light"
          },
          isLeaf: false,
          children: [
            {
              key: "ALL_WOMEN",
              value: { label: "All Women's", counter: 515, link: "#" },
              isLeaf: true
            },
            {
              key: "CATEGORIES",
              value: { label: "Categories", counter: 178 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_CATEGORIES",
                  value: { label: "All Categories", counter: 178, link: "#" },
                  isLeaf: true
                },
                {
                  key: "CLOTHING",
                  value: { label: "Clothing", counter: 30, link: "#" },
                  isLeaf: true
                },
                {
                  key: "SHOES",
                  value: { label: "Shoes", counter: 28, link: "#" },
                  isLeaf: true
                },
                {
                  key: "ACCESSORIES",
                  value: { label: "Accessories", counter: 56, link: "#" },
                  isLeaf: true
                },
                {
                  key: "WEARABLES",
                  value: { label: "Wearables", counter: 12, link: "#" },
                  isLeaf: true
                },
                {
                  key: "FOOD_DRINKS",
                  value: { label: "Food & Drinks", counter: 52, link: "#" },
                  isLeaf: true
                }
              ]
            },
            {
              key: "ACTIVITIES",
              value: { label: "Activities", counter: 239 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_ACTIVITIES",
                  value: { label: "All Activities", counter: 239, link: "#" },
                  isLeaf: true
                },
                {
                  key: "FITNESS",
                  value: { label: "Fitness", counter: 83, link: "#" },
                  isLeaf: true
                },
                {
                  key: "PILATES",
                  value: { label: "Pilates", counter: 65, link: "#" },
                  isLeaf: true
                },
                {
                  key: "TRAINING",
                  value: { label: "Training", counter: 21, link: "#" },
                  isLeaf: true
                },
                {
                  key: "CARDIO_WORKOUT",
                  value: { label: "Cardio Workout", counter: 50, link: "#" },
                  isLeaf: true
                },
                {
                  key: "YOGA",
                  value: { label: "Yoga", counter: 20, link: "#" },
                  isLeaf: true
                }
              ]
            },
            {
              key: "DEALS",
              value: { label: "Deals", counter: 98 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_DEALS",
                  value: { label: "All Deals", counter: 98, link: "#" },
                  isLeaf: true
                },
                {
                  key: "OUTLET",
                  value: { label: "Outlet", counter: 98, link: "#" },
                  isLeaf: true
                }
              ]
            }
          ]
        },
        {
          key: "MEN",
          value: {
            label: "Men",
            counter: 364,
            banner: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/watch.png",
            bannerTitle: "New in designer watches"
          },
          isLeaf: false,
          children: [
            {
              key: "ALL_MEN",
              value: { label: "All Men's", counter: 364, link: "#" },
              isLeaf: true
            },
            {
              key: "CATEGORIES",
              value: { label: "Categories", counter: 164 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_CATEGORIES",
                  value: { label: "All Categories", counter: 164, link: "#" },
                  isLeaf: true
                },
                {
                  key: "CLOTHING",
                  value: { label: "Clothing", counter: 41, link: "#" },
                  isLeaf: true
                },
                {
                  key: "SHOES",
                  value: { label: "Shoes", counter: 20, link: "#" },
                  isLeaf: true
                },
                {
                  key: "ACCESSORIES",
                  value: { label: "Accessories", counter: 56, link: "#" },
                  isLeaf: true
                },
                {
                  key: "WEARABLES",
                  value: { label: "Wearables", counter: 32, link: "#" },
                  isLeaf: true
                },
                {
                  key: "FOOD_DRINKS",
                  value: { label: "Food & Drinks", counter: 15, link: "#" },
                  isLeaf: true
                }
              ]
            },
            {
              key: "ACTIVITIES",
              value: { label: "Activities", counter: 132 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_ACTIVITIES",
                  value: { label: "All Activities", counter: 132, link: "#" },
                  isLeaf: true
                },
                {
                  key: "TRAINING",
                  value: { label: "Training", counter: 21, link: "#" },
                  isLeaf: true
                },
                {
                  key: "WORKOUT",
                  value: { label: "Workout", counter: 43, link: "#" },
                  isLeaf: true
                },
                {
                  key: "FOOTBALL",
                  value: { label: "Football", counter: 30, link: "#" },
                  isLeaf: true
                },
                {
                  key: "FITNESS",
                  value: { label: "Fitness", counter: 38, link: "#" },
                  isLeaf: true
                }
              ]
            },
            {
              key: "DEALS",
              value: { label: "Deals", counter: 68 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_DEALS",
                  value: { label: "All Deals", counter: 68, link: "#" },
                  isLeaf: true
                },
                {
                  key: "OUTLET",
                  value: { label: "Outlet", counter: 68, link: "#" },
                  isLeaf: true
                }
              ]
            }
          ]
        },
        {
          key: "KIDS",
          value: {
            label: "Kids",
            counter: 263,
            banner: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/toy.png",
            bannerTitle: "Unleash your imagination"
          },
          isLeaf: false,
          children: [
            {
              key: "ALL_KIDS",
              value: { label: "All Kids", counter: 263, link: "#" },
              isLeaf: true
            },
            {
              key: "CATEGORIES",
              value: { label: "Categories", counter: 192 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_CATEGORIES",
                  value: { label: "All Categories", counter: 192, link: "#" },
                  isLeaf: true
                },
                {
                  key: "CLOTHING",
                  value: { label: "Clothing", counter: 29, link: "#" },
                  isLeaf: true
                },
                {
                  key: "SHOES",
                  value: { label: "Shoes", counter: 60, link: "#" },
                  isLeaf: true
                },
                {
                  key: "ACCESSORIES",
                  value: { label: "Accessories", counter: 48, link: "#" },
                  isLeaf: true
                },
                {
                  key: "WEARABLES",
                  value: { label: "Wearables", counter: 22, link: "#" },
                  isLeaf: true
                },
                {
                  key: "FOOD_DRINKS",
                  value: { label: "Food & Drinks", counter: 33, link: "#" },
                  isLeaf: true
                }
              ]
            },
            {
              key: "ACTIVITIES",
              value: { label: "Activities", counter: 40 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_ACTIVITIES",
                  value: { label: "All Activities", counter: 40, link: "#" },
                  isLeaf: true
                },
                {
                  key: "FOOTBALL",
                  value: { label: "Football", counter: 21, link: "#" },
                  isLeaf: true
                },
                {
                  key: "BASKETBALL",
                  value: { label: "Basketball", counter: 19, link: "#" },
                  isLeaf: true
                }
              ]
            },
            {
              key: "DEALS",
              value: { label: "Deals", counter: 31 },
              isLeaf: false,
              children: [
                {
                  key: "ALL_DEALS",
                  value: { label: "All Deals", counter: 31, link: "#" },
                  isLeaf: true
                },
                {
                  key: "OUTLET",
                  value: { label: "Outlet", counter: 31, link: "#" },
                  isLeaf: true
                }
              ]
            }
          ]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}><header class="relative"><div class="flex justify-between items-center flex-wrap md:flex-nowrap px-4 md:px-10 py-2 md:py-5 w-full h-full border-0 bg-primary-700 border-neutral-200 md:h-20 md:z-10"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(SfButton), {
        variant: "tertiary",
        square: "",
        "aria-label": "Close menu",
        class: "block md:hidden mr-5 bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white",
        onClick: ($event) => openMenu([])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SfIconMenu), { class: "text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SfIconMenu), { class: "text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#" aria-label="SF Homepage" class="flex shrink-0 w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem] items-center mr-auto text-white md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"><picture><source srcset="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg" media="(min-width: 1024px)"><img src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg" alt="Sf Logo"></picture></a></div><form role="search" class="hidden md:flex flex-[100%] ml-10">`);
      _push(ssrRenderComponent(unref(SfInput), {
        modelValue: inputValue.value,
        "onUpdate:modelValue": ($event) => inputValue.value = $event,
        type: "search",
        class: "[&::-webkit-search-cancel-button]:appearance-none",
        placeholder: "Search",
        "wrapper-class": "flex-1 h-10 pr-0",
        size: "base"
      }, {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SfButton), {
              variant: "tertiary",
              square: "",
              "aria-label": "search",
              type: "submit",
              class: "rounded-l-none hover:bg-transparent active:bg-transparent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SfIconSearch), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SfIconSearch))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center" }, [
                createVNode(unref(SfButton), {
                  variant: "tertiary",
                  square: "",
                  "aria-label": "search",
                  type: "submit",
                  class: "rounded-l-none hover:bg-transparent active:bg-transparent"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(SfIconSearch))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><nav class="flex flex-nowrap justify-end items-center md:ml-10 gap-x-1"><!--[-->`);
      ssrRenderList(actionItems, (actionItem) => {
        _push(ssrRenderComponent(unref(SfButton), {
          key: actionItem.ariaLabel,
          "aria-label": actionItem.ariaLabel,
          class: "text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white",
          variant: "tertiary",
          square: ""
        }, {
          prefix: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(actionItem.icon), null, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(actionItem.icon)))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (actionItem.role === "login") {
                _push2(`<p class="hidden lg:inline-flex whitespace-nowrap mr-2"${_scopeId}>${ssrInterpolate(actionItem.label)}</p>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                actionItem.role === "login" ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "hidden lg:inline-flex whitespace-nowrap mr-2"
                }, toDisplayString(actionItem.label), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><form role="search" class="flex md:hidden flex-[100%] my-2">`);
      _push(ssrRenderComponent(unref(SfInput), {
        modelValue: inputValue.value,
        "onUpdate:modelValue": ($event) => inputValue.value = $event,
        type: "search",
        class: "[&::-webkit-search-cancel-button]:appearance-none",
        placeholder: "Search",
        "wrapper-class": "flex-1 h-10 pr-0",
        size: "base"
      }, {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SfButton), {
              variant: "tertiary",
              square: "",
              "aria-label": "search",
              type: "submit",
              class: "rounded-l-none hover:bg-transparent active:bg-transparent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SfIconSearch), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SfIconSearch))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center" }, [
                createVNode(unref(SfButton), {
                  variant: "tertiary",
                  square: "",
                  "aria-label": "search",
                  type: "submit",
                  class: "rounded-l-none hover:bg-transparent active:bg-transparent"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(SfIconSearch))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div><nav><ul class="hidden md:flex px-6 py-2 bg-white border-b border-b-neutral-200 border-b-solid"><!--[-->`);
      ssrRenderList(content.children, (menuNode, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(SfButton), {
          ref_for: true,
          ref_key: "triggerRefs",
          ref: triggerRefs,
          variant: "tertiary",
          class: "group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900",
          onMouseenter: ($event) => openMenu([menuNode.key]),
          onClick: ($event) => openMenu([menuNode.key])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(menuNode.value.label)}</span>`);
              _push2(ssrRenderComponent(unref(SfIconChevronRight), { class: "rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(menuNode.value.label), 1),
                createVNode(unref(SfIconChevronRight), { class: "rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900" })
              ];
            }
          }),
          _: 2
        }, _parent));
        if (unref(isOpen) && activeNode.value.length === 1 && activeNode.value[0] === menuNode.key) {
          _push(`<div style="${ssrRenderStyle(unref(style))}" class="hidden md:grid gap-x-6 grid-cols-4 bg-white shadow-lg p-6 left-0 right-0 outline-none" tabindex="0"><!--[-->`);
          ssrRenderList(activeMenu.value.children, (node) => {
            _push(`<!--[-->`);
            if (node.isLeaf) {
              _push(`<!--[-->`);
              _push(ssrRenderComponent(unref(SfListItem), {
                tag: "a",
                size: "sm",
                href: node.value.link,
                class: "typography-text-sm mb-2"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(node.value.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(node.value.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<div class="col-start-2 col-end-5"></div><!--]-->`);
            } else {
              _push(`<div><p class="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid">${ssrInterpolate(node.value.label)}</p><ul class="mt-2"><!--[-->`);
              ssrRenderList(node.children, (child) => {
                _push(`<li>`);
                _push(ssrRenderComponent(unref(SfListItem), {
                  tag: "a",
                  size: "sm",
                  href: child.value.link,
                  class: "typography-text-sm py-1.5"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(child.value.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(child.value.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</li>`);
              });
              _push(`<!--]--></ul></div>`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--><div class="flex flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-100 border-neutral-300 grow"><img${ssrRenderAttr("src", bannerNode.value.value.banner)}${ssrRenderAttr("alt", bannerNode.value.value.bannerTitle)} class="object-contain"><p class="px-4 mt-4 mb-4 font-medium text-center typography-text-base">${ssrInterpolate(bannerNode.value.value.bannerTitle)}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
      if (unref(isOpen)) {
        _push(`<div class="md:hidden fixed inset-0 bg-neutral-500 bg-opacity-50"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(SfDrawer), {
        ref_key: "drawerRef",
        ref: drawerRef,
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        placement: "left",
        class: "md:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<nav${_scopeId}><div class="flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid"${_scopeId}><p class="typography-text-base font-medium"${_scopeId}>Browse products</p>`);
            _push2(ssrRenderComponent(unref(SfButton), {
              variant: "tertiary",
              square: "",
              "aria-label": "Close menu",
              class: "ml-2",
              onClick: ($event) => unref(close)()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SfIconClose), { class: "text-neutral-500" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SfIconClose), { class: "text-neutral-500" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><ul class="mt-2 mb-6"${_scopeId}>`);
            if (activeMenu.value.key !== "root") {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(SfListItem), {
                size: "lg",
                tag: "button",
                type: "button",
                class: "border-b border-b-neutral-200 border-b-solid",
                onClick: ($event) => goBack()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(SfIconArrowBack), { class: "text-neutral-500" }, null, _parent3, _scopeId2));
                    _push3(`<p class="ml-5 font-medium"${_scopeId2}>${ssrInterpolate(activeMenu.value.value.label)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(unref(SfIconArrowBack), { class: "text-neutral-500" }),
                        createVNode("p", { class: "ml-5 font-medium" }, toDisplayString(activeMenu.value.value.label), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(activeMenu.value.children, (node) => {
              _push2(`<!--[-->`);
              if (node.isLeaf) {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(unref(SfListItem), {
                  size: "lg",
                  tag: "a",
                  href: node.value.link,
                  class: "first-of-type:mt-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center"${_scopeId2}><p class="text-left"${_scopeId2}>${ssrInterpolate(node.value.label)}</p>`);
                      _push3(ssrRenderComponent(unref(SfCounter), { class: "ml-2" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(node.value.counter)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(node.value.counter), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("p", { class: "text-left" }, toDisplayString(node.value.label), 1),
                          createVNode(unref(SfCounter), { class: "ml-2" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(node.value.counter), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              } else {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(unref(SfListItem), {
                  size: "lg",
                  tag: "button",
                  type: "button",
                  onClick: ($event) => goNext(node.key)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex justify-between items-center"${_scopeId2}><div class="flex items-center"${_scopeId2}><p class="text-left"${_scopeId2}>${ssrInterpolate(node.value.label)}</p>`);
                      _push3(ssrRenderComponent(unref(SfCounter), { class: "ml-2" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(node.value.counter)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(node.value.counter), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(unref(SfIconChevronRight), { class: "text-neutral-500" }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("p", { class: "text-left" }, toDisplayString(node.value.label), 1),
                            createVNode(unref(SfCounter), { class: "ml-2" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(node.value.counter), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode(unref(SfIconChevronRight), { class: "text-neutral-500" })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></ul>`);
            if (bannerNode.value.value.banner) {
              _push2(`<div class="flex items-center overflow-hidden bg-neutral-100 border-neutral-300 grow"${_scopeId}><img${ssrRenderAttr("src", bannerNode.value.value.banner)}${ssrRenderAttr("alt", bannerNode.value.value.bannerTitle)} class="object-contain w-[50%] basis-6/12"${_scopeId}><p class="basis-6/12 p-6 font-medium typography-text-base"${_scopeId}>${ssrInterpolate(bannerNode.value.value.bannerTitle)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</nav>`);
          } else {
            return [
              createVNode("nav", null, [
                createVNode("div", { class: "flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid" }, [
                  createVNode("p", { class: "typography-text-base font-medium" }, "Browse products"),
                  createVNode(unref(SfButton), {
                    variant: "tertiary",
                    square: "",
                    "aria-label": "Close menu",
                    class: "ml-2",
                    onClick: ($event) => unref(close)()
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(SfIconClose), { class: "text-neutral-500" })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode("ul", { class: "mt-2 mb-6" }, [
                  activeMenu.value.key !== "root" ? (openBlock(), createBlock("li", { key: 0 }, [
                    createVNode(unref(SfListItem), {
                      size: "lg",
                      tag: "button",
                      type: "button",
                      class: "border-b border-b-neutral-200 border-b-solid",
                      onClick: ($event) => goBack()
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(unref(SfIconArrowBack), { class: "text-neutral-500" }),
                          createVNode("p", { class: "ml-5 font-medium" }, toDisplayString(activeMenu.value.value.label), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(activeMenu.value.children, (node) => {
                    return openBlock(), createBlock(Fragment, {
                      key: node.value.label
                    }, [
                      node.isLeaf ? (openBlock(), createBlock("li", { key: 0 }, [
                        createVNode(unref(SfListItem), {
                          size: "lg",
                          tag: "a",
                          href: node.value.link,
                          class: "first-of-type:mt-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("p", { class: "text-left" }, toDisplayString(node.value.label), 1),
                              createVNode(unref(SfCounter), { class: "ml-2" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(node.value.counter), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])) : (openBlock(), createBlock("li", { key: 1 }, [
                        createVNode(unref(SfListItem), {
                          size: "lg",
                          tag: "button",
                          type: "button",
                          onClick: ($event) => goNext(node.key)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("p", { class: "text-left" }, toDisplayString(node.value.label), 1),
                                createVNode(unref(SfCounter), { class: "ml-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(node.value.counter), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(unref(SfIconChevronRight), { class: "text-neutral-500" })
                            ])
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]))
                    ], 64);
                  }), 128))
                ]),
                bannerNode.value.value.banner ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center overflow-hidden bg-neutral-100 border-neutral-300 grow"
                }, [
                  createVNode("img", {
                    src: bannerNode.value.value.banner,
                    alt: bannerNode.value.value.bannerTitle,
                    class: "object-contain w-[50%] basis-6/12"
                  }, null, 8, ["src", "alt"]),
                  createVNode("p", { class: "basis-6/12 p-6 font-medium typography-text-base" }, toDisplayString(bannerNode.value.value.bannerTitle), 1)
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_VueStoreFront/MegaMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "TestComponentVueStoreFront",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      { label: "CardDetail", value: "CardDetail" },
      { label: "RatingForm", value: "RatingForm" },
      { label: "NewsletterBox", value: "NewsletterBox" },
      { label: "FormFields", value: "FormFields" },
      { label: "Phong1", value: "Phong1" },
      { label: "MegaMenu", value: "MegaMenu" }
    ];
    const selected = ref("CardDetail");
    const componentsMap = {
      CardDetail: _sfc_main$6,
      RatingForm: _sfc_main$5,
      NewsletterBox: _sfc_main$4,
      FormFields: _sfc_main$3,
      Phong1: _sfc_main$2,
      MegaMenu: _sfc_main$1
    };
    const selectedComponent = computed(() => componentsMap[selected.value ? selected.value : selected]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ui-demo-layout" }, _attrs))} data-v-388ea87f><aside class="ui-list" data-v-388ea87f><select data-v-388ea87f><!--[-->`);
      ssrRenderList(options, (opt) => {
        _push(`<option${ssrRenderAttr("value", opt.value)} data-v-388ea87f${ssrIncludeBooleanAttr(Array.isArray(selected.value) ? ssrLooseContain(selected.value, opt.value) : ssrLooseEqual(selected.value, opt.value)) ? " selected" : ""}>${ssrInterpolate(opt.label)}</option>`);
      });
      _push(`<!--]--></select></aside><main class="ui-preview" data-v-388ea87f>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(selectedComponent.value), null, null), _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/TestComponentVueStoreFront.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TestComponentVueStoreFront = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-388ea87f"]]);

export { TestComponentVueStoreFront as default };
//# sourceMappingURL=TestComponentVueStoreFront-Bh0Ewa0R.mjs.map
