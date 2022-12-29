# 场景(Scene)

场景能够让你在什么地方、摆放什么东西来交给引擎来渲染，这是你放置物体、灯光和摄像机的地方。

## 构造器

**Scene(options)**

options具有下列属性的对象：

| Name                                                         | Type          | Default                                                     | Description                                                  |
| :----------------------------------------------------------- | :------------ | :---------------------------------------------------------- | :----------------------------------------------------------- |
| `canvas`                                                     | Canvas        |                                                             | 用于创建场景的HTML canvas元素。                              |
| `contextOptions`                                             | Object        |                                                             | `optional`上下文和WebGL属性，详细信息参见上面。              |
| `mapProjection`                                              | MapProjection | <div style="width:100px">`new GeographicProjection()`</div> | `optional`在2D和Columbus View模式下使用的地图投影。          |
| <div style="width:100px">`orderIndependentTranslucency`</div> | Boolean       | `true`                                                      | `optional`如果为true并且配置支持，则使用与顺序无关的半透明性。 |
| `scene3DOnly`                                                | Boolean       | `false`                                                     | `optional`如果为true则为3D模式优化内存使用和性能，但是禁止使用2D和Columbus View模式。 |
| `shadows`                                                    | Boolean       | `false`                                                     | `optional`确定阴影是不是来自于太阳照射。                     |
| `mapMode2D`                                                  | MapMode2D     | <div style="width:100px">`MapMode2D.INFINITE_SCROLL`</div>  | `optional`确定二维地图是可以旋转（MapMode2D.ROTATE）还是可以在水平方向无限滚动（MapMode2D.INFINITE_SCROLL）。 |
| <div style="width:100px">`requestRenderMode`</div>           | Boolean       | `false`                                                     | `optional`如果为true，则只在场景变化时渲染帧，开启可以提高程序性能，但是需要使用 [`Scene#requestRender`](https://www.vvpstk.com/public/Cesium/Documentation/Scene.html#requestRender) 去创建渲染新的一帧，在很多情况下这是必要的（比如在API的其它部分对场景进行更改后）。 详细情况参考 [Improving Performance with Explicit Rendering](https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/)。 |
| <div style="width:100px">`maximumRenderTimeChange`</div>     | Number        | `0.0`                                                       | `optional`如果requestRenderMode为true，则此值定义在请求渲染之前允许的最大仿真时间更改。 详细情况参考 [Improving Performance with Explicit Rendering](https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/)。 |

## 示例代码

```javascript
// 创建没有各向异性纹理过滤的场景
var scene = new Cesium.Scene({
  canvas : canvas,
  contextOptions : {
    allowTextureFilterAnisotropic : false
  }
});
```

## 属性

### **[camera]()**

获取或者设置相机

### **[primitives: PrimitiveGroup]()**

获取要素的合集

### **[Fog]()**

雾。默认undefined。

### **[light]()**

灯光。有PointLight与DirectionalLight两种，默认PointLight。

### **[postProcessStages]()**

后处理效果应用于最终渲染。

### **[postRender]()**

获取将在渲染场景后立即引发的事件。活动订阅者接收Scene实例作为第一个参数，并接收当前时间作为第二个参数。

### **[preRender]()**

获取在场景更新之后以及场景渲染之前立即引发的事件。事件的订阅者将Scene实例作为第一个参数，将当前时间作为第二个参数参数。

### **[skyBox]()**

天空盒。默认undefined。

### **[screenSpaceCameraController]()**

获取用于摄像机输入处理的控制器。

## 方法

### [drillPick(windowPosition:Vector2):Object[]]()

拾取场景中的实体Entit或图元Primitive。可获取射线相交的所有对象。

### [pick(windowPosition:Vector2):Object]()

拾取场景中的实体Entit或图元Primitive。只可获取第一个对象。

### [pickPosition(windowPosition, result):  Vector3]()

拾取物体上的位置

| Name             | Type    | Description                |
| :--------------- | :------ | :------------------------- |
| `windowPosition` | Vector2 | 执行拾取的窗口坐标。       |
| `result`         | Vector3 | `optional`存储结果的对象。 |

返回值: 笛卡尔位置。
