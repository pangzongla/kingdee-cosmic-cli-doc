# 书写方式

已将不同开发模式下的接口请求（ `model.invoke` ），封装成了一个 Promise （`src/components/context/AppProvider.tsx`），通过链式传递的方式提供给子孙组件使用。

例子：

```tsx
import React, { useContext, useState } from "react";
import { AppContext } from "@/components/index";

const App: React.FC = () => {
  const { invokeAsync } = useContext(AppContext);
  type NumType = {
    data: {
      num: number;
    };
  };
  const [params, setParams] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const add = async () => {
    setIsLoading(true);
    const data = await invokeAsync<NumType>("getNumType", params);
    setParams(data.data.num);
    setIsLoading(false);
  };

  return (
    <div>
        <button
            onClick={add}
            disabled={isLoading} >
            请求
        </button>
        <div>{isLoading ? "加载中" : "完成加载"}</div>
    </div>
  );
};

export default App;
```

对于请求后后端不会返回结果，也就是不会触发 `update` 的情况，可以这样调用：

```tsx
invokeAsync("noResponse", params, { noResponse: true });
```


**参数说明：**

- 第一参数：对应苍穹接口请求的自定义事件名称。
  
- 第二参数：发送给接口的数据。

- 第三参数：API 的配置项

目前可配置的有：

| 参数   | 类型   | 描述             |
| ------ | ------ | ---------------- |
| noResponse  | boolean | 是否接口无回应       |

# 遗憾

[动态按需拉取资源带来的问题](/static/introduce)，无法在 `.ts` 文件中封装，所以无法在 `.ts` 文件调用。

目前能想到的方法就是在根组件包一层变量共享组件，在变量共享组件中封装，然后通过 `useContext` 调用。