import comp from "E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/theme/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/theme/introduce.html\",\"title\":\"主题色切换\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"实现原理\",\"slug\":\"实现原理\",\"link\":\"#实现原理\",\"children\":[]},{\"level\":2,\"title\":\"Less 预处理器\",\"slug\":\"less-预处理器\",\"link\":\"#less-预处理器\",\"children\":[{\"level\":3,\"title\":\"在 Vue3 起步工程中使用\",\"slug\":\"在-vue3-起步工程中使用\",\"link\":\"#在-vue3-起步工程中使用\",\"children\":[]},{\"level\":3,\"title\":\"在 React18 起步工程中使用\",\"slug\":\"在-react18-起步工程中使用\",\"link\":\"#在-react18-起步工程中使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1716801928000,\"contributors\":[{\"name\":\"庞囧\",\"email\":\"980100681@qq.com\",\"commits\":3}]},\"filePathRelative\":\"theme/introduce.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
