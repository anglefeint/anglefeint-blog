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
  i18n: {
    locales: {
      fr: {
        meta: {
          label: 'Francais',
          hreflang: 'fr',
          ogLocale: 'fr_FR',
          fallback: ['en'],
        },
        site: {
          hero: 'Publiez des notes, des essais et des projets avec une ambiance cinematographique et une navigation multilingue.',
        },
        messages: {
          siteDescription: "Interfaces web cinematographiques et essais d'ingenierie pour l'ere de l'IA.",
          langLabel: 'Langue',
          nav: {
            home: 'Accueil',
            blog: 'Blog',
            about: 'A propos',
            statusAria: 'Etat du systeme',
          },
          home: {
            latest: 'Derniers articles',
            viewAll: 'Voir tous les articles',
            noPosts: "Aucun article n'est encore disponible dans cette langue.",
          },
          about: {
            description: 'Qui je suis, ce que je construis et la logique hacker derriere mon travail.',
            who: 'Qui je suis',
            what: 'Ce que je construis',
            ethos: 'Ethos hacker',
            now: 'En ce moment',
            contact: 'Contact',
            regenerate: 'Relancer le scan',
          },
          blog: {
            pageDescription: "Page d'archives du blog",
            previous: 'Precedent',
            next: 'Suivant',
            jumpTo: 'Aller a la page',
            jumpGo: 'Aller',
            jumpInputLabel: 'Numero de page',
            backToBlog: 'Retour au blog',
            backToTop: 'Retour en haut',
            related: 'Articles lies',
            comments: 'Commentaires',
            responseOutput: 'Sortie',
            rqBadge: 'flux moniteur',
            rqReplayAria: 'Relancer le flux moniteur',
            metaPublished: 'publie',
            metaUpdated: 'mis a jour',
            metaReadMinutes: 'min de lecture',
            systemStatusAria: 'Etat du modele',
            systemModelLabel: 'modele',
            systemModeLabel: 'mode',
            systemStateLabel: 'etat',
            promptContextLabel: 'Contexte',
            latencyLabel: 'latence estimee',
            confidenceLabel: 'confiance',
            statsWords: 'mots',
            statsTokens: 'tokens',
            heroMonitor: 'moniteur neural',
            heroSignalSync: 'synchronisation active',
            heroModelOnline: 'modele en ligne',
            regenerate: 'Relancer le scan',
            relatedAria: 'Articles lies',
            backToBlogAria: 'Retour au blog',
            paginationAria: 'Pagination',
            toastP10: 'contexte analyse 10%',
            toastP30: 'contexte analyse 30%',
            toastP60: 'inference stable 60%',
            toastDone: 'sortie finalisee',
          },
        },
        about: {
          metaLine: '$ profil charge | mode : builder',
          sections: {
            who: 'Presentez brievement qui vous etes, votre parcours et vos domaines de travail principaux.',
            what: 'Decrivez ce que vous construisez, vos competences cles et les projets pour lesquels vous voulez etre reconnu.',
            ethos: [
              'Privilegier la clarte avant la complexite.',
              'Preferer les systemes maintenables aux solutions jetables.',
              'Livrer par petites iterations et apprendre du retour.',
              'Communiquer directement et documenter les decisions.',
            ],
            now: 'Expliquez ce que vous construisez, publiez ou apprenez en ce moment.',
            contactLead:
              'Ajoutez une courte note de collaboration (par exemple : ouvert au freelance, au conseil ou a un poste a temps plein).',
            signature: '> Remplacez ceci par votre propre signature.',
          },
          contact: {
            email: 'vous@example.com',
            githubUrl: 'https://github.com/votrenom',
            githubLabel: 'GitHub',
          },
          sidebar: {
            ai: 'IA',
            help: 'Aide',
            allScripts: 'Tous les scripts',
          },
          labels: {
            modalOutput: 'Sortie',
            modalClose: 'Fermer',
            responseOutput: 'Sortie',
            contactEmailLead: 'Me joindre par',
            contactConnectLead: 'ou me retrouver sur',
            backToTop: 'Retour en haut',
            quickAccess: 'Acces rapide',
          },
          modals: {
            dlData: {
              title: 'Telechargement...',
              subtitle: 'Donnees critiques',
            },
            ai: {
              title: 'IA',
              lines: [
                '~ $ ai --status --verbose',
                '',
                'modele : anglefeint-core',
                'mode : reasoning + builder',
                'fenetre de contexte : 128k',
                'outils : codex / cursor / claude-code',
                'latence : 120-220ms',
                'securite : guardrails actifs',
                '',
                '>> systeme en ligne',
                '>> pret a executer',
              ],
            },
            decryptor: {
              title: 'Decryptage de mot de passe',
              header: 'Calcul des hashes',
              keysLabel: 'cles testees',
              currentPassphraseLabel: 'Phrase actuelle :',
              masterKeyLabel: 'Cle maitre',
              transientKeyLabel: 'Cle transitoire',
            },
            help: {
              title: 'Aide',
              statsLabel: 'Stats & succes',
              typedPrefix: 'Vous avez tape :',
              typedSuffix: 'caracteres',
            },
          },
          effects: {
            backgroundLines: [
              '~ $ ls -la',
              'total 42',
              'drwxr-xr-x  12 user  staff   384  Jan 12  about  blog  projects',
              'drwxr-xr-x   8 user  staff   256  Jan 11  .config  .ssh  keys',
              '-rw-r--r--   1 user  staff  2048  Jan 10  README.md  .env.gpg',
              '-rwxr-xr-x   1 user  staff   512  Jan  9  deploy.sh  script',
              '~ $ cat .motd',
              '>> bienvenue | acces accorde',
            ],
            scrollToasts: {
              p30: 'contexte analyse',
              p60: 'inference stable',
              p90: 'sortie finalisee',
            },
          },
        },
      },
    },
  },
});
