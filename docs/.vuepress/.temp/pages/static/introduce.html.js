import comp from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/static/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/static/introduce.html\",\"title\":\"背景\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"解决\",\"slug\":\"解决\",\"link\":\"#解决\",\"children\":[]}],\"git\":{\"updatedTime\":1716542879000,\"contributors\":[{\"name\":\"庞囧\",\"username\":\"\",\"email\":\"980100681@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"47888768f4a77fe3de5f7afe73ae56a99328cc39\",\"time\":1716542879000,\"email\":\"980100681@qq.com\",\"author\":\"庞囧\",\"message\":\"fix: package.json\"}]},\"filePathRelative\":\"static/introduce.md\"}")
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
