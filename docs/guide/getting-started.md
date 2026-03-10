---
lang: zh-CN
title: 指南
description: 指南
---

# 安装与创建

**node 环境版本建议 18 以上！**

**注意：因公司 IP 地址安全问题（脚手架代码里不能涉及到），所以不再提供内网安装，请在外网安装脚手架！**

## 安装脚手架

```bash
npm install -g kingdee-cosmic-cli
```

## 查看版本

```bash
cosmic --version
```

## 新建项目

通过引导式选项创建项目：

```bash
cosmic create my-app
```

快速创建一个 React18 版本的项目：

```bash
cosmic create my-app --react
```

快速创建一个 React18 + Antd 版本的项目：

```bash
cosmic create my-app --react-antd
```

快速创建一个 Vue3 版本的项目：

```bash
cosmic create my-app --vue
```

## 选择配置

- 请选择一个框架 Vue3/React18

- React 是否加入 Ant Design ？（目前 Vue3 还没想好集成什么 UI 组件库）

## 安装依赖

进入到新建的项目，安装对应依赖：

```bash
npm install
```

或者（建议）

```bash
pnpm install
```

## 目前支持的框架

- React18

- Vue3
