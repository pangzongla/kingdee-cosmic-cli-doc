<template><div><h1 id="ram-模式" tabindex="-1"><a class="header-anchor" href="#ram-模式"><span>RAM 模式</span></a></h1>
<p>就是我们日常使用 React/Vue 开发的模式，通过<code v-pre>index.html</code>作为访问入口。我称为 ram 或者 RAM 模式。</p>
<p>启动指令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev:ram</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可在全局配置中修改启动的端口 <code v-pre>DEV_RAM_PORT</code>。</p>
<p>因为 RAM 模式下，工程会自动判断环境，从而开启 Axios 或者 Socket 方法，建议使用该模式后同时开启 Mock 服务（请阅读 <a href="/promise/mock">Mock 服务</a> 获取更多信息）。</p>
</div></template>


