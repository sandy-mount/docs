import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'concepts/overview',
        'concepts/data-sovereignty',
        'concepts/federation',
        'concepts/decentralized-identity',
        'concepts/linked-data',
        'concepts/agentic-web',
        'concepts/local-first',
        'concepts/architecture',
      ],
    },
    {
      type: 'category',
      label: 'Protocols',
      collapsed: false,
      items: [
        'protocols/overview',
        'protocols/solid',
        'protocols/activitypub',
        'protocols/nostr',
        'protocols/did',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'projects/index',
      },
      items: [
        {
          type: 'category',
          label: 'Servers',
          collapsed: true,
          items: [
            'projects/sandymount/index',
            'projects/jss/index',
            'projects/css/index',
            'projects/nss/index',
            'projects/nosdav/index',
            'projects/fedbox/index',
            'projects/microfed/index',
          ],
        },
        {
          type: 'category',
          label: 'Specifications',
          collapsed: true,
          items: [
            'projects/solid-lite/index',
            'projects/slips/index',
            'projects/lws/index',
            'projects/did-nostr/index',
          ],
        },
        {
          type: 'category',
          label: 'Libraries',
          collapsed: true,
          items: [
            'projects/rdflib-js/index',
            'projects/solid-client/index',
            'projects/solid-authn/index',
            'projects/nostr-tools/index',
            'projects/nostr-components/index',
          ],
        },
        {
          type: 'category',
          label: 'Apps & Tools',
          collapsed: true,
          items: [
            'projects/solidos/index',
            'projects/solid-chat/index',
            'projects/ditto/index',
            'projects/noskey/index',
            'projects/fonstr/index',
            'projects/nostrgit/index',
          ],
        },
        {
          type: 'category',
          label: 'Documentation',
          collapsed: true,
          items: [
            'projects/socialdocs/index',
            'projects/nostr-userguide/index',
            'projects/nostr-devguide/index',
          ],
        },
        {
          type: 'category',
          label: 'Agentic',
          collapsed: true,
          items: [
            'projects/agentic-alliance/index',
            'projects/blocktrails/index',
            'projects/web-prompts/index',
            'projects/aam/index',
            'projects/mcp/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/overview',
        'guides/your-first-pod',
        'guides/authentication',
        'guides/building-solid-apps',
        'guides/nostr-getting-started',
        'guides/production-deployment',
        'guides/multi-protocol',
      ],
    },
    {
      type: 'category',
      label: 'Manifesto',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'manifesto/index',
      },
      items: [
        'manifesto/principles',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      collapsed: true,
      items: [
        'community/contributing',
        'community/roadmap',
      ],
    },
  ],
};

export default sidebars;
