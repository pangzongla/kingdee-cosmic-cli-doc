<template><div><h1 id="ram模式" tabindex="-1"><a class="header-anchor" href="#ram模式"><span>RAM模式</span></a></h1>
<p>就是我们日常使用React/Vue开发的模式，通过<code v-pre>index.html</code>作为访问入口。我称为称为ram或者RAM模式。</p>
<p>启动指令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev:ram</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可在全局配置中修改启动的端口 <code v-pre>DEV_RAM_PORT</code>。</p>
<p>因为RAM模式下，工程会自动判断环境，从而开启Axios或者Socket方法，建议使用该模式后同时开启Mock服务（请阅读 <a href="/promise/mock">Mock服务</a> 获取更多信息）。</p>
</div></template>


