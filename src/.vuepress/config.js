module.exports = {
  title: "S.A. -  Sarim Abbas",
  description: "Sarim Abbas' personal website",
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2, 3] }
    // extendMarkdown: md => {
    //   // use more markdown-it plugins!
    //   md.use(require('markdown-it-xxx'))
    // }
  },
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/pwa/apple-touch-icon.png",
        sizes: "180x180"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/pwa/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/pwa/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      }
    ],
    ["link", { rel: "manifest", href: "/pwa/manifest.json" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/pwa/safari-pinned-tab.svg",
        color: "#111111"
      }
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/pwa/favicon.ico"
      }
    ],
    ["meta", { name: "apple-mobile-web-app-title", content: "S.A." }],
    ["meta", { name: "application-name", content: "S.A." }],
    ["meta", { name: "msapplication-TileColor", content: "#111111" }],
    [
      "meta",
      { name: "msapplication-config", content: "/pwa/browserconfig.xml" }
    ],
    ["meta", { name: "theme-color", content: "#111111" }]
  ],
  plugins: [
    [
      require("./plugins/rss.js"),
      {
        base_url: "/", // required
        site_url: "https://sarimabbas.com", // required
        // filter posts
        filter: frontmatter => {
          return frontmatter.published;
        },
        // How many articles
        count: Infinity
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-64590232-1"
      }
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: ".content__default :not(a) > img",
        options: {
          background: "#111"
        }
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
};
