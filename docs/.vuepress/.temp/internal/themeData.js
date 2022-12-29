export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$56.gysjuV1sPl93zQod0K.FjHChGuIxidCeoylR8aT7E78DbiR/Xu\"],\"/zh/demo/encrypt.html\":[\"$2a$10$K/suPYdUcQc3uIuXxaee6.10RmtPfHFKGWgEDiaHQtxoSor0cgE6W\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":{\"blue\":\"#2196f3\",\"red\":\"#f26d6d\",\"green\":\"#3eaf7c\",\"orange\":\"#fb9b5f\"},\"fullscreen\":true,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameOnMobile\":true,\"sidebar\":{\"/APIdocs/\":[{\"text\":\"介绍\",\"link\":\"/APIdocs/index.md\"},{\"text\":\"基础\",\"link\":\"/APIdocs/core/Viewer.md\",\"collapsible\":true,\"children\":[{\"text\":\"Viewer\",\"link\":\"/APIdocs/core/Viewer.md\"},{\"text\":\"Scene\",\"link\":\"/APIdocs/core/Scene.md\"},{\"text\":\"Camera\",\"link\":\"/APIdocs/core/Camera.md\"}]},{\"text\":\"实体\",\"link\":\"/APIdocs/entity/Entity.md\",\"collapsible\":true,\"children\":[{\"text\":\"实体\",\"link\":\"/APIdocs/entity/Entity.md\"},{\"text\":\"实体组\",\"link\":\"/APIdocs/entity/EntityGroup.md\"},{\"text\":\"广告牌\",\"link\":\"/APIdocs/entity/BillboardGraphics.md\"},{\"text\":\"立方体\",\"link\":\"/APIdocs/entity/BoxGraphics.md\"},{\"text\":\"走廊\",\"link\":\"/APIdocs/entity/CorridorGraphics.md\"},{\"text\":\"圆柱/圆锥/圆台\",\"link\":\"/APIdocs/entity/CylinderGraphics.md\"},{\"text\":\"椭圆\",\"link\":\"/APIdocs/entity/EllipseGraphics.md\"},{\"text\":\"椭球/球体\",\"link\":\"/APIdocs/entity/EllipsoidGraphics.md\"},{\"text\":\"文本\",\"link\":\"/APIdocs/entity/LabelGraphics.md\"},{\"text\":\"模型\",\"link\":\"/APIdocs/entity/ModelGraphics.md\"},{\"text\":\"路径\",\"link\":\"/APIdocs/entity/PathGraphics.md\"},{\"text\":\"平面\",\"link\":\"/APIdocs/entity/PlaneGraphics.md\"},{\"text\":\"点\",\"link\":\"/APIdocs/entity/PointGraphics.md\"},{\"text\":\"多边形\",\"link\":\"/APIdocs/entity/PolygonGraphics.md\"},{\"text\":\"多段线\",\"link\":\"/APIdocs/entity/PolylineGraphics.md\"},{\"text\":\"多段线柱体\",\"link\":\"/APIdocs/entity/PolylineVolumeGraphics.md\"},{\"text\":\"矩形\",\"link\":\"/APIdocs/entity/RectangleGraphics.md\"},{\"text\":\"墙\",\"link\":\"/APIdocs/entity/WallGraphics.md\"}]}],\"/example/\":[{\"text\":\"案例\",\"link\":\"/example/Add_Entity.md\",\"collapsible\":true,\"children\":[{\"text\":\"添加Entity\",\"link\":\"/example/Add_Entity.md\"},{\"text\":\"添加Primitive\",\"link\":\"/example/Add_Primitive.md\"},{\"text\":\"相机飞行\",\"link\":\"/example/Camera.md\"},{\"text\":\"加载模型\",\"link\":\"/example/EntityModel.md\"},{\"text\":\"画点\",\"link\":\"/example/EntityPoint.md\"},{\"text\":\"多段线\",\"link\":\"/example/EntityPolyline.md\"},{\"text\":\"多边形\",\"link\":\"/example/EntityPolygon.md\"}]}]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"杨森\"},\"logo\":\"/logo-removeBg-preview.png\",\"docsDir\":\"demo/theme-docs/src\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbar\":[{\"text\":\"API文档\",\"icon\":\"note\",\"link\":\"/APIdocs/\"},{\"text\":\"案例\",\"icon\":\"code\",\"link\":\"/example/\"}],\"navbarLayout\":{\"left\":[\"Brand\",\"Search\"],\"center\":[],\"right\":[\"Links\",\"Outlook\"]},\"footer\":\"用户版\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
