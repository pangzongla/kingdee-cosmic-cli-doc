<template><div><h1 id="生产打包" tabindex="-1"><a class="header-anchor" href="#生产打包"><span>生产打包</span></a></h1>
<p>最终用于上生产的文件。</p>
<p>指令:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根目录会生成一个 <code v-pre>build</code> 文件夹，里面就是生产环境需要用到的文件。</p>
<h1 id="产物分析" tabindex="-1"><a class="header-anchor" href="#产物分析"><span>产物分析</span></a></h1>
<p>执行指令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run analyzer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完后，会根据生产模式的产物去分析每个文件的资源容量占用情况，自动打开一个页面，展示分析结果。</p>
<p><img src="@source/prod/images/analyzer.png" alt="例子"></p>
<p>可在全局配置中修改启动的端口 <code v-pre>ANALYZER_PORT</code>。</p>
</div></template>


