const customFields = {
  copyright: `Copyright © ${new Date().getFullYear()} QuestDB`,
  description:
    "QuestDB is an open source database designed to make time-series lightning fast and easy. It exposes a high performance REST API and supports Postgres wire.",
  dockerUrl: "https://hub.docker.com/r/questdb/questdb",
  githubUrl: "https://github.com/questdb/questdb",
  slackUrl:
    "https://questdb.slack.com/join/shared_invite/enQtNzk4Nzg4Mjc2MTE2LTEzZThjMzliMjUzMTBmYzVjYWNmM2UyNWJmNDdkMDYyZmE0ZDliZTQxN2EzNzk5MDE3Zjc1ZmJiZmFiZTIwMGY#/",
  twitterUrl: "https://twitter.com/questdb",
  version: "5.0.2",
}

module.exports = {
  title: "Gooddoctor",
  tagline: "Good Doctor | Tips Kesehatan, Chat Dokter, Beli Obat Online",
  url: "https://gooddoctor-yb.github.io",
  baseUrl: "/gooddoctor-docs/",
  onBrokenLinks: "ignore",
  favicon: "img/favicon.ico",
  projectName: "gooddoctor-docs", // Usually your repo name.
  organizationName: "gooddoctor-yb", // Usually your GitHub org/user name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "api", label: "API", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        { to: "help", label: "Help", position: "left" },
        {
          href: "https://github.com/gooddoctor-yb/gooddoctor-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "QuestDB",
          items: [
            {
              label: "Documentation",
              to: "docs/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: customFields.slackUrl,
            },
            {
              label: "Twitter",
              href: customFields.twitterUrl,
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: customFields.githubUrl,
            },
          ],
        },
      ],
      copyright: customFields.copyright,
    },
    algolia: {
      appId: "37YTCPPPTL",
      apiKey: "3b8e7b27f5fa1682a20a56957913cfa8",
      indexName: "gooddoctor",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/gooddoctor-yb/gooddoctor-docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/gooddoctor-yb/gooddoctor-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/global.css"),
        },
      },
    ],
  ],
}
