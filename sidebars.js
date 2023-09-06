// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        'readme',
        {
          type: 'category',
          label: 'Migration from v1.x',
          items: [
            {
              type: 'doc',
              id: 'advanced/migration-from-v1.x/overview',
              label: 'Overview'
            },
            {
              type: 'category',
              label: 'Dapps',
              items: [
                'advanced/migration-from-v1.x/dapps/dapps',
                'advanced/migration-from-v1.x/dapps/dapp-checklist'
              ]
            },
            {
              type: 'category',
              label: 'Wallets',
              items: [
                'advanced/migration-from-v1.x/wallets/wallets',
                'advanced/migration-from-v1.x/wallets/wallet-checklist'
              ]
            },
            'advanced/migration-from-v1.x/what-changed-from-v1.0',
            'advanced/migration-from-v1.x/migration-faq',
            'advanced/migration-from-v1.x/explorer-submission'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Web3Modal',
          collapsed: true,
          collapsible: true,
          items: [
            'web3modal/about',
            {
              type: 'category',
              label: 'React',
              className: 'sidebar__logo sidebar__logo--react',
              items: [
                'web3modal/react/about',
                'web3modal/react/options',
                'web3modal/react/theming',
              ]
            },
            {
              type: 'category',
              label: 'Vue',
              className: 'sidebar__logo sidebar__logo--vue',
              items: [
                'web3modal/vue/about',
                'web3modal/vue/options',
                'web3modal/vue/theming',
              ]
            },
            {
              type: 'category',
              label: 'HTML',
              className: 'sidebar__logo sidebar__logo--html',
              items: [
                'web3modal/html/about',
                'web3modal/html/options',
                'web3modal/html/theming',
              ]
            },
            'web3modal/upgrade',
            'web3modal/v2/about',
          ]
        },
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsed: true,
          collapsible: true,
          items: [
            'web3wallet/about',
            'web3wallet/wallet-usage',
            'web3wallet/verify',
            'web3wallet/resources'
          ]
        },
        {
          type: 'category',
          label: 'Web3Inbox',
          collapsed: true,
          collapsible: true,
          items: [
            'web3inbox/about',
            {
              type: 'category',
              label: 'Wallet',
              items: ['web3inbox/wallet/installation', 'web3inbox/wallet/usage']
            },
            {
              type: 'category',
              label: 'Dapp',
              items: [
                {
                  type: 'category',
                  label: 'Widget',
                  items: [
                    'web3inbox/widget/about',
                    'web3inbox/widget/usage',
                    'web3inbox/widget/options',
                    'web3inbox/widget/theming'
                  ]
                }
              ]
            },
            'web3inbox/resources'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Cloud',
      collapsible: false,
      className: 'menu_outer_list',
      items: ['cloud/explorer', 'cloud/verify', 'cloud/relay', 'cloud/blockchain-api']
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Providers',
          collapsible: true,
          collapsed: true,
          items: ['advanced/providers/ethereum', 'advanced/providers/universal']
        },
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'Auth',
              items: [
                'api/auth/overview',
                'api/auth/dapp-usage',
                'api/auth/wallet-usage',
                'api/auth/signer-factory',
                'api/auth/resources'
              ]
            },
            {
              type: 'category',
              label: 'Chat',
              items: ['api/chat/about', 'api/chat/usage', 'api/chat/resources']
            },
            {
              type: 'category',
              label: 'Core',
              items: ['api/core/pairing', 'api/core/relay', 'api/core/shared-core']
            },
            {
              type: 'category',
              label: 'Notify',
              items: ['api/notify/about', 'api/notify/usage']
            },
            {
              type: 'category',
              label: 'Sign',
              items: [
                'api/sign/overview',
                'api/sign/dapp-usage',
                'api/sign/wallet-usage',
                'api/sign/smart-contract-wallet-usage'
              ]
            },
            'api/mobileLinking'
          ]
        },
        {
          type: 'category',
          label: 'WalletConnectModal',
          collapsed: true,
          collapsible: true,
          items: [
            'advanced/walletconnectmodal/about',
            'advanced/walletconnectmodal/usage',
            'advanced/walletconnectmodal/options',
            'advanced/walletconnectmodal/theming',
            'advanced/walletconnectmodal/resources'
          ]
        },
        {
          type: 'category',
          label: 'Multi-Chain',
          items: [
            'advanced/multichain/overview',
            'advanced/multichain/chain-list',
            {
              type: 'category',
              label: 'Polkadot',
              items: [
                'advanced/multichain/polkadot/dapp-integration-guide',
                'advanced/multichain/polkadot/wallet-integration-guide',
                'advanced/multichain/polkadot/namespaces-guide'
              ]
            }
          ]
        },
        'advanced/echo-server'
      ]
    },
    {
      type: 'category',
      label: 'Technical Reference',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'link',
          label: 'Specs',
          href: 'https://specs.walletconnect.com/'
        },
        'advanced/faq'
      ]
    }
  ],
  // 'web3modal/platforms': [
  //   {
  //     type: 'html',
  //     value:
  //       '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
  //     defaultStyle: true
  //   },
  //   {
  //     type: 'category',
  //     label: 'General',
  //     className: 'menu_outer_list',
  //     collapsible: false,
  //     items: [
  //       {
  //         type: 'link',
  //         label: 'Overview',
  //         href: '../about'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: 'Web',
  //     className: 'menu_outer_list',
  //     collapsible: false,
  //     items: [
  //       {
  //         type: 'doc',
  //         className: 'sidebar__logo sidebar__logo--react ',
  //         label: 'React',
  //         id: 'web3modal/platforms/react'
  //       },
  //       {
  //         type: 'doc',
  //         className: 'sidebar__logo sidebar__logo--html ',
  //         label: 'HTML',
  //         id: 'web3modal/platforms/html'
  //       }
  //     ]
  //   }
  //   // {
  //   //   type: 'category',
  //   //   label: 'Mobile',
  //   //   className: 'menu_outer_list',
  //   //   collapsible: false,
  //   //   items: [
  //   //     'web3modal/platforms/android',
  //   //     'web3modal/platforms/ios',
  //   //     'web3modal/platforms/react-native',
  //   //     'web3modal/platforms/flutter'
  //   //   ]
  //   // },
  //   // {
  //   //   type: 'category',
  //   //   label: 'Other',
  //   //   className: 'menu_outer_list',
  //   //   collapsible: false,
  //   //   items: ['web3modal/platforms/unity']
  //   // }
  // ],
  'web3modal/v2': [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'General',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'ref',
          label: 'Overview',
          id: 'web3modal/v2/about'
        }
      ]
    },
    {
      type: 'category',
      label: 'V2',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          className: 'sidebar__logo sidebar__logo--react',
          label: 'React',
          items: [
            { type: 'doc', label: 'About', id: 'web3modal/v2/react/wagmi/installation' },
            'web3modal/v2/react/wagmi/components',
            'web3modal/v2/react/wagmi/hooks',
            'web3modal/v2/react/wagmi/options',
            'web3modal/v2/react/wagmi/theming',
            'web3modal/v2/react/wagmi/custom-wallets',
            'web3modal/v2/react/wagmi/custom-chains',
            {
              type: 'link',
              label: 'Example',
              href: 'https://github.com/WalletConnect/web3modal-examples/tree/main/web3modal-wagmi-react'
            }
          ]
        },
        {
          type: 'category',
          className: 'sidebar__logo sidebar__logo--html',
          label: 'HTML',
          items: [
            { type: 'doc', label: 'About', id: 'web3modal/v2/html/wagmi/installation' },
            'web3modal/v2/html/wagmi/components',
            'web3modal/v2/html/wagmi/actions',
            'web3modal/v2/html/wagmi/options',
            'web3modal/v2/html/wagmi/theming',
            'web3modal/v2/html/wagmi/custom-wallets',
            'web3modal/v2/html/wagmi/custom-chains',
            {
              type: 'link',
              label: 'Example',
              href: 'https://github.com/WalletConnect/web3modal-examples/tree/main/web3modal-wagmi-html'
            }
          ]
        },
        'web3modal/v2/upgrade'
      ]
    }
  ]
}
