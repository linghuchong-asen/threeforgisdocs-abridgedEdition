# 视窗(Viewer)

视窗是承载应用的基本部件。创建一个Viewer实例即创建一个场景窗口。

## 构造器

**Viewer(id: string)**

id - 容纳Viewer的HTML DOM 元素的id。

## 代码实例

```js
html部分
<div id="containerId"></div>

js部分
const viewer = new WebGis.Viewer(containerId)
```

## 属性

**[camera]()**

获取或设置相机

**[Scene]()**

获取场景Scene

[**Entities: EntityGroup**]()

获取未关联到特定数据源的实体集合

## 方法

**[flyTo (target:Entity|Primitive, options:Object ): boolean]()**

相机定位到指定实体或者图元处，相机移动过程有一个动画效果。

