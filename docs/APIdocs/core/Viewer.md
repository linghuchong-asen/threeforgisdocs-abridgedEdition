

# 视窗(Viewer)

视窗是承载应用的基本部件。创建一个Viewer实例即创建一个场景窗口。

## 构造器

**Viewer(containerId,options)**

| Name        | Type              | Description                       |
| :---------- | :---------------- | :-------------------------------- |
| `container` | Element \| String | 将容纳Viewer的HTML DOM 元素或ID。 |

对象，具有以下属性：


| Name                                                         | Type                                                | Default                                                      | Description                                                  |
| :----------------------------------------------------------- | :-------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `animation`                                                  | Boolean                                             | `true`                                                       | `optional`是否创建Animation部件。                            |
| `fullscreenButton`                                           | Boolean                                             | `true`                                                       | `optional`如果设置为false，则不会创建FullscreenButton部件。  |
| `vrButton`                                                   | Boolean                                             | `false`                                                      | `optional`如果设置为true，将创建VRButton部件                 |
| `homeButton`                                                 | Boolean                                             | `true`                                                       | `optional`如果设置为false，则不会创建HomeButton部件。        |
| `infoBox`                                                    | Boolean                                             | `true`                                                       | `optional`如果设置为false，则不会创建InfoBox部件。           |
| `sceneModePicker`                                            | Boolean                                             | `true`                                                       | `optional`如果设置为false，将不会创建SceneModePicker部件。   |
| `selectionIndicator`                                         | Boolean                                             | `true`                                                       | `optional`如果设置为false，则不会创建SelectionIndicator部件。 |
| `timeline`                                                   | Boolean                                             | `true`                                                       | `optional`如果设置为false，则不会创建Timeline部件。          |
| `navigationHelpButton`                                       | Boolean                                             | `true`                                                       | `optional`如果设置为false，将不会创建NavigationHelpButton。  |
| `scene3DOnly`                                                | Boolean                                             | `false`                                                      | `optional`当`true`时，为了节省GPU内存，每个几何实例只会在3D下被渲染。 |
| `shouldAnimate`                                              | Boolean                                             | `false`                                                      | `optional`如果时钟默认尝试使仿真时间前进，则为`true`，否则为`false`。此选项优先于设置[`Viewer#clockViewModel`](https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html#clockViewModel)。 |
| `clockViewModel`                                             | ClockViewModel                                      | <div style="width:100px">`new ClockViewModel(options.clock)`</div> | `optional`用于控制当前时间的ClockViewModel。                 |
| `skyBox`                                                     | SkyBox                                              |                                                              | `optional`用于渲染星辰的天空盒，未定义时，使用默认星辰效果。 |
| `skyAtmosphere`                                              | SkyAtmosphere                                       |                                                              | `optional`环绕地球边缘的蓝天和光晕效果，设置为`false`可将其关闭。 |
| `fullscreenElement`                                          | Element \| String                                   | `document.body`                                              | `optional`当按下全屏按钮时，要放置到全屏模式的元素或id。     |
| `useDefaultRenderLoop`                                       | Boolean                                             | `true`                                                       | `optional`如果此部件需要控制渲染循环，则为true，否则为false。 |
| `targetFrameRate`                                            | Number                                              |                                                              | `optional`使用默认渲染循环时的目标帧速率。                   |
| `showRenderLoopErrors`                                       | Boolean                                             | `true`                                                       | `optional`如果为true，如果出现渲染循环错误，此部件将自动向用户显示包含错误的HTML面板。 |
| <div style="width:100px">`useBrowserRecommendedResolution`</div> | Boolean                                             | `false`                                                      | `optional`如果为true，则按照浏览器推荐的分辨率渲染，忽略`window.devicePixelRatio`。 |
| `contextOptions`                                             | Object                                              |                                                              | `optional`Context 和 WebGL 的创建属性，与传递给[`Scene`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html)的`options`相一致。 |
| `sceneMode`                                                  | SceneMode                                           | <div style="width:100px">`SceneMode.SCENE3D`</div>           | `optional`初始场景模式（SceneMode）。                        |
| `mapProjection`                                              | MapProjection                                       | <div style="width:100px">`new GeographicProjection()`</div>  | `optional`在2D和哥伦布视图模式中使用的地图投影。             |
| <div style="width:100px">`orderIndependentTranslucency`</div> | Boolean                                             | `true`                                                       | `optional`如果为true，且设备支持，则使用与顺序无关的半透明性。 |
| `dataSources`                                                | <div style="width:20px">DataSource Collection</div> | <div style="width:100px">`new DataSourceCollection()`</div>  | `optional`由部件可视化的数据源集合。如果提供了该参数，则假定该实例为调用者所有，并且不会在销毁查看器（viewer）时销毁该实例。 |
| `shadows`                                                    | Boolean                                             | `false`                                                      | `optional`确定阴影是否由太阳投射形成。                       |
| `mapMode2D`                                                  | MapMode2D                                           | <div style="width:100px">`MapMode2D.INFINITE_SCROLL`</div>   | `optional`确定2D地图是可旋转的，还是可以在水平方向上无限滚动。 |
| `projectionPicker`                                           | Boolean                                             | `false`                                                      | `optional`如果设置为true，则会创建ProjectionPicker部件。     |
| `requestRenderMode`                                          | Boolean                                             | `false`                                                      | `optional`如果为true，渲染帧将只在需要时发生，由场景中的变化决定。启用可减少应用程序的CPU/GPU使用量， 并减少移动设备上的电池消耗，但需要使用[`Scene#requestRender`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#requestRender)在此模式下显式渲染新帧。在许多情况下，在API的其他部分对场景进行更改之后，这将是必要的。 请参考[Improving Performance with Explicit Rendering](https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/)。 |
| <div style="width:100px">`maximumRenderTimeChange`</div>     | Number                                              | `0.0`                                                        | `optional`如果requestRenderMode为true，则此值定义在渲染被请求之前允许的最大仿真时间更改。 请参考[Improving Performance with Explicit Rendering](https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/)。 |

## 代码实例

::: code-tabs#Viewer

@tab html

```html
<div id="containerId"></div>
```
@tab ts

```ts
const viewer = new WebGis.Viewer(containerId)
```

:::

## 属性

### **[camera]()**

获取或设置相机

###  [container : Element]()

获取父容器。

### [**Entities: EntityGroup**]()

获取未关联到特定数据源的实体集合

### [fullscreenButton : FullscreenButton]()

`readonly`

获取全屏按钮（FullscreenButton）。

### [homeButton : HomeButton]()

`readonly`

获取主画面按钮（HomeButton）。

### [infoBox : InfoBox]()

`readonly`

获取消息盒（InfoBox）。

### [navigationHelpButton : NavigationHelpButton]()

`readonly`

获取导航帮助按钮（NavigationHelpButton）。

### [postProcessStages : PostProcessStageCollection]()

`readonly`

获取后处理阶段集合（PostProcessStageCollection）。

### [resolutionScale : Number]()

获取或设置渲染分辨率的比例因子。 小于1.0的值可以在功能较弱的设备上提高性能，而大于1.0的值将以更高的分辨率渲染，然后缩小比例，从而提高视觉保真度。 例如，如果部件的大小为640x480，将该值设置为0.5将导致场景以320x240的大小呈现，然后按比例放大， 而将其设置为2.0将导致场景以1280x960的大小呈现，然后按比例缩小。

### **[Scene]()**

获取场景Scene

### [sceneModePicker : SceneModePicker]()

`readonly`

获取场景模式选择器（SceneModePicker）。

### [screenSpaceEventHandler : ScreenSpaceEventHandler]()

`readonly`

获取屏幕空间事件处理程序（ScreenSpaceEventHandler）。

### [selectedEntity : Entity]()

获取或设置要为其显示选择指示符的对象实例。

### [selectedEntityChanged : Event]()

`readonly`

获取所选实体更改时引发的事件。

### [selectionIndicator : SelectionIndicator]()

`readonly`

获取选择指示器（SelectionIndicator）。

### **[shadows : Boolean]()**

确定阴影是否由太阳投射形成。

### [trackedEntity : Entity]()

获取或设置相机当前跟踪的实体实例。

### [trackedEntityChanged : Event]()

`readonly`

获取被跟踪实体更改时引发的事件。

### [useBrowserRecommendedResolution : Boolean]()

指示是否使用浏览器的推荐分辨率的布尔值。 如果为true，则忽略浏览器的设备像素比，代之以1.0，有效地基于CSS像素而不是设备像素进行渲染。这可以提高具有高像素密度的低功能设备的性能。 当为false时，渲染将以设备像素为单位。无论这个布尔值是true还是false，[`Viewer#resolutionScale`](https://www.vvpstk.com/public/Cesium/Documentation/Viewer.html#resolutionScale)仍然有效。

### [useDefaultRenderLoop : Boolean]()

获取或设置此部件是否应控制渲染循环。 如果设置为true，部件将使用[`requestAnimationFrame`](https://www.vvpstk.com/public/Cesium/Documentation/requestAnimationFrame.html)来执行部件的渲染和调整大小，以及驱动仿真时钟。 如果设置为false，您必须手动调用`resize`， `render`方法作为自定义渲染循环的一部分。 如果在渲染过程中出现错误，[`Scene`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html)的`renderError`事件将被触发，该属性将被设置为false。 必须将其设置为true，以便在发生错误后继续渲染。

### [vrButton : VRButton]()

`readonly`

获取VRButton。

## 方法

### [destroy()]()

销毁部件。如果从布局中永久删除viewer部件，则应调用。

### [flyTo (target, options ): Promise&lt;boolean&gt;]()

相机定位到指定实体或者图元处，相机移动过程有一个动画效果。

| Name     | Type   | Description    |
| :------- | :----- | :------------- |
| `target` | Entity | 要查看的实体。 |

对象，具有以下属性：

| Name            | Type                                                         | Default | Description                                                  |
| :-------------- | :----------------------------------------------------------- | :------ | :----------------------------------------------------------- |
| `duration`      | Number                                                       | `3.0`   | `optional`飞行时间以秒为单位。                               |
| `maximumHeight` | Number                                                       |         | `optional`飞行中的最高高度。                                 |
| `offset`        | [HeadingPitchRange](https://www.vvpstk.com/public/Cesium/Documentation/HeadingPitchRange.html) |         | `optional`在当地的东北向上（east-north-up）参考系中从目标到以目标为中心的偏移量。 |

**返回值**：飞行成功时，promise被解析为true；如果实体未在场景中可视化或飞行取消，promise被解析为false。

### [forceResize()]()

这迫使部件重新考虑它的布局，包括部件大小和版权的放置。

### [isDestroyed(): Boolean]()

**返回值**: 如果对象已被销毁，则为true，否则为false。

### [render()]()

渲染的场景。除非`useDefaultRenderLoop`设置为false，否则自动调用此函数。

### [resize()]()

调整部件的大小以匹配容器的大小。 除非`useDefaultRenderLoop`被设置为false，否则将根据需要自动调用此函数。

### [zoomTo(target, offset): Promise&lt;Boolean&gt;]()

异步设置相机以查看提供的实体、实体集或数据源。 如果数据源仍然在加载过程中，或者可视化仍然在加载中，则此方法将等待数据准备好后再执行缩放。

偏移量是在以包围球中心为中心的当地东北向上（east-north-up）参考坐标系中的航向/俯仰/范围（heading/pitch/range）。 航向和俯仰角是在当地的东北向上（east-north-up）参考系中确定的。 航向（heading）是从y轴向x轴递增的角度。俯仰（Pitch）是从xy平面旋转过来的。正俯仰角在平面之上。负俯仰角在平面以下。 范围是到中心的距离。如果范围为零，则计算范围使整个包围球可见。

在2D中，必须是一个自顶向下的视图。相机将被放置在目标上方向下看。目标上方的高度将是范围。 航向（heading）将从偏移量确定。如果无法从偏移量确定航向，则航向为北。

| Name     | Type                                                         | Description                                                  |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `target` | Entity                                                       | 要查看的实体。                                               |
| `offset` | [HeadingPitchRange](https://www.vvpstk.com/public/Cesium/Documentation/HeadingPitchRange.html) | optional在本地东北方向上（east-north-up）的参考系中，从实体中心的偏移量。 |

**返回值**: 缩放成功时，promise被解析为true；如果实体未在场景中可视化或缩放取消，promise被解析为false。
