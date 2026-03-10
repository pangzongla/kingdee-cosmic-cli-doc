<template><div><h1 id="安装与创建" tabindex="-1"><a class="header-anchor" href="#安装与创建"><span>安装与创建</span></a></h1>
<p><strong>node 环境版本建议 18 以上！</strong></p>
<p><strong>注意：因公司 IP 地址安全问题（脚手架代码里不能涉及到），所以不再提供内网安装，请在外网安装脚手架！</strong></p>
<h2 id="安装脚手架" tabindex="-1"><a class="header-anchor" href="#安装脚手架"><span>安装脚手架</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> kingdee-cosmic-cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本"><span>查看版本</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">cosmic <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目"><span>新建项目</span></a></h2>
<p>通过引导式选项创建项目：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">cosmic create my-app</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>快速创建一个 React18 版本的项目：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">cosmic create my-app <span class="token parameter variable">--react</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>快速创建一个 React18 + Antd 版本的项目：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">cosmic create my-app --react-antd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>快速创建一个 Vue3 版本的项目：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">cosmic create my-app <span class="token parameter variable">--vue</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="选择配置" tabindex="-1"><a class="header-anchor" href="#选择配置"><span>选择配置</span></a></h2>
<ul>
<li>
<p>请选择一个框架 Vue3/React18</p>
</li>
<li>
<p>React 是否加入 Ant Design ？（目前 Vue3 还没想好集成什么 UI 组件库）</p>
</li>
</ul>
<h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2>
<p>进入到新建的项目，安装对应依赖：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者（建议）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="目前支持的框架" tabindex="-1"><a class="header-anchor" href="#目前支持的框架"><span>目前支持的框架</span></a></h2>
<ul>
<li>
<p>React18</p>
</li>
<li>
<p>Vue3</p>
</li>
</ul>
</div></template>


