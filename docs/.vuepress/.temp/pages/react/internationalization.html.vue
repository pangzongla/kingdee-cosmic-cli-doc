<template><div><h1 id="国际化多语言方案" tabindex="-1"><a class="header-anchor" href="#国际化多语言方案"><span>国际化多语言方案</span></a></h1>
<p>生产环境的国际化方案采用的是社区提供的方法：<a href="https://vip.kingdee.com/school/detail/238388113520005120?productLineId=29&amp;lang=zh-CN" target="_blank" rel="noopener noreferrer">自定义控件的多语言开发</a></p>
<p>主要利用的 API 为 <code v-pre>window.KDApi.getLangMsg</code></p>
<p>但是开发环境没有这个 API，于是做了一层封装来模拟行为，使用例子：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/components/index'</span>

<span class="token keyword">const</span> <span class="token literal-property property">App</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> getLangMsg <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>AppContext<span class="token punctuation">)</span> <span class="token comment">// getLangMsg 的用法完全和 window.KDApi.getLangMsg 一致</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">getLangMsg</span><span class="token punctuation">(</span><span class="token string">'lang'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>国际化文本维护在 <code v-pre>src/lang</code> 文件夹中。</p>
<p>如果不需要国际化，那就不使用这个 API，并且在 <code v-pre>index.ts</code> 中注册控件时取消多语言配置 <code v-pre>{ isMulLang: true }</code></p>
</div></template>


