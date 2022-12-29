<template><div><h1 id="视窗-viewer" tabindex="-1"><a class="header-anchor" href="#视窗-viewer" aria-hidden="true">#</a> 视窗(Viewer)</h1>
<p>视窗是承载应用的基本部件。创建一个Viewer实例即创建一个场景窗口。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Viewer(id: string)</strong></p>
<p>id - 容纳Viewer的HTML DOM 元素的id。</p>
<h2 id="代码实例" tabindex="-1"><a class="header-anchor" href="#代码实例" aria-hidden="true">#</a> 代码实例</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>html部分
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"containerId"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

js部分
<span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebGis<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>containerId<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">camera</a></strong></p>
<p>获取或设置相机</p>
<p><strong><a href="">Scene</a></strong></p>
<p>获取场景Scene</p>
<p><a href=""><strong>Entities: EntityGroup</strong></a></p>
<p>获取未关联到特定数据源的实体集合</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">flyTo (target:Entity|Primitive, options:Object ): boolean</a></strong></p>
<p>相机定位到指定实体或者图元处，相机移动过程有一个动画效果。</p>
</div></template>


