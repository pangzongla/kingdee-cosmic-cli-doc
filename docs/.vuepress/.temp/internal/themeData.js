export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/guide/introduce\"}],\"sidebar\":[{\"text\":\"起步\",\"link\":\"/guide/introduce\",\"collapsible\":false,\"children\":[{\"text\":\"介绍\",\"link\":\"/guide/introduce\"},{\"text\":\"安装与创建\",\"link\":\"/guide/getting-started\"},{\"text\":\"卸载与升级\",\"link\":\"/guide/upgrade\"}]},{\"text\":\"全局配置\",\"link\":\"/config/introduce\",\"children\":[]},{\"text\":\"开发事项\",\"link\":\"/dev/introduce\",\"collapsible\":false,\"children\":[{\"text\":\"介绍\",\"link\":\"/dev/introduce\"},{\"text\":\"苍穹预览模式\",\"link\":\"/dev/cosmic\"},{\"text\":\"RAM模式\",\"link\":\"/dev/ram\"}]},{\"text\":\"React18起步工程\",\"link\":\"/react/introduce\",\"collapsible\":false,\"children\":[{\"text\":\"介绍\",\"link\":\"/react/introduce\"}]},{\"text\":\"Vue3起步工程\",\"link\":\"/vue/introduce\",\"collapsible\":false,\"children\":[{\"text\":\"介绍\",\"link\":\"/vue/introduce\"}]},{\"text\":\"未来计划\",\"link\":\"/plan/introduce\",\"children\":[]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
