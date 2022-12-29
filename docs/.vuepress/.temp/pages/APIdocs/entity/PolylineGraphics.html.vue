<template><div><h1 id="多段线-polylinegraphics" tabindex="-1"><a class="header-anchor" href="#多段线-polylinegraphics" aria-hidden="true">#</a> 多段线(PolylineGraphics)</h1>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PolylineGraphics(options)</strong></p>
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
<td style="text-align:left"><code v-pre>positions</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>折线的点串信息，一组 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a>的数组。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>width</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>线宽。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cesium.Math.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定每个纬度和经度点之间的角度距离。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>material</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html" target="_blank" rel="noopener noreferrer">MaterialProperty<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.WHITE</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定材质。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>depthFailMaterial</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html" target="_blank" rel="noopener noreferrer">MaterialProperty<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>当折线低于地形时用于绘制折线的材质，</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>arcType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html" target="_blank" rel="noopener noreferrer">ArcType<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ArcType.GEODESIC</code></td>
<td style="text-align:left"><code v-pre>optional</code>多边形边缘必须遵循的线型。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>clampToGround</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>是否贴地。</td>
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
<tr>
<td style="text-align:left"><code v-pre>classificationType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ClassificationType.BOTH</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定将它贴到地形或3D Tiles上或者两者都贴。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>zIndex</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定用于排序地面几何的zIndex。只有当<code v-pre>clampToGround</code>为真时才有效。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">arcType : Property</a></strong></p>
<p>设置/获取线型<a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html" target="_blank" rel="noopener noreferrer"><code v-pre>ArcType</code><ExternalLinkIcon/></a> （线段应该是大弧线，菱形线还是线性连接。）</p>
<p>Default Value: <code v-pre>ArcType.GEODESIC</code></p>
<p><strong><a href="">clampToGround : Property</a></strong></p>
<p>设置/获取是否贴地。</p>
<p>Default Value: <code v-pre>false</code></p>
<p><strong><a href="">classificationType : Property</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/ClassificationType.html" target="_blank" rel="noopener noreferrer"><code v-pre>ClassificationType</code><ExternalLinkIcon/></a>,即将它贴到地形或3D Tiles上或者两者都贴。</p>
<p>Default Value: <code v-pre>ClassificationType.BOTH</code></p>
<p><code v-pre>readonly</code> <strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">depthFailMaterial : MaterialProperty</a></strong></p>
<p>设置/获取当折线低于地形时用于绘制折线的材质。</p>
<p>需要EXT_frag_depth WebGL扩展才能正确渲染。</p>
<p>Default Value: <code v-pre>undefined</code></p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取显示条件<a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>，即距相机某个距离内显示。</p>
<p><strong><a href="">granularity : Property</a></strong></p>
<p>设置/获取每个纬度和经度点之间的角度距离。</p>
<p>Default Value: <code v-pre>Cesium.Math.RADIANS_PER_DEGREE</code></p>
<p><strong><a href="">material : Property</a></strong></p>
<p>设置/获取材质。</p>
<p>Default Value: <code v-pre>Color.WHITE</code></p>
<p><strong><a href="">positions : Property</a></strong></p>
<p>设置/获取折线的点串信息，即一组 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a>的数组。</p>
<p><strong><a href="">shadows : Property</a></strong></p>
<p>设置/获取是否从每个光源投射或接收阴影。</p>
<p>Default Value: <code v-pre>ShadowMode.DISABLED</code></p>
<p><strong><a href="">show : Property</a></strong></p>
<p>设置/获取显隐性。</p>
<p>Default Value: <code v-pre>true</code></p>
<p><strong><a href="">width : Property</a></strong></p>
<p>设置/获取线宽。</p>
<p>Default Value: <code v-pre>1.0</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): PolylineGraphics</a></strong></p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineGraphics.html" target="_blank" rel="noopener noreferrer">PolylineGraphics<ExternalLinkIcon/></a></td>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PolylineGraphics.html" target="_blank" rel="noopener noreferrer">PolylineGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


