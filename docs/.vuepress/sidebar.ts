import { sidebar } from "vuepress-theme-hope";

export const sidebar_hope = sidebar({
  "/APIdocs/": [
    /* vuepress会自动解析文档的标题；侧边栏的顺序就是这里md文档的顺序；文档的名称不能使用中文；文件夹名称不能使用中文 */
    {
      text: "介绍",
      link: "/APIdocs/index.md",
    },
    {
      text: "基础",
      link: "/APIdocs/core/Viewer.md",
      collapsible: true,
      children: [
        { text: "Viewer", link: "/APIdocs/core/Viewer.md" },
        { text: "Scene", link: "/APIdocs/core/Scene.md" },
        { text: "Camera", link: "/APIdocs/core/Camera.md" },
      ],
    },
    {
      text: "实体",
      link: "/APIdocs/entity/Entity.md",
      collapsible: true,
      children: [
        { text: "实体", link: "/APIdocs/entity/Entity.md" },
        { text: "实体组", link: "/APIdocs/entity/EntityGroup.md" },
        { text: "广告牌", link: "/APIdocs/entity/BillboardGraphics.md" },
        { text: "立方体", link: "/APIdocs/entity/BoxGraphics.md" },
        { text: "走廊", link: "/APIdocs/entity/CorridorGraphics.md" },
        {
          text: "圆柱/圆锥/圆台",
          link: "/APIdocs/entity/CylinderGraphics.md",
        },
        { text: "椭圆", link: "/APIdocs/entity/EllipseGraphics.md" },
        { text: "椭球/球体", link: "/APIdocs/entity/EllipsoidGraphics.md" },
        { text: "文本", link: "/APIdocs/entity/LabelGraphics.md" },
        { text: "模型", link: "/APIdocs/entity/ModelGraphics.md" },
        { text: "路径", link: "/APIdocs/entity/PathGraphics.md" },
        { text: "平面", link: "/APIdocs/entity/PlaneGraphics.md" },
        { text: "点", link: "/APIdocs/entity/PointGraphics.md" },
        { text: "多边形", link: "/APIdocs/entity/PolygonGraphics.md" },
        { text: "多段线", link: "/APIdocs/entity/PolylineGraphics.md" },
        {
          text: "多段线柱体",
          link: "/APIdocs/entity/PolylineVolumeGraphics.md",
        },
        { text: "矩形", link: "/APIdocs/entity/RectangleGraphics.md" },
        { text: "墙", link: "/APIdocs/entity/WallGraphics.md" },
      ],
    },
  ],
  "/example/": [
    {
      text: "案例",
      link: "/example/Add_Entity.md",
      collapsible: true,
      children: [
        { text: "添加Entity", link: "/example/Add_Entity.md" },
        {
          text: "添加Primitive",
          link: "/example/Add_Primitive.md",
        },
        {
          text: "相机飞行",
          link: "/example/Camera.md",
        },
        {
          text: "加载模型",
          link: "/example/EntityModel.md",
        },
        {
          text: "画点",
          link: "/example/EntityPoint.md",
        },
        {
          text: "多段线",
          link: "/example/EntityPolyline.md",
        },
        {
          text: "多边形",
          link: "/example/EntityPolygon.md",
        },
        {
          text: "拾取点",
          link: "/example/pickPoint.md",
        },
      ],
    },
  ],
});
