import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "CharacterSheets Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.charactersheets.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/raid-guild/character-sheets-docs/tree/main",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.png",
    navbar: {
      title: "CharacterSheets Docs",
      logo: {
        alt: "CharacterSheets Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          href: "https://github.com/raid-guild/character-sheets-frontend",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "RaidGuild",
              href: "https://raidguild.org",
            },
            {
              label: "Discord",
              href: "https://discord.gg/kCMbVQyJ",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/RaidGuild",
            },
          ],
        },
        {
          title: "Repos",
          items: [
            {
              label: "Frontend",
              href: "https://github.com/raid-guild/character-sheets-frontend",
            },
            {
              label: "Subgraph",
              href: "https://github.com/raid-guild/character-sheets-subgraph",
            },
            {
              label: "Smart Contracts",
              href: "https://github.com/raid-guild/character-sheets-contracts",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
