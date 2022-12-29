<template><div><h1 id="相机-camera" tabindex="-1"><a class="header-anchor" href="#相机-camera" aria-hidden="true">#</a> 相机(Camera)</h1>
<p>由位置、方向和视锥体定义的相机。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Camera(scene: Scene)</strong></p>
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
<td style="text-align:left"><code v-pre>scene</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html" target="_blank" rel="noopener noreferrer">Scene<ExternalLinkIcon/></a></td>
<td style="text-align:left">场景（Scene对象）。</td>
</tr>
</tbody>
</table>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建一个位置在原点，看向z轴负方向，视角60度，长宽比1:1的相机。</span>
<span class="token keyword">var</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Camera</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span>direction <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">negate</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token constant">UNIT_Z</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span>up <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token constant">UNIT_Y</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span>frustum<span class="token punctuation">.</span>fov <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token constant">PI_OVER_THREE</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span>frustum<span class="token punctuation">.</span>near <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span>frustum<span class="token punctuation">.</span>far <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h3 id="default-offset" tabindex="-1"><a class="header-anchor" href="#default-offset" aria-hidden="true">#</a> <a href="">DEFAULT_OFFSET</a></h3>
<p>当相机拉近到物体包围球时，默认的heading/pitch/range值。</p>
<h3 id="default-view-factor" tabindex="-1"><a class="header-anchor" href="#default-view-factor" aria-hidden="true">#</a> <a href="">DEFAULT_VIEW_FACTOR</a></h3>
<p>该值用来确定相机位置，当值为0是相机观察范围是整个<code v-pre>Camera#DEFAULT_VIEW_RECTANGLE</code>，大于0时远离<code v-pre>Camera#DEFAULT_VIEW_RECTANGLE</code>， 小于0时向<code v-pre>Camera#DEFAULT_VIEW_RECTANGLE</code>拉近。</p>
<h3 id="default-view-rectangle" tabindex="-1"><a class="header-anchor" href="#default-view-rectangle" aria-hidden="true">#</a> <a href="">DEFAULT_VIEW_RECTANGLE</a></h3>
<p>相机在创建时查看的默认矩形位置。</p>
<h3 id="direction" tabindex="-1"><a class="header-anchor" href="#direction" aria-hidden="true">#</a> <a href="">direction </a></h3>
<p>相机的观察方向。</p>
<h3 id="frustum" tabindex="-1"><a class="header-anchor" href="#frustum" aria-hidden="true">#</a> <a href="">frustum </a></h3>
<p>视锥(平截头体)。可选值：<code v-pre>PerspectiveFrustum</code>，<code v-pre>OrthographicFrustum</code>;默认值<code v-pre>PerspectiveFrustum</code></p>
<h3 id="heading" tabindex="-1"><a class="header-anchor" href="#heading" aria-hidden="true">#</a> <a href="">heading</a></h3>
<p>获取相机的偏航角，以弧度表示。</p>
<h3 id="pitch" tabindex="-1"><a class="header-anchor" href="#pitch" aria-hidden="true">#</a> <a href="">pitch</a></h3>
<p>获取相机的俯仰角，以弧度表示。</p>
<h3 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> <a href="">position</a></h3>
<p>相机的位置。</p>
<h3 id="roll" tabindex="-1"><a class="header-anchor" href="#roll" aria-hidden="true">#</a> <a href="">roll</a></h3>
<p>获取相机的翻滚角，以弧度表示。</p>
<h3 id="up" tabindex="-1"><a class="header-anchor" href="#up" aria-hidden="true">#</a> <a href="">up </a></h3>
<p>相机向上的方向。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<h3 id="flyto-options" tabindex="-1"><a class="header-anchor" href="#flyto-options" aria-hidden="true">#</a> <a href="">flyTo(options)</a></h3>
<p>options具有下列属性：</p>
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
<td style="text-align:left"><code v-pre>destination</code></td>
<td style="text-align:left">Vector3</td>
<td style="text-align:left">相机的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>orientation</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"><code v-pre>可选</code>optional包含相机偏航角、俯仰角、翻滚角的对象。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>duration</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>可选</code>optional飞行时间以秒为单位。</td>
</tr>
</tbody>
</table>
<h3 id="getpickray-windowposition-result-ray" tabindex="-1"><a class="header-anchor" href="#getpickray-windowposition-result-ray" aria-hidden="true">#</a> <a href="">getPickRay(windowPosition, result):Ray</a></h3>
<p>在世界坐标中，通过像素位置<code v-pre>windowPosition</code>，从相机位置创建一条射线。</p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer">Cartesian2<ExternalLinkIcon/></a></td>
<td style="text-align:left">一个像素的x和y坐标。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>result</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Ray.html" target="_blank" rel="noopener noreferrer">Ray<ExternalLinkIcon/></a></td>
<td style="text-align:left">optional存储结果的对象。</td>
</tr>
</tbody>
</table>
<p>返回值:返回<code v-pre>Vector3</code>射线的位置和方向</p>
<h3 id="lookat-target-vector3" tabindex="-1"><a class="header-anchor" href="#lookat-target-vector3" aria-hidden="true">#</a> <a href="">lookAt(target:Vector3)</a></h3>
<p>使用目标和偏移量设置相机的位置和方向，目标必须用世界坐标表示，偏移量可以是一个笛卡尔坐标，也可以是在以目标为中心的局部东北向上参考系中的heading/pitch/range。</p>
</div></template>


