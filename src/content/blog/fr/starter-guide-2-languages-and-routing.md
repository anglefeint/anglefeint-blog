---
title: 'Anglefeint Starter Guide 2: Langues et routage'
subtitle: 'Comment fonctionnent les locales, le fallback et les URLs de la langue par defaut'
description: "Utilisez le registre unique des locales dans src/site.config.ts pour piloter le routage, les labels, les fallbacks, les messages, le hero et le contenu About."
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/cyber-03.webp'
---

Anglefeint utilise un registre unique des locales dans `src/site.config.ts`.

Cela signifie que le routage, les labels de langue, le comportement de fallback, les textes UI localises, le hero de la home et le contenu About localise viennent tous du meme endroit.

## La structure i18n essentielle

```ts
i18n: {
  defaultLocale: 'en',
  routing: {
    defaultLocalePrefix: 'always',
  },
  locales: {
    en: {
      meta: {
        label: 'English',
        hreflang: 'en',
        ogLocale: 'en_US',
      },
      site: {
        hero: 'Votre hero localise.',
      },
      messages: {
        nav: { home: 'Home' },
      },
      about: {
        metaLine: '$ profile booted | mode: builder',
      },
    },
  },
}
```

## Choisir la langue par defaut et le mode URL

- `i18n.defaultLocale`
- `i18n.routing.defaultLocalePrefix`

Si `defaultLocalePrefix` vaut `'always'` :

- la home de la langue par defaut est `/<default-locale>/`
- `/` redirige vers elle

Si `defaultLocalePrefix` vaut `'never'` :

- `/` devient la home canonique de la langue par defaut
- `/<default-locale>/` redirige vers `/`

## Les metadonnees de locale actives aujourd'hui

- `label`
- `hreflang`
- `ogLocale`
- `enabled`
- `fallback`

`enabled` affecte la generation des routes et le language switcher. `fallback` affecte la resolution des messages localises, du hero et du contenu About.

## Les champs localises que la plupart des utilisateurs vont modifier

1. `i18n.locales.<code>.messages`
2. `i18n.locales.<code>.site.hero`
3. `i18n.locales.<code>.about`

## Les fichiers de contenu restent necessaires

Les articles localises vivent toujours dans :

```text
src/content/blog/<locale>/
```

Si une page article n'existe pas dans la langue cible, le language switcher revient a l'index du blog de cette langue.

## Lire ensuite

- [Starter Guide 1: Configurer votre site](/fr/blog/starter-guide-1-configure-your-site/)
- [Starter Guide 3: Configurer les commentaires, About et les toggles](/fr/blog/starter-guide-3-comments-about-and-theme-toggles/)
