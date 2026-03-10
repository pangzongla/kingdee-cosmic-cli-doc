<template><div><h1 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景"><span>需求背景</span></a></h1>
<p>解决在金蝶云苍穹平台上开发自定义控件时的一些痛点问题 😩 ，例如：</p>
<ul>
<li>
<p>每次开发一个新的自定义控件，都需要搭建一个新的工程，并且每个人自己搭建的起步工程都不统一。</p>
</li>
<li>
<p>一些必要功能（例如：主题色切换、接口请求封装、国际化等）需要自己手动实现，非常繁琐，迫切而需要统一的方案。</p>
</li>
<li>
<p>在本地环境上开发的时候，由于苍穹平台的前端资源加载策略不同，需要手动打包后才能在苍穹上看效果，给开发、联调阶段带来极大的不便。</p>
</li>
<li>
<p>苍穹平台前端资源的加载方式（<code v-pre>KDApi.loadFile</code>），难以做到动态获取分割后的资源文件，当打包后的资源有变化，要手动修改，非常不便。</p>
</li>
<li>
<p>...</p>
</li>
</ul>
<p><strong>但是现在！kingdee-cosmic-cli 来了，将给你带来不一样的开发体验~ 😆</strong></p>
<!-- > [脚手架 npm 地址](https://www.npmjs.com/package/kingdee-cosmic-cli) -->
<h1 id="✨-新特性" tabindex="-1"><a class="header-anchor" href="#✨-新特性"><span>✨ 新特性</span></a></h1>
<p>2026/01/06</p>
<ul>
<li>
<p><a href="/ai/introduce">AI 提效辅助</a></p>
</li>
<li>
<p>本地开发模式和苍穹预览模式支持部分的代码热更新。</p>
</li>
<li>
<p>国际化多语言方案提升至全局。</p>
</li>
</ul>
<p>2025</p>
<ul>
<li>
<p>React 版本新增 Ant Design 可选项。</p>
</li>
<li>
<p>新增国际化多语言方案。</p>
</li>
<li>
<p>ESlint 轻量化方案替换。</p>
</li>
</ul>
<p>2024</p>
<ul>
<li>脚手架上架</li>
</ul>
<p><strong>如果好用请 star 🌟 鼓励一下~</strong></p>
</div></template>


