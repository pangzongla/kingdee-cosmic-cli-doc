import comp from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/promise/mock.html.vue"
const data = JSON.parse("{\"path\":\"/promise/mock.html\",\"title\":\"Mock 服务\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"数据伪造\",\"slug\":\"数据伪造\",\"link\":\"#数据伪造\",\"children\":[]}],\"git\":{\"updatedTime\":1717485416000,\"contributors\":[{\"name\":\"庞囧\",\"username\":\"庞囧\",\"email\":\"980100681@qq.com\",\"commits\":1,\"url\":\"https://github.com/庞囧\"},{\"name\":\"pangzong\",\"username\":\"pangzong\",\"email\":\"980100681@qq.com\",\"commits\":1,\"url\":\"https://github.com/pangzong\"}],\"changelog\":[{\"hash\":\"221ef5b7fff0ca09ea058fb3173916358defedec\",\"time\":1717485416000,\"email\":\"980100681@qq.com\",\"author\":\"pangzong\",\"message\":\"doc: 内容修改\"},{\"hash\":\"47888768f4a77fe3de5f7afe73ae56a99328cc39\",\"time\":1716542879000,\"email\":\"980100681@qq.com\",\"author\":\"庞囧\",\"message\":\"fix: package.json\"}]},\"filePathRelative\":\"promise/mock.md\"}")
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
