import comp from "E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/guide/getting-started.html\",\"title\":\"指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"指南\",\"description\":\"指南\"},\"headers\":[{\"level\":2,\"title\":\"安装脚手架\",\"slug\":\"安装脚手架\",\"link\":\"#安装脚手架\",\"children\":[]},{\"level\":2,\"title\":\"查看版本\",\"slug\":\"查看版本\",\"link\":\"#查看版本\",\"children\":[]},{\"level\":2,\"title\":\"新建项目\",\"slug\":\"新建项目\",\"link\":\"#新建项目\",\"children\":[]},{\"level\":2,\"title\":\"选择配置\",\"slug\":\"选择配置\",\"link\":\"#选择配置\",\"children\":[]},{\"level\":2,\"title\":\"目前支持的框架\",\"slug\":\"目前支持的框架\",\"link\":\"#目前支持的框架\",\"children\":[]}],\"git\":{\"updatedTime\":1716793985000,\"contributors\":[{\"name\":\"庞囧\",\"email\":\"980100681@qq.com\",\"commits\":3}]},\"filePathRelative\":\"guide/getting-started.md\"}")
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
