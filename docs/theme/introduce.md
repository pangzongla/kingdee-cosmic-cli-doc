# 主题色切换

实现方法是参考金蝶 [KDesign Pro](https://pro.kingdee.design/) 项目的方案。

具体使用方式：

```ts
import changeTheme from "@utils/change-theme";

changeTheme('#276ff5') // 不传参数默认为苍穹的商务蓝
```

> 尽量传入十六进制的颜色值，用 rgb 传入算出来的颜色会有点问题。

## 实现原理

大致原理就是当我们传入颜色值，函数会通过该色值算出同色系不同深浅度的10个颜色，然后用不同的 css 变量名称去存储，并且将他们都放入一个 style 标签挂在到 head 标签里，例如 React18 起步工程里：

```css
:root {
    --react_demo-color-theme: #276ff5;
    --react_demo-color-theme-1: #F2F9FF;
    --react_demo-color-theme-2: #E0EFFF;
    --react_demo-color-theme-3: #B2D5FF;
    --react_demo-color-theme-4: #84B7FF;
    --react_demo-color-theme-5: #5697FF;
    --react_demo-color-theme-6: #276FF5;
    --react_demo-color-theme-7: #104CCC;
    --react_demo-color-theme-8: #002EA3;
    --react_demo-color-theme-9: #001F7B;
}
```

## Less 预处理器

Less 变量名称的文件位置在 `src/styles/variable.less` 。

因为 css 变量的前缀是根据全局配置中的 `APP_NAME` 动态拼接上的，所以如果修改了 `APP_NAME` 需要把 `variable.less` 里的 css 变量名称也改了。

**加入 less 变量是为了让颜色变量更加语义化一些~ 不喜欢可以自行去掉。**

### 在 Vue3 起步工程中使用

```vue
<style scoped lang="less">
@import "./styles/variable.less";
.wrapper {
  background-color: @background-color;
  color: @primary-color;
}
</style>
```

### 在 React18 起步工程中使用

在 module.less 文件中引用：

```less
@import "./styles/variable.less";
.wrapper {
  background-color: @background-color;
  color: @primary-color;
}
```

然后在组件中引入 less 文件：

```tsx
import React from "react";
import Style from "./index.module.less";

const App: React.FC = () => {
  return (
    <div className={Style.wrapper}></div>
  );
};

export default App;
```