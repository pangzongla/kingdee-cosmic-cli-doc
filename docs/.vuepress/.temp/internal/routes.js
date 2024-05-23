export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/config/introduce.html", { loader: () => import(/* webpackChunkName: "config_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/config/introduce.html.js"), meta: {"title":"说明"} }],
  ["/dev/cosmic.html", { loader: () => import(/* webpackChunkName: "dev_cosmic.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/cosmic.html.js"), meta: {"title":"苍穹预览模式"} }],
  ["/dev/introduce.html", { loader: () => import(/* webpackChunkName: "dev_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/introduce.html.js"), meta: {"title":"介绍"} }],
  ["/dev/ram.html", { loader: () => import(/* webpackChunkName: "dev_ram.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/ram.html.js"), meta: {"title":""} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"指南"} }],
  ["/guide/introduce.html", { loader: () => import(/* webpackChunkName: "guide_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/introduce.html.js"), meta: {"title":"需求背景"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":""} }],
  ["/guide/upgrade.html", { loader: () => import(/* webpackChunkName: "guide_upgrade.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/upgrade.html.js"), meta: {"title":"卸载与升级"} }],
  ["/plan/introduce.html", { loader: () => import(/* webpackChunkName: "plan_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/plan/introduce.html.js"), meta: {"title":"脚手架未来支持"} }],
  ["/react/introduce.html", { loader: () => import(/* webpackChunkName: "react_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/react/introduce.html.js"), meta: {"title":"🚀 介绍"} }],
  ["/vue/introduce.html", { loader: () => import(/* webpackChunkName: "vue_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/vue/introduce.html.js"), meta: {"title":"🚀 介绍"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
