import comp from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/config/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/config/introduce.html\",\"title\":\"说明\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1719562843000,\"contributors\":[{\"name\":\"庞囧\",\"username\":\"\",\"email\":\"980100681@qq.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"5a6f79f8bc2f3f667103f98b6706facad79f9a3d\",\"time\":1719562843000,\"email\":\"980100681@qq.com\",\"author\":\"庞囧\",\"message\":\"doc：修改文档内容\"},{\"hash\":\"47888768f4a77fe3de5f7afe73ae56a99328cc39\",\"time\":1716542879000,\"email\":\"980100681@qq.com\",\"author\":\"庞囧\",\"message\":\"fix: package.json\"},{\"hash\":\"6762adce3359a1f3625e9f1b5aa90ef5a43810a3\",\"time\":1716462977000,\"email\":\"980100681@qq.com\",\"author\":\"庞囧\",\"message\":\"first commit\"}]},\"filePathRelative\":\"config/introduce.md\"}")
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
