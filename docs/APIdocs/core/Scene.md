# 场景(Scene)

场景能够让你在什么地方、摆放什么东西来交给引擎来渲染，这是你放置物体、灯光和摄像机的地方。

## 构造器

**Scene()**

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
