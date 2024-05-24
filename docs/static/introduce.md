# 背景

首先我们要先知道苍穹平台是怎么拉取控件资源的。

当需要加载到某个自定义控件时，会去主动拉取执行控件的 `index.js` 文件，并执行。

例如：

```js
(function(KDApi){
    // 构造函数
    function demo (model) {
        this._setModel(model)
    }

    // 原型中封装生命周期函数，固定格式
    demo.prototype = {
        _setModel: function(model) {
            this.model = model
        },
        // 控件初始化触发
        init: function(props){
            initFunc(this.model, props)
        },
        // 数据返回时触发
        update: function(props){
        },
        // 控件销毁时触发（这个单词都写错了哈哈哈）
        destoryed: function(){
        }
    }


    let initFunc = function(model, props) {
        // KDApi.loadFile可以通过路径加载js或css文件，并且在html文件头生成script或者link标签，第一个参数是路径，第二个参数是model，第三个参数是加载完成后执行的回调函数
        KDApi.loadFile('./css/demo.css', model, function() {
            // 通过路径去获取html字符串，第一个参数是路径，第二个参数是model，第三个参数是HTML模板中变量的值
            KDApi.getTemplateStringByFilePath('./html/demo.html', model, {
                text: '这是一个示例'
            }).then(function(result) {
                model.dom.innerHTML = result // 挂载
            })
        })
    }

    // KDApi注册一个id号，这个id号要和控件方案的id号对应
    KDApi.register('demo', demo)
})(window.KDApi) 
```

可以看出特点：

- 控件在注册的时候需要传入一个构造函数/类。

- 除了 `index.js` 入口资源外，其他资源需要通过 `KDApi` 的API去拉取。

考虑到我们的起步工程都是基于 Webpack + 框架，当打包的产物资源变多或者用了哈希值名称后，我们还需要在 `index.js` 里去手动修改引入这些资源，显得不是那么方便。

# 动态拉取策略

所以工程采用的是 JS 动态拉取策略去加载资源，例如我在 Vue3 工程里的 `index.ts` 是这样做的：

```ts
import { ModelType, ReturnDataType } from "./types/model";
import appConfig from "../app.config";
import { createApp } from "vue";
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
  constructor(model: ModelType) {
    this.model = model;
    import("./App.vue").then((AppModule) => {
      const AppGlobal = AppModule.default;
      const App = createApp(AppGlobal);
      App.provide("model", model);
      if (inCosmic) {
        App.mount(this.model.dom as HTMLElement);
      } else {
        // ram模式下没有window.KDApi
        App.mount("#app");
      }
    });
  }
  init(props: ReturnDataType) {
    console.log("-----init", this.model, props);
  }
  update(props: ReturnDataType) {
    console.log("-----update", this.model, props);
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

通过 `import("").then` 配合 Webpack 代码分割 + css独立文件打包，可以让打包后的 js 文件自动拉取 css 文件。那么就不用关系资源引用问题了。

**但是这样会引申出另外一个问题：代码共用！**

# 代码共用问题

因为采用了动态加载的方式，苍穹只会拉取一次控件的代码，并且页面上所有同一个控件共用这一份。

例如一个叫 Demo 的控件，在 A 页面需要显示，会拉取资源执行。然后 B 页面也需要显示，它就不会再拉取资源了，直接用 之前拉取过的资源。

这会带来全局变量污染的问题。

例如有个 `tool.ts` 文件，里面声明了一个变量 name ，A 页面的控件 Demo 修改了这个变量为 'A'，此时 B 页面的控件 Demo 修改了这个变量为 'B'，那么 A 页面的的控件 Demo 再去读取 name 的时候，读取到的就是 'B'。

## 解决

目前经过实践，发现只要在 `index.ts` 中的类中声明的变量，就是独立于每个控件的，包括渲染的框架根组件。

由此得出：

- 在 `index.ts` 中的类中声明的变量是独立的，就像我对 model 的保留。

- 在组件中声明的变量也是独立的（当然在 React 中不要在组件函数定义外面去声明）。

**那么还有一个问题，`update` 触发返回的数据，要怎么隔离并传递到各个组件中呢？**

具体详细可以查看对应章节：

- [React18 状态管理章节](/react/store)

- [Vue3 状态管理章节](/vue/store)

# 提示

**这里只是给出这样的资源拉取方案，如果你还是喜欢用苍穹的方式，可以自行在工程代码中修改~ 这样也不会有代码共用的问题**