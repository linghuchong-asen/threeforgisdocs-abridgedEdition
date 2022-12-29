<template><div><h1 id="多边形-polygongraphics" tabindex="-1"><a class="header-anchor" href="#多边形-polygongraphics" aria-hidden="true">#</a> 多边形(PolygonGraphics)</h1>
<p>多边形，可以具有一定的高度。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>PolygonGraphics(options)</strong></p>
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
<td style="text-align:left"><code v-pre>hierarchy</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>多边形的点集合串，是一个<a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html" target="_blank" rel="noopener noreferrer"><code v-pre>PolygonHierarchy</code><ExternalLinkIcon/></a>类型的对象，里面可以创建普通面和孔洞对象。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>height</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left"><code v-pre>optional</code>多边形相对于面的高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>heightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left"><code v-pre>optional</code>相对于地形的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeight</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>多边形的挤出高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left"><code v-pre>optional</code>挤出高度相对于地形的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stRotation</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>纹理逆时针旋转角（相对于正北方向）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cesium.Math.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定每个纬度和经度点之间的角度距离。</td>
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
<td style="text-align:left"><code v-pre>optional</code>用于填充的材质。</td>
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
<td style="text-align:left"><code v-pre>perPositionHeight</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>是否单独使用对象的高度，也就是每个节点的高度可显示，这样可以做一个倾斜的平面。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closeTop</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>挤出的时候顶部是否封口。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>closeBottom</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>挤出的时候底部是否封口。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>arcType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ArcType.GEODESIC</code></td>
<td style="text-align:left"><code v-pre>optional</code>多边形边缘必须遵循的线型。</td>
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
<td style="text-align:left"><code v-pre>optional</code>指定将它贴到地形，3D Tiles上或者两者都贴。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>zIndex</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ConstantProperty.html" target="_blank" rel="noopener noreferrer">ConstantProperty<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定用于排序地面几何的zIndex。只有当该对象是恒定的且没有高度才有效。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">arcType : Property</a></strong></p>
<p>设置/获取多边形边缘必须遵循的线型<a href="https://www.vvpstk.com/public/Cesium/Documentation/ArcType.html" target="_blank" rel="noopener noreferrer"><code v-pre>ArcType</code><ExternalLinkIcon/></a>。</p>
<p>Default Value: <code v-pre>ArcType.GEODESIC</code></p>
<p><strong><a href="">classificationType : Property</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/ClassificationType.html" target="_blank" rel="noopener noreferrer"><code v-pre>ClassificationType</code><ExternalLinkIcon/></a> (指定将它贴到地形，3D Tiles上或者两者都贴。)</p>
<p>Default Value: <code v-pre>ClassificationType.BOTH</code></p>
<p><strong><a href="">closeBottom : Property</a></strong></p>
<p>设置/获取挤出的时候底部是否封口。</p>
<p><strong><a href="">closeTop : Property</a></strong></p>
<p>设置/获取挤出的时候顶部是否封口。</p>
<p><code v-pre>readonly</code> <strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取显示条件<a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>，</p>
<p><strong><a href="">extrudedHeight : Property</a></strong></p>
<p>设置/获取挤出高度。 如果 <a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#perPositionHeight" target="_blank" rel="noopener noreferrer"><code v-pre>PolygonGraphics#perPositionHeight</code><ExternalLinkIcon/></a> 是 false, the volume starts at <a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#height" target="_blank" rel="noopener noreferrer"><code v-pre>PolygonGraphics#height</code><ExternalLinkIcon/></a> and ends at this altitude. If <a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#perPositionHeight" target="_blank" rel="noopener noreferrer"><code v-pre>PolygonGraphics#perPositionHeight</code><ExternalLinkIcon/></a> is true, the volume starts at the height of each <a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#hierarchy" target="_blank" rel="noopener noreferrer"><code v-pre>PolygonGraphics#hierarchy</code><ExternalLinkIcon/></a> position and ends at this altitude.</p>
<p><strong><a href="">extrudedHeightReference : Property</a></strong></p>
<p>设置/获取挤出高度相对于地形的位置<a href="https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html" target="_blank" rel="noopener noreferrer"><code v-pre>HeightReference</code><ExternalLinkIcon/></a>。</p>
<p><strong><a href="">fill : Property</a></strong></p>
<p>设置/获取是否使用提供的材质填充。</p>
<p>Default Value: <code v-pre>true</code></p>
<p><strong><a href="">granularity : Property</a></strong></p>
<p>设置/获取每个纬度和经度点之间的角度距离。</p>
<p>Default Value: <code v-pre>{CesiumMath.RADIANS_PER_DEGREE}</code></p>
<p><strong><a href="">height : Property</a></strong></p>
<p>设置/获取高度。</p>
<p>Default Value: <code v-pre>0.0</code></p>
<p><strong><a href="">heightReference : Property</a></strong></p>
<p>设置/获取相对于地形的位置<a href="https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html" target="_blank" rel="noopener noreferrer"><code v-pre>HeightReference</code><ExternalLinkIcon/></a>。</p>
<p>Default Value: <code v-pre>HeightReference.NONE</code></p>
<p><strong><a href="">hierarchy : Property</a></strong></p>
<p>设置/获取 <a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonHierarchy.html" target="_blank" rel="noopener noreferrer"><code v-pre>PolygonHierarchy</code><ExternalLinkIcon/></a>（多边形的点集合串）。</p>
<p><strong><a href="">material : MaterialProperty</a></strong></p>
<p>设置/获取用于填充的材质。</p>
<p>Default Value: <code v-pre>Color.WHITE</code></p>
<p><strong><a href="">outline : Property</a></strong></p>
<p>设置/获取是否显示边框。</p>
<p>Default Value: <code v-pre>false</code></p>
<p><strong><a href="">outlineColor : Property</a></strong></p>
<p>设置/获取边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p>Default Value: <code v-pre>Color.BLACK</code></p>
<p><strong><a href="">outlineWidth : Property</a></strong></p>
<p>设置/获取边框宽度。</p>
<p>Default Value: <code v-pre>1.0</code></p>
<p><strong><a href="">perPositionHeight : Property</a></strong></p>
<p>设置/获取是否单独使用对象的高度。也就是每个节点的高度可显示，这样可以做一个倾斜的平面。 If true, the shape will have non-uniform altitude defined by the height of each <a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#hierarchy" target="_blank" rel="noopener noreferrer"><code v-pre>PolygonGraphics#hierarchy</code><ExternalLinkIcon/></a> position. If false, the shape will have a constant altitude as specified by <a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html#height" target="_blank" rel="noopener noreferrer"><code v-pre>PolygonGraphics#height</code><ExternalLinkIcon/></a>.</p>
<p><a href=""><strong>shadows : Property</strong></a></p>
<p>设置/获取从每个光源投射或接收阴影的模式。</p>
<p>Default Value: <code v-pre>ShadowMode.DISABLED</code></p>
<p><strong><a href="">show : Property</a></strong></p>
<p>设置/获取显隐性。</p>
<p>Default Value: <code v-pre>true</code></p>
<p><strong><a href="">stRotation : Property</a></strong></p>
<p>设置/获取纹理逆时针旋转角（相对于正北方向）。</p>
<p>Default Value: <code v-pre>0</code></p>
<p><strong><a href="">zIndex : ConstantProperty</a></strong></p>
<p>设置/获取the zIndex（用于排序地面几何，只有当该对象时恒定的且没有高度才有效。）。</p>
<p>Default Value: <code v-pre>0</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): PolygonGraphics</a></strong></p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html" target="_blank" rel="noopener noreferrer">PolygonGraphics<ExternalLinkIcon/></a></td>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/PolygonGraphics.html" target="_blank" rel="noopener noreferrer">PolygonGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


