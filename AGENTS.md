# AGENTS.md — 项目工程说明

面向 AI 助手与协作者：本项目的技术栈、目录约定、配置入口、构建与部署流程一览。

---

## 1. 项目概览

- **名称**: anglefeint-blog  
- **类型**: 静态博客 / 个人站点（Astro SSG，无 SSR）  
- **主题**: [@anglefeint/astro-theme](https://github.com/anglefeint/astro-theme-anglefeint)（多语言、多氛围、电影感）  
- **部署**: Cloudflare Workers / Pages，托管 `dist/` 静态资源  
- **发布流程**: 写内容 → 提交 GitHub → Cloudflare 自动构建并部署（需在 Cloudflare 绑定该仓库）

---

## 2. 技术栈

| 类别     | 技术 |
|----------|------|
| 框架     | Astro 6.x (beta) |
| 内容     | Markdown + MDX，Content Collections |
| 多语言   | 配置驱动 i18n（en, ja, ko, es, zh, fr 等） |
| 构建输出 | 纯静态 → `dist/` |
| 部署     | Cloudflare（`wrangler.jsonc` 指定 `assets.directory: ./dist`） |
| 运行环境 | Node.js >= 22.12.0 |

---

## 3. 目录结构（关键部分）

```
anglefeint-blog/
├── astro.config.mjs          # Astro 配置（site、vite alias、integrations）
├── wrangler.jsonc            # Cloudflare：项目名、assets 目录、observability
├── package.json
├── src/
│   ├── site.config.ts        # 【唯一编辑入口】站点与主题配置
│   ├── site.config.defaults.ts
│   ├── site.config.schema.ts
│   ├── site.config.runtime.ts
│   ├── content.config.ts     # 内容集合 schema（复用到 theme）
│   ├── config/               # 由 site.config 派生的适配层（一般勿直接改）
│   │   ├── site.ts           # 站点信息、环境变量覆盖
│   │   ├── theme.ts
│   │   ├── about.ts
│   │   └── social.ts
│   ├── i18n/                 # 多语言与路由
│   │   ├── config.ts
│   │   ├── runtime.ts
│   │   ├── messages.ts
│   │   └── posts.ts
│   ├── content/
│   │   └── blog/
│   │       ├── en/           # 按语言分目录，一篇 = 一个 .md
│   │       ├── zh/
│   │       ├── ja/
│   │       └── ...
│   ├── pages/                # 路由
│   │   ├── index.astro       # 根重定向
│   │   ├── [lang]/
│   │   │   ├── index.astro
│   │   │   ├── blog/
│   │   │   │   ├── [...slug].astro   # 文章页
│   │   │   │   └── [...page].astro   # 列表/分页
│   │   │   ├── about.astro
│   │   │   └── rss.xml.ts
│   │   └── robots.txt.ts
│   ├── assets/
│   │   └── blog/default-covers/   # 文章默认封面图
│   └── templates/            # new-page 用的页面模板
├── scripts/
│   ├── new-post.mjs          # 新建文章骨架
│   ├── new-page.mjs          # 新建自定义页面
│   ├── check-adapter-contract.mjs
│   ├── sync-adapters.mjs
│   └── check-about-runtime-config.mjs
└── public/                   # 静态资源，原样输出到 dist
```

- **内容唯一来源**: `src/content/blog/<locale>/*.md`  
- **配置唯一入口**: `src/site.config.ts`（站点信息、i18n、主题、评论等）  
- **适配层**: `src/config/*`、`src/i18n/*` 由 theme 与 site.config 生成，不建议手改。

---

## 4. 配置与“单一真相源”

- **站点与主题**: 只改 `src/site.config.ts`。  
  - 含：`site`（title, description, url, author, tagline）、`i18n`（locales、defaultLocale、routing、每语言 messages/hero）、`theme`（comments、about 开关、效果开关）、`social.links` 等。  
- **环境变量**: 可选覆盖站点信息，见 `.env.example`：  
  `PUBLIC_SITE_URL`, `PUBLIC_SITE_TITLE`, `PUBLIC_SITE_AUTHOR`, `PUBLIC_SITE_DESCRIPTION`, `PUBLIC_SITE_TAGLINE`  
- **内容集合 schema**: 在 `src/content.config.ts` 中从 `@anglefeint/astro-theme` 复用；博客 frontmatter 字段由主题约定（如 title, description, pubDate, heroImage 等）。

---

## 5. 内容：文章与页面

### 5.1 博客文章

- **位置**: `src/content/blog/<locale>/<slug>.md`（例如 `src/content/blog/zh/my-post.md`）  
- **URL**: `/<locale>/blog/<slug>/`（例如 `/zh/blog/my-post/`）  
- **路由**: 由 `src/pages/[lang]/blog/[...slug].astro` + Content Collection 自动生成，无需手写路由。  

**新增文章（推荐）**:

```bash
# 为所有已启用语言生成同名 slug 的文章骨架
npm run new-post -- my-new-slug

# 仅部分语言
npm run new-post -- my-new-slug --locales en,zh
# 或
ANGLEFEINT_LOCALES=en,zh npm run new-post -- my-new-slug
```

- Slug 规则：小写字母、数字、连字符。  
- 若存在 `src/assets/blog/default-covers/`，脚本会按 slug 哈希分配默认封面，也可在 frontmatter 中设置 `heroImage`。

### 5.2 自定义页面

- **命令**: `npm run new-page -- <slug> --theme <base|ai|cyber|hacker|matrix>`  
- **生成**: `src/pages/[lang]/<slug>.astro`，通过 `getStaticPaths()` 为各语言生成路由。  
- 仅博客用 `new-post`；独立页面用 `new-page`。

---

## 6. 构建与部署

- **本地构建**: `npm run build` → `astro build` → 输出到 **`dist/`**  
- **本地预览**: `npm run preview`  
- **Cloudflare**:  
  - `wrangler.jsonc` 中 `assets.directory` 为 `./dist`，即用构建产物作为静态资源根目录。  
  - 与 GitHub 联动后：推送代码 → Cloudflare 拉取 → 执行构建（需在 Dashboard 配置 build 命令与输出目录）→ 部署。  

**Cloudflare 建议配置**（在对应 Pages/Workers 项目中）:

- Build command: `npm run build`（或 `pnpm build` / `yarn build`）  
- Build output directory: `dist`  
- Node 版本: 22.x 或以上（与 `package.json` engines 一致）

---

## 7. 常用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 本地开发 |
| `npm run build` | 生产构建 → `dist/` |
| `npm run preview` | 本地预览构建结果 |
| `npm run new-post -- <slug>` | 按 slug 生成多语言文章骨架 |
| `npm run new-page -- <slug> --theme <name>` | 生成多语言自定义页面 |
| `npm run check` | 适配器契约 + 构建 + about 运行时检查 |
| `npm run check:no-build` | 仅适配器与类型检查，不构建 |
| `npm run doctor` | 先 check:adapters，再 astro check |
| `npm run sync-adapters` | 同步 theme 适配器模板到项目 |

---

## 8. 约定与注意点

- **静态站点**: 无 Node adapter，无服务端渲染；所有页面构建时生成。  
- **多语言**: 启用语言由 `site.config.ts` 的 `i18n.locales` 决定；`defaultLocale`、`routing.defaultLocalePrefix` 控制根路径是否带语言前缀（如 `/` vs `/en/`）。  
- **博客列表分页**: 由 `theme.blogPageSize` 控制，列表页为 `/[lang]/blog/`、`/[lang]/blog/2/` 等。  
- **RSS / Sitemap**: 按语言生成；sitemap 会排除 `/en/` 等约定路径（见 `astro.config.mjs`）。  
- **主题与适配器**: 大量布局与逻辑在 `@anglefeint/astro-theme` 内；starter 侧通过 `src/config/*`、`src/i18n/*` 与 theme 契约一致。升级主题后建议执行 `npm run doctor` 或 `npm run check`。

---

## 9. 关键文件速查

| 目的 | 文件 |
|------|------|
| 改站点信息、语言、主题、评论 | `src/site.config.ts` |
| 改 Astro 行为、集成 | `astro.config.mjs` |
| 改部署与观测 | `wrangler.jsonc` |
| 内容 schema | `src/content.config.ts`（通常只 re-export theme） |
| 文章内容 | `src/content/blog/<locale>/*.md` |
| 环境变量示例 | `.env.example` |

---

## 10. 总结

- **写文章**：在 `src/content/blog/<locale>/` 下新增或通过 `npm run new-post` 生成，然后提交 Git。  
- **改配置**：只改 `src/site.config.ts`（必要时用 `.env` 覆盖）。  
- **发布**：推送到已绑定 Cloudflare 的 GitHub 仓库，由 Cloudflare 自动构建并部署 `dist/`。  

更多使用说明见各语言 README（如 `README.zh-CN.md`）。
