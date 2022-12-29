<template><div><h1 id="文字标注-labelgraphics" tabindex="-1"><a class="header-anchor" href="#文字标注-labelgraphics" aria-hidden="true">#</a> 文字标注(LabelGraphics)</h1>
<p>文字标注，位置由包含它的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a>指定</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>LabelGraphics(options)</strong></p>
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
<td style="text-align:left"><code v-pre>text</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>指定显示的文本，用“\n”表示换行。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>font</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>'30px sans-serif'</code></td>
<td style="text-align:left"><code v-pre>optional</code>字体 CSS 样式。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>style</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>LabelStyle.FILL</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定 <a href="https://www.vvpstk.com/public/Cesium/Documentation/LabelStyle.html" target="_blank" rel="noopener noreferrer"><code v-pre>LabelStyle</code><ExternalLinkIcon/></a>.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>scale</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>字体放大比例。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>showBackground</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定字体背景显隐性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>backgroundColor</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>new Color(0.165, 0.165, 0.165, 0.8)</code></td>
<td style="text-align:left"><code v-pre>optional</code>背景颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>backgroundPadding</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>new Cartesian2(7, 5)</code></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a> 属性。 指定背景在垂直和水平方向上的内补白。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pixelOffset</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cartesian2.ZERO</code></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a> 属性。 文本在xy方向的像素偏移。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>eyeOffset</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cartesian3.ZERO</code></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a> 属性。 视点偏移。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>horizontalOrigin</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HorizontalOrigin.CENTER</code></td>
<td style="text-align:left"><code v-pre>optional</code>指定水平方向上的原点 <a href="https://www.vvpstk.com/public/Cesium/Documentation/HorizontalOrigin.html" target="_blank" rel="noopener noreferrer"><code v-pre>HorizontalOrigin</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>verticalOrigin</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VerticalOrigin.CENTER</code></td>
<td style="text-align:left"><code v-pre>optional</code>垂直方向上的原点 <a href="https://www.vvpstk.com/public/Cesium/Documentation/VerticalOrigin.html" target="_blank" rel="noopener noreferrer"><code v-pre>VerticalOrigin</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>heightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left"><code v-pre>optional</code>相对于地形的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fillColor</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.WHITE</code></td>
<td style="text-align:left"><code v-pre>optional</code>字体颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>.</td>
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
<td style="text-align:left"><code v-pre>translucencyByDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a> 属性， 根据与像机的距离设置透明度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pixelOffsetScaleByDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a> 属性，根据与像机的距离设置像素偏移量。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>scaleByDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code><a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a> 属性， 根据与摄像机的距离设置缩放比例。</td>
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
<td style="text-align:left"><code v-pre>optional</code>指定禁用深度测试的相机距离。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">backgroundColor : Property</a></strong></p>
<p>设置/获取背景颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>new Color(0.165, 0.165, 0.165, 0.8)</code></p>
<p><strong><a href="">backgroundPadding : Property</a></strong></p>
<p>设置/获取背景在垂直和水平方向上的内补白，<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a> 类型。</p>
<p>默认值: <code v-pre>new Cartesian2(7, 5)</code></p>
<p><code v-pre>readonly</code> <strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">disableDepthTestDistance : Property</a></strong></p>
<p>设置/获取从相机到禁用深度测试的距离。 例如，防止剪切地形。设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。</p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取显示条件<a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>,即在距相机某个距离内显示。</p>
<p><strong><a href="">eyeOffset : Property</a></strong></p>
<p>设置/获取视点偏移<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a>(在相机坐标系中)。 相机坐标系是一个左手坐标系。</p>
<p>标注位于地球的中心，但是视点偏移使它总是出现在地球的顶部，不管观察者或地球的方向。</p>
<p>默认值: <code v-pre>Cartesian3.ZERO</code></p>
<p><strong><a href="">fillColor : Property</a></strong></p>
<p>设置/获取字体颜色 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p><strong><a href="">font : Property</a></strong></p>
<p>设置/获取字体。</p>
<p><strong><a href="">heightReference : Property</a></strong></p>
<p>设置/获取相对于地形的位置 <a href="https://www.vvpstk.com/public/Cesium/Documentation/HeightReference.html" target="_blank" rel="noopener noreferrer"><code v-pre>HeightReference</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>HeightReference.NONE</code></p>
<p><strong><a href="">horizontalOrigin : Property</a></strong></p>
<p>设置/获取指定水平方向上的原点 <a href="https://www.vvpstk.com/public/Cesium/Documentation/HorizontalOrigin.html" target="_blank" rel="noopener noreferrer"><code v-pre>HorizontalOrigin</code><ExternalLinkIcon/></a> 。</p>
<p><strong><a href="">outlineColor : Property</a></strong></p>
<p>设置/获取边框颜色<a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</p>
<p><strong><a href="">outlineWidth : Property</a></strong></p>
<p>设置/获取边框宽度。</p>
<p><strong><a href="">pixelOffset : Property</a></strong></p>
<p>设置/获取文本在xy方向的像素偏移 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a>。 这通常用于对齐多个标签和相同位置的标签，例如，一个图像和文本。屏幕空间原点是画布的左上角。</p>
<p>默认值: <code v-pre>Cartesian2.ZERO</code></p>
<p><strong><a href="">pixelOffsetScaleByDistance : Property</a></strong></p>
<p>设置/获取根据与像机的距离设置像素偏移量 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>。 当相机距离在上下限之内指定的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 时， 标注的偏移量性将在 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#nearValue</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#farValue</code><ExternalLinkIcon/></a>插值 ， 在这些范围之外，标注的半透明性仍保持在最近的范围。</p>
<p><strong><a href="">scale : Property</a></strong></p>
<p>设置/获取比例(比1大。放大，反之，缩小)。</p>
<p>默认值: <code v-pre>1.0</code></p>
<p><strong><a href="">scaleByDistance : Property</a></strong></p>
<p>设置/获取 near and far scaling properties of a Label based on the label's distance from the camera. 当相机距离在上下限之内指定的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 时， 标注的偏移量性将在 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#nearValue</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#farValue</code><ExternalLinkIcon/></a>插值 ， 在这些范围之外，标注的半透明性仍保持在最近的范围内。如果未定义，则不启用。</p>
<p><strong><a href="">show : Property</a></strong></p>
<p>设置/获取显隐性。</p>
<p><strong><a href="">showBackground : Property</a></strong></p>
<p>设置/获取字体背景显隐性。</p>
<p>默认值: <code v-pre>false</code></p>
<p><strong><a href="">style : Property</a></strong></p>
<p>设置/获取样式 <a href="https://www.vvpstk.com/public/Cesium/Documentation/LabelStyle.html" target="_blank" rel="noopener noreferrer"><code v-pre>LabelStyle</code><ExternalLinkIcon/></a>。</p>
<p><strong><a href="">text : Property</a></strong></p>
<p>设置/获取文本。</p>
<p><strong><a href="">translucencyByDistance : Property</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>(基于相机距离的点透明度)。 当相机距离在上下限之内指定的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 。 标注的半透明性将在 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#nearValue</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#farValue</code><ExternalLinkIcon/></a>插值。 在这些范围之外，标注的半透明性仍保持在最近的范围。</p>
<p><strong><a href="">verticalOrigin : Property</a></strong></p>
<p>设置/获取指定水平方向上的原点 <code v-pre>verticalOrigin</code> 。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): LabelGraphics</a></strong></p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/LabelGraphics.html" target="_blank" rel="noopener noreferrer">LabelGraphics<ExternalLinkIcon/></a></td>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/LabelGraphics.html" target="_blank" rel="noopener noreferrer">LabelGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


