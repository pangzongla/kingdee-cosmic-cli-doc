<template><div><h1 id="书写方式" tabindex="-1"><a class="header-anchor" href="#书写方式"><span>书写方式</span></a></h1>
<p>已将不同开发模式下的接口请求（ <code v-pre>model.invoke</code> ），封装成了一个 Promise （<code v-pre>src/components/context/AppProvider.tsx</code>），通过链式传递的方式提供给子孙组件使用。</p>
<p>例子：</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre v-pre class="language-tsx"><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AppContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/index"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> invokeAsync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>AppContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">type</span> <span class="token class-name">NumType</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>params<span class="token punctuation">,</span> setParams<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">invokeAsync</span><span class="token generic class-name"><span class="token operator">&lt;</span>NumType<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"getNumType"</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">setParams</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span></span>
<span class="line">            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isLoading<span class="token punctuation">}</span></span> <span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">            请求</span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token string">"加载中"</span> <span class="token operator">:</span> <span class="token string">"完成加载"</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于请求后后端不会返回结果，也就是不会触发 <code v-pre>update</code> 的情况，可以这样调用：</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre v-pre class="language-tsx"><code><span class="line"><span class="token function">invokeAsync</span><span class="token punctuation">(</span><span class="token string">"noResponse"</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token punctuation">{</span> noResponse<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p>
<ul>
<li>
<p>第一参数：对应苍穹接口请求的自定义事件名称。</p>
</li>
<li>
<p>第二参数：发送给接口的数据。</p>
</li>
<li>
<p>第三参数：API 的配置项</p>
</li>
</ul>
<p>目前可配置的有：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>noResponse</td>
<td>boolean</td>
<td>是否接口无回应</td>
</tr>
</tbody>
</table>
<h1 id="遗憾" tabindex="-1"><a class="header-anchor" href="#遗憾"><span>遗憾</span></a></h1>
<p><a href="/static/introduce">动态按需拉取资源带来的问题</a>，无法在 <code v-pre>.ts</code> 文件中封装，所以无法在 <code v-pre>.ts</code> 文件调用。</p>
<p>目前能想到的方法就是在根组件包一层变量共享组件，在变量共享组件中封装，然后通过 <code v-pre>useContext</code> 调用。</p>
</div></template>


