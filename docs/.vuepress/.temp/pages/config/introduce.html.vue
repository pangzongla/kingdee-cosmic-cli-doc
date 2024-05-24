<template><div><h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h1>
<p>在开始介绍起步工程前，需要提前了解下全局配置信息。</p>
<p>每个起步工程的根目录有一个叫 <code v-pre>app.config.js</code> 的文件，这里面设置了整个工程的所有配置信息。</p>
<p>例如你看到的应该是：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 苍穹相关 */</span>
  <span class="token constant">APP_NAME</span><span class="token operator">:</span> <span class="token string">"demo"</span><span class="token punctuation">,</span> 
  <span class="token constant">ISV</span><span class="token operator">:</span> <span class="token string">"kingdee"</span><span class="token punctuation">,</span> 
  <span class="token constant">MODULE_ID</span><span class="token operator">:</span> <span class="token string">"gai"</span><span class="token punctuation">,</span> 
  <span class="token constant">COSMIC_SERVER_URL</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/"</span><span class="token punctuation">,</span> 
  <span class="token comment">/* 请求方案 */</span>
  <span class="token constant">REQUEST_MODE</span><span class="token operator">:</span> <span class="token string">"single"</span><span class="token punctuation">,</span> <span class="token comment">// 请求模式 并发 concurrent 和单线 single ，选择了并发模式一定要填下面的UPDATE_METHODS_FIELD</span>
  <span class="token constant">UPDATE_METHODS_FIELD</span><span class="token operator">:</span> <span class="token string">"type"</span><span class="token punctuation">,</span> <span class="token comment">// 这里是后端的update数据中，如果能返回请求的方法名称，它对应的字段</span>
  <span class="token comment">/* ram开发模式下的配置 */</span>
  <span class="token constant">DEV_RAM_REQUEST_TYPE</span><span class="token operator">:</span> <span class="token string">"axios"</span><span class="token punctuation">,</span> <span class="token comment">// dev:ram模式下用 socket 还是 axios 请求</span>
  <span class="token comment">/* 服务端口 */</span>
  <span class="token constant">MOCK_PORT</span><span class="token operator">:</span> <span class="token string">"3001"</span><span class="token punctuation">,</span> <span class="token comment">// mock服务端口</span>
  <span class="token constant">DEV_RAM_PORT</span><span class="token operator">:</span> <span class="token string">"8081"</span><span class="token punctuation">,</span> <span class="token comment">// ram开发模式端口</span>
  <span class="token constant">ANALYZER_PORT</span><span class="token operator">:</span> <span class="token string">"8889"</span><span class="token punctuation">,</span> <span class="token comment">// 分析模式端口</span>
  <span class="token constant">SVG_PORT</span><span class="token operator">:</span> <span class="token string">"8888"</span><span class="token punctuation">,</span> <span class="token comment">// 所有SVG展示端口</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>APP_NAME</code> 这个是自定义控件的名称，苍穹平台会根据这个名称来注册你的控件。并且在RAM开发模式（后面章节提到）下会生产正确的文件名。</li>
<li><code v-pre>ISV</code> 开发商标识。</li>
<li><code v-pre>MODULE_ID</code> 领域 id 。以上三个配置都十分重要，决定了控件是否能被正确注册。</li>
<li><code v-pre>COSMIC_SERVER_URL</code> 这个就是你本地启动的苍穹服务页面访问地址。</li>
</ul>
<blockquote>
<p>改了 <code v-pre>APP_NAME</code> 记得把 <code v-pre>src/styles/variable.less</code> 的 css 变量名称也改了。</p>
</blockquote>
<p><strong>其他配置现在看不懂没关系，后面章节会提到~</strong></p>
</div></template>


