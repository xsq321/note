<template>
  <div id="mapview"></div>
</template>

<script>
//引入loadModules
import { loadModules } from "esri-loader";
const options = {
  //引入ArcGIS API
  url: "https://js.arcgis.com/4.18/init.js",
  css: "https://js.arcgis.com/4.18/esri/themes/light/main.css",
};
export default {
  name: "MapView",
  components: {},
  //mounted 生命周期函数，在MapView组件创建完成之后就会执行里面的函数
  mounted: function () {
    this._createMapView();
  },
  methods: {
    //   创建地图视图
    //async await是成对出现的，意思是把那些模块加载完成之后才可以执行后面的代码
    async _createMapView() {
      const [Map, MapView, Basemap, TileLayer, BasemapToggle, ScaleBar] =
        await loadModules(
          [
            "esri/Map",
            "esri/views/MapView",
            "esri/Basemap",
            "esri/layers/TileLayer",
            "esri/widgets/BasemapToggle",
            "esri/widgets/ScaleBar",
          ],
          options
        );
      let basemap = new Basemap({
        baseLayers: [
          new TileLayer({
            url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
            title: "Basemap",
          }),
          // new TileLayer({
          //   url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer",
          //   title: "Basemap2",
          // }),
        ],
        title: "basemap",
        id: "basemap",
      });
      const map = new Map({
        basemap: basemap,
      });
      const view = new MapView({
        container: "mapview",
        center: [108, 32],
        map: map,
        zoom: 5,
      });
      console.log(view);

      const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap:
          "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer",
      });
      view.ui.add(basemapToggle, {
        position: "bottom-right",
      });

      const scaleBar = new ScaleBar({
        view: view,
        unit: "metric",
        // container: 'scale_Bar' //指定容器，然后对容器进行定位以实现位置的调整
      });
      view.ui.add(scaleBar, {
        position: "bottom-left",
      });
    },
  },
};
</script>

<style>
#mapview {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
