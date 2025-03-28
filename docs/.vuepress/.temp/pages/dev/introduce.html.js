import comp from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/dev/introduce.html\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1716462977000,\"contributors\":[{\"name\":\"庞囧\",\"username\":\"\",\"email\":\"980100681@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"6762adce3359a1f3625e9f1b5aa90ef5a43810a3\",\"time\":1716462977000,\"email\":\"980100681@qq.com\",\"author\":\"庞囧\",\"message\":\"first commit\"}]},\"filePathRelative\":\"dev/introduce.md\"}")
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
