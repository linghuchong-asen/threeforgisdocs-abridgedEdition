<template><div><h1 id="椭圆-ellipsegraphics" tabindex="-1"><a class="header-anchor" href="#椭圆-ellipsegraphics" aria-hidden="true">#</a> 椭圆(EllipseGraphics)</h1>
<p>椭圆或者拉伸的椭圆。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>EllipseGraphics(options)</strong></p>
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
<td style="text-align:left"><code v-pre>semiMajorAxis</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>长半轴。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>semiMinorAxis</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>短半轴。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>height</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left"><code v-pre>optional</code>相对于椭球表面的高度。</td>
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
<td style="text-align:left"><code v-pre>optional</code>一个数字属性，指定相对于椭球的拔高高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left"><code v-pre>optional</code>相对于地形的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>rotation</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>相对于正北方向的逆时针旋转角。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>stRotation</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定椭圆纹理相对于正北方向的旋转角。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cesium.Math.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定椭圆上两点之间的角度距离。</td>
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
<td style="text-align:left"><code v-pre>numberOfVerticalLines</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>16</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定要沿着边框的周长绘制的竖线的数目。</td>
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
<td style="text-align:left"><code v-pre>optional</code>一个枚举属性，指定此椭圆在地面上时是否只贴到地形或3D TIles上或者两者都贴。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>zIndex</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ConstantProperty.html" target="_blank" rel="noopener noreferrer">ConstantProperty<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定椭圆的zIndex，用于排序地面上的几何图形。 仅当未定义height和extrudedHeight且为恒定时才有效。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">classificationType : Property</a></strong></p>
<p>设置/获取此<a href="https://www.vvpstk.com/public/Cesium/Documentation/ClassificationType.html" target="_blank" rel="noopener noreferrer"><code v-pre>ClassificationType</code><ExternalLinkIcon/></a>,即椭圆在地面上时是否只贴到地形或3D TIles上或者两者都贴。</p>
<p>默认值: <code v-pre>ClassificationType.BOTH</code></p>
<p><code v-pre>readonly</code><strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取在距相机某个距离内显示的显示<a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>条件。</p>
<p><strong><a href="">extrudedHeight : Property</a></strong></p>
<p>设置/获取设置/获取挤出高度。 Setting this property creates volume starting at height and ending at this altitude.</p>
<p><strong><a href="">extrudedHeightReference : Property</a></strong></p>
<p>设置/获取相对于地形的位置<a href="https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html" target="_blank" rel="noopener noreferrer"><code v-pre>HeightReference</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>HeightReference.NONE</code></p>
<p><strong><a href="">fill : Property</a></strong></p>
<p>设置/获取是否用提供的材质填充。</p>
<p>默认值: <code v-pre>true</code></p>
<p><strong><a href="">granularity : Property</a></strong></p>
<p>设置/获取椭圆上两点之间的角度距离。</p>
<p>默认值: <code v-pre>{CesiumMath.RADIANS_PER_DEGREE}</code></p>
<p><strong><a href="">height : Property</a></strong></p>
<p>设置/获取相对于椭球表面的高度。</p>
<p>默认值: <code v-pre>0.0</code></p>
<p><strong><a href="">heightReference : Property</a></strong></p>
<p>设置/获取相对于地形的位置<a href="https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html" target="_blank" rel="noopener noreferrer"><code v-pre>HeightReference</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>HeightReference.NONE</code></p>
<p><strong><a href="">material : MaterialProperty</a></strong></p>
<p>设置/获取指定填充的材质。</p>
<p>默认值: <code v-pre>Color.WHITE</code></p>
<p><strong><a href="">numberOfVerticalLines : Property</a></strong></p>
<p>设置/获取沿着边框的周长绘制的竖线的数目。</p>
<p>默认值: <code v-pre>16</code></p>
<p><strong><a href="">outline : Property</a></strong></p>
<p>设置/获取是否绘制边框。</p>
<p>默认值: <code v-pre>false</code></p>
<p><strong><a href="">outlineColor : Property</a></strong></p>
<p>设置/获取边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>Color.BLACK</code></p>
<p><strong><a href="">outlineWidth : Property</a></strong></p>
<p>设置/获取边框宽度。</p>
<p>默认值: <code v-pre>1.0</code></p>
<p><strong><a href="">rotation : Property</a></strong></p>
<p>设置/获取相对于正北方向的逆时针旋转角。</p>
<p>默认值: <code v-pre>0</code></p>
<p><strong><a href="">semiMajorAxis : Property</a></strong></p>
<p>设置/获取长半轴。</p>
<p><strong><a href="">semiMinorAxis : Property</a></strong></p>
<p>设置/获取短半轴。</p>
<p><strong><a href="">shadows : Property</a></strong></p>
<p>设置/获取是否从每个光源投射或接收阴影。</p>
<p>默认值: <code v-pre>ShadowMode.DISABLED</code></p>
<p><strong><a href="">show : Property</a></strong></p>
<p>设置/获取显隐性。</p>
<p>默认值: <code v-pre>true</code></p>
<p><strong><a href="">stRotation : Property</a></strong></p>
<p>设置/获取纹理相对于正北方向的旋转角。</p>
<p>默认值: <code v-pre>0</code></p>
<p><strong><a href="">zIndex : ConstantProperty</a></strong></p>
<p>设置/获取用于排序地面几何的zIndex。 仅当椭圆为常数且未指定height或extrudedHeight时才有效。</p>
<p>默认值: <code v-pre>0</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): EllipseGraphics</a></strong></p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/EllipseGraphics.html" target="_blank" rel="noopener noreferrer">EllipseGraphics<ExternalLinkIcon/></a></td>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/EllipseGraphics.html" target="_blank" rel="noopener noreferrer">EllipseGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


