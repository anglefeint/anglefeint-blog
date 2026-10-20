---
doc_id: starter_agent_guide
doc_role: user-guide
doc_purpose: Instructions for AI assistants working on this personal blog.
doc_scope: [agent-guidance, setup, commands, config]
update_triggers: [workflow-change, command-change, config-change]
source_of_truth: true
depends_on: [README.md, WRITING_WORKFLOW.md]
sync_targets: [CLAUDE.md, .cursor/rules/00-repo.mdc]
---

# Working on this blog

This is a personal blog built from the Anglefeint starter. Help its owner configure the site, write content and customize pages. Follow the owner's requests, preserve their existing work, and reply in their language.

## Start here

Read [README.md](README.md) or the owner's language version, then inspect `package.json` and the existing `src/site.config.ts`. Read only the tutorial needed for the task:

- [Setup and deployment](https://github.com/anglefeint/astro-theme-anglefeint/blob/v0.20.0/src/content/blog/en/starter-guide-1-configure-your-site.md)
- [Writing and content](https://github.com/anglefeint/astro-theme-anglefeint/blob/v0.20.0/src/content/blog/en/starter-guide-2-languages-and-routing.md)
- [Optional features](https://github.com/anglefeint/astro-theme-anglefeint/blob/v0.20.0/src/content/blog/en/starter-guide-3-comments-about-and-theme-toggles.md)

Starter tutorials are intentionally not published as articles on this blog. The links above reference the matching upstream release. Actual local configuration and code determine behavior; examples should be merged into the existing configuration.

## Writing

Before creating, translating, editing, or publishing blog posts, read and follow [WRITING_WORKFLOW.md](./WRITING_WORKFLOW.md). Preserve the author's English manuscript and translate directly from it. Follow its publication-date and approval rules.

## Development

When starting the dev server, use background mode: `npm run dev -- --background` (`astro dev --background`). Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Where to work

| Task | Location |
| --- | --- |
| Site name, domain, author, languages, About, social links, feature switches | `src/site.config.ts` |
| Articles | `src/content/blog/<locale>/<slug>.md` or `.mdx` |
| Article-relative images | Beside the article |
| Public images, icons and audio | `public/`; URLs omit `public`, e.g. `/music/song.mp3` |
| New custom pages | `npm run new-page -- projects --theme cyber`, then edit the generated page |

Keep configuration imports/exports and merge into the existing `defineThemeConfig({...})` object. Arrays replace earlier arrays: preserve entries when adding tracks or links. Inspect `.env` and hosting overrides when site identity behaves differently from the file.

Before publishing, replace the placeholders in `public/llms.txt` with the owner's site information and real locale URLs, or remove that optional file. It describes the published site for readers and crawlers; it is not this project's agent instruction file.

`src/config/*`, `src/i18n/*` and `src/types/theme-scripts.d.ts` are generated adapters. Prefer the public configuration; if intentional adapter customization is necessary, change the matching local `scripts/adapter-templates/*` source and regenerate. `sync-adapters` overwrites generated targets. Do not edit `node_modules`, `dist` or `.astro`; package changes belong in a deliberate upgrade or an upstream fix.

## Content and languages

- Create one article with `npm run new-post -- my-post --locales en` (use the requested locale). Without `--locales`, it creates skeletons for all enabled languages, not translations.
- Required article frontmatter: `title`, `description`, `pubDate`. Slugs use lowercase letters, numbers and hyphens. Matching translations use the same slug.
- Omitted locale settings inherit defaults. Disable unwanted languages with `meta.enabled: false`; keep the default locale enabled. `--locales` does not enable languages.
- There is no draft or future-date publication filter. Keep unfinished articles outside `src/content/blog/`.
- The default homepage prefix setting only changes the homepage; article routes remain `/<locale>/blog/<slug>/`.
- Add music the owner is permitted to use and preserve required attribution. The starter includes no demo recordings.

## Validate and finish

Use the package manager already chosen by the owner; README gives npm and pnpm commands. From the project root:

- `npm run dev -- --background` for local editing. Search requires a built preview.
- `npm run check:no-build` for quick adapter/scaffold/type checks.
- `npm run doctor` before delivery: it includes checks and a build. Then `npm run preview` and verify the changed pages. Do not repeat `check` and `build` after a successful `doctor` without a reason.
- Use `npm run sync-adapters` only when intentional template changes or diagnostics call for it; review the overwritten targets first.

For a custom page, available themes are `base`, `ai`, `cyber`, `hacker`, `matrix`; creation does not add a navigation item or translate its body. Preserve the four page atmospheres, accessibility, reduced motion and mobile usability when changing visuals.

Report what changed, what was verified and any remaining limitations. Local preview does not publish the site. Follow the owner's deployment instructions; this blog does not need the upstream theme's npm publishing or starter synchronization workflow.
