import { useNuxtApp, useCookie } from "#imports";
import { ref } from "vue";
import { runtimeDetectBrowserLanguage, wrapComposable } from "../internal.js";
import { localeCodes } from "#build/i18n.options.mjs";
import { _useLocaleHead, _useSetI18nParams } from "../routing/head.js";
import { getRouteBaseName, localePath, localeRoute, switchLocalePath } from "../routing/routing.js";
export * from "vue-i18n";
export * from "./shared.js";
export function useSetI18nParams(seo) {
  return wrapComposable(_useSetI18nParams)(seo);
}
export function useLocaleHead({
  dir = true,
  lang = true,
  seo = true,
  key = "hid"
} = {}) {
  return wrapComposable(_useLocaleHead)({ dir, lang, seo, key });
}
export function useRouteBaseName() {
  return wrapComposable(getRouteBaseName);
}
export function useLocalePath() {
  return wrapComposable(localePath);
}
export function useLocaleRoute() {
  return wrapComposable(localeRoute);
}
export function useLocaleLocation() {
  return wrapComposable(localeRoute);
}
export function useSwitchLocalePath() {
  return wrapComposable(switchLocalePath);
}
export function useBrowserLocale() {
  return useNuxtApp().$i18n.getBrowserLocale() || null;
}
export function useCookieLocale() {
  const locale = ref("");
  const detect = runtimeDetectBrowserLanguage();
  if (!detect || !detect.useCookie) {
    return locale;
  }
  const code = useCookie(detect.cookieKey).value;
  if (code && localeCodes.includes(code)) {
    locale.value = code;
  }
  return locale;
}
const warnRuntimeUsage = (method) => console.warn(
  method + "() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect."
);
export function defineI18nRoute(route) {
  if (import.meta.dev) {
    warnRuntimeUsage("defineI18nRoute");
  }
}
