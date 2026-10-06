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
  analytics: { googleAnalyticsId: 'G-B6XBG6VW39' }, // Optional GA4 Measurement ID (G-...).
  site: {
    title: 'AngleFeint',
    url: 'https://anglefeint.com',
  },
  social: {
    links: [
      { href: 'https://x.com/anglefeint', label: 'X', icon: 'twitter' },
      { href: 'https://mastodon.social/@anglefeint', label: 'Mastodon', icon: 'mastodon' },
      { href: 'https://github.com/anglefeint', label: 'GitHub', icon: 'github' },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    routing: {
      defaultLocalePrefix: 'never',
    },
    locales: {
      en: {
        site: { hero: 'Exploring technology, history, places, and ideas — and leaving a record along the way.' },
      },
      ja: {
        site: { hero: '技術、歴史、さまざまな場所や思想を探究し、その道のりを記録していく。' },
      },
      ko: {
        site: { hero: '기술, 역사, 장소와 생각을 탐구하며 그 여정을 기록합니다.' },
      },
      es: {
        site: { hero: 'Explorando la tecnología, la historia, los lugares y las ideas, y dejando un registro por el camino.' },
      },
      zh: {
        site: { hero: '探索技术、历史、地方与思想，也为沿途的见闻留下记录。' },
      },
      'pt-br': {
        site: { hero: 'Explorando tecnologia, história, lugares e ideias, e deixando um registro pelo caminho.' },
      },
      de: {
        site: { hero: 'Technologie, Geschichte, Orte und Ideen erkunden und unterwegs festhalten, was ich entdecke.' },
      },
      ru: {
        site: { hero: 'Исследуя технологии, историю, места и идеи и сохраняя заметки о пройденном пути.' },
      },
      'zh-hant': {
        site: { hero: '探索技術、歷史、地方與思想，也為沿途的見聞留下記錄。' },
      },
    },
  },
  theme: {
    comments: {
      enabled: true,
      repo: 'anglefeint/anglefeint-blog',
      repoId: 'R_kgDORTJJlg',
      category: 'Announcements',
      categoryId: 'DIC_kwDORTJJls4C3wr3',
      mapping: 'pathname',
      strict: '1',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'catppuccin_macchiato',
      lang: '',
    },
    music: {
      enabled: true,
      tracks: [
        { title: 'Luv(sic) Part 3', src: '/music/luv-sic-pt-3.mp3' },
        { title: "Travelers' Encore", src: '/music/travelers-encore.mp3' },
        { title: 'His Theme', src: '/music/his-theme.mp3' },
        { title: 'Storm Fury', src: '/music/storm-fury.mp3' },
        { title: 'Kage - Stage 1', src: '/music/kage-stage-1.mp3' },
        { title: 'The Last Meal', src: '/music/the-last-meal.mp3' },
        { title: 'Sparkle', src: '/music/sparkle.mp3' },
      ],
    },
  },
  // Hide theme and Astro credits; copyright and custom site.tagline remain.
  // theme: { footer: { showCredits: false } },
  // Optional music: put your audio in public/music/, then enable a playlist.
  // theme: { music: { enabled: true, tracks: [{ title: 'My Song', src: '/music/my-song.mp3' }] } },
  // Article contents are enabled by default. Per-post `toc: true/false` overrides this.
  // theme: { toc: { enabled: false } },
  // Tag browsing: theme: { tags: { enabled: false } }
  // Automatic article share images: theme: { socialImage: { enabled: false } }
  // Per-post `ogImage` always takes priority and does not change the hero image.
  // Search is enabled by default; builds generate its index automatically.
  // To disable: theme: { search: { enabled: false } }
  // Example:
  // Language menu names use i18n.locales.<code>.meta.label.
  // Chinese defaults to 简体中文. To customize only its display name:
  // i18n: { locales: { zh: { meta: { label: '中文' } } } },
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: {
  //     en: {
  //       meta: { label: 'English', hreflang: 'en', ogLocale: 'en_US' },
  //       site: { hero: 'Your localized hero copy.' },
  //       about: { metaLine: '$ profile booted | mode: builder' },
  //       messages: { nav: { home: 'Home' } },
  //     },
  //   },
  // },
});
