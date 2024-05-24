# 书写方式

已将不同开发模式下的接口请求（ `model.invoke` ），封装成了一个 Promise 内核的 Hook （`src/hooks/useInvokeAsync.ts`），可在组件和hooks中使用。

例子：

```vue
<script setup lang="ts">
import { inject, ref } from "vue";
import { useInvokeAsync } from "@hooks/index";
import StateManager from "@utils/store";
const invokeAsync = useInvokeAsync();
const store = inject<StateManager>("store");
/* Promise 请求示例 */
type NumType = {
  data: {
    num: number;
  };
};
const isLoading = ref<boolean>(false);
const params = ref<number>(1);
const add = async () => {
  isLoading.value = true;
  const data = await invokeAsync<NumType>("getNumType", params.value);
  params.value = data.data.num;
  isLoading.value = false;
};
</script>

<template>
  <div>
    <button @click="add" :disabled="isLoading">请求</button>
    <div>{{ isLoading ? "加载中" : "完成加载" }}</div>
  </div>
</template>

<style scoped lang="less">
</style>
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