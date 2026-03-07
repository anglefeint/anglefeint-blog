---
title: 'Anglefeint Starter Guide 3: Commentaires, About et toggles'
subtitle: 'Giscus, contenu About, compteurs de home, pagination et effets de post'
description: 'Les toggles verifies dans Anglefeint : commentaires Giscus, contenu About, effet Red Queen, compteurs de home et reglages de pagination du blog.'
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/matrix-02.webp'
---

Une fois l'identite du site et les langues en place, la couche suivante concerne les fonctionnalites activables.

## Activer les commentaires Giscus

La configuration minimale qui fonctionne est :

```ts
theme: {
  comments: {
    enabled: true,
    repo: 'owner/repo',
    repoId: '...',
    category: 'Announcements',
    categoryId: '...',
    mapping: 'pathname',
  },
}
```

Le starter actuel consomme :

- `enabled`
- `repo`
- `repoId`
- `category`
- `categoryId`
- `mapping`
- `term`
- `number`
- `strict`
- `reactionsEnabled`
- `emitMetadata`
- `inputPosition`
- `theme`
- `lang`
- `loading`
- `crossorigin`

Regles de validation a retenir :

- `mapping: 'specific'` exige `term`
- `mapping: 'number'` exige un `number` entier positif

## Personnaliser le contenu de la page About

Utilisez :

```ts
i18n.locales.<code>.about
```

Cette configuration pilote le texte principal de la page About, les labels de sidebar, le contenu des modales et les chaines runtime de la page About.

## Basculer l'effet Red Queen sur les articles

Utilisez :

```ts
theme: {
  effects: {
    enableRedQueen: true,
  },
}
```

## Controler les compteurs de home et de blog

```ts
theme: {
  blogPageSize: 9,
  homeLatestCount: 3,
}
```

## Regler la pagination du blog

Ces champs sont actifs dans la pagination actuelle des archives :

- `windowSize`
- `showJumpThreshold`
- `jump.enabled`
- `jump.enterToGo`
- `style.enabled`
- `style.mode`
- `style.variants`
- `style.fixedVariant`

## Une limite importante

Les ambiances de route comme la home Matrix, la liste de blog Cyber, la page article AI et la page About Hacker sont des systemes visuels possedes par les routes. Utilisez la configuration pour les toggles pris en charge et le contenu, pas pour un restylage structurel arbitraire.

## Lire toute la serie

- [Starter Guide 1: Configurer votre site](/fr/blog/starter-guide-1-configure-your-site/)
- [Starter Guide 2: Configurer les langues et le routage](/fr/blog/starter-guide-2-languages-and-routing/)
