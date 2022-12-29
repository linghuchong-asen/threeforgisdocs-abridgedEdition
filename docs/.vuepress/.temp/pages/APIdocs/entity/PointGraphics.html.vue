<template><div><h1 id="点-pointgraphics" tabindex="-1"><a class="header-anchor" href="#点-pointgraphics" aria-hidden="true">#</a> 点(PointGraphics)</h1>
<p>描述一个位于包含它的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a>的点对象。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PointGraphics(options)</strong></p>
<p>options对象拥有以下属性：</p>
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
<td style="text-align:left"><code v-pre>show</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定显隐性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pixelSize</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1</code></td>
<td style="text-align:left"><code v-pre>optional</code>点的大小。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>heightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left"><code v-pre>optional</code>相对于地形的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>color</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.WHITE</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>outlineColor</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.BLACK</code></td>
<td style="text-align:left"><code v-pre>optional</code>边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>outlineWidth</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left"><code v-pre>optional</code>边框宽度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>scaleByDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a> 属性 设置基于相机距离的点大小，也就是说可以根据不同的相机高度来设置点的不同大小。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>translucencyByDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a> 属性 设置基于相机距离的点透明度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>distanceDisplayCondition</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>指定在距相机某个距离内显示。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>disableDepthTestDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>指定从相机到禁用深度测试的距离。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">color : Property</a></strong></p>
<p>设置/获取点颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a> 。</p>
<p>Default Value: <code v-pre>Color.WHITE</code></p>
<p><code v-pre>readonly</code><strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">disableDepthTestDistance : Property</a></strong></p>
<p>设置/获取从相机到禁用深度测试的距离。 例如，防止剪切地形。设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。</p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取显示条件<a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>,即在距相机某个距离内显示。</p>
<p><strong><a href="">heightReference : Property</a></strong></p>
<p>设置/获取相对于地形的位置<a href="https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html" target="_blank" rel="noopener noreferrer"><code v-pre>HeightReference</code><ExternalLinkIcon/></a>。</p>
<p>Default Value: <code v-pre>HeightReference.NONE</code></p>
<p><strong><a href="">outlineColor : Property</a></strong></p>
<p>设置/获取边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p>Default Value: <code v-pre>Color.BLACK</code></p>
<p><strong><a href="">outlineWidth : Property</a></strong></p>
<p>设置/获取边框宽度。</p>
<p>Default Value: <code v-pre>0</code></p>
<p><strong><a href="">pixelSize : Property</a></strong></p>
<p>设置/获取点的大小。</p>
<p>Default Value: <code v-pre>1</code></p>
<p><strong><a href="">scaleByDistance : Property</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>，即基于相机距离的点大小。 If undefined, a constant size is used.</p>
<p><strong><a href="">show : Property</a></strong></p>
<p>设置/获取设置/获取显隐性。</p>
<p>Default Value: <code v-pre>true</code></p>
<p><strong><a href="">translucencyByDistance : Property</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>(基于相机距离的点透明度)。 点的半透明性将在 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#nearValue</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#farValue</code><ExternalLinkIcon/></a>插值 ， 而相机距离在上下限之内指定的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 。 在这些范围之外，点的半透明性仍保持在最近的范围内。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): PointGraphics</a></strong></p>
<p>复制实例。</p>
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
<td style="text-align:left"><code v-pre>result</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PointGraphics.html" target="_blank" rel="noopener noreferrer">PointGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">optional用来存储结果的对象。</td>
</tr>
</tbody>
</table>
<p>返回值: 修改后的结果参数或一个新实例（如果未提供）。</p>
<p><strong><a href="">merge(source)</a></strong></p>
<p>合并两个对象的属性，最终合并出的属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。</p>
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
<td style="text-align:left"><code v-pre>source</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PointGraphics.html" target="_blank" rel="noopener noreferrer">PointGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


