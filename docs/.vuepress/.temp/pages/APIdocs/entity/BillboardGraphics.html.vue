<template><div><h1 id="广告牌-billboardgraphics" tabindex="-1"><a class="header-anchor" href="#广告牌-billboardgraphics" aria-hidden="true">#</a> 广告牌(BillboardGraphics)</h1>
<p>描述一个包含位置的二维图标，其位置和方向由包含其的<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a>确定</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>BillboardGraphics(options)</strong></p>
<p>options对象拥有的属性如下:</p>
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
<td style="text-align:left">optional布尔型属性，指定布告牌的可见性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>image</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional用于指定广告牌的图像，URI或画布。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>scale</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0</code></td>
<td style="text-align:left">optional数字属性，指定要应用于图像尺寸的比例。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pixelOffset</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cartesian2.ZERO</code></td>
<td style="text-align:left">optional<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a>属性，用于指定像素偏移（单位为像素）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>eyeOffset</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cartesian3.ZERO</code></td>
<td style="text-align:left">optional<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a>属性，用于指定距目标位置的偏移量（单位为米）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>horizontalOrigin</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HorizontalOrigin.CENTER</code></td>
<td style="text-align:left">optional用于指定 <a href="https://www.vvpstk.com/public/Cesium/Documentation/HorizontalOrigin.html" target="_blank" rel="noopener noreferrer"><code v-pre>HorizontalOrigin</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>verticalOrigin</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>VerticalOrigin.CENTER</code></td>
<td style="text-align:left">optional用于指定 <a href="https://www.vvpstk.com/public/Cesium/Documentation/VerticalOrigin.html" target="_blank" rel="noopener noreferrer"><code v-pre>VerticalOrigin</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>heightReference</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>HeightReference.NONE</code></td>
<td style="text-align:left">optional相对于地形的位置。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>color</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Color.WHITE</code></td>
<td style="text-align:left">optional指定图像的色调 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>rotation</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>0</code></td>
<td style="text-align:left">optional数字属性， 指定围绕alignedAxis的旋转角度。？？？</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>alignedAxis</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>Cartesian3.ZERO</code></td>
<td style="text-align:left">optional<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian3.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian3</code><ExternalLinkIcon/></a>属性，用于指定单位矢量旋转轴。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sizeInMeters</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional布尔型属性，指定是否应以米为单位测量此布告牌的大小。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>width</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional数字属性，用于指定布告牌的宽度（以像素为单位），并覆盖原始尺寸。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>height</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional数字属性，用于指定布告牌的高度（以像素为单位），并覆盖原始尺寸。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>scaleByDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional<a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>属性， 用于根据距相机的距离缩放布告牌。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>translucencyByDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional<a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>属性，用于根据距相机的距离设置半透明性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pixelOffsetScaleByDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional<a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>属性，根据距相机的距离设置偏移量，以像素为单位，不会超过pixelOffset。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>imageSubRegion</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional指定一个 <a href="https://www.vvpstk.com/public/Cesium/Documentation/BoundingRectangle.html" target="_blank" rel="noopener noreferrer"><code v-pre>BoundingRectangle</code><ExternalLinkIcon/></a>属性，它定义要用于布告牌的图像的子区域，而不是整个图像，以像素为单位从左下角开始。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>distanceDisplayCondition</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional指定在距像机的某个距离处显示此布告牌。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>disableDepthTestDistance</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Property.html" target="_blank" rel="noopener noreferrer">Property<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left">optional指定在距相机的某个距离范围内禁用深度测试。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p><strong><a href="">alignedAxis : Property</a></strong></p>
<p>设置/获取 <code v-pre>Vector3</code>型的单位矢量旋转轴。 设置为Cartesian3.ZERO时，旋转从屏幕顶部开始。</p>
<p>默认值: <code v-pre>Vector3.ZERO</code></p>
<p><strong><a href="">color : Property</a></strong></p>
<p>设置/获取 获取或设置指定与 <code v-pre>image</code>. 相乘的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Color.html" target="_blank" rel="noopener noreferrer"><code v-pre>Color</code><ExternalLinkIcon/></a> 属性。 这有两个常见的用例。首先，许多不同的布告牌都可以使用相同的白色纹理， 每个都有不同的颜色，以创建彩色布告牌。其次，可以为布告牌指定ahpha值如下所示：</p>
<p>默认值: <code v-pre>Color.WHITE</code></p>
<p><code v-pre>readonly</code> <strong><a href="">definitionChanged : Event</a></strong></p>
<p>获取每当更改或修改属性或子属性时引发的事件。</p>
<p><strong><a href="">disableDepthTestDistance : Property</a></strong></p>
<p>设置/获取从相机到禁用深度测试的距离。 例如，防止剪切地形。设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。</p>
<p><strong><a href="">distanceDisplayCondition : Property</a></strong></p>
<p>设置/获取显示条件<a href="https://www.vvpstk.com/public/Cesium/Documentation/DistanceDisplayCondition.html" target="_blank" rel="noopener noreferrer"><code v-pre>DistanceDisplayCondition</code><ExternalLinkIcon/></a>,即在距相机某个距离内显示。</p>
<p><strong><a href="">eyeOffset : Property</a></strong></p>
<p>设置/获取在视点坐标系下的偏移量。 试点坐标系是左手坐标系。</p>
<p>在下方，布告牌位于地球中心，但眼球偏移使它始终无论观看者或地球的方向如何，它都会出现在地球的顶部。</p>
<p>默认值：<code v-pre>Vector3.ZERO</code></p>
<p><strong><a href="">height : Property</a></strong></p>
<p>设置/获取布告牌的高度（以像素为单位）。 未定义时, the native height is used.</p>
<p><strong><a href="">heightReference : Property</a></strong></p>
<p>设置/获取相对于地形的位置。</p>
<p>默认值: <code v-pre>HeightReference.NONE</code></p>
<p><a href=""><strong>horizontalOrigin : Property</strong></a></p>
<p>设置/获取 <a href="https://www.vvpstk.com/public/Cesium/Documentation/HorizontalOrigin.html" target="_blank" rel="noopener noreferrer"><code v-pre>HorizontalOrigin</code><ExternalLinkIcon/></a>。</p>
<p>默认值: <code v-pre>HorizontalOrigin.CENTER</code></p>
<p><strong><a href="">image : Property</a></strong></p>
<p>设置/获取布告牌（billboard）上图片的URL。</p>
<p><strong><a href="">imageSubRegion : Property</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/BoundingRectangle.html" target="_blank" rel="noopener noreferrer"><code v-pre>BoundingRectangle</code><ExternalLinkIcon/></a>属性。 它定义要用于布告牌的图像的子区域，而不是整个图像， 以像素为单位从左下角开始。</p>
<p><strong><a href="">pixelOffset : Property</a></strong></p>
<p>设置/获取<a href="https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html" target="_blank" rel="noopener noreferrer"><code v-pre>Cartesian2</code><ExternalLinkIcon/></a>像素偏移属性。 该属性指定布告牌在屏幕空间中的像素偏移量从此布告牌的来源开始。 通常用于对齐多个布告牌和标签相同的位置，例如图片和文字。</p>
<p>默认值：<code v-pre>Vector2.ZERO</code></p>
<p><strong><a href="">pixelOffsetScaleByDistance : Property</a></strong></p>
<p>设置/获取 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>，即基于相机距离的像素偏移量。 当相机距离在上下限之内指定的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 时， 布告牌的偏移量性将在 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#nearValue</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#farValue</code><ExternalLinkIcon/></a>插值 ， 在这些范围之外，标注的半透明性仍保持在最近的范围。</p>
<p><strong><a href="">rotation : Property</a></strong></p>
<p>设置/获取 指定围绕<code v-pre>alignedAxis</code>的旋转角度。</p>
<p>默认值：<code v-pre>0</code></p>
<p><strong><a href="">scale : Property</a></strong></p>
<p>设置/获取应用于图像尺寸的比例。</p>
<p>默认值: <code v-pre>1.0</code></p>
<p><strong><a href="">scaleByDistance : Property</a></strong></p>
<p>设置/获取 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a> 属性（用于根据距相机的距离缩放布告牌）。 当相机距离在上下限之内指定的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#far" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#far</code><ExternalLinkIcon/></a> 时， 布告牌的比例将在 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#nearValue</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#farValue</code><ExternalLinkIcon/></a>插值 ， 在这些范围之外，布告牌的比例仍保持在最近的范围内。</p>
<p><strong><a href="">show : Property</a></strong></p>
<p>设置/获取显隐性。</p>
<p><strong><a href="">sizeInMeters : Property</a></strong></p>
<p>设置/获取是否应以米为单位测量此布告牌的大小。</p>
<p>默认值: <code v-pre>false</code></p>
<p><strong><a href="">translucencyByDistance : Property</a></strong></p>
<p>设置/获取 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar</code><ExternalLinkIcon/></a>， 即基于相机距离的半透明性。 当相机距离在上下限之内指定的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#near" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#near</code><ExternalLinkIcon/></a> 。 布告牌的半透明性将在 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#nearValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#nearValue</code><ExternalLinkIcon/></a> 和 <a href="https://www.vvpstk.com/public/Cesium/Documentation/NearFarScalar.html#farValue" target="_blank" rel="noopener noreferrer"><code v-pre>NearFarScalar#farValue</code><ExternalLinkIcon/></a>插值。 在这些范围之外，半透明性仍保持在最近的范围。</p>
<p>verticalOrigin : Property</p>
<p>设置/获取 <a href="https://www.vvpstk.com/public/Cesium/Documentation/VerticalOrigin.html" target="_blank" rel="noopener noreferrer"><code v-pre>VerticalOrigin</code><ExternalLinkIcon/></a>。</p>
<p>默认值：<code v-pre>VerticalOrigin.CENTER</code></p>
<p><strong><a href="">width : Property</a></strong></p>
<p>设置/获取布告牌的宽度（以像素为单位）。 未定义时，the native width is used.</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p><strong><a href="">clone(result): BillboardGraphics</a></strong></p>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/BillboardGraphics.html" target="_blank" rel="noopener noreferrer">BillboardGraphics<ExternalLinkIcon/></a></td>
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
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/BillboardGraphics.html" target="_blank" rel="noopener noreferrer">BillboardGraphics<ExternalLinkIcon/></a></td>
<td style="text-align:left">要被合并到这个对象的对象。</td>
</tr>
</tbody>
</table>
</div></template>


