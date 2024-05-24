import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    logo: "/images/icon.png",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      { text: "指南", link: "/guide/introduce" },
      {
        text: "苍穹社区入口",
        children: [
          {
            text: "金蝶云苍穹社区",
            link: "https://developer.kingdee.com/developer?productLineId=29&lang=zh-CN",
          },
          {
            text: "资源市集",
            link: "https://dev.kingdee.com/dev/market",
          },
          {
            text: "KDesign",
            link: "https://kingdee.design/",
          },
          {
            text: "CHATUI X",
            link: "https://kux.kingdee.com/cui/",
          },
        ],
      },
      {
        text: "仓库",
        children: [
          {
            text: "Gitee",
            link: "https://gitee.com/pangzong/kingdee-cosmic-cli",
          },
        ],
      },
      { text: "作者博客", link: "https://blog.csdn.net/pagnzong?type=blog" },
    ],
    sidebar: [
      {
        text: "起步",
        link: "/guide/introduce",
        collapsible: false,
        children: [
          { text: "介绍", link: "/guide/introduce" },
          { text: "安装与创建", link: "/guide/getting-started" },
          { text: "卸载与升级", link: "/guide/upgrade" },
        ],
      },
      {
        text: "全局配置",
        link: "/config/introduce",
        children: [],
      },
      {
        text: "开发事项",
        link: "/dev/introduce",
        collapsible: false,
        children: [
          { text: "介绍", link: "/dev/introduce" },
          { text: "苍穹预览模式", link: "/dev/cosmic" },
          { text: "RAM模式", link: "/dev/ram" },
        ],
      },
      {
        text: "生产与产物分析事项",
        link: "/prod/introduce",
        collapsible: false,
        children: [],
      },
      {
        text: "资源拉取策略分析",
        link: "/static/introduce",
        collapsible: false,
        children: [],
      },
      {
        text: "数据请求策略",
        link: "/promise/introduce",
        children: [
          { text: "策略设计", link: "/promise/introduce" },
          { text: "Mock服务", link: "/promise/mock" },
        ],
      },
      {
        text: "React18起步工程",
        link: "/react/introduce",
        collapsible: false,
        children: [
          { text: "介绍", link: "/react/introduce" },
          { text: "接口请求书写", link: "/react/ajax" },
          { text: "状态管理", link: "/react/store" },
        ],
      },
      {
        text: "Vue3起步工程",
        link: "/vue/introduce",
        collapsible: false,
        children: [
          { text: "介绍", link: "/vue/introduce" },
          { text: "接口请求书写", link: "/vue/ajax" },
          { text: "状态管理", link: "/vue/store" },
        ],
      },
      {
        text: "主题色切换",
        link: "/theme/introduce",
        children: [],
      },
      {
        text: "图标方案",
        link: "/icon/introduce",
        children: [],
      },
      {
        text: "规范与温馨提示",
        link: "/rule/introduce",
        children: [],
      },
      {
        text: "未来计划与感谢 📅",
        link: "/plan/introduce",
        children: [],
      },
    ],
  }),
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  lang: "zh-CN",
  title: "kingdee-cosmic-cli",
  description: "kingdee-cosmic-cli的官方使用指导",
  plugins: [
    copyCodePlugin({
      // options
    }),
  ],
});
