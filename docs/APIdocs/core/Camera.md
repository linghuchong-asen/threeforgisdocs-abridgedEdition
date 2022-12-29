# 相机(Camera)

由位置、方向和视锥体定义的相机。

## 构造器

**Camera(scene: Scene)**

## 示例代码

```js
const camera = new WebGis.Camera(scene)
```

## 属性

### [DEFAULT_OFFSET]()

当相机拉近到物体包围球时，默认的heading/pitch/range值。

### [DEFAULT_VIEW_FACTOR]()

该值用来确定相机位置，当值为0是相机观察范围是整个`Camera#DEFAULT_VIEW_RECTANGLE`，大于0时远离`Camera#DEFAULT_VIEW_RECTANGLE`， 小于0时向`Camera#DEFAULT_VIEW_RECTANGLE`拉近。

### [DEFAULT_VIEW_RECTANGLE]()

相机在创建时查看的默认矩形位置。

### [direction ]()

相机的观察方向。

### [frustum ]()

视锥(平截头体)。可选值：`PerspectiveFrustum`，`OrthographicFrustum`;默认值`PerspectiveFrustum`

### [heading]()

获取相机的偏航角，以弧度表示。

### [pitch]()

获取相机的俯仰角，以弧度表示。

### [position]()

相机的位置。

### [roll]()

获取相机的翻滚角，以弧度表示。

### [up ]()

相机向上的方向。

## 方法

### [flyTo(options)]()

options具有下列属性：

| Name          | Type    | Description                                          |
| :------------ | :------ | :--------------------------------------------------- |
| `destination` | Vector3 | 相机的位置。                                         |
| `orientation` | Object  | `可选`optional包含相机偏航角、俯仰角、翻滚角的对象。 |
| `duration`    | Number  | `可选`optional飞行时间以秒为单位。                   |

### [getPickRay(windowPosition, result):Ray]()

在世界坐标中，通过像素位置`windowPosition`，从相机位置创建一条射线。

| Name             | Type                                                         | Description              |
| :--------------- | :----------------------------------------------------------- | :----------------------- |
| `windowPosition` | [Cartesian2](https://www.vvpstk.com/public/Cesium/Documentation/Cartesian2.html) | 一个像素的x和y坐标。     |
| `result`         | [Ray](https://www.vvpstk.com/public/Cesium/Documentation/Ray.html) | optional存储结果的对象。 |

返回值:返回`Vector3`射线的位置和方向

### [lookAt(target:Vector3)]()

使用目标和偏移量设置相机的位置和方向，目标必须用世界坐标表示，偏移量可以是一个笛卡尔坐标，也可以是在以目标为中心的局部东北向上参考系中的heading/pitch/range。

