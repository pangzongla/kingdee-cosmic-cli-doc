# 背景

引用状态管理工具是为了解决 `update` 数据推送监听的问题，目前采用的库为 Zustand。

# Zustand 实例化方式

[因为前面提到过的变量隔离问题](/static/introduce)，所以 Zustand 必须也在类的声明中实例化。

```tsx
export class InitComponent {
  model: ModelType;
  globalRoot: ReactDOM.Root | null = null;
  zustandStore: ZustandStore;
  constructor(model: ModelType) {
    this.model = model;
    this.zustandStore = zustandStore();
    /* 用import("").then语法配合代码分割+css独立文件打包，可以让打包后的js文件自动拉取css文件 */
    import("./components/context/AppGlobal").then((AppModule) => {
      const AppGlobal = AppModule.default;

      this.globalRoot = ReactDOM.createRoot(this.model.dom as HTMLElement);
      this.globalRoot.render(
        <AppGlobal
          model={this.model}
          zustandStore={this.zustandStore}
        ></AppGlobal>
      );
    });
  }

  init(props: ReturnDataType) {
    console.log("-----init", this.model, props);
    saveConfig(props, this.zustandStore);
  }

  update(props: ReturnDataType) {
    console.log("-----update", this.model, props);
    saveConfig(props, this.zustandStore);
    this.zustandStore.useGlobalStore.getState().setAjaxData(props);
  }

  destoryed() {
    console.log("-----destroyed", this.model);
    if (this.globalRoot) {
      this.globalRoot.unmount();
      this.globalRoot = null;
    }
  }
}
```

# 使用

在 tsx 组件中：

```tsx
// App.tsx
import React, { useContext, useState } from "react";
import { AppContext } from "@/components/index";

const App: React.FC = () => {
  const { zustandStore } = useContext(AppContext);
  const { value, increment } = zustandStore.useGlobalStore();

  return (
    <div>
      <h3>zustand数据演示</h3>
      <div className={Style.itemWrap}>
        <span>
          zustand数据：
          {value}
        </span>
        <button
          onClick={() => {
            increment();
          }}
        >
          点我zustand数据+1
        </button>
      </div>
    </div>
  );
};

export default App;
```

# 遗憾

由于 Zustand 是在类中实例化的，并且通过 Context 传递到各个组件中。所以在其他 `.ts` 文件中就无法获取到它的实例，所以无法在其他文件中使用 Zustand 的状态和方法，只能在组件中使用。
