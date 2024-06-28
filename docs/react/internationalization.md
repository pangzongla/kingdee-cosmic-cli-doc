# 国际化多语言方案

生产环境的国际化方案采用的是社区提供的方法：[自定义控件的多语言开发](https://vip.kingdee.com/school/detail/238388113520005120?productLineId=29&lang=zh-CN)

主要利用的 API 为 `window.KDApi.getLangMsg`

但是开发环境没有这个 API，于是做了一层封装来模拟行为，使用例子：

```jsx
import React, { useContext, useState } from 'react'
import { AppContext } from '@/components/index'

const App: React.FC = () => {
    const { getLangMsg } = useContext(AppContext) // getLangMsg 的用法完全和 window.KDApi.getLangMsg 一致
    return (
        <div>{getLangMsg('lang')}</div>
    )
}
```

国际化文本维护在 `src/lang` 文件夹中。

如果不需要国际化，那就不使用这个 API，并且在 `index.ts` 中注册控件时取消多语言配置 `{ isMulLang: true }`