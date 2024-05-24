# 背景

引用状态管理工具是为了解决 `update` 数据推送监听的问题，目前采用的库为 Redux，将来有机会会切换成 Zustand。

# Redux实例化方式

[因为前面提到过的变量隔离问题](/static/introduce)，所以 Redux 必须也在类的声明中实例化。

```tsx
export class InitComponent {
  model: ModelType;
  store: ReturnType<typeof configureStore>;
  globalRoot: ReactDOM.Root | null = null;
  constructor(model: ModelType) {
    this.model = model;
    // @ts-ignore
    this.store = new Store();
    /* 用import("").then语法配合代码分割+css独立文件打包，可以让打包后的js文件自动拉取css文件 */
    import("./components/context/AppGlobal").then((AppModule) => {
      const AppGlobal = AppModule.default;
      if (inCosmic) {
        this.globalRoot = ReactDOM.createRoot(this.model.dom as HTMLElement);
      } else {
        // ram模式下没有window.KDApi
        this.globalRoot = ReactDOM.createRoot(document.getElementById("app")!);
      }
      this.globalRoot.render(
        <Provider store={this.store}>
          <AppGlobal model={this.model}></AppGlobal>
        </Provider>
      );
    });
  }
  init(props: ReturnDataType) {
    console.log("-----init", this.model, props);
  }
  update(props: ReturnDataType) {
    console.log("-----update", this.model, props);
    this.store.dispatch(setAjaxData(props));
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

这里封装了两个 hooks 示例方便组件中使用 Redux ：

```tsx
// App.tsx
import React, { useContext, useState } from "react";

import { useReduxGlobalState } from "./hooks/index";
import { useGlobalReduxFunction } from "./redux/global";

const App: React.FC = () => {
  const { value } = useReduxGlobalState();
  const increment = useGlobalReduxFunction("increment");

  return (
      <div>
        <h3>redux数据演示</h3>
        <div>
          <span>redux数据：{value}</span>
          <button
            onClick={() => {
              increment();
            }}
          >
            点我redux数据+1
          </button>
        </div>
      </div>
  );
};

export default App;
```

# 遗憾

由于 Redux 是在类中实例化的，所以在其他 `.ts` 文件中就无法获取到 `store` 实例，所以无法在其他文件中使用 Redux 的状态和方法，只能在组件中使用。