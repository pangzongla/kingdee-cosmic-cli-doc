<template><div><h1 id="温馨提示-🙋" tabindex="-1"><a class="header-anchor" href="#温馨提示-🙋"><span>温馨提示 🙋</span></a></h1>
<ul>
<li>
<p>后端每次返回的数据不一样才会触发 <code v-pre>update</code>，建议后端在返回的参数中加入一个唯一值字段。</p>
</li>
<li>
<p>后端返回数字一定要用字符串类型，要不会丢失精度。</p>
</li>
<li>
<p>不要声明全局变量，多个控件使用的时候会有变量污染的问题。</p>
</li>
<li>
<p>工程不兼容 IE 和低版本浏览器（例如低于 80 的谷歌浏览器）。</p>
</li>
</ul>
</div></template>


