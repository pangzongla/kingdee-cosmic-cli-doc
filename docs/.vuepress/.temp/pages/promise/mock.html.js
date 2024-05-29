import comp from "E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/promise/mock.html.vue"
const data = JSON.parse("{\"path\":\"/promise/mock.html\",\"title\":\"Mock服务\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"数据伪造\",\"slug\":\"数据伪造\",\"link\":\"#数据伪造\",\"children\":[]}],\"git\":{\"updatedTime\":1716542879000,\"contributors\":[{\"name\":\"庞囧\",\"email\":\"980100681@qq.com\",\"commits\":1}]},\"filePathRelative\":\"promise/mock.md\"}")
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
