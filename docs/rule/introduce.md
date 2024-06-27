# ESlint 代码格式校验方案选择

在使用脚手架创建工程的时候可以选择是否加入 Eslint 帮忙格式化代码。

**为什么不用主流的 ESlint + Prettier 方案？**

以下是我的理由：

第一、配置繁琐，在一个 React 或者 Vue 工程中加入一套适配的 ESlint + Prettier 方案过程很麻烦，需要安装各种依赖，配置各种规则和文件，并且需要保证 ESlint 和 Prettier 版本一致，规则不冲突。

第二、Prettier 格式化有时候弄巧成拙，格式化后的样子可能更不适合阅读。

第三、我不想在一个起步工程中加入太多耦合度太高的插件，我希望工程尽可能的简单。

于是我就在网上找到了一个不错的方案：[@antfu/eslint-config](https://github.com/antfu/eslint-config)

## antfu

作者为 + Prettier 方案不足之处写了一篇文章：[为什么我不使用 Prettier (antfu.me)](https://antfu.me/posts/why-not-prettier-zh)。

文章要点总结如下：

- 自定义的配置并不是很丰富，这是 Prettier 设计者为了保证所有用户的风格一致化的理念。
- 强制换行和行合并功能有时候反而不合适阅读
- 与 ESlint 有许多规则冲突

最后作者的观点如下：

1. 只单纯使用 Prettier 十分合理 - 开箱即用是个很棒的功能
2. 如果你需要使用 ESLint，它也可以像 Prettier 一样格式化代码 - 而且更加可配置
3. Prettier + ESLint 仍然需要大量的配置 - 它并没有让你的工作变得更简单
4. 你可以在 ESLint 中完全控制代码风格，但在 Prettier 中却无法做到，这两者混合在一起感觉很奇怪
5. 我不认为 Parse 两次代码会更快

**antfu 就是一个集成了多种规则的 ESlint 插件，配置简单，高效，可格式化。所以起步工程集成了这个方案。**

### CSS 和 HTML的格式化

ESlint 是不支持 CSS 和 HTML 格式化的，要么这种格式的文件用其他格式化工具单独处理，起步工程用了 `eslint-plugin-format` 来处理。

### 一些坑的提示

- 如果在内网 eslint 格式化不生效，可以在 vscode 插件里看看 eslint 是不是被突然禁用了，重新启用试试。
  
- 如果项目中的代码风格最后总是被 vscode 强制覆盖（例如 Organize imports ），如果能关掉就好，不能就重新安装一个 vscode 。

# kingdee-cosmic-cli-lint

在使用了 antfu 的同时，我还开发了一个自定义规则插件，用来辅助补充规则的，例如：

- 颗粒度更加细致的 import 导入顺序校验 （待完善）

- 变量名称命名校验

- React 函数组件内部函数定义之间空一行的校验
