# Writing Workflow

This is the editorial and publishing workflow for the AngleFeint blog. It is repository documentation, not a published article. Read it before creating, translating, editing, or publishing posts.

## 1. Establish the Source

- Treat the author's supplied English manuscript as the authoritative source. Read the entire attachment, not just its filename or preview.
- Do not rewrite, polish, shorten, censor, correct, or add arguments to the English text unless the author explicitly requests it. Raise suspected factual or editorial issues separately.
- Preserve Markdown structure: paragraphs, headings, emphasis, lists, links, quotations, code fences, inline code, and math source.
- Put the manuscript's top-level title in frontmatter and omit that duplicate title from the body. Preserve the remaining body verbatim, including a subtitle written as an opening italic or bold paragraph.
- Do not silently move body content into optional theme metadata or change formatting for visual convenience.

## 2. Confirm Publication Metadata

- Choose a descriptive, stable, lowercase, hyphenated slug. Use the same slug for every translation. Avoid changing published slugs without a redirect plan.
- Use the author's publication date when supplied. The author prefers a US publication date, not the computer's date or the Asia/Shanghai date. The specific US time zone has not yet been agreed: if it affects the calendar date, ask for the intended date or time zone rather than guessing.
- Store the agreed date as `pubDate: 'YYYY-MM-DD'` in every locale. Inspect the CLI-generated date instead of accepting it automatically. Do not change a published date merely because a translation or deployment happens later.
- Use `author: 'AngleFeint'`. Write a concise, faithful description for each locale; descriptions are added metadata, not edits to the manuscript.
- Select a small set of relevant tags. Prefer existing tags where appropriate and keep tag identifiers consistent across locales.
- Follow the existing cover-image convention unless the author supplies another image. Do not invent external publication URLs for X, Substack, or other services; add them only when actual URLs are provided.

## 3. Use the Official Creation Command

Check the installed theme's CLI help and the site's enabled locales before scaffolding:

```sh
npm run new-post -- --help
```

For the current nine-language site, replace `your-post-slug` in this command:

```sh
npm run new-post -- your-post-slug --locales en,ja,ko,es,zh,pt-br,de,ru,zh-hant
```

The command creates `src/content/blog/<locale>/<slug>.md`. Fill these generated files with the source and translations, and remove scaffold placeholders. Do not build a replacement scaffolder or overwrite existing posts.

The current locales are English, Japanese, Korean, Spanish, Simplified Chinese, Brazilian Portuguese, German, Russian, and Traditional Chinese. Recheck configuration if this list changes.

## 4. Translate from English

- Translate the complete English manuscript directly into each of the other eight languages. Do not use another translation as the source for a translation chain.
- Preserve meaning, first-person voice, strength of claims, qualifications, rhetorical questions, examples, and attribution. Do not turn the article into a summary or add new claims.
- Preserve corresponding paragraphs and Markdown structure. Translate visible link text where appropriate, but retain destination URLs. Keep code, mathematical identifiers, and formulas unchanged unless explicitly asked otherwise.
- Translate titles and descriptions naturally. Retain proper names and technical terms accurately, using established local equivalents where appropriate.
- Compare each translation with the English source. Matching paragraph counts is a useful omission check, not proof of translation accuracy; review the meaning as well.

## 5. Verify Content and Rendering

- Compare the English body against the supplied manuscript. Only the agreed top-level-title extraction and line-ending normalization should differ. Do not normalize away other formatting differences during this check.
- Check each locale for missing sections, scaffold text, untranslated passages, altered links, damaged formatting, and inconsistent dates or tags.
- Consult the Astro content and internationalization guides linked from `AGENTS.md` when working on those features.
- Do not assume every Markdown extension is supported. In particular, test `$...$` and `$$...$$` math rendering when present. Preserve the author's source and report unsupported rendering before publication; do not silently replace formulas, install plugins, or patch the theme.
- Run the project's validation command:

```sh
npm run doctor
```

- The current `doctor` script includes checks, a production build, and About runtime validation. Recheck `package.json` after upgrades rather than assuming this contract never changes. Resolve failures before publishing.
- Inspect the production output using:

```sh
npm run preview
```

- Review the article in a browser, including desktop and mobile layout, long headings, lists, quotations, links, and formulas where applicable. Stop the preview server when finished. If using a development server instead, follow the background-server instructions in `AGENTS.md`.
- Verify all locale routes and language-switch links point to this article, and confirm its inclusion in blog listings, RSS, search output, and the sitemap. Check canonical and alternate-language URLs against the configured production domain.
- Report what was actually tested. Do not claim browser review, native-speaker review, live deployment, or search-engine indexing based only on a successful build.

## 6. Commit and Publish

- Inspect `git status`, review the diff, and run `git diff --check`. Keep unrelated work out of the commit.
- Push only when the author authorizes publication. A request to review a manuscript or explain the workflow is not permission to publish. Honor a later instruction to pause or withhold a push.
- After pushing, verify the remote branch contains the expected commit and check its Cloudflare Workers Builds status. A successful Git push does not prove deployment succeeded.
- After deployment succeeds, check the live article and relevant metadata. Report pending or failed deployment honestly.
- If no build is triggered, inspect the commit's checks and Cloudflare build history first. Do not automatically alter build settings, reconnect integrations, or create empty commits. Obtain approval before an empty-commit retry.
- Give a concise completion report: published locales, publication date, commit, checks performed, deployment status, and article URLs when appropriate.

## Scope and Ownership

- Article work should normally change only the new post files and any explicitly requested article assets. Preserve existing articles, music, site configuration, licensing, and theme files.
- Use official theme configuration and upgrade mechanisms. Never patch `node_modules` or introduce local theme changes as a hidden part of publishing an article.
- Original articles and translations are covered by `src/content/blog/LICENSE`, not the code's MIT license. Preserve third-party attribution; do not claim ownership of quoted material.
- Preserve this workflow and its agent-document links during future starter migrations, alongside the site's other personal content and configuration.
