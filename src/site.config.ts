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
    tagline: 'Articles: All rights reserved. · Hosted on Cloudflare.',
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
        about: {
          "sections": {
            "who": "Founder, builder, and developer.\n\nI spent more than a decade at some of Asia’s largest technology companies, working on products and systems at massive scale.\n\nOver the years, I moved from hands-on engineering into senior technical and organizational leadership, including leading cross-functional teams of nearly a hundred people across engineering, product, operations, and quality.\n\nLater, I worked at a globally leading technology company at director level, collaborating across countries and distributed teams.\n\nNow I’m building my own startup internationally.",
            "what": "I build software, systems, and occasionally things that probably shouldn’t exist.\n\nMy background spans large-scale engineering, architecture, infrastructure, product development, and organizational leadership.\n\nI care about simple systems, clear abstractions, and understanding how things actually work.",
            "ethos": [
              "Understand before abstracting.",
              "Prefer simple systems over clever ones.",
              "Build things that can be inspected and changed.",
              "Ship, observe, iterate.",
              "Question defaults."
            ],
            "now": "Building a startup.\n\nExploring software, systems, AI, and whatever seems interesting enough to deserve being built.\n\nAngleFeint is where some of those experiments end up.",
            "contactLead": "If you build interesting things, we’ll probably have something to talk about.",
            "signature": "Look deeper."
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "GitHub is the easiest place to find me"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
        site: { hero: 'Exploring technology, history, places, and ideas — and leaving a record along the way.' },
      },
      ja: {
        about: {
          "sections": {
            "who": "創業者、ビルダー、そして開発者。\n\nアジア最大級のテクノロジー企業で10年以上にわたり、極めて大規模なプロダクトとシステムに携わってきました。\n\n現場のエンジニアリングから、技術と組織の上級リーダーシップへと役割を広げ、エンジニアリング、プロダクト、運用、品質を横断する100人近いチームを率いた経験もあります。\n\nその後、世界をリードするテクノロジー企業でディレクターレベルの役職を務め、国境を越えた分散型チームと協働しました。\n\n現在は、国際的に自分のスタートアップを立ち上げています。",
            "what": "ソフトウェアやシステム、ときには存在しないほうがよさそうなものも作ります。\n\n大規模なエンジニアリング、アーキテクチャ、インフラ、プロダクト開発、組織運営にまたがる経験があります。\n\nシンプルなシステム、明確な抽象化、そして物事が実際にどう動くのかを理解することを大切にしています。",
            "ethos": [
              "抽象化する前に理解する。",
              "巧妙なシステムより、シンプルなシステムを選ぶ。",
              "中身を確かめ、変更できるものを作る。",
              "リリースし、観察し、改善を重ねる。",
              "デフォルトを疑う。"
            ],
            "now": "スタートアップを立ち上げています。\n\nソフトウェア、システム、AI、そして作る価値があるほど面白いものを探究しています。\n\nその実験の一部が、AngleFeint にたどり着きます。",
            "contactLead": "面白いものを作っているなら、きっと話が合うはずです。",
            "signature": "もっと深く見よう。"
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "私を見つけるなら GitHub が一番です"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
        site: { hero: '技術、歴史、さまざまな場所や思想を探究し、その道のりを記録していく。' },
      },
      ko: {
        about: {
          "sections": {
            "who": "창업자이자 빌더, 그리고 개발자입니다.\n\n아시아 최대 규모의 기술 기업들에서 10년 넘게 일하며 초대규모 제품과 시스템을 다뤘습니다.\n\n현장에서 직접 개발하던 역할에서 고위 기술 및 조직 리더십으로 영역을 넓혔고, 엔지니어링, 제품, 운영, 품질 분야를 아우르는 약 100명 규모의 다기능 팀을 이끌기도 했습니다.\n\n이후 세계적인 선도 기술 기업에서 디렉터급 직책을 맡아 여러 국가의 분산된 팀들과 협업했습니다.\n\n지금은 국제 무대에서 제 스타트업을 만들고 있습니다.",
            "what": "소프트웨어와 시스템을 만들고, 가끔은 아마 존재하지 않는 편이 나을 것들도 만듭니다.\n\n대규모 엔지니어링, 아키텍처, 인프라, 제품 개발, 조직 리더십에 걸친 경험이 있습니다.\n\n단순한 시스템, 명확한 추상화, 그리고 실제로 어떻게 작동하는지 이해하는 것을 중요하게 생각합니다.",
            "ethos": [
              "추상화하기 전에 이해한다.",
              "기교를 부린 시스템보다 단순한 시스템을 택한다.",
              "들여다보고 바꿀 수 있는 것을 만든다.",
              "출시하고, 관찰하고, 개선한다.",
              "기본값에 의문을 갖는다."
            ],
            "now": "스타트업을 만들고 있습니다.\n\n소프트웨어, 시스템, AI, 그리고 직접 만들 가치가 있을 만큼 흥미로운 것들을 탐구합니다.\n\n그 실험 중 일부가 AngleFeint에 자리 잡습니다.",
            "contactLead": "흥미로운 것을 만들고 있다면, 우리는 아마 나눌 이야기가 있을 겁니다.",
            "signature": "더 깊이 들여다보세요."
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "GitHub에서 저를 가장 쉽게 찾을 수 있습니다"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
        site: { hero: '기술, 역사, 장소와 생각을 탐구하며 그 여정을 기록합니다.' },
      },
      es: {
        about: {
          "sections": {
            "who": "Fundador, creador y desarrollador.\n\nPasé más de una década en algunas de las mayores empresas tecnológicas de Asia, trabajando en productos y sistemas a escala masiva.\n\nCon los años, pasé de la ingeniería práctica a puestos de alta responsabilidad técnica y organizativa, llegando a liderar equipos multidisciplinares de casi cien personas en ingeniería, producto, operaciones y calidad.\n\nMás adelante, trabajé en una empresa tecnológica líder mundial en un puesto de nivel director, colaborando entre países y con equipos distribuidos.\n\nAhora estoy creando mi propia startup a escala internacional.",
            "what": "Construyo software, sistemas y, de vez en cuando, cosas que probablemente no deberían existir.\n\nMi experiencia abarca ingeniería a gran escala, arquitectura, infraestructura, desarrollo de productos y liderazgo organizativo.\n\nMe importan los sistemas sencillos, las abstracciones claras y entender cómo funcionan realmente las cosas.",
            "ethos": [
              "Comprender antes de abstraer.",
              "Preferir sistemas sencillos a soluciones ingeniosas.",
              "Crear cosas que puedan inspeccionarse y modificarse.",
              "Lanzar, observar, iterar.",
              "Cuestionar lo predeterminado."
            ],
            "now": "Creando una startup.\n\nExplorando software, sistemas, IA y cualquier cosa lo bastante interesante como para merecer ser construida.\n\nAlgunos de esos experimentos acaban en AngleFeint.",
            "contactLead": "Si construyes cosas interesantes, probablemente tendremos algo de qué hablar.",
            "signature": "Mira más allá."
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "GitHub es el lugar más fácil para encontrarme"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
        site: { hero: 'Explorando la tecnología, la historia, los lugares y las ideas, y dejando un registro por el camino.' },
      },
      zh: {
        about: {
          "sections": {
            "who": "创始人、创造者、开发者。\n\n我曾在亚洲一些规模最大的科技公司工作十余年，参与超大规模产品与系统的开发。\n\n这些年来，我从一线工程实践走向高级技术与组织管理，曾领导近百人的跨职能团队，涵盖工程、产品、运营与质量。\n\n后来，我在一家全球领先的科技公司担任总监级职务，与跨国、分布式团队协作。\n\n如今，我正在国际舞台上创建自己的创业公司。",
            "what": "我打造软件、系统，偶尔也做些大概不该存在的东西。\n\n我的经历横跨大规模工程、架构、基础设施、产品开发和组织管理。\n\n我在意简单的系统、清晰的抽象，以及真正理解事物如何运作。",
            "ethos": [
              "先理解，再抽象。",
              "选择简单的系统，而不是炫技的系统。",
              "构建可以被审视和改变的东西。",
              "交付、观察、迭代。",
              "质疑默认设定。"
            ],
            "now": "正在创业。\n\n探索软件、系统、AI，以及任何有趣到值得动手做出来的东西。\n\n其中一些实验，最终会出现在 AngleFeint。",
            "contactLead": "如果你也在创造有趣的东西，我们大概会有不少可聊的。",
            "signature": "看得更深。"
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "在 GitHub 上最容易找到我"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
        site: { hero: '探索技术、历史、地方与思想，也为沿途的见闻留下记录。' },
      },
      'pt-br': {
        about: {
          "sections": {
            "who": "Fundador, criador e desenvolvedor.\n\nPassei mais de uma década em algumas das maiores empresas de tecnologia da Ásia, trabalhando em produtos e sistemas de escala massiva.\n\nAo longo dos anos, passei da engenharia prática para posições de liderança técnica e organizacional sênior, inclusive liderando equipes multifuncionais de quase cem pessoas nas áreas de engenharia, produto, operações e qualidade.\n\nMais tarde, trabalhei em uma empresa de tecnologia líder global em um cargo de nível de diretor, colaborando entre países e com equipes distribuídas.\n\nAgora estou construindo minha própria startup internacionalmente.",
            "what": "Construo software, sistemas e, de vez em quando, coisas que provavelmente não deveriam existir.\n\nMinha experiência abrange engenharia em larga escala, arquitetura, infraestrutura, desenvolvimento de produtos e liderança organizacional.\n\nValorizo sistemas simples, abstrações claras e entender como as coisas realmente funcionam.",
            "ethos": [
              "Entender antes de abstrair.",
              "Preferir sistemas simples a soluções engenhosas.",
              "Construir coisas que possam ser examinadas e modificadas.",
              "Entregar, observar, iterar.",
              "Questionar os padrões."
            ],
            "now": "Construindo uma startup.\n\nExplorando software, sistemas, IA e qualquer coisa interessante o bastante para merecer ser construída.\n\nAlguns desses experimentos acabam no AngleFeint.",
            "contactLead": "Se você constrói coisas interessantes, provavelmente teremos o que conversar.",
            "signature": "Olhe mais fundo."
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "O GitHub é o lugar mais fácil para me encontrar"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
        site: { hero: 'Explorando tecnologia, história, lugares e ideias, e deixando um registro pelo caminho.' },
      },
      de: {
        about: {
          "sections": {
            "who": "Gründer, Gestalter und Entwickler.\n\nIch habe mehr als ein Jahrzehnt bei einigen der größten Technologieunternehmen Asiens an Produkten und Systemen in enormem Maßstab gearbeitet.\n\nIm Laufe der Jahre entwickelte sich meine Arbeit von praktischer Softwareentwicklung hin zu leitenden technischen und organisatorischen Aufgaben. Dabei führte ich unter anderem funktionsübergreifende Teams von fast hundert Menschen aus Entwicklung, Produkt, Betrieb und Qualität.\n\nSpäter arbeitete ich bei einem weltweit führenden Technologieunternehmen auf Director-Ebene, länderübergreifend und mit verteilten Teams.\n\nHeute baue ich international mein eigenes Startup auf.",
            "what": "Ich entwickle Software, Systeme und gelegentlich Dinge, die es wahrscheinlich gar nicht geben sollte.\n\nMein Hintergrund umfasst groß angelegte Engineering-Projekte, Architektur, Infrastruktur, Produktentwicklung und Organisationsführung.\n\nMir sind einfache Systeme, klare Abstraktionen und das Verständnis dafür wichtig, wie Dinge tatsächlich funktionieren.",
            "ethos": [
              "Verstehen, bevor man abstrahiert.",
              "Einfache Systeme cleveren Konstruktionen vorziehen.",
              "Dinge bauen, die sich untersuchen und verändern lassen.",
              "Ausliefern, beobachten, iterieren.",
              "Voreinstellungen hinterfragen."
            ],
            "now": "Ich baue ein Startup auf.\n\nIch erkunde Software, Systeme, KI und alles, was interessant genug erscheint, um gebaut zu werden.\n\nEinige dieser Experimente landen auf AngleFeint.",
            "contactLead": "Wenn du interessante Dinge baust, haben wir wahrscheinlich etwas zu besprechen.",
            "signature": "Schau tiefer."
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "Am einfachsten findest du mich auf GitHub"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
        site: { hero: 'Technologie, Geschichte, Orte und Ideen erkunden und unterwegs festhalten, was ich entdecke.' },
      },
      ru: {
        about: {
          "sections": {
            "who": "Основатель, создатель и разработчик.\n\nБолее десяти лет я работал в нескольких крупнейших технологических компаниях Азии над продуктами и системами огромного масштаба.\n\nСо временем я перешёл от непосредственной инженерной работы к руководящим техническим и организационным ролям, в том числе возглавлял кросс-функциональные команды почти из ста человек, объединявшие разработку, продукт, операционную деятельность и качество.\n\nПозже я работал на директорском уровне в одной из ведущих мировых технологических компаний, сотрудничая с распределёнными командами в разных странах.\n\nСейчас я строю собственный стартап на международном уровне.",
            "what": "Я создаю программное обеспечение, системы, а иногда и вещи, которым, наверное, не стоило бы существовать.\n\nМой опыт охватывает масштабную инженерию, архитектуру, инфраструктуру, разработку продуктов и управление организациями.\n\nДля меня важны простые системы, ясные абстракции и понимание того, как всё работает на самом деле.",
            "ethos": [
              "Понять, прежде чем абстрагировать.",
              "Предпочитать простые системы хитроумным.",
              "Создавать то, что можно изучить и изменить.",
              "Выпускать, наблюдать, совершенствовать.",
              "Ставить под сомнение настройки по умолчанию."
            ],
            "now": "Строю стартап.\n\nИсследую программное обеспечение, системы, ИИ и всё, что кажется достаточно интересным, чтобы это стоило создать.\n\nНекоторые из этих экспериментов оказываются на AngleFeint.",
            "contactLead": "Если вы создаёте интересные вещи, нам наверняка будет о чём поговорить.",
            "signature": "Смотри глубже."
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "Проще всего найти меня на GitHub"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
        site: { hero: 'Исследуя технологии, историю, места и идеи и сохраняя заметки о пройденном пути.' },
      },
      'zh-hant': {
        about: {
          "sections": {
            "who": "創辦人、創造者、開發者。\n\n我曾在亞洲一些規模最大的科技公司工作十餘年，參與超大規模產品與系統的開發。\n\n這些年來，我從第一線工程實務走向高階技術與組織管理，曾領導近百人的跨職能團隊，涵蓋工程、產品、營運與品質。\n\n後來，我在一家全球領先的科技公司擔任總監級職務，與跨國、分散式團隊協作。\n\n如今，我正在國際舞台上建立自己的新創公司。",
            "what": "我打造軟體、系統，偶爾也做些大概不該存在的東西。\n\n我的經歷橫跨大規模工程、架構、基礎設施、產品開發和組織管理。\n\n我在意簡單的系統、清晰的抽象，以及真正理解事物如何運作。",
            "ethos": [
              "先理解，再抽象。",
              "選擇簡單的系統，而不是炫技的系統。",
              "打造可以被檢視和改變的東西。",
              "交付、觀察、迭代。",
              "質疑預設。"
            ],
            "now": "正在創業。\n\n探索軟體、系統、AI，以及任何有趣到值得動手做出來的東西。\n\n其中一些實驗，最終會出現在 AngleFeint。",
            "contactLead": "如果你也在創造有趣的東西，我們大概會有不少可聊的。",
            "signature": "看得更深。"
          },
          "contact": {
            "email": "",
            "githubUrl": "https://github.com/anglefeint",
            "githubLabel": "在 GitHub 上最容易找到我"
          },
          "labels": {
            "contactConnectLead": " "
          }
        },
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
