import comp from "E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/upgrade.html.vue"
const data = JSON.parse("{\"path\":\"/guide/upgrade.html\",\"title\":\"卸载与升级\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"卸载脚手架\",\"slug\":\"卸载脚手架\",\"link\":\"#卸载脚手架\",\"children\":[]},{\"level\":2,\"title\":\"升级脚手架\",\"slug\":\"升级脚手架\",\"link\":\"#升级脚手架\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/upgrade.md\"}")
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
