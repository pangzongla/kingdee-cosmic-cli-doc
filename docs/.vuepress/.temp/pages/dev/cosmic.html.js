import comp from "E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/cosmic.html.vue"
const data = JSON.parse("{\"path\":\"/dev/cosmic.html\",\"title\":\"苍穹预览模式\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"dev/cosmic.md\"}")
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
