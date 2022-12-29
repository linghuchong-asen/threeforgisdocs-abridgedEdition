<template><div><h1 id="场景-scene" tabindex="-1"><a class="header-anchor" href="#场景-scene" aria-hidden="true">#</a> 场景(Scene)</h1>
<p>场景能够让你在什么地方、摆放什么东西来交给引擎来渲染，这是你放置物体、灯光和摄像机的地方。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Scene()</strong></p>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
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


