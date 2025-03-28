<template><div><h1 id="mock-服务" tabindex="-1"><a class="header-anchor" href="#mock-服务"><span>Mock 服务</span></a></h1>
<p>在 ram 模式下，可以启动 Mock 服务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run mock</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>启动的服务端口可在全局配置中修改 <code v-pre>MOCK_PORT</code>。</p>
<p>为了模拟苍穹平台主动推送信息的能力，ram 模式默认采用 Axios 的方式收发数据，你也可以通过修改全局配置中的 <code v-pre>DEV_RAM_REQUEST_TYPE</code> 变量来决定请求使用的是 Axios 还是 Socket 方式。<code v-pre>axios</code> 为 Axios 模式，<code v-pre>socket</code> 为 Websocket 模式。</p>
<p>一般情况下后端会在控件初始化的时候主动推送 <code v-pre>init</code> 与 <code v-pre>update</code> 事件，所以第一次 <code v-pre>init</code>与 <code v-pre>update</code> 生命周期数据的主动推送永远用的是 <code v-pre>Socket</code> 方式触发。</p>
<p>在 <code v-pre>serverMock.js</code> 中通过触发两次 <code v-pre>socket.emit(&quot;message&quot;, initMock);</code> 来模拟。</p>
<p>前端中为了分辨第一次主动推动 <code v-pre>init</code> 与 <code v-pre>update</code> 事件，在 <code v-pre>src/devSocket.ts</code> 中做了特殊处理：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> InitComponent <span class="token operator">=</span> InitComponentSingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isInitData<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  InitComponent<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  InitComponent<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isInitData<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isInitData <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据伪造" tabindex="-1"><a class="header-anchor" href="#数据伪造"><span>数据伪造</span></a></h2>
<p>基本上伪造数据只需要在 <code v-pre>/mock</code> 文件夹中修改即可。</p>
<ul>
<li><code v-pre>data</code> 文件夹存放数据。</li>
<li><code v-pre>files</code> 文件夹和文件上传有关</li>
</ul>
<p>其他相关文件夹为配置，如果想针对接口修改请求返回的时间，可以在这里修改 <code v-pre>routes</code> ：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">mockList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> response <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> handler <span class="token operator">=</span> httpMethods<span class="token punctuation">[</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">handler</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token function">delayResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// here</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Method </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not supported.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


