import{_ as n,c as s,o as a,a as t}from"./app-6OSm1jrO.js";const p={},e=t(`<h1 id="图标方案" tabindex="-1"><a class="header-anchor" href="#图标方案"><span>图标方案</span></a></h1><p>React中，<a href="https://dev.kingdee.com/dev/market/detail/1782512263102481408" target="_blank" rel="noopener noreferrer">资源集市</a> 已有方案。</p><p>无法链接到请搜索：KDesign SVG Icons for Vue Or React</p><p><strong>工程采用两种图标引入方式</strong></p><h2 id="字体包-不推荐" tabindex="-1"><a class="header-anchor" href="#字体包-不推荐"><span>字体包（不推荐）</span></a></h2><p><strong>React18 工程里示例提供了阿里的 iconfont 方案，但按照金蝶安全要求，是不能上传图片到其他网站的</strong></p><p>为什么示例不使用金蝶的 <a href="https://iconcool.kingdee.com/home" target="_blank" rel="noopener noreferrer">iconcool</a>？</p><p>两个大的原因！</p><p>第一，实测下来有些 bug ：</p><ul><li><p>使用 symbol 方式引入 icon ，无法修改颜色。</p></li><li><p>选择 fontclass 的字体包方式引入 icon ，有时候页面复制生成的类名会多些数字，做不到复制即用。</p></li></ul><p>第二，如果在内网开发，必须下载字体包放入工程里，无法通过请求的方式获取。那么每次 UI 图标改动，我们都要经历这几个步骤：打开 iconcool ，上传 svg 图片，选中图片，加入购物车，下载字体包，传入内网，解压，覆盖本地工程对应目录，找到对应图标的类名（有可能有上面说的第二点 bug ），然后使用。</p><blockquote><p>在实践中已经抛弃这种方案，所以在后面添加的 Vue3 起步工程中就没提供了。</p></blockquote><h2 id="源文件引用-推荐" tabindex="-1"><a class="header-anchor" href="#源文件引用-推荐"><span>源文件引用（推荐）</span></a></h2><p>所以工程还提供了源文件引用方式，React18 和 Vue3 工程都做了公共组件的封装。</p><h3 id="react18" tabindex="-1"><a class="header-anchor" href="#react18"><span>React18</span></a></h3><p>使用方式：</p><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SVGIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/components/index&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Close <span class="token keyword">from</span> <span class="token string">&quot;@/assets/icons/close.svg&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@/assets/iconfont/iconfont.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 这个需要在App.tsx中引入</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">图标示例：iconfont</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SVGIcon</span></span> <span class="token attr-name">iconName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disable</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SVGIcon</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SVGIcon</span></span> <span class="token attr-name">iconName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SVGIcon</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SVGIcon</span></span> <span class="token attr-name">iconName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SVGIcon</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">图标示例：svg源文件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SVGIcon</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Close</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SVGIcon</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SVGIcon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Close</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SVGIcon</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3"><span>Vue3</span></a></h3><p>使用方式：</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SVGIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./components&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>图标示例：svg源文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itemWrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SVGIcon</span> <span class="token attr-name">iconName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SVGIcon</span> <span class="token attr-name">iconName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disable</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SVGIcon</span> <span class="token attr-name">iconName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Vue3 工程中，是主动把 <code>src/assets/icons</code> 中的 svg 都循环引入进 SVGIcon 组件中了，所以只需要传入文件名称即可。</p><h1 id="浏览所有-svg-图片" tabindex="-1"><a class="header-anchor" href="#浏览所有-svg-图片"><span>浏览所有 svg 图片</span></a></h1><p>由于 windows 文件夹管理器是无法直接显示 svg 图片的（当然你可以想办法通过安装对应工具支持），这里也给你提供了一个指令用于简单查看所有 svg 图片，执行完后会自动打开页面：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> run svg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原理就是把 <code>src/assets/icons</code> 中的 svg 都循环展示在 <code>src/assets/icons/index.html</code> 上。</p>`,25),o=[e];function c(l,u){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","introduce.html.vue"]]),r=JSON.parse('{"path":"/icon/introduce.html","title":"图标方案","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"字体包（不推荐）","slug":"字体包-不推荐","link":"#字体包-不推荐","children":[]},{"level":2,"title":"源文件引用（推荐）","slug":"源文件引用-推荐","link":"#源文件引用-推荐","children":[{"level":3,"title":"React18","slug":"react18","link":"#react18","children":[]},{"level":3,"title":"Vue3","slug":"vue3","link":"#vue3","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"icon/introduce.md"}');export{k as comp,r as data};
