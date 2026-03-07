---
title: 'Anglefeint Starter Guide 1: Configurer votre site'
subtitle: 'Les premiers champs a modifier apres la creation du projet starter'
description: "Commencez par la vraie entree utilisateur : l'identite du site, les liens sociaux, le toggle About et le remplacement du contenu starter."
pubDate: '2026-03-07'
heroImage: '../../../assets/blog/default-covers/cyber-02.webp'
---

Si vous avez cree votre projet a partir du starter Anglefeint, commencez par `src/site.config.ts`.

Ce fichier est le point d'entree principal pour la configuration utilisateur. Vous n'avez pas besoin d'aller chercher des reglages dans `src/config/*` ou `src/i18n/*`.

## Commencez par l'identite du site

Remplacez d'abord ces champs :

```ts
site: {
  title: 'Nom de votre site',
  description: 'Votre description par defaut.',
  url: 'https://example.com',
  author: 'Votre nom',
  tagline: 'Built with Astro.',
}
```

Ce qu'ils affectent actuellement :

- `site.title` : header, footer, metadonnees de page et titre RSS
- `site.description` : description par defaut du site ; la home y revient si la langue courante ne fournit pas `messages.siteDescription`
- `site.url` : URL canonique, URLs alternatives par langue, RSS et sortie robots
- `site.author` : auteur par defaut des articles et metadonnees SEO auteur
- `site.tagline` : texte du footer

Definissez `site.url` avec votre vrai domaine de production avant le deploiement.

## Ajoutez vos liens sociaux

Les liens sociaux du header et du footer viennent de :

```ts
social: {
  links: [
    { href: 'https://github.com/votrenom', label: 'GitHub', icon: 'github' },
    { href: 'https://x.com/votrenom', label: 'Twitter', icon: 'twitter' },
  ],
}
```

Icônes integrees actuellement :

- `github`
- `twitter`
- `mastodon`

## Decidez si vous gardez la page About

Utilisez :

```ts
theme: {
  enableAboutPage: true,
}
```

Passez-la a `false` si vous ne voulez ni generer `/[lang]/about/` ni afficher le lien dans le header.

## Remplacez le contenu starter

Les articles vivent dans :

```text
src/content/blog/<locale>/
```

Pour creer un nouvel article localise :

```bash
npm run new-post -- votre-premier-article
```

## Lire ensuite

- [Starter Guide 2: Configurer les langues et le routage](/fr/blog/starter-guide-2-languages-and-routing/)
- [Starter Guide 3: Configurer les commentaires, About et les toggles](/fr/blog/starter-guide-3-comments-about-and-theme-toggles/)
