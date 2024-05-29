export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/config/introduce.html", { loader: () => import(/* webpackChunkName: "config_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/config/introduce.html.js"), meta: {"title":"说明"} }],
  ["/dev/cosmic.html", { loader: () => import(/* webpackChunkName: "dev_cosmic.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/cosmic.html.js"), meta: {"title":"苍穹预览模式"} }],
  ["/dev/introduce.html", { loader: () => import(/* webpackChunkName: "dev_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/introduce.html.js"), meta: {"title":"介绍"} }],
  ["/dev/ram.html", { loader: () => import(/* webpackChunkName: "dev_ram.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/dev/ram.html.js"), meta: {"title":"RAM模式"} }],
  ["/icon/introduce.html", { loader: () => import(/* webpackChunkName: "icon_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/icon/introduce.html.js"), meta: {"title":"图标方案"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"指南"} }],
  ["/guide/introduce.html", { loader: () => import(/* webpackChunkName: "guide_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/introduce.html.js"), meta: {"title":"需求背景"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":""} }],
  ["/guide/upgrade.html", { loader: () => import(/* webpackChunkName: "guide_upgrade.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/guide/upgrade.html.js"), meta: {"title":"卸载与升级"} }],
  ["/plan/introduce.html", { loader: () => import(/* webpackChunkName: "plan_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/plan/introduce.html.js"), meta: {"title":"脚手架未来支持"} }],
  ["/promise/introduce.html", { loader: () => import(/* webpackChunkName: "promise_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/promise/introduce.html.js"), meta: {"title":"策略设计"} }],
  ["/promise/mock.html", { loader: () => import(/* webpackChunkName: "promise_mock.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/promise/mock.html.js"), meta: {"title":"Mock服务"} }],
  ["/prod/introduce.html", { loader: () => import(/* webpackChunkName: "prod_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/prod/introduce.html.js"), meta: {"title":"生产打包"} }],
  ["/rule/introduce.html", { loader: () => import(/* webpackChunkName: "rule_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/rule/introduce.html.js"), meta: {"title":"Eslint 与 Prettier"} }],
  ["/react/ajax.html", { loader: () => import(/* webpackChunkName: "react_ajax.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/react/ajax.html.js"), meta: {"title":"书写方式"} }],
  ["/react/introduce.html", { loader: () => import(/* webpackChunkName: "react_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/react/introduce.html.js"), meta: {"title":"🚀 介绍"} }],
  ["/react/store.html", { loader: () => import(/* webpackChunkName: "react_store.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/react/store.html.js"), meta: {"title":"背景"} }],
  ["/static/introduce.html", { loader: () => import(/* webpackChunkName: "static_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/static/introduce.html.js"), meta: {"title":"背景"} }],
  ["/theme/introduce.html", { loader: () => import(/* webpackChunkName: "theme_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/theme/introduce.html.js"), meta: {"title":"主题色切换"} }],
  ["/vue/ajax.html", { loader: () => import(/* webpackChunkName: "vue_ajax.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/vue/ajax.html.js"), meta: {"title":"书写方式"} }],
  ["/vue/introduce.html", { loader: () => import(/* webpackChunkName: "vue_introduce.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/vue/introduce.html.js"), meta: {"title":"🚀 介绍"} }],
  ["/vue/store.html", { loader: () => import(/* webpackChunkName: "vue_store.html" */"E:/code/webpack/kingdee-cosmic-cli-doc/docs/.vuepress/.temp/pages/vue/store.html.js"), meta: {"title":"背景"} }],
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
