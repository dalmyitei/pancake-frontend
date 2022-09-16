import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.ecidade.org.br/contact-us",
      },
      {
        label: "Blog",
<<<<<<< HEAD
        href: "https://medium.com/pancakeswap",
=======
        href: "https://metaswap.medium.com/",
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
      },
      {
        label: "Community",
        href: "https://docs.ecidade.org.br/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.ecidade.org.br/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://metaswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.ecidade.org.br/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.ecidade.org.br/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.ecidade.org.br/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/metaswap",
      },
      {
        label: "Documentation",
        href: "https://docs.ecidade.org.br",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@metaswap-1/s/metaswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.ecidade.org.br/help/faq#is-metaswap-safe-has-metaswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.ecidade.org.br/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/metaswap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/metaswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/MetaSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/MetaSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/MetaSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/metaswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/metaswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/metaswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/MetaSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/MetaswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/metaswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/metaswapfr",
      },
      {
<<<<<<< HEAD
        label: "Deutsch",
        href: "https://t.me/PancakeSwap_DE",
=======
        label: "Datch",
        href: "https://t.me/MetaSwap_DE",
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
      },
      {
        label: "Filipino",
        href: "https://t.me/Metaswap_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/MetaSwapGeorgia",
      },
      {
        label: "हिन्दी",
        href: "https://t.me/PancakeSwapINDIA",
      },
      {
        label: "Announcements",
        href: "https://t.me/MetaSwapAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/metaswap",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/metaswap_official",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/metaswap/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/metaswap",
  },
  {
    label: "Medium",
    icon: MediumIcon,
<<<<<<< HEAD
    href: "https://medium.com/pancakeswap",
=======
    href: "https://metaswap.medium.com/",
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
