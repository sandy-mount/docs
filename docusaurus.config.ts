import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SAND Docs',
  tagline: 'Documentation for the Decentralized Web',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  url: 'https://sandy-mount.com',
  baseUrl: '/docs/',
  organizationName: 'sandy-mount',
  projectName: 'docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    // Structured data for rich snippets
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SAND Docs',
        description: 'Documentation for the SAND stack - Solid, ActivityPub, Nostr, DID',
        url: 'https://sandy-mount.com/docs/',
        publisher: {
          '@type': 'Organization',
          name: 'Sandymount',
          url: 'https://sandy-mount.com',
        },
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/sandy-mount/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',

    metadata: [
      // Basic meta
      {name: 'keywords', content: 'SAND, Solid, ActivityPub, Nostr, DID, decentralized web, linked data, agentic web, data sovereignty, federation'},
      {name: 'author', content: 'Sandymount'},

      // Open Graph
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'SAND Docs'},
      {property: 'og:title', content: 'SAND - The Stack for the Decentralized Web'},
      {property: 'og:description', content: 'Documentation for Solid, ActivityPub, Nostr & DID. Build apps where users own their data and agents serve their interests.'},
      {property: 'og:locale', content: 'en_US'},

      // Twitter Card
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'SAND Docs'},
      {name: 'twitter:description', content: 'The Stack for the Decentralized Web - Solid, ActivityPub, Nostr, DID'},
    ],

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    announcementBar: {
      id: 'wip',
      content: 'These docs are under active development. <a href="https://github.com/sandy-mount/docs">Contribute on GitHub</a>',
      backgroundColor: '#7C4DFF',
      textColor: '#fff',
      isCloseable: true,
    },

    navbar: {
      title: 'SAND Docs',
      logo: {
        alt: 'SAND Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/concepts/overview',
          label: 'Concepts',
          position: 'left',
        },
        {
          to: '/protocols/overview',
          label: 'Protocols',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/guides/overview',
          label: 'Guides',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Ecosystem',
          position: 'left',
          items: [
            {label: 'Sandymount', href: 'https://sandy-mount.com'},
            {label: 'Solid Lite', href: 'https://solid-lite.org'},
            {label: 'SocialDocs', href: 'https://socialdocs.org'},
            {type: 'html', value: '<hr style="margin: 0.5rem 0;">'},
            {label: 'Manifesto', to: '/manifesto'},
          ],
        },
        {
          href: 'https://github.com/sandy-mount',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Concepts', to: '/concepts/overview'},
            {label: 'Protocols', to: '/protocols/overview'},
            {label: 'Guides', to: '/guides/overview'},
          ],
        },
        {
          title: 'Protocols',
          items: [
            {label: 'Solid', href: 'https://solidproject.org'},
            {label: 'ActivityPub', href: 'https://activitypub.rocks'},
            {label: 'Nostr', href: 'https://nostr.com'},
            {label: 'DID', href: 'https://w3c.github.io/did-core/'},
          ],
        },
        {
          title: 'Projects',
          items: [
            {label: 'JSS', to: '/projects/jss'},
            {label: 'Nosdav', to: '/projects/nosdav'},
            {label: 'Ditto', to: '/projects/ditto'},
            {label: 'All Projects', to: '/projects'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/sandy-mount'},
            {label: 'Manifesto', to: '/manifesto'},
            {label: 'Contributing', to: '/community/contributing'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sandymount. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'turtle', 'sparql'],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
