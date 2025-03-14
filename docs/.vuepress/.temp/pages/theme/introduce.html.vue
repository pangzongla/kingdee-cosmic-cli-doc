<template><div><h1 id="主题色切换" tabindex="-1"><a class="header-anchor" href="#主题色切换"><span>主题色切换</span></a></h1>
<p>实现方法是参考金蝶 <a href="https://pro.kingdee.design/" target="_blank" rel="noopener noreferrer">KDesign Pro</a> 项目的方案。</p>
<p>具体使用方式：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> changeTheme <span class="token keyword">from</span> <span class="token string">"@utils/change-theme"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">changeTheme</span><span class="token punctuation">(</span><span class="token string">'#276ff5'</span><span class="token punctuation">)</span> <span class="token comment">// 不传参数默认为苍穹的商务蓝</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>尽量传入十六进制的颜色值，用 rgb 传入算出来的颜色会有点问题。</p>
</blockquote>
<h2 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理"><span>实现原理</span></a></h2>
<p>大致原理就是当我们传入颜色值，函数会通过该色值算出同色系不同深浅度的10个颜色，然后用不同的 css 变量名称去存储，并且将他们都放入一个 style 标签挂在到 head 标签里，例如 React18 起步工程里：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme</span><span class="token punctuation">:</span> #276ff5<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-1</span><span class="token punctuation">:</span> #F2F9FF<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-2</span><span class="token punctuation">:</span> #E0EFFF<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-3</span><span class="token punctuation">:</span> #B2D5FF<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-4</span><span class="token punctuation">:</span> #84B7FF<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-5</span><span class="token punctuation">:</span> #5697FF<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-6</span><span class="token punctuation">:</span> #276FF5<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-7</span><span class="token punctuation">:</span> #104CCC<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-8</span><span class="token punctuation">:</span> #002EA3<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--react_demo-color-theme-9</span><span class="token punctuation">:</span> #001F7B<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less-预处理器" tabindex="-1"><a class="header-anchor" href="#less-预处理器"><span>Less 预处理器</span></a></h2>
<p>Less 变量名称的文件位置在 <code v-pre>src/styles/variable.less</code> 。</p>
<p>因为 css 变量的前缀是根据全局配置中的 <code v-pre>APP_NAME</code> 动态拼接上的，所以如果修改了 <code v-pre>APP_NAME</code> 需要把 <code v-pre>variable.less</code> 里的 css 变量名称也改了。</p>
<p><strong>加入 less 变量是为了让颜色变量更加语义化一些~ 不喜欢可以自行去掉。</strong></p>
<h3 id="在-vue3-起步工程中使用" tabindex="-1"><a class="header-anchor" href="#在-vue3-起步工程中使用"><span>在 Vue3 起步工程中使用</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./styles/variable.less"</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token selector">.wrapper</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@background-color</span><span class="token punctuation">;</span></span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@primary-color</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-react18-起步工程中使用" tabindex="-1"><a class="header-anchor" href="#在-react18-起步工程中使用"><span>在 React18 起步工程中使用</span></a></h3>
<p>在 module.less 文件中引用：</p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre v-pre><code><span class="line"><span class="token variable">@import</span> <span class="token string">"./styles/variable.less"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.wrapper</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@background-color</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@primary-color</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在组件中引入 less 文件：</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Style <span class="token keyword">from</span> <span class="token string">"./index.module.less"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Style<span class="token punctuation">.</span>wrapper<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


