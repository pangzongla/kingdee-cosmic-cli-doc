import comp from "E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/react/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/react/introduce.html\",\"title\":\"🚀 介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"✨ 新特性\",\"slug\":\"✨-新特性\",\"link\":\"#✨-新特性\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"react/introduce.md\"}")
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
