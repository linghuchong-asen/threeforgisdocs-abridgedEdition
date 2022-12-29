<template><div><h1 id="视窗-viewer" tabindex="-1"><a class="header-anchor" href="#视窗-viewer" aria-hidden="true">#</a> 视窗(Viewer)</h1>
<p>视窗是承载应用的基本部件。创建一个Viewer实例即创建一个场景窗口。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>Viewer(containerId,options)</strong></p>
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
<td style="text-align:left"><code v-pre>container</code></td>
<td style="text-align:left">Element | String</td>
<td style="text-align:left">将容纳Viewer的HTML DOM 元素或ID。</td>
</tr>
</tbody>
</table>
<p>对象，具有以下属性：</p>
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
<td style="text-align:left"><code v-pre>animation</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>是否创建Animation部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fullscreenButton</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为false，则不会创建FullscreenButton部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>vrButton</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为true，将创建VRButton部件</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>homeButton</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为false，则不会创建HomeButton部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>infoBox</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为false，则不会创建InfoBox部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sceneModePicker</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为false，将不会创建SceneModePicker部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>selectionIndicator</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为false，则不会创建SelectionIndicator部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>timeline</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为false，则不会创建Timeline部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>navigationHelpButton</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为false，将不会创建NavigationHelpButton。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>scene3DOnly</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>当<code v-pre>true</code>时，为了节省GPU内存，每个几何实例只会在3D下被渲染。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shouldAnimate</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果时钟默认尝试使仿真时间前进，则为<code v-pre>true</code>，否则为<code v-pre>false</code>。此选项优先于设置<a href="https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html#clockViewModel" target="_blank" rel="noopener noreferrer"><code v-pre>Viewer#clockViewModel</code><ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>clockViewModel</code></td>
<td style="text-align:left">ClockViewModel</td>
<td style="text-align:left"><div style="width:100px"><code v-pre>new ClockViewModel(options.clock)</code></div></td>
<td style="text-align:left"><code v-pre>optional</code>用于控制当前时间的ClockViewModel。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>skyBox</code></td>
<td style="text-align:left">SkyBox</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>用于渲染星辰的天空盒，未定义时，使用默认星辰效果。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>skyAtmosphere</code></td>
<td style="text-align:left">SkyAtmosphere</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>环绕地球边缘的蓝天和光晕效果，设置为<code v-pre>false</code>可将其关闭。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>fullscreenElement</code></td>
<td style="text-align:left">Element | String</td>
<td style="text-align:left"><code v-pre>document.body</code></td>
<td style="text-align:left"><code v-pre>optional</code>当按下全屏按钮时，要放置到全屏模式的元素或id。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>useDefaultRenderLoop</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果此部件需要控制渲染循环，则为true，否则为false。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>targetFrameRate</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>使用默认渲染循环时的目标帧速率。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>showRenderLoopErrors</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果为true，如果出现渲染循环错误，此部件将自动向用户显示包含错误的HTML面板。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>useBrowserRecommendedResolution</code></div></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果为true，则按照浏览器推荐的分辨率渲染，忽略<code v-pre>window.devicePixelRatio</code>。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>contextOptions</code></td>
<td style="text-align:left">Object</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>Context 和 WebGL 的创建属性，与传递给<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html" target="_blank" rel="noopener noreferrer"><code v-pre>Scene</code><ExternalLinkIcon/></a>的<code v-pre>options</code>相一致。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sceneMode</code></td>
<td style="text-align:left">SceneMode</td>
<td style="text-align:left"><div style="width:100px"><code v-pre>SceneMode.SCENE3D</code></div></td>
<td style="text-align:left"><code v-pre>optional</code>初始场景模式（SceneMode）。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mapProjection</code></td>
<td style="text-align:left">MapProjection</td>
<td style="text-align:left"><div style="width:100px"><code v-pre>new GeographicProjection()</code></div></td>
<td style="text-align:left"><code v-pre>optional</code>在2D和哥伦布视图模式中使用的地图投影。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>orderIndependentTranslucency</code></div></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果为true，且设备支持，则使用与顺序无关的半透明性。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>dataSources</code></td>
<td style="text-align:left"><div style="width:20px">DataSource Collection</div></td>
<td style="text-align:left"><div style="width:100px"><code v-pre>new DataSourceCollection()</code></div></td>
<td style="text-align:left"><code v-pre>optional</code>由部件可视化的数据源集合。如果提供了该参数，则假定该实例为调用者所有，并且不会在销毁查看器（viewer）时销毁该实例。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shadows</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>确定阴影是否由太阳投射形成。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mapMode2D</code></td>
<td style="text-align:left">MapMode2D</td>
<td style="text-align:left"><div style="width:100px"><code v-pre>MapMode2D.INFINITE_SCROLL</code></div></td>
<td style="text-align:left"><code v-pre>optional</code>确定2D地图是可旋转的，还是可以在水平方向上无限滚动。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>projectionPicker</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果设置为true，则会创建ProjectionPicker部件。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>requestRenderMode</code></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left"><code v-pre>false</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果为true，渲染帧将只在需要时发生，由场景中的变化决定。启用可减少应用程序的CPU/GPU使用量， 并减少移动设备上的电池消耗，但需要使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#requestRender" target="_blank" rel="noopener noreferrer"><code v-pre>Scene#requestRender</code><ExternalLinkIcon/></a>在此模式下显式渲染新帧。在许多情况下，在API的其他部分对场景进行更改之后，这将是必要的。 请参考<a href="https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/" target="_blank" rel="noopener noreferrer">Improving Performance with Explicit Rendering<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td style="text-align:left"><div style="width:100px"><code v-pre>maximumRenderTimeChange</code></div></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>0.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>如果requestRenderMode为true，则此值定义在渲染被请求之前允许的最大仿真时间更改。 请参考<a href="https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/" target="_blank" rel="noopener noreferrer">Improving Performance with Explicit Rendering<ExternalLinkIcon/></a>。</td>
</tr>
</tbody>
</table>
<h2 id="代码实例" tabindex="-1"><a class="header-anchor" href="#代码实例" aria-hidden="true">#</a> 代码实例</h2>
<CodeTabs id="472" :data='[{"title":"html"},{"title":"ts"}]' tab-id="Viewer">

<template #tab0="{ title, value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>containerId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebGis</span><span class="token punctuation">.</span><span class="token function">Viewer</span><span class="token punctuation">(</span>containerId<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h3 id="camera" tabindex="-1"><a class="header-anchor" href="#camera" aria-hidden="true">#</a> <strong><a href="">camera</a></strong></h3>
<p>获取或设置相机</p>
<h3 id="container-element" tabindex="-1"><a class="header-anchor" href="#container-element" aria-hidden="true">#</a> <a href="">container : Element</a></h3>
<p>获取父容器。</p>
<h3 id="entities-entitygroup" tabindex="-1"><a class="header-anchor" href="#entities-entitygroup" aria-hidden="true">#</a> <a href=""><strong>Entities: EntityGroup</strong></a></h3>
<p>获取未关联到特定数据源的实体集合</p>
<h3 id="fullscreenbutton-fullscreenbutton" tabindex="-1"><a class="header-anchor" href="#fullscreenbutton-fullscreenbutton" aria-hidden="true">#</a> <a href="">fullscreenButton : FullscreenButton</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取全屏按钮（FullscreenButton）。</p>
<h3 id="homebutton-homebutton" tabindex="-1"><a class="header-anchor" href="#homebutton-homebutton" aria-hidden="true">#</a> <a href="">homeButton : HomeButton</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取主画面按钮（HomeButton）。</p>
<h3 id="infobox-infobox" tabindex="-1"><a class="header-anchor" href="#infobox-infobox" aria-hidden="true">#</a> <a href="">infoBox : InfoBox</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取消息盒（InfoBox）。</p>
<h3 id="navigationhelpbutton-navigationhelpbutton" tabindex="-1"><a class="header-anchor" href="#navigationhelpbutton-navigationhelpbutton" aria-hidden="true">#</a> <a href="">navigationHelpButton : NavigationHelpButton</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取导航帮助按钮（NavigationHelpButton）。</p>
<h3 id="postprocessstages-postprocessstagecollection" tabindex="-1"><a class="header-anchor" href="#postprocessstages-postprocessstagecollection" aria-hidden="true">#</a> <a href="">postProcessStages : PostProcessStageCollection</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取后处理阶段集合（PostProcessStageCollection）。</p>
<h3 id="resolutionscale-number" tabindex="-1"><a class="header-anchor" href="#resolutionscale-number" aria-hidden="true">#</a> <a href="">resolutionScale : Number</a></h3>
<p>获取或设置渲染分辨率的比例因子。 小于1.0的值可以在功能较弱的设备上提高性能，而大于1.0的值将以更高的分辨率渲染，然后缩小比例，从而提高视觉保真度。 例如，如果部件的大小为640x480，将该值设置为0.5将导致场景以320x240的大小呈现，然后按比例放大， 而将其设置为2.0将导致场景以1280x960的大小呈现，然后按比例缩小。</p>
<h3 id="scene" tabindex="-1"><a class="header-anchor" href="#scene" aria-hidden="true">#</a> <strong><a href="">Scene</a></strong></h3>
<p>获取场景Scene</p>
<h3 id="scenemodepicker-scenemodepicker" tabindex="-1"><a class="header-anchor" href="#scenemodepicker-scenemodepicker" aria-hidden="true">#</a> <a href="">sceneModePicker : SceneModePicker</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取场景模式选择器（SceneModePicker）。</p>
<h3 id="screenspaceeventhandler-screenspaceeventhandler" tabindex="-1"><a class="header-anchor" href="#screenspaceeventhandler-screenspaceeventhandler" aria-hidden="true">#</a> <a href="">screenSpaceEventHandler : ScreenSpaceEventHandler</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取屏幕空间事件处理程序（ScreenSpaceEventHandler）。</p>
<h3 id="selectedentity-entity" tabindex="-1"><a class="header-anchor" href="#selectedentity-entity" aria-hidden="true">#</a> <a href="">selectedEntity : Entity</a></h3>
<p>获取或设置要为其显示选择指示符的对象实例。</p>
<h3 id="selectedentitychanged-event" tabindex="-1"><a class="header-anchor" href="#selectedentitychanged-event" aria-hidden="true">#</a> <a href="">selectedEntityChanged : Event</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取所选实体更改时引发的事件。</p>
<h3 id="selectionindicator-selectionindicator" tabindex="-1"><a class="header-anchor" href="#selectionindicator-selectionindicator" aria-hidden="true">#</a> <a href="">selectionIndicator : SelectionIndicator</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取选择指示器（SelectionIndicator）。</p>
<h3 id="shadows-boolean" tabindex="-1"><a class="header-anchor" href="#shadows-boolean" aria-hidden="true">#</a> <strong><a href="">shadows : Boolean</a></strong></h3>
<p>确定阴影是否由太阳投射形成。</p>
<h3 id="trackedentity-entity" tabindex="-1"><a class="header-anchor" href="#trackedentity-entity" aria-hidden="true">#</a> <a href="">trackedEntity : Entity</a></h3>
<p>获取或设置相机当前跟踪的实体实例。</p>
<h3 id="trackedentitychanged-event" tabindex="-1"><a class="header-anchor" href="#trackedentitychanged-event" aria-hidden="true">#</a> <a href="">trackedEntityChanged : Event</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取被跟踪实体更改时引发的事件。</p>
<h3 id="usebrowserrecommendedresolution-boolean" tabindex="-1"><a class="header-anchor" href="#usebrowserrecommendedresolution-boolean" aria-hidden="true">#</a> <a href="">useBrowserRecommendedResolution : Boolean</a></h3>
<p>指示是否使用浏览器的推荐分辨率的布尔值。 如果为true，则忽略浏览器的设备像素比，代之以1.0，有效地基于CSS像素而不是设备像素进行渲染。这可以提高具有高像素密度的低功能设备的性能。 当为false时，渲染将以设备像素为单位。无论这个布尔值是true还是false，<a href="https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html#resolutionScale" target="_blank" rel="noopener noreferrer"><code v-pre>Viewer#resolutionScale</code><ExternalLinkIcon/></a>仍然有效。</p>
<h3 id="usedefaultrenderloop-boolean" tabindex="-1"><a class="header-anchor" href="#usedefaultrenderloop-boolean" aria-hidden="true">#</a> <a href="">useDefaultRenderLoop : Boolean</a></h3>
<p>获取或设置此部件是否应控制渲染循环。 如果设置为true，部件将使用<a href="https://www.vvpstk.com/public/Cesium/Documentation/requestAnimationFrame.html" target="_blank" rel="noopener noreferrer"><code v-pre>requestAnimationFrame</code><ExternalLinkIcon/></a>来执行部件的渲染和调整大小，以及驱动仿真时钟。 如果设置为false，您必须手动调用<code v-pre>resize</code>， <code v-pre>render</code>方法作为自定义渲染循环的一部分。 如果在渲染过程中出现错误，<a href="https://www.vvpstk.com/public/Cesium/Documentation/Scene.html" target="_blank" rel="noopener noreferrer"><code v-pre>Scene</code><ExternalLinkIcon/></a>的<code v-pre>renderError</code>事件将被触发，该属性将被设置为false。 必须将其设置为true，以便在发生错误后继续渲染。</p>
<h3 id="vrbutton-vrbutton" tabindex="-1"><a class="header-anchor" href="#vrbutton-vrbutton" aria-hidden="true">#</a> <a href="">vrButton : VRButton</a></h3>
<p><code v-pre>readonly</code></p>
<p>获取VRButton。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> <a href="">destroy()</a></h3>
<p>销毁部件。如果从布局中永久删除viewer部件，则应调用。</p>
<h3 id="flyto-target-options-promise-boolean" tabindex="-1"><a class="header-anchor" href="#flyto-target-options-promise-boolean" aria-hidden="true">#</a> <a href="">flyTo (target, options ): Promise&lt;boolean&gt;</a></h3>
<p>相机定位到指定实体或者图元处，相机移动过程有一个动画效果。</p>
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
<td style="text-align:left"><code v-pre>target</code></td>
<td style="text-align:left">Entity</td>
<td style="text-align:left">要查看的实体。</td>
</tr>
</tbody>
</table>
<p>对象，具有以下属性：</p>
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
<td style="text-align:left"><code v-pre>duration</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"><code v-pre>3.0</code></td>
<td style="text-align:left"><code v-pre>optional</code>飞行时间以秒为单位。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>maximumHeight</code></td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>飞行中的最高高度。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>offset</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/HeadingPitchRange.html" target="_blank" rel="noopener noreferrer">HeadingPitchRange<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>optional</code>在当地的东北向上（east-north-up）参考系中从目标到以目标为中心的偏移量。</td>
</tr>
</tbody>
</table>
<p><strong>返回值</strong>：飞行成功时，promise被解析为true；如果实体未在场景中可视化或飞行取消，promise被解析为false。</p>
<h3 id="forceresize" tabindex="-1"><a class="header-anchor" href="#forceresize" aria-hidden="true">#</a> <a href="">forceResize()</a></h3>
<p>这迫使部件重新考虑它的布局，包括部件大小和版权的放置。</p>
<h3 id="isdestroyed-boolean" tabindex="-1"><a class="header-anchor" href="#isdestroyed-boolean" aria-hidden="true">#</a> <a href="">isDestroyed(): Boolean</a></h3>
<p><strong>返回值</strong>: 如果对象已被销毁，则为true，否则为false。</p>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> <a href="">render()</a></h3>
<p>渲染的场景。除非<code v-pre>useDefaultRenderLoop</code>设置为false，否则自动调用此函数。</p>
<h3 id="resize" tabindex="-1"><a class="header-anchor" href="#resize" aria-hidden="true">#</a> <a href="">resize()</a></h3>
<p>调整部件的大小以匹配容器的大小。 除非<code v-pre>useDefaultRenderLoop</code>被设置为false，否则将根据需要自动调用此函数。</p>
<h3 id="zoomto-target-offset-promise-boolean" tabindex="-1"><a class="header-anchor" href="#zoomto-target-offset-promise-boolean" aria-hidden="true">#</a> <a href="">zoomTo(target, offset): Promise&lt;Boolean&gt;</a></h3>
<p>异步设置相机以查看提供的实体、实体集或数据源。 如果数据源仍然在加载过程中，或者可视化仍然在加载中，则此方法将等待数据准备好后再执行缩放。</p>
<p>偏移量是在以包围球中心为中心的当地东北向上（east-north-up）参考坐标系中的航向/俯仰/范围（heading/pitch/range）。 航向和俯仰角是在当地的东北向上（east-north-up）参考系中确定的。 航向（heading）是从y轴向x轴递增的角度。俯仰（Pitch）是从xy平面旋转过来的。正俯仰角在平面之上。负俯仰角在平面以下。 范围是到中心的距离。如果范围为零，则计算范围使整个包围球可见。</p>
<p>在2D中，必须是一个自顶向下的视图。相机将被放置在目标上方向下看。目标上方的高度将是范围。 航向（heading）将从偏移量确定。如果无法从偏移量确定航向，则航向为北。</p>
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
<td style="text-align:left"><code v-pre>target</code></td>
<td style="text-align:left">Entity</td>
<td style="text-align:left">要查看的实体。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>offset</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/HeadingPitchRange.html" target="_blank" rel="noopener noreferrer">HeadingPitchRange<ExternalLinkIcon/></a></td>
<td style="text-align:left">optional在本地东北方向上（east-north-up）的参考系中，从实体中心的偏移量。</td>
</tr>
</tbody>
</table>
<p><strong>返回值</strong>: 缩放成功时，promise被解析为true；如果实体未在场景中可视化或缩放取消，promise被解析为false。</p>
</div></template>


