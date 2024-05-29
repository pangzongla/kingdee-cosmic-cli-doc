# 背景

使用 composition-api 的 `ref` 简单做了个状态管理类 （`src/utils/store.ts`），这是为了解决 `update` 数据推送监听的问题。

# 状态管理实例化方式

[因为前面提到过的变量隔离问题](/static/introduce)，所以状态管理必须也在类的声明中实例化。

```ts
import { ModelType, ReturnDataType } from "./types/model";
import appConfig from "../app.config";
import changeTheme from "@utils/change-theme";
import { createApp } from "vue";
import StateManager from "@utils/store";
const { APP_NAME } = appConfig;
// 创建一个全局变量来存储root
const inCosmic = window.KDApi !== undefined; // 是否在苍穹环境中

declare global {
  interface Window {
    KDApi: KDApiType;
  }
}
type KDApiType = {
  register: (a: string, b: typeof InitComponent) => void;
};

export class InitComponent {
  model: ModelType;
  store: any;
  constructor(model: ModelType) {
    this.model = model;
    const that = this;
    import("./App.vue").then((AppModule) => {
      const AppGlobal = AppModule.default;
      const App = createApp(AppGlobal);
      that.store = new StateManager(); // 必须在类中new才能做到变量隔离
      App.config.globalProperties.$stateManager = that.store;
      App.provide("model", model);
      App.provide("store", that.store);
      if (inCosmic) {
        App.mount(this.model.dom as HTMLElement);
      } else {
        // ram模式下没有window.KDApi
        App.mount("#app");
      }
      changeTheme(); // 主题色初始化
    });
  }
  init(props: ReturnDataType) {
    console.log("-----init", this.model, props);
    this.store && this.store.triggerAction("setAjaxData", props);
  }
  update(props: ReturnDataType) {
    console.log("-----update", this.model, props);
    this.store && this.store.triggerAction("setAjaxData", props);
  }
  destoryed() {
    console.log("-----destroyed", this.model);
  }
}

const init = (KDApi: KDApiType) => {
  KDApi.register(APP_NAME, InitComponent);
};

// 初始化应用程序
if (inCosmic) {
  init(window.KDApi);
} else {
  // ...
}
```

# 使用

幸运的是，由于 Vue 的设计，让我们可以在组件和 `.ts` 文件中都能访问到 store 的实例，所以都可以访问到状态和方法。

```ts
import { watch, getCurrentInstance } from "vue";

export default function useInvokeAsync() {
  const instance = getCurrentInstance();
  const proxy = instance?.proxy as any;
  const state = proxy.$stateManager?.getState();
  watch(state, () => {
    console.log("update触发了", state);
  });
}
```

**当然你也可以把这个简单的 store 换成 Pinia。**