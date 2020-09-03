const customFields = {
  copyright: `Copyright © ${new Date().getFullYear()} Gooddoctor`,
  description:
    "AAA is an open source database designed to make time-series lightning fast and easy. It exposes a high performance REST API and supports Postgres wire.",
  dockerUrl: "https://hub.docker.com/r/gooddoctor",
  githubUrl: "https://github.com/gooddoctor",
  slackUrl: "https://gooddoctor.slack.com/join",
  twitterUrl: "https://twitter.com/gooddoctor",
  version: "5.0.2",
}

module.exports = {
  title: "Gooddoctor",
  tagline: "Good Doctor | Tips Kesehatan, Chat Dokter, Beli Obat Online",
  url: "https://gooddoctor-yb.github.io/gooddoctor-docs",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  favicon: "img/favicon.ico",
  organizationName: "gooddoctor-yb", // Usually your GitHub org/user name.
  projectName: "gooddoctor-docs", // Usually your repo name.
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
        { to: "login", label: "Login", position: "right" },
        // { to: "blog", label: "Blog", position: "left" },
        // { to: "help", label: "Help", position: "left" },
        {
          href: "https://github.com/gooddoctor-yb/gooddoctor-docs",
          label: "Gitlab",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Good doctor",
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
    // algolia: {
    //   appId: "37YTCPPPTL",
    //   apiKey: "3b8e7b27f5fa1682a20a56957913cfa8",
    //   indexName: "gooddoctor",
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "utm",
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
