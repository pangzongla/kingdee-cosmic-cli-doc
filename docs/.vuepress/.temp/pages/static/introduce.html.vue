<template><div><h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h1>
<p>首先我们要先知道苍穹平台是怎么拉取控件资源的。</p>
<p>当需要加载到某个自定义控件时，会去主动拉取执行控件的 <code v-pre>index.js</code> 文件，并执行。</p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">KDApi</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 构造函数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">demo</span> <span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_setModel</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 原型中封装生命周期函数，固定格式</span></span>
<span class="line">    demo<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">_setModel</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 控件初始化触发</span></span>
<span class="line">        <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">initFunc</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span> props<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 数据返回时触发</span></span>
<span class="line">        <span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 控件销毁时触发（这个单词都写错了哈哈哈）</span></span>
<span class="line">        <span class="token function-variable function">destoryed</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> <span class="token function-variable function">initFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">model<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// KDApi.loadFile可以通过路径加载js或css文件，并且在html文件头生成script或者link标签，第一个参数是路径，第二个参数是model，第三个参数是加载完成后执行的回调函数</span></span>
<span class="line">        KDApi<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">'./css/demo.css'</span><span class="token punctuation">,</span> model<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 通过路径去获取html字符串，第一个参数是路径，第二个参数是model，第三个参数是HTML模板中变量的值</span></span>
<span class="line">            KDApi<span class="token punctuation">.</span><span class="token function">getTemplateStringByFilePath</span><span class="token punctuation">(</span><span class="token string">'./html/demo.html'</span><span class="token punctuation">,</span> model<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'这是一个示例'</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                model<span class="token punctuation">.</span>dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> result <span class="token comment">// 挂载</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// KDApi注册一个id号，这个id号要和控件方案的id号对应</span></span>
<span class="line">    KDApi<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">,</span> demo<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>KDApi<span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出特点：</p>
<ul>
<li>
<p>控件在注册的时候需要传入一个构造函数/类。</p>
</li>
<li>
<p>除了 <code v-pre>index.js</code> 入口资源外，其他资源需要通过 <code v-pre>KDApi</code> 的API去拉取。</p>
</li>
</ul>
<p>考虑到我们的起步工程都是基于 Webpack + 框架，当打包的产物资源变多或者用了哈希值名称后，我们还需要在 <code v-pre>index.js</code> 里去手动修改引入这些资源，显得不是那么方便。</p>
<h1 id="动态拉取策略" tabindex="-1"><a class="header-anchor" href="#动态拉取策略"><span>动态拉取策略</span></a></h1>
<p>所以工程采用的是 JS 动态拉取策略去加载资源，例如我在 Vue3 工程里的 <code v-pre>index.ts</code> 是这样做的：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ModelType<span class="token punctuation">,</span> ReturnDataType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./types/model"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> appConfig <span class="token keyword">from</span> <span class="token string">"../app.config"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">APP_NAME</span> <span class="token punctuation">}</span> <span class="token operator">=</span> appConfig<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 创建一个全局变量来存储root</span></span>
<span class="line"><span class="token keyword">const</span> inCosmic <span class="token operator">=</span> window<span class="token punctuation">.</span>KDApi <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 是否在苍穹环境中</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> global <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span></span>
<span class="line">    KDApi<span class="token operator">:</span> KDApiType<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">KDApiType</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">register</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token keyword">typeof</span> InitComponent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">InitComponent</span> <span class="token punctuation">{</span></span>
<span class="line">  model<span class="token operator">:</span> ModelType<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>model<span class="token operator">:</span> ModelType<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./App.vue"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> AppGlobal <span class="token operator">=</span> AppModule<span class="token punctuation">.</span>default<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>AppGlobal<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      App<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">"model"</span><span class="token punctuation">,</span> model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>inCosmic<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        App<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span>dom <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// ram模式下没有window.KDApi</span></span>
<span class="line">        App<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">init</span><span class="token punctuation">(</span>props<span class="token operator">:</span> ReturnDataType<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"-----init"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">update</span><span class="token punctuation">(</span>props<span class="token operator">:</span> ReturnDataType<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"-----update"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">destoryed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"-----destroyed"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token punctuation">(</span>KDApi<span class="token operator">:</span> KDApiType<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  KDApi<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token constant">APP_NAME</span><span class="token punctuation">,</span> InitComponent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化应用程序</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>inCosmic<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">init</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>KDApi<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>import(&quot;&quot;).then</code> 配合 Webpack 代码分割 + css独立文件打包，可以让打包后的 js 文件自动拉取 css 文件。那么就不用关系资源引用问题了。</p>
<p><strong>但是这样会引申出另外一个问题：代码共用！</strong></p>
<h1 id="代码共用问题" tabindex="-1"><a class="header-anchor" href="#代码共用问题"><span>代码共用问题</span></a></h1>
<p>因为采用了动态加载的方式，苍穹只会拉取一次控件的代码，并且页面上所有同一个控件共用这一份。</p>
<p>例如一个叫 Demo 的控件，在 A 页面需要显示，会拉取资源执行。然后 B 页面也需要显示，它就不会再拉取资源了，直接用 之前拉取过的资源。</p>
<p>这会带来全局变量污染的问题。</p>
<p>例如有个 <code v-pre>tool.ts</code> 文件，里面声明了一个变量 name ，A 页面的控件 Demo 修改了这个变量为 'A'，此时 B 页面的控件 Demo 修改了这个变量为 'B'，那么 A 页面的的控件 Demo 再去读取 name 的时候，读取到的就是 'B'。</p>
<h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决"><span>解决</span></a></h2>
<p>目前经过实践，发现只要在 <code v-pre>index.ts</code> 中的类中声明的变量，就是独立于每个控件的，包括渲染的框架根组件。</p>
<p>由此得出：</p>
<ul>
<li>
<p>在 <code v-pre>index.ts</code> 中的类中声明的变量是独立的，就像我对 model 的保留。</p>
</li>
<li>
<p>在组件中声明的变量也是独立的（当然在 React 中不要在组件函数定义外面去声明）。</p>
</li>
</ul>
<p><strong>那么还有一个问题，<code v-pre>update</code> 触发返回的数据，要怎么隔离并传递到各个组件中呢？</strong></p>
<p>具体详细可以查看对应章节：</p>
<ul>
<li>
<p><a href="/react/store">React18 状态管理章节</a></p>
</li>
<li>
<p><a href="/vue/store">Vue3 状态管理章节</a></p>
</li>
</ul>
<h1 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h1>
<p><strong>这里只是给出这样的资源拉取方案，如果你还是喜欢用苍穹的方式，可以自行在工程代码中修改~ 这样也不会有代码共用的问题</strong></p>
</div></template>


