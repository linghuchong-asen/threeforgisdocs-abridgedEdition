<template><div><h1 id="椭球或球体-ellipsoidgraphics" tabindex="-1"><a class="header-anchor" href="#椭球或球体-ellipsoidgraphics" aria-hidden="true">#</a> 椭球或球体(EllipsoidGraphics)</h1>
<p>描述一个椭球或球体。中心位置和方向由包含它的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a>确定。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>EllipsoidGraphics(options)</strong></p>
<p>对象拥有以下属性：</p>
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
<td style="text-align:left"><code v-pre>radii</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a> 属性 ，指定椭球各轴长。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>innerRadii</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a> 属性 指定椭球内部各轴长。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minimumClock</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>类似圆心角的最小角度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>maximumClock</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2*PI</code></td>
<td style="text-align:left"><code v-pre>optional</code>类似圆心角的最大角度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minimumCone</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>最小锥角。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>maximumCone</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>PI</code></td>
<td style="text-align:left"><code v-pre>optional</code>最大锥角。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>heightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left"><code v-pre>optional</code>相对于地形的位置。</td>
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
<td style="text-align:left"><code v-pre>stackPartitions</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>64</code></td>
<td style="text-align:left"><code v-pre>optional</code>横向分段数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>slicePartitions</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>64</code></td>
<td style="text-align:left"><code v-pre>optional</code>纵向分段数。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>subdivisions</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>128</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定每个边框环的样本数，确定曲率的粒度，值越大，边框线的节点越多，越光滑；</td>
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
<p><code v-pre>readonly</code><strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取设置/获取显示条件<a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>,即在距相机某个距离内显示。</p>
<p><strong><a href="">fill : Property</a></strong></p>
<p>设置/获取指定是否使用提供的材质填充。</p>
<p>默认值: <code v-pre>true</code></p>
<p><strong><a href="">heightReference : Property</a></strong></p>
<p>设置/获取相对于地形的位置。</p>
<p>默认值: <code v-pre>HeightReference.NONE</code></p>
<p><strong><a href="">innerRadii : Property</a></strong></p>
<p>设置/获取椭球内部各轴长<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a> <a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer"><code v-pre>Property</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>radii</code></p>
<p>material : MaterialProperty</p>
<p>设置/获取指定用于填充的材质。</p>
<p>默认值: <code v-pre>Color.WHITE</code></p>
<p><strong><a href="">maximumClock : Property</a></strong></p>
<p>设置/获取类似圆心角的最大角度。</p>
<p>默认值: <code v-pre>2*PI</code></p>
<p><strong><a href="">maximumCone : Property</a></strong></p>
<p>设置/获取最大锥角。</p>
<p>默认值: <code v-pre>PI</code></p>
<p><strong><a href="">minimumClock : Property</a></strong></p>
<p>设置/获取类似圆心角的最小角度。</p>
<p>默认值: <code v-pre>0.0</code></p>
<p><strong><a href="">minimumCone : Property</a></strong></p>
<p>设置/获取最小锥角。</p>
<p>默认值: <code v-pre>0.0</code></p>
<p><strong><a href="">outline : Property</a></strong></p>
<p>设置/获取是否显示边框。</p>
<p>默认值: <code v-pre>false</code></p>
<p><strong><a href="">outlineColor : Property</a></strong></p>
<p>设置/获取边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>Color.BLACK</code></p>
<p><strong><a href="">outlineWidth : Property</a></strong></p>
<p>设置/获取边框宽度。</p>
<p>默认值: <code v-pre>1.0</code></p>
<p><strong><a href="">radii : Property</a></strong></p>
<p>设置/获取椭球各轴长<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a> <a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer"><code v-pre>Property</code><ExternalLinkIcon/></a>。</p>
<p><strong><a href="">shadows : Property</a></strong></p>
<p>设置/获取从每个光源投射或接收阴影的模式。</p>
<p>默认值: <code v-pre>ShadowMode.DISABLED</code></p>
<p><strong><a href="">show : Property</a></strong></p>
<p>设置/获取显隐性。</p>
<p>默认值: <code v-pre>true</code></p>
<p><strong><a href="">slicePartitions : Property</a></strong></p>
<p>设置/获取纵向分段数。</p>
<p>默认值: <code v-pre>64</code></p>
<p><strong><a href="">stackPartitions : Property</a></strong></p>
<p>设置/获取横向分段数。</p>
<p>默认值: <code v-pre>64</code></p>
<p><strong><a href="">subdivisions : Property</a></strong></p>
<p>设置/获取指定每个边框环的样本数，确定曲率的粒度，值越大，边框线的节点越多，越光滑。</p>
<p>默认值: <code v-pre>128</code></p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): EllipsoidGraphics</a></strong></p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/EllipsoidGraphics.html" target="_blank" rel="noopener noreferrer">EllipsoidGraphics<ExternalLinkIcon/></a></td>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/EllipsoidGraphics.html" target="_blank" rel="noopener noreferrer">EllipsoidGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


