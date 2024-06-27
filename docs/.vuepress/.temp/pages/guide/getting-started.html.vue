<template><div><h1 id="安装与创建" tabindex="-1"><a class="header-anchor" href="#安装与创建"><span>安装与创建</span></a></h1>
<p>node 环境版本建议18以上！</p>
<p><strong>注意：因公司IP地址安全问题（脚手架代码里不能涉及到），所以不再提供内网安装，请在外网安装脚手架！</strong></p>
<h2 id="安装脚手架" tabindex="-1"><a class="header-anchor" href="#安装脚手架"><span>安装脚手架</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> kingdee-cosmic-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本"><span>查看版本</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>cosmic <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目"><span>新建项目</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>cosmic create my-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="选择配置" tabindex="-1"><a class="header-anchor" href="#选择配置"><span>选择配置</span></a></h2>
<ul>
<li>
<p>请选择一个框架</p>
</li>
<li>
<p>是否需要 Eslint 和 Prettier ？</p>
</li>
</ul>
<p>进入到新建的项目，安装对应依赖：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="目前支持的框架" tabindex="-1"><a class="header-anchor" href="#目前支持的框架"><span>目前支持的框架</span></a></h2>
<ul>
<li>
<p>React18</p>
</li>
<li>
<p>Vue3</p>
</li>
</ul>
</div></template>


