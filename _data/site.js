module.exports = {
  meta: {
    title: "VS Code网",
    description: "VS Code，便利你的代码生活。",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Good!",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "Ice Flow",
    authorEmail: "iceflow0798@outlook.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "欢迎来到VS Code网！",
    description: "VS Code，便利你的代码生活。 它是你的必须调味品。"
  }
}