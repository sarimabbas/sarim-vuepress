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
  plugins: [
    [
      "vuepress-plugin-rss",
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
    ]
  ]
};
