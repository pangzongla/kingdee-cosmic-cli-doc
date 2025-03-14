import comp from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/ram.html.vue"
const data = JSON.parse("{\"path\":\"/dev/ram.html\",\"title\":\"RAM模式\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1716542879000,\"contributors\":[{\"name\":\"庞囧\",\"username\":\"庞囧\",\"email\":\"980100681@qq.com\",\"commits\":2,\"url\":\"https://github.com/庞囧\"}],\"changelog\":[{\"hash\":\"47888768f4a77fe3de5f7afe73ae56a99328cc39\",\"time\":1716542879000,\"email\":\"980100681@qq.com\",\"author\":\"庞囧\",\"message\":\"fix: package.json\"},{\"hash\":\"6762adce3359a1f3625e9f1b5aa90ef5a43810a3\",\"time\":1716462977000,\"email\":\"980100681@qq.com\",\"author\":\"庞囧\",\"message\":\"first commit\"}]},\"filePathRelative\":\"dev/ram.md\"}")
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
