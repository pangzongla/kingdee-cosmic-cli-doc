<template><div><h1 id="国际化多语言方案" tabindex="-1"><a class="header-anchor" href="#国际化多语言方案"><span>国际化多语言方案</span></a></h1>
<p>生产环境的国际化方案采用的是社区提供的方法：<a href="https://vip.kingdee.com/school/detail/238388113520005120?productLineId=29&amp;lang=zh-CN" target="_blank" rel="noopener noreferrer">自定义控件的多语言开发</a></p>
<p>主要利用的 API 为 <code v-pre>window.KDApi.getLangMsg</code></p>
<p>但是开发环境没有这个 API，于是做了一层封装来模拟行为，使用例子：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> inject<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@hooks/index'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> getLangMsg <span class="token operator">=</span> <span class="token function">useLang</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">getLangMsg</span><span class="token punctuation">(</span><span class="token string">'lang'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> <span class="token comment">// getLangMsg 的用法完全和 window.KDApi.getLangMsg 一致</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>国际化文本维护在 <code v-pre>src/lang</code> 文件夹中。</p>
<p>如果不需要国际化，那就不使用这个 API，并且在 <code v-pre>index.ts</code> 中注册控件时取消多语言配置 <code v-pre>{ isMulLang: true }</code></p>
</div></template>


