import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      //   {
      //     text: "Shark Xu 的博客",
      //     items: [
      //       { text: "掘金", link: "https://juejin.cn/user/233526039432445" },
      //       { text: "Github", link: "https://github.com/Xusssyyy" },
      //     ],
      //   },
      { text: "指南", link: "/guide/introduce" }, //docs目前还没有创建这个目录,先这么写
      //   { text: "Git连接", link: "https://www.bilibili.com/" }, //先填个B站吧
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
        text: "React18起步工程",
        link: "/react/introduce",
        collapsible: false,
        children: [{ text: "介绍", link: "/react/introduce" }],
      },
      {
        text: "Vue3起步工程",
        link: "/vue/introduce",
        collapsible: false,
        children: [{ text: "介绍", link: "/vue/introduce" }],
      },
      {
        text: "未来计划",
        link: "/plan/introduce",
        children: [],
      },
    ],
  }),

  lang: "zh-CN",
  title: "kingdee-cosmic-cli",
  description: "kingdee-cosmic-cli的官方使用指导",
  //   head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  plugins: [
    copyCodePlugin({
      // options
    }),
  ],
});
