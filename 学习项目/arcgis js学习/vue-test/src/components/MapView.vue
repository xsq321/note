<template>
  <div id="content"></div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
export default {
  methods: {
    _createMapView: function () {
      const map = new Map({
        //定义map
        basemap: "osm", //地图类型
        ground: "world-elevation",
      });
      const view = new MapView({
        // eslint-disable-line no-unused-vars
        container: "content", //容器
        map: map, //使用map
        zoom: 4, //地图缩放大小
        //经度纬度
        center: [100, 30], //可自定义
      });
      this.view = view;
    },
  },
  mounted: function () {
    this._createMapView();
  },
};
</script>

<style scoped>
#content {
  width: 100%;
  height: 800px;
  margin: 0 auto;
}
</style>
