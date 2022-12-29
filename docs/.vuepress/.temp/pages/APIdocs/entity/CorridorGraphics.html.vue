<template><div><h1 id="走廊-corridorgraphics" tabindex="-1"><a class="header-anchor" href="#走廊-corridorgraphics" aria-hidden="true">#</a> 走廊(CorridorGraphics)</h1>
<p>廊道描述，走廊是由中心线和宽度定义的形状，符合地球的曲率 它可以放置在表面或高度，也可以选择挤压成一个体。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>CorridorGraphics(options)</strong></p>
<p>对象拥有如下属性:</p>
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
<td style="text-align:left">optional廊道可见性.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>positions</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional指定定义廊道中心线的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a>位置的数组。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>width</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional数字属性，用于指定廊道宽度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>height</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left">optional数字属性，用于指定廊道相对于椭球表面的高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>heightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left">optional相对于地形的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeight</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional数字属性，指定廊道的挤出面相对于椭球面的高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>extrudedHeightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left">optional指定廊道的挤出面相对于什么的高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>cornerType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>CornerType.ROUNDED</code></td>
<td style="text-align:left">optional<a href="https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html" target="_blank" rel="noopener noreferrer"><code v-pre>CornerType</code><ExternalLinkIcon/></a>属性，指定拐角的样式。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>granularity</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cesium.Math.RADIANS_PER_DEGREE</code></td>
<td style="text-align:left">optional数字属性，指定每个经度和纬度之间的距离。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fill</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left">optional指定廊道是否用提供的材质填充。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>material</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/MaterialProperty.html" target="_blank" rel="noopener noreferrer">MaterialProperty<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.WHITE</code></td>
<td style="text-align:left">optional使用指定的材质填充廊道。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>outline</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left">optional是否绘制廊道边框。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>outlineColor</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.BLACK</code></td>
<td style="text-align:left">optional指定廊道边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>outlineWidth</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left">optional指定边框宽度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shadows</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ShadowMode.DISABLED</code></td>
<td style="text-align:left">optional从每个光源投射或接收阴影的模式。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>distanceDisplayCondition</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional指定显示条件（距相机多远）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>classificationType</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>ClassificationType.BOTH</code></td>
<td style="text-align:left">optional枚举属性，用于指定该廊道贴在3D Tiles或地形上。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>zIndex</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/ConstantProperty.html" target="_blank" rel="noopener noreferrer">ConstantProperty<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional指定廊道的zIndex，用于排序。仅当未定义height和extrudedHeight且廊道为恒定时才有效。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">classificationType : Property</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/ClassificationType.html" target="_blank" rel="noopener noreferrer"><code v-pre>ClassificationType</code><ExternalLinkIcon/></a> 属性（该廊道贴在3D Tiles或地形上或两者都贴。）</p>
<p>默认值: <code v-pre>ClassificationType.BOTH</code></p>
<p><strong><a href="">cornerType : Property</a></strong></p>
<p>设置/获取拐角样式<a href="https://www.vvpstk.com/public/Cesium/Documentation/CornerType.html" target="_blank" rel="noopener noreferrer"><code v-pre>CornerType</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>CornerType.ROUNDED</code></p>
<p><code v-pre>readonly</code><strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取显示条件 <a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>，即在距相机某个距离显示。</p>
<p><strong><a href="">extrudedHeight : Property</a></strong></p>
<p>设置/获取挤出高度。 Setting this property creates a corridor shaped volume starting at height and ending at this altitude.</p>
<p><strong><a href="">extrudedHeightReference : Property</a></strong></p>
<p>设置/获取相对挤出高度参照物 <a href="https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html" target="_blank" rel="noopener noreferrer"><code v-pre>HeightReference</code><ExternalLinkIcon/></a>。</p>
<p>返回值: <code v-pre>HeightReference.NONE</code></p>
<p><strong><a href="">fill : Property</a></strong></p>
<p>设置/获取是否用提供的材质填充。</p>
<p>返回值: <code v-pre>true</code></p>
<p><strong><a href="">granularity : Property</a></strong></p>
<p>设置/获取每个经度和纬度之间的距离。</p>
<p>返回值: <code v-pre>{CesiumMath.RADIANS_PER_DEGREE}</code></p>
<p><strong><a href="">height : Property</a></strong></p>
<p>设置/获取廊道相对于椭球表面的高度。</p>
<p>返回值: <code v-pre>0.0</code></p>
<p><strong><a href="">heightReference : Property</a></strong></p>
<p>设置/获取廊道相对高度的参照物<a href="https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html" target="_blank" rel="noopener noreferrer"><code v-pre>HeightReference</code><ExternalLinkIcon/></a>。</p>
<p>返回值: <code v-pre>HeightReference.NONE</code></p>
<p><strong><a href="">material : MaterialProperty</a></strong></p>
<p>设置/获取指定填充廊道的材质。</p>
<p>返回值: <code v-pre>Color.WHITE</code></p>
<p><strong><a href="">outline : Property</a></strong></p>
<p>设置/获取是否绘制廊道边框。</p>
<p>返回值: <code v-pre>false</code></p>
<p><strong><a href="">outlineColor : Property</a></strong></p>
<p>设置/获取廊道边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p>返回值: <code v-pre>Color.BLACK</code></p>
<p><strong><a href="">outlineWidth : Property</a></strong></p>
<p>设置/获取边框宽度。</p>
<p>返回值: <code v-pre>1.0</code></p>
<p><strong><a href="">positions : Property</a></strong></p>
<p>设置/获取廊道中心线的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a>位置的数组。</p>
<p><strong><a href="">shadows : Property</a></strong></p>
<p>设置/获取 廊道是投射还是接收来自每个光源的阴影。</p>
<p>返回值: <code v-pre>ShadowMode.DISABLED</code></p>
<p><strong><a href="">show : Property</a></strong></p>
<p>设置/获取显隐性。</p>
<p>返回值: <code v-pre>true</code></p>
<p><strong><a href="">width : Property</a></strong></p>
<p>设置/获取廊道宽度。</p>
<p><strong><a href="">zIndex : ConstantProperty</a></strong></p>
<p>设置/获取zIndex(用于排序。仅当未定义height和extrudedHeight且廊道为静态时才有效。).</p>
<p>默认值: <code v-pre>0</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): CorridorGraphics</a></strong></p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/CorridorGraphics.html" target="_blank" rel="noopener noreferrer">CorridorGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">optional用来存储结果的对象。</td>
</tr>
</tbody>
</table>
<p>返回值: 修改后的结果参数或一个新实例（如果未提供）。</p>
<p><strong><a href="">merge(source)</a></strong></p>
<p>合并两个廊道的属性，最终合并出的廊道属性有以下特点： 就某个属性来说，如果A的属性已定义，则合并出的C的属性即为A的属性，反之C中将为B的属性。</p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/CorridorGraphics.html" target="_blank" rel="noopener noreferrer">CorridorGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


