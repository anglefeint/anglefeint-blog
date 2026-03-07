/**
 * Single user-facing config entry for Anglefeint.
 * Edit this file only. Other files under src/config/* and src/i18n/* are adapters.
 */
import { defineThemeConfig } from './site.config.defaults.ts';

export type {
  AboutConfig,
  LocaleCode,
  LocaleConfig,
  LocaleMetaConfig,
  LocaleSiteConfig,
  NormalizedLocaleConfig,
  NormalizedThemeI18nConfig,
  SocialLink,
  ThemeConfig,
  ThemeI18nConfig,
} from './site.config.schema.ts';
export { DEFAULT_ABOUT_CONFIG, defineThemeConfig } from './site.config.defaults.ts';
export { normalizeI18nConfig } from './site.config.runtime.ts';

/**
 * Edit this object only.
 * Omitted fields safely fall back to theme defaults.
 */
export const THEME_CONFIG = defineThemeConfig({
  social: {
    links: [
      { href: 'https://github.com/anglefeint', label: 'GitHub', icon: 'github' },
      { href: 'https://x.com/anglefeint', label: 'X', icon: 'twitter' },
      { href: 'https://mastodon.social/@anglefeint', label: 'Mastodon', icon: 'mastodon' },
    ],
  },
  theme: {
    comments: {
      enabled: true,
      repo: 'anglefeint/anglefeint-blog',
      repoId: 'R_kgDORTJJlg',
      category: 'Comments',
      categoryId: 'DIC_kwDORTJJls4C3wsb',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'dark',
      lang: 'en',
      loading: 'lazy',
      crossorigin: 'anonymous',
    },
  },
});
