
# 图标方案


React中，[资源集市](https://dev.kingdee.com/dev/market/detail/1782512263102481408) 已有方案。

无法链接到请搜索：KDesign SVG Icons for Vue Or React

**工程采用两种图标引入方式**

## 字体包（不推荐）

**React18 工程里示例提供了阿里的 iconfont 方案，但按照金蝶安全要求，是不能上传图片到其他网站的**

为什么示例不使用金蝶的 [iconcool](https://iconcool.kingdee.com/home)？

两个大的原因！

第一，实测下来有些 bug ：

- 使用 symbol 方式引入 icon ，无法修改颜色。

- 选择 fontclass 的字体包方式引入 icon ，有时候页面复制生成的类名会多些数字，做不到复制即用。

第二，如果在内网开发，必须下载字体包放入工程里，无法通过请求的方式获取。那么每次 UI 图标改动，我们都要经历这几个步骤：打开 iconcool ，上传 svg 图片，选中图片，加入购物车，下载字体包，传入内网，解压，覆盖本地工程对应目录，找到对应图标的类名（有可能有上面说的第二点 bug ），然后使用。

> 在实践中已经抛弃这种方案，所以在后面添加的 Vue3 起步工程中就没提供了。

## 源文件引用（推荐）

所以工程还提供了源文件引用方式，React18 和 Vue3 工程都做了公共组件的封装。

### React18

使用方式：

```tsx
import React, { useContext, useState } from "react";
import { SVGIcon } from "@/components/index";
import Close from "@/assets/icons/close.svg";
import "@/assets/iconfont/iconfont.js"; // 这个需要在App.tsx中引入

const App: React.FC = () => {
  return (
      <div>
        <h3>图标示例：iconfont</h3>
        <div>
          <SVGIcon iconName="icon-close" disable={true}></SVGIcon>
          <SVGIcon iconName="icon-upload" type="hover"></SVGIcon>
          <SVGIcon iconName="icon-upload" size={24} type="hover"></SVGIcon>
        </div>
        <h3>图标示例：svg源文件</h3>
        <div>
          <SVGIcon>
            <Close />
          </SVGIcon>
          <SVGIcon type="hover" size={24}>
            <Close />
          </SVGIcon>
        </div>
      </div>
  );
};

export default App;
```

### Vue3

使用方式：

```vue
<script setup lang="ts">
import { ref } from "vue";
import { SVGIcon } from "./components";
</script>

<template>
    <div>
      <h3>图标示例：svg源文件</h3>
      <div class="itemWrap">
        <SVGIcon iconName="close" />
        <SVGIcon iconName="close" disable />
        <SVGIcon iconName="close" type="hover" :size="24" />
      </div>
    </div>
</template>

<style scoped lang="less">
</style>
```

在 Vue3 工程中，是主动把 `src/assets/icons` 中的 svg 都循环引入进 SVGIcon 组件中了，所以只需要传入文件名称即可。

# 浏览所有 svg 图片

由于 windows 文件夹管理器是无法直接显示 svg 图片的（当然你可以想办法通过安装对应工具支持），这里也给你提供了一个指令用于简单查看所有 svg 图片，执行完后会自动打开页面：

```bash
npm run svg
```

原理就是把 `src/assets/icons` 中的 svg 都循环展示在 `src/assets/icons/index.html` 上。