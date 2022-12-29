<template><div><h1 id="平面-planegraphics" tabindex="-1"><a class="header-anchor" href="#平面-planegraphics" aria-hidden="true">#</a> 平面(PlaneGraphics)</h1>
<p>平面。中心位置和方向由包含的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a> 确定。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PlaneGraphics(options)</strong></p>
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
<td style="text-align:left"><code v-pre>plane</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/Plane.html" target="_blank" rel="noopener noreferrer"><code v-pre>Plane</code><ExternalLinkIcon/></a> 属性，指定平面的法线和原点距平面的距离。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>dimensions</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a> 属性，指定平面的长宽。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fill</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定是否使用提供的材质填充。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>material</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html" target="_blank" rel="noopener noreferrer">MaterialProperty<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.WHITE</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定用于填充的材质。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>outline</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>是否显示边框。</td>
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
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>边框宽度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shadows</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ShadowMode.DISABLED</code></td>
<td style="text-align:left"><code v-pre>optional</code>从每个光源投射或接收阴影的模式。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>distanceDisplayCondition</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>指定在距相机某个距离内显示。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><code v-pre>readonly</code> <strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">dimensions : Property</a></strong></p>
<p>设置/获取平面的宽高， <a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a> 属性。</p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取设置/获取获取显示条件<a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>,即在距相机某个距离内显示。</p>
<p><strong><a href="">fill : Property</a></strong></p>
<p>设置/获取是否使用提供的材质填充。</p>
<p>默认值: <code v-pre>true</code></p>
<p><strong><a href="">material : MaterialProperty</a></strong></p>
<p>设置/获取用于填充的材质。</p>
<p>默认值: <code v-pre>Color.WHITE</code></p>
<p><strong><a href="">outline : Property</a></strong></p>
<p>设置/获取是否显示边框。</p>
<p>默认值: <code v-pre>false</code></p>
<p><strong><a href="">outlineColor : Propert</a></strong></p>
<p>设置/获取边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>Color.BLACK</code></p>
<p><strong><a href="">outlineWidth : Propert</a></strong></p>
<p>设置/获取边框宽度。</p>
<p>默认值: <code v-pre>1.0</code></p>
<p><strong><a href="">plane : Propert</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/Plane.html" target="_blank" rel="noopener noreferrer"><code v-pre>Plane</code><ExternalLinkIcon/></a> （指定平面的法线和原点距平面的距离）。</p>
<p><strong><a href="">shadows : Propert</a></strong></p>
<p>从每个光源投射或接收阴影的模式。</p>
<p>默认值: <code v-pre>ShadowMode.DISABLED</code></p>
<p><strong><a href="">show : Propert</a></strong></p>
<p>设置/获取显隐性。</p>
<p>默认值: <code v-pre>true</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): PlaneGraphics</a></strong></p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PlaneGraphics.html" target="_blank" rel="noopener noreferrer">PlaneGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">optional用来存储结果的对象。</td>
</tr>
</tbody>
</table>
<p>返回值:</p>
<p>修改后的结果参数或一个新实例（如果未提供）。</p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PlaneGraphics.html" target="_blank" rel="noopener noreferrer">PlaneGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


