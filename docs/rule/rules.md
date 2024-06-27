# 工程与编码规范

> 原文档编写人 [@zzkkui](https://gitee.com/Quintus-Peng)，在原文档基础上做调整。

## 命名规则

基本规则：

1. 使用大小写英文字母和下划线、中划线组成
2. 不能使用关键字和保留字
3. 能见名知意

| 类型 | 命名规则	 | 举例 |
| --- | --- | --- |
| 文件夹名| 小驼峰命名法| account、devLicense |
| 文件名| 小驼峰命名法，后缀要能体现文件的类型| userDetail.tsx、config.ts、global.scss|
| 图片名| 英文小写，分隔符用中划线，带精度|login-bg@2x.png |
| 组件名| 大驼峰命名法| ProductConf（除 index.tsx） |
| 常量名| 英文大写，分割符用下划线| PRODUCT_INFO |
| 变量名| 小驼峰命名法，布尔类型用is/has开头|userInfo、isInstall|
| 方法名 | 小驼峰命名法	 | getUserInfo|
| 组件属性名 | 小驼峰命名法 | activeKey |

> 若创建项目时，脚手架选项选择了加入 Eslint ，编辑器会自动校验。

## 注释
1. 写主要注释
**复杂方法、组件需要注释**

```ts
/** 
 * @description 计算两数之和 
 * @param a {string | number} 第一个加数 
 * @param b {?string | number | undefined} 第二个加数 
 * @returns {number} 两数之和 
 */ 
function add(a: string | number, b = 1) { 
  return Number(a) + Number(b) 
}
```

2. 特殊注释
  - TODO: 
  - NOTE: 
  - 单行逻辑注释

## 导出
公共组件目录提供 `index` 文件导出所有组件，外部引入时通过该 `index` 引入。 

## 编码规范
**函数编码**

1. 超过1个地方的重复逻辑则封装成函数，超过2个地方使用的函数则抽成工具函数
2. 函数与函数之间用一个空行隔开（Eslint 校验支持）
3. 函数柯里化：一个函数就干一件事

**组件编码顺序**

1. 解构 `props` (如果有)
2. react相关的第三方包中的钩子函数(除了 useEffect )
3. 方法(跟 api 有关的方法放最后)
4. 内部组件
5. useEffect
   (1). 无依赖
   (2). 有依赖(按照调用的先后顺序排序)
   (3). 返回值是函数

**jsx编码规则**

1. 使用 jsx（tsx）语法
2. 没有子节点的组件，使用自闭合语法
```jsx
<ConfirmModal />
```
3. 组件有多个属性时

  - 每个属性各占一行
  - 属性值如果是常量字符串，使用字面量赋值title="标题1"，而不是title={'标题1'}
  - 属性值如果是 true ，则省略属性值
  - 属性在前，方法在后
  - 闭标签另起一行

```jsx
<ConfirmModal 
  visible
  title="标题1"
  text="我是body正文"
  style={{ color: '#ccc' }}
  onCancel={() => handleModalCancel()}
/>
```

**组件规范**

1. 组件 props 类型需详尽，必要时通过传递泛型约束
2. 在编写组价之前，需要考虑其可复用性、功能单一性，做拆分设计
3. 基于 react 的组件 render 原理，针对组件状态的设计（状态提升 or 状态下沉）

**针对 Common 组件**（脱离业务逻辑）

4. 与业务逻辑完全解耦：如有需要 store 通过 props 传入；如有对外交互，通过传入回调触发

**import 规范**

1. 与react相关的第三方包
   比如react、react-redux、react-router (按照包使用的先后顺序排序)
2. 其他第三方包
3. 组件库
   - @kdcloudjs/kdesign
   - 自定义组件
        - 公共组件    
        - 非公共组件
4. 类型（使用 import type ** from **）
5. 常量
   - 全局常量
   - 局部常量
6. 方法
   - 工具方法
   - 其他文件中的方法
7. api
8. store
9. 图片
10. 样式

**PS: 能使用 alias 使用 alias**

> 若创建项目时，脚手架选项选择了加入 Eslint ，编辑器会自动校验。但具体识别需要自己在 `eslint.config.mjs` 里补充。

## git 提交规范
**commit 分类为，必选其一：**

1. fix: 修复bug
2. hotfix:线上问题紧急修复
3. feat: 新功能
4. test: 增加单元测试代码
5. doc：增加注释或者文档
6. perf: 性能优化
7. refactor：代码重构
8. build: 构建工具或构建过程等的变动，如：gulp 换成了 webpack，webpack 升级等
9. cover：代码覆盖，如：主干覆盖基线
10. format：代码格式化
11. description 是对本次提交的简短描述。不超过50个字符，推荐以动词开头，如： 设置、修改、增加、删减、撤销等

## 类型

全局声明或者不用改动的类型使用 `.d.ts`，直接放在根目录

1. 组件内使用的类型一般直接定义在组件文件内（同 hooks、util等）
2. 关联组件类型较多可以单独使用 `type.ts` 来声明类型，这类复杂且有关联类型必要时需要注释
3. store 中如果数据较多，使用 `type.ts` 来声明类型，必要时需要注释
4. react 中一些 hooks 方法，包括大多数第三方库暴露的方法都是需要传入泛型


## ts规范
1、使用枚举设置常量集合

```typescript
// Bad
const Status = {
    Success: 'success'
}

// Good
enum Status {
    Success = 'success'
}
```

2、引用类型变量应该保证类型正确，不正确的需要手动声明

```typescript
//自动推断
let foo = [1, 2] // number[]
```

```typescript
// 显示声明
// Bad
let bar = [] // any[]

// Good
let bar:number[] = []
```

3、不要为返回值会被忽略的回调函数设置返回值类型`any`：

```typescript
// Bad
function fn(x: () => any) {
    x();
}
```

应该为返回值会被忽略的回调函数设置返回值类型`void`：

```typescript
// Good
function fn(x: () => void) {
    x();
}
```