# Blog theme upgrades

## 0.26.0 to 0.27.1

This personal blog migrated to the package-owned integration starter. The migration was first built in a separate temporary directory before applying the validated skeleton to this repository.

- `astro.config.mjs` registers `@anglefeint/astro-theme/integration` with the existing `THEME_CONFIG`.
- Configuration imports and exports use `@anglefeint/astro-theme/config`; all personal configuration values remain unchanged.
- Standard routes, i18n, adapters and their maintenance scripts now belong to the theme package. Their former local copies were retired.
- The package manifest identifies `anglefeint.projectSchema: 1`, retains npm and the existing dependency override, and pins the migrated theme to `0.27.1`.
- Articles, translations, publication dates, slugs, assets, the full 14-track playlist, public files, licenses and Cloudflare deployment configuration were retained. Starter sample articles were not imported.
- Existing personal documentation, including `WRITING_WORKFLOW.md` and `docs/previous-llms.txt`, remains in this repository. Agent guidance was adjusted to describe the new runtime ownership.

Validation passed in both the isolated candidate and the final repository: doctor built 271 pages and exported/indexed 54 articles in nine languages, with zero Astro diagnostics and nine About runtime checks. The 270 sitemap URLs matched the previous build. SHA-256 checks preserved 123 protected files, and the personal configuration object remained identical. Browser checks covered search results, About close/restore, Decoder Base64 decoding, music playback, language switching and a narrow article viewport. The schema-1 upgrade preflight and dependency audit passed.

## 0.27.1 to 0.27.2

Upgraded with `npm run upgrade -- --to 0.27.2`. This patch fixes completion of search-index writes during builds; no content or configuration migration was required. The updater backed up dependency files and completed doctor. SHA-256 checks confirmed all 121 protected content, asset, configuration and deployment/workflow files were byte-identical. The dependency audit and browser article-search check passed.

## 0.27.2 to 0.28.0

Upgraded with the official npm updater and enabled `theme.comments.shareAcrossLocales`. Shared mode uses `mapping: 'specific'`, empty configured `term`/`number`, and strict matching. Each article's locale-free slug supplies its term; the comment interface continues following the page language.

Doctor, the dependency audit and browser Giscus loading passed. All 54 article pages were checked for six distinct per-article terms shared across nine locales, with correct interface languages. Articles, music and other public assets were byte-preserved; other personal configuration values were unchanged. GitHub contained only the welcome discussion when switching; no discussions or comments were moved, created or deleted during validation.

To restore the former associations, set `shareAcrossLocales: false` and `mapping: 'pathname'`; keep `term` and `number` empty and `strict: '1'`. Existing discussions are retained on GitHub.

## 0.28.0 to 0.30.0

Upgraded with `npm run upgrade -- --to 0.30.0`. The official schema-1 updater backed up dependency files and completed doctor successfully. No configuration or content migration was required; Fragments remains disabled by default, and no demo content was imported.

The build produced 271 HTML pages, including all 54 article pages. SHA-256 checks confirmed that all 125 protected source, public asset, configuration, deployment and writing-workflow files were unchanged. The lockfile changed only the theme package from 0.28.0 to 0.30.0; the dependency audit reported zero vulnerabilities.

Production-preview browser checks covered Home, article search and result navigation, English/Chinese article switching, the Chinese article at a 390px viewport without horizontal overflow, About and Decoder Base64 decoding. The Chinese article retained its production canonical URL and locale-free shared Giscus term. This was a local upgrade and preview only; no commit, push or deployment was performed.

## 0.30.0 to 0.31.0

Upgraded with `npm run upgrade -- --to 0.31.0`; the official updater backed up dependency files and completed doctor. Enabled Fragments and its optional comments as requested, reusing the existing Giscus configuration. No fragment content or demo examples were added.

The build produced 280 HTML pages, including nine empty Fragments feeds. The dependency audit reported zero vulnerabilities. SHA-256 checks confirmed all 125 protected source, asset, configuration and workflow files matched the pre-upgrade baseline, which already included the requested Fragments switches.

An isolated invocation of the installed official `new-fragment` CLI without locale arguments generated all nine enabled languages with one shared ID and timestamp. Generated skeletons stayed under ignored acceptance output. Browser production-preview checks passed for Home, Chinese and English Fragments, the Frontier entry and language switching. Empty-collection warnings are expected until the first fragment is written; comment-dialog loading awaits a real fragment.

## Future upgrades

Start with a clean or deliberately reviewed working tree and keep a backup of personal content. Read the target release and upgrade notes, then run:

```sh
npm run upgrade
```

The schema-1 npm updater backs up dependency files, installs the target and runs doctor. It does not publish the blog or rewrite personal content/configuration/media. Review its result and inspect `npm run preview` before committing and pushing. Do not deploy failed or incomplete build output.

For a read-only compatibility preflight:

```sh
npx @anglefeint/astro-theme@latest upgrade --check
```

Do not restore old standard routes or adapter-sync scripts, and do not apply the upstream theme's npm-release or starter-publishing workflow to this blog. See the [upstream upgrade guide](https://github.com/anglefeint/astro-theme-anglefeint/blob/v0.27.1/UPGRADING.md).
