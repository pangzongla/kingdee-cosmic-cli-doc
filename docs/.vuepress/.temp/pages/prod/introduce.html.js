import comp from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/prod/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/prod/introduce.html\",\"title\":\"生产打包\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1716542879000,\"contributors\":[{\"name\":\"庞囧\",\"email\":\"980100681@qq.com\",\"commits\":1}]},\"filePathRelative\":\"prod/introduce.md\"}")
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
