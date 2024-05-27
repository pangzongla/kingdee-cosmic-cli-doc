<template><div><h1 id="主题色切换" tabindex="-1"><a class="header-anchor" href="#主题色切换"><span>主题色切换</span></a></h1>
<p>实现方法是参考金蝶 <a href="https://pro.kingdee.design/" target="_blank" rel="noopener noreferrer">KDesign Pro</a> 项目的方案。</p>
<p>具体使用方式：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> changeTheme <span class="token keyword">from</span> <span class="token string">"@utils/change-theme"</span><span class="token punctuation">;</span>

<span class="token function">changeTheme</span><span class="token punctuation">(</span><span class="token string">'#276ff5'</span><span class="token punctuation">)</span> <span class="token comment">// 不传参数默认为苍穹的商务蓝</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>尽量传入十六进制的颜色值，用 rgb 传入算出来的颜色会有点问题。</p>
</blockquote>
<h2 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理"><span>实现原理</span></a></h2>
<p>大致原理就是当我们传入颜色值，函数会通过该色值算出同色系不同深浅度的10个颜色，然后用不同的 css 变量名称去存储，并且将他们都放入一个 style 标签挂在到 head 标签里，例如 React18 起步工程里：</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--react_demo-color-theme</span><span class="token punctuation">:</span> #276ff5<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-1</span><span class="token punctuation">:</span> #F2F9FF<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-2</span><span class="token punctuation">:</span> #E0EFFF<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-3</span><span class="token punctuation">:</span> #B2D5FF<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-4</span><span class="token punctuation">:</span> #84B7FF<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-5</span><span class="token punctuation">:</span> #5697FF<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-6</span><span class="token punctuation">:</span> #276FF5<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-7</span><span class="token punctuation">:</span> #104CCC<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-8</span><span class="token punctuation">:</span> #002EA3<span class="token punctuation">;</span>
    <span class="token property">--react_demo-color-theme-9</span><span class="token punctuation">:</span> #001F7B<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前缀是根据全局配置中的 <code v-pre>APP_NAME</code> 拼上的，所以修改了记得在 <code v-pre>src/styles/variable.less</code> 里的css变量名称也改了。</p>
<p>加入 less 变量是为了让颜色变量更加语义化一些~ 不喜欢可以自行去掉。</p>
</div></template>


