import comp from "E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/promise/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/promise/introduce.html\",\"title\":\"策略设计\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"背景\",\"slug\":\"背景\",\"link\":\"#背景\",\"children\":[]},{\"level\":2,\"title\":\"请求模式的设计\",\"slug\":\"请求模式的设计\",\"link\":\"#请求模式的设计\",\"children\":[{\"level\":3,\"title\":\"单队列（默认采用）\",\"slug\":\"单队列-默认采用\",\"link\":\"#单队列-默认采用\",\"children\":[]},{\"level\":3,\"title\":\"多队列（推荐）\",\"slug\":\"多队列-推荐\",\"link\":\"#多队列-推荐\",\"children\":[]}]},{\"level\":2,\"title\":\"接口请求书写方式\",\"slug\":\"接口请求书写方式\",\"link\":\"#接口请求书写方式\",\"children\":[]},{\"level\":2,\"title\":\"遗憾 😪\",\"slug\":\"遗憾-😪\",\"link\":\"#遗憾-😪\",\"children\":[]}],\"git\":{\"updatedTime\":1716542879000,\"contributors\":[{\"name\":\"庞囧\",\"email\":\"980100681@qq.com\",\"commits\":1}]},\"filePathRelative\":\"promise/introduce.md\"}")
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
