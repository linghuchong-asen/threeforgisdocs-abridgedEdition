<template><div><h1 id="场景-scene" tabindex="-1"><a class="header-anchor" href="#场景-scene" aria-hidden="true">#</a> 场景(Scene)</h1>
<p>场景能够让你在什么地方、摆放什么东西来交给引擎来渲染，这是你放置物体、灯光和摄像机的地方。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Scene(options)</strong></p>
<p>options具有下列属性的对象：</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Default</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>canvas</code></td>
<td style="text-align:left">Canvas</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于创建场景的HTML canvas元素。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>contextOptions</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>上下文和WebGL属性，详细信息参见上面。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mapProjection</code></td>
<td style="text-align:left">MapProjection</td>
<td style="text-align:left"><div style="width:100px"><code v-pre>new GeographicProjection()</code></div></td>
<td style="text-align:left"><code v-pre>optional</code>在2D和Columbus View模式下使用的地图投影。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>orderIndependentTranslucency</code></div></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果为true并且配置支持，则使用与顺序无关的半透明性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>scene3DOnly</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果为true则为3D模式优化内存使用和性能，但是禁止使用2D和Columbus View模式。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shadows</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>确定阴影是不是来自于太阳照射。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mapMode2D</code></td>
<td style="text-align:left">MapMode2D</td>
<td style="text-align:left"><div style="width:100px"><code v-pre>MapMode2D.INFINITE_SCROLL</code></div></td>
<td style="text-align:left"><code v-pre>optional</code>确定二维地图是可以旋转（MapMode2D.ROTATE）还是可以在水平方向无限滚动（MapMode2D.INFINITE_SCROLL）。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>requestRenderMode</code></div></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果为true，则只在场景变化时渲染帧，开启可以提高程序性能，但是需要使用 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#requestRender" target="_blank" rel="noopener noreferrer"><code v-pre>Scene#requestRender</code><ExternalLinkIcon/></a> 去创建渲染新的一帧，在很多情况下这是必要的（比如在API的其它部分对场景进行更改后）。 详细情况参考 <a href="https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/" target="_blank" rel="noopener noreferrer">Improving Performance with Explicit Rendering<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>maximumRenderTimeChange</code></div></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果requestRenderMode为true，则此值定义在请求渲染之前允许的最大仿真时间更改。 详细情况参考 <a href="https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/" target="_blank" rel="noopener noreferrer">Improving Performance with Explicit Rendering<ExternalLinkIcon/></a>。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建没有各向异性纹理过滤的场景</span>
<span class="token keyword">var</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">canvas</span> <span class="token operator">:</span> canvas<span class="token punctuation">,</span>
  <span class="token literal-property property">contextOptions</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">allowTextureFilterAnisotropic</span> <span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h3 id="camera" tabindex="-1"><a class="header-anchor" href="#camera" aria-hidden="true">#</a> <strong><a href="">camera</a></strong></h3>
<p>获取或者设置相机</p>
<h3 id="primitives-primitivegroup" tabindex="-1"><a class="header-anchor" href="#primitives-primitivegroup" aria-hidden="true">#</a> <strong><a href="">primitives: PrimitiveGroup</a></strong></h3>
<p>获取要素的合集</p>
<h3 id="fog" tabindex="-1"><a class="header-anchor" href="#fog" aria-hidden="true">#</a> <strong><a href="">Fog</a></strong></h3>
<p>雾。默认undefined。</p>
<h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> <strong><a href="">light</a></strong></h3>
<p>灯光。有PointLight与DirectionalLight两种，默认PointLight。</p>
<h3 id="postprocessstages" tabindex="-1"><a class="header-anchor" href="#postprocessstages" aria-hidden="true">#</a> <strong><a href="">postProcessStages</a></strong></h3>
<p>后处理效果应用于最终渲染。</p>
<h3 id="postrender" tabindex="-1"><a class="header-anchor" href="#postrender" aria-hidden="true">#</a> <strong><a href="">postRender</a></strong></h3>
<p>获取将在渲染场景后立即引发的事件。活动订阅者接收Scene实例作为第一个参数，并接收当前时间作为第二个参数。</p>
<h3 id="prerender" tabindex="-1"><a class="header-anchor" href="#prerender" aria-hidden="true">#</a> <strong><a href="">preRender</a></strong></h3>
<p>获取在场景更新之后以及场景渲染之前立即引发的事件。事件的订阅者将Scene实例作为第一个参数，将当前时间作为第二个参数参数。</p>
<h3 id="skybox" tabindex="-1"><a class="header-anchor" href="#skybox" aria-hidden="true">#</a> <strong><a href="">skyBox</a></strong></h3>
<p>天空盒。默认undefined。</p>
<h3 id="screenspacecameracontroller" tabindex="-1"><a class="header-anchor" href="#screenspacecameracontroller" aria-hidden="true">#</a> <strong><a href="">screenSpaceCameraController</a></strong></h3>
<p>获取用于摄像机输入处理的控制器。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<h3 id="drillpick-windowposition-vector2-object" tabindex="-1"><a class="header-anchor" href="#drillpick-windowposition-vector2-object" aria-hidden="true">#</a> <a href="">drillPick(windowPosition:Vector2):Object[]</a></h3>
<p>拾取场景中的实体Entit或图元Primitive。可获取射线相交的所有对象。</p>
<h3 id="pick-windowposition-vector2-object" tabindex="-1"><a class="header-anchor" href="#pick-windowposition-vector2-object" aria-hidden="true">#</a> <a href="">pick(windowPosition:Vector2):Object</a></h3>
<p>拾取场景中的实体Entit或图元Primitive。只可获取第一个对象。</p>
<h3 id="pickposition-windowposition-result-vector3" tabindex="-1"><a class="header-anchor" href="#pickposition-windowposition-result-vector3" aria-hidden="true">#</a> <a href="">pickPosition(windowPosition, result):  Vector3</a></h3>
<p>拾取物体上的位置</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>windowPosition</code></td>
<td style="text-align:left">Vector2</td>
<td style="text-align:left">执行拾取的窗口坐标。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>result</code></td>
<td style="text-align:left">Vector3</td>
<td style="text-align:left"><code v-pre>optional</code>存储结果的对象。</td>
</tr>
</tbody>
</table>
<p>返回值: 笛卡尔位置。</p>
</div></template>


