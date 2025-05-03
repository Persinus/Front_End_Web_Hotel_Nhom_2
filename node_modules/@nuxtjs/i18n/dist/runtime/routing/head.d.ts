import { type Ref } from '#imports';
import type { I18nHeadMetaInfo, I18nHeadOptions, SeoAttributesOptions } from '#internal-i18n-types';
import type { CommonComposableOptions } from '../utils.js';
import type { I18nRouteMeta } from '../types.js';
/**
 * Returns localized head properties for locale-related aspects.
 *
 * @param common - Common options used internally by composable functions.
 * @param options - An options, see about details {@link I18nHeadOptions}.
 *
 * @returns The localized {@link I18nHeadMetaInfo | head properties}.
 *
 * @public
 */
export declare function localeHead(common: CommonComposableOptions, { dir, lang, seo, key }: I18nHeadOptions): I18nHeadMetaInfo;
export declare function _useLocaleHead(common: CommonComposableOptions, options: Required<I18nHeadOptions>): Ref<I18nHeadMetaInfo>;
export declare function _useSetI18nParams(common: CommonComposableOptions, seo?: SeoAttributesOptions): (params: I18nRouteMeta) => void;
