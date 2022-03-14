import { FooterLinkType } from '@metaswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.ecidade.org.br/contact-us',
      },
      {
        label: t('Brand'),
        href: 'https://docs.ecidade.org.br/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/metaswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.ecidade.org.br/contact-us/telegram',
      },
      {
        label: t('CAKE token'),
        href: 'https://docs.ecidade.org.br/tokenomics/cake',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://metaswap.creator-spring.com/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.ecidade.org.br/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.ecidade.org.br/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.ecidade.org.br/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/metaswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.ecidade.org.br',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.ecidade.org.br/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.ecidade.org.br/help/faq#is-metaswap-safe-has-metaswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.ecidade.org.br/hiring/become-a-chef',
      },
    ],
  },
]
