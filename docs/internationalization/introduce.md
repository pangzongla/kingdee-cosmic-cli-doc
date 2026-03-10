# 国际化多语言方案

生产环境的国际化方案采用的是社区提供的方法：[自定义控件的多语言开发](https://vip.kingdee.com/school/detail/238388113520005120?productLineId=29&lang=zh-CN)

主要利用的 API 为 `window.KDApi.getLangMsg`

开发环境没有这个 API，我做了一层封装来模拟行为，保证开发环境和生产环境的代码编写是一样的，效果也是一样的，直接使用即可。

同时，无论选择 React 还是 Vue，写法都一样。

使用例子：

```jsx
import getLangMsg from "@utils/langMsg";

// 例子获取一个词条
function getMsg() {
  const msg = getLangMsg("name");
}
```

国际化文本维护在 `src/lang` 文件夹中。正常情况下至少要在本地提供一个中文词条和英文字条的 JSON 文件。一般发布的时候，会有对应的流水根据中文词条去把其他语言的词条生成出来。

如果不需要国际化，那就不使用这个 API，并且在 `index.ts` 中注册控件时取消多语言配置 `{ isMulLang: true }`
