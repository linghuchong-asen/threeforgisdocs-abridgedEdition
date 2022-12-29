**拾取模型点**

```js
const viewer = new Webgis.Viewer(WebgisContainer)
viewer.screenSpaceEventHandler.setInputAction(function (clickEvent) {
            var ray1 = viewer.camera.getPickRay(clickEvent.position);
            var pick = viewer.scene.pickPosition(clickEvent.position);
            var pickModel = viewer.scene.pick(clickEvent.position);
            if (pickModel && pick && !pickModel.id) {
                var height = WebgisWebgisWebgis.Cartographic.fromCartesian(pick).height;
                var lat = WebgisWebgis.Math.toDegrees(Cesium.Cartographic.fromCartesian(pick).latitude);
                var lng = Webgis.Math.toDegrees(Cesium.Cartographic.fromCartesian(pick).longitude);
                cartesian = Webgis.Cartesian3.fromDegrees(lng, lat, height);
                 console.log('模型高度点',cartesian);
            }
 }, Webgis.ScreenSpaceEventType.LEFT_CLICK);

```

