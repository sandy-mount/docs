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
