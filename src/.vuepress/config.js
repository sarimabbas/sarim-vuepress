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
    ["link", { rel: "icon", href: "/pwa/apple-touch-icon.png" }],
    ["link", { rel: "manifest", href: "/pwa/manifest.json" }],
    ["meta", { name: "theme-color", content: "#111111" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: "/pwa/apple-touch-icon.png" }],
    [
      "link",
      { rel: "mask-icon", href: "/pwa/safari-pinned-tab.svg", color: "#111111" }
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/pwa/mstile-150x150.png" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#111111" }]
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
