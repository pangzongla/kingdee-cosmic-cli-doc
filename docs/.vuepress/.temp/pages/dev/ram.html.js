import comp from "/Users/liujingpang/code/react/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/ram.html.vue"
const data = JSON.parse("{\"path\":\"/dev/ram.html\",\"title\":\"RAM模式\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1716542879000,\"contributors\":[{\"name\":\"庞囧\",\"email\":\"980100681@qq.com\",\"commits\":2}]},\"filePathRelative\":\"dev/ram.md\"}")
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
