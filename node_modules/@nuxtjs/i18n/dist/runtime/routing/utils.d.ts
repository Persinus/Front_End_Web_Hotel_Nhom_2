import type { LocaleObject, I18nPublicRuntimeConfig } from '#internal-i18n-types';
import type { Locale } from 'vue-i18n';
import type { CompatRoute } from '../types.js';
import type { RouteRecordNameGeneric } from 'vue-router';
export declare function getRouteName(routeName?: RouteRecordNameGeneric): string;
export declare function getLocaleRouteName(routeName: RouteRecordNameGeneric, locale: Locale, opts: I18nPublicRuntimeConfig): string;
/**
 * Find the browser locale
 *
 * @param locales - The target {@link LocaleObject} list
 * @param browserLocales - The locale code list that is used in browser
 *
 * @returns The matched the locale code
 */
export declare function findBrowserLocale(locales: LocaleObject[], browserLocales: readonly string[]): string;
export declare function getLocalesRegex(localeCodes: string[]): RegExp;
export declare const regexpPath: RegExp;
export declare function createLocaleFromRouteGetter(): (route: string | CompatRoute) => string;
