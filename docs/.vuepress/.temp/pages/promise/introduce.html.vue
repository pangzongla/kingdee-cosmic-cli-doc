<template><div><h1 id="策略设计" tabindex="-1"><a class="header-anchor" href="#策略设计"><span>策略设计</span></a></h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2>
<p>在自定义控件中，如果想和后端做数据交互，需要借助全局对象 <code v-pre>model</code> 的 API 调用才行，例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">model<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>想要了解更多关于 <code v-pre>model</code> 的信息，请参考 <a href="https://vip.kingdee.com/article/315434614497953792?productLineId=29&amp;isKnowledge=2&amp;lang=zh-CN" target="_blank" rel="noopener noreferrer">360°教你搞定“自定义控件”（API手册篇）</a>，如果链接失效了，请从右上角的社区链接进入，然后自行搜索~</p>
</blockquote>
<p>当后端返回数据时，会触发控件注册时的 <code v-pre>update</code> 方法，从而获取到返回的数据。</p>
<p><strong>这种方式对于开发阶段的时候会带来两点不便之处：</strong></p>
<ul>
<li>
<p>如果我们的组件数量多，嵌套也多，获取数据会特别麻烦，要么层层传递，要么使用订阅发布模式，要么使用状态管理工具监听。然而这些都不是好的方法。</p>
</li>
<li>
<p>在咱们的RAM模式开发时，根本就没有 <code v-pre>model</code> 这个全局对象，无法调用异步请求。</p>
</li>
</ul>
<p>如果有一个统一的 API 方法调用，并且支持Promise、Await写法，那么就可以很方便地解决上述问题。于是我设计了一个请求策略来模拟Promise行为，并且提供了两种请求模式。</p>
<h2 id="请求模式的设计" tabindex="-1"><a class="header-anchor" href="#请求模式的设计"><span>请求模式的设计</span></a></h2>
<p>假设我们有几个不同的请求方法/任务，例如 <code v-pre>a, b, c</code> 。但同一个请求方法可能会被陆续请求多次，所以同一个请求方法的不同时间触发会在后面加数字表示，例如 <code v-pre>a1, a2, a3</code> 。</p>
<h3 id="单队列-默认采用" tabindex="-1"><a class="header-anchor" href="#单队列-默认采用"><span>单队列（默认采用）</span></a></h3>
<p>单线请求模式，设计了一个队列来保存请求方法，每次请求都会将请求方法添加到队列中，然后依次执行队列中的请求方法。</p>
<p>每次请求只能执行一个，其他请求需要排队等待。</p>
<p>例如依次发送请求 <code v-pre>a1, a2, b1, c1</code> ，此时请求队列中会是 <code v-pre>[a1, a2, b1, c1]</code> ，<code v-pre>a1</code> 先弹出执行，并且等待 <code v-pre>a1</code> 对应的 <code v-pre>update</code> 触发并执行完成后，<code v-pre>a1</code> 任务才算彻底结束，开启 <code v-pre>a2</code> 请求，以此类推。</p>
<p>这样做的理由是保证 <code v-pre>update</code> 触发的时候能够跟队列里的请求任务对应上，这样任务返回的数据才能匹配对。</p>
<p>这个模式不足之处是：</p>
<ul>
<li>
<p>如果 <code v-pre>a1</code> 请求很慢，那么 <code v-pre>a2</code> 都要等待 <code v-pre>a1</code> 请求结束才能开始执行。</p>
</li>
<li>
<p>不同任务无法并发执行。</p>
</li>
</ul>
<h3 id="多队列-推荐" tabindex="-1"><a class="header-anchor" href="#多队列-推荐"><span>多队列（推荐）</span></a></h3>
<p>并行请求模式。不同的请求方法可以并行请求。设计是给不同的请求方法/任务分配不同的请求队列。</p>
<p>例如依次发送请求 <code v-pre>a1, a2, b1, c1</code> ，此时请求队列中会是与 <code v-pre>a</code> 方法相关的单独一个队列 <code v-pre>[a1, a2]</code> ，其他为 <code v-pre>[b1]</code> 、 <code v-pre>[c1]</code> 的队列。这样不同的方法就可以并行发送。</p>
<p>如果采用多队列模式，后端必须在 <code v-pre>data</code> 字段中多返回一个字段表示请求的方法名称，这样前端才知道该请求是哪个方法，不同队列才能匹配到对应数据，精确结束任务。</p>
<p>开启多队列模式需要在全局设置中设置 <code v-pre>REQUEST_MODE</code> 为 <code v-pre>concurrent</code>（默认为单队列 <code v-pre>single</code> ） ，<code v-pre>UPDATE_METHODS_FIELD</code> 填写后端请求的方法名称字段名。</p>
<h2 id="接口请求书写方式" tabindex="-1"><a class="header-anchor" href="#接口请求书写方式"><span>接口请求书写方式</span></a></h2>
<p>综上两种队列模式的设计，我对 <code v-pre>model.invoke</code> 进行了封装，模拟出了 Promise 行为。并且支持在RAM模式下使用（通过 Axios 或者 Websocket 与 Mock 服务交互）。</p>
<p>具体使用方式参考：</p>
<ul>
<li>
<p><a href="/react/ajax">React18 接口请求书写章节</a></p>
</li>
<li>
<p><a href="/vue/ajax">Vue3 接口请求书写章节</a></p>
</li>
</ul>
<h2 id="遗憾-😪" tabindex="-1"><a class="header-anchor" href="#遗憾-😪"><span>遗憾 😪</span></a></h2>
<p>对于那种不是前端主动要的，而是后端主动推动的数据，由于在队列种没有对应任务，所以无法通过 API 去获取数据，目前的做法是帮开发者捕获到，但让开发者自行选择方案数据传递的方案。</p>
<p>具体代码位置需要参考后面 React18 和 Vue3 章节的接口请求书写方式。</p>
</div></template>


