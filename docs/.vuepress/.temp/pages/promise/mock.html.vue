<template><div><h1 id="mock服务" tabindex="-1"><a class="header-anchor" href="#mock服务"><span>Mock服务</span></a></h1>
<p>在ram模式下，可以启动mock服务：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run mock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动的服务端口可在全局配置中修改 <code v-pre>MOCK_PORT</code>。</p>
<p>为了模拟苍穹平台主动推送信息的能力，ram模式默认采用 Axios 的方式收发数据，你也可以通过修改全局配置中的 <code v-pre>DEV_RAM_REQUEST_TYPE</code> 变量来决定请求使用的是 Axios 还是 Socket 方式。<code v-pre>axios</code> 为 Axios 模式，<code v-pre>socket</code> 为 Websocket 模式。</p>
<p>一般情况下后端会在控件初始化的时候推送 <code v-pre>init</code> 事件，所以第一次 <code v-pre>init</code> 生命周期数据的主动推送永远用的是 <code v-pre>Socket</code> 方式触发。</p>
<p>不过具体还是要看后端怎么写的，如果后端没推动 <code v-pre>init</code> 事件，那么可以修改这里的代码不主动触发 <code v-pre>init</code> 事件 <code v-pre>src/devSocket.ts</code>：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> InitComponent <span class="token operator">=</span> InitComponentSingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isInitData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  InitComponent<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  InitComponent<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isInitData<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isInitData <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>换成</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> InitComponent <span class="token operator">=</span> InitComponentSingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
InitComponent<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>serverMock.js</code> 中注释 <code v-pre>socket.emit(&quot;message&quot;, initMock);</code> 。</p>
<p>这里演示项目是模拟后端在控件初始化的时候主动推动 <code v-pre>init</code> 和 <code v-pre>update</code> 事件，所以执行了两次 <code v-pre>socket.emit(&quot;message&quot;, initMock);</code> 。根据自己的实际情况来修改。</p>
<h2 id="数据伪造" tabindex="-1"><a class="header-anchor" href="#数据伪造"><span>数据伪造</span></a></h2>
<p>基本上伪造数据只需要在 <code v-pre>/mock</code> 文件夹中修改即可。</p>
</div></template>


