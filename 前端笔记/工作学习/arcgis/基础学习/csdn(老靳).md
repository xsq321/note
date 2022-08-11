具体代码在 hello-webgis 文件夹内

#### 1. 引入 gis 功能

好像已经被 @arcgis/core 淘汰了

```js
//npm i -d esri-loader

//引入loadModules
import { loadModules } from "esri-loader";
const options = {
  //引入ArcGIS API
  url: "https://js.arcgis.com/4.18/init.js",
  css: "https://js.arcgis.com/4.18/esri/themes/light/main.css",
};
```

具体查看：https://blog.csdn.net/qq_35093027/article/details/124304602?spm=1001.2014.3001.5502



#### 2. 一些功能

| 代码、模块                | 作用                                                         |
| ------------------------- | ------------------------------------------------------------ |
| Basemap 和 TileLayer 模块 | 配合使用可以自定义底图，具体：arcgis js学习-study-csdn-MapView |
| BasemapToggle 模块        | 可切换底图，nextBasemap 中甚至可以直接写 url                 |
| ScaleBar 模块             | 比例尺小部件；unit: 'metric' 可以将单位改为 km               |
| QueryTask 模块            | queryTask.execute(query).then((results) => {} 可对图层执行查询操作 |
|                           |                                                              |

