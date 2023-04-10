```js
import Map from "@arcgis/core/Map"
```

| Name                                                         | Type                                                         | Summary                                       | Class                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------ |
| [allLayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#allLayers) | [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) | 地图中所有层的扁平集合。                      | Map                                                          |
| [allTables](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#allTables) | [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) | 映射层次结构中任意位置的表的扁平集合。        | Map                                                          |
| [basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap) | [Basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html) | 指定映射的基映射。                            | Map                                                          |
| [declaredClass](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#declaredClass) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 类的名称                                      | [Accessor](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html#declaredClass) |
| [editableLayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#editableLayers) | Collection                                                   | 可编辑图层的集合。                            | Map                                                          |
| [ground](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#ground) | [Ground](https://developers.arcgis.com/javascript/latest/api-reference/esri-Ground.html) | 指定映射的表面属性。                          | Map                                                          |
| [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) | [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) | 操作层的集合。                                | Map                                                          |
| [tables](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#tables) | Collection                                                   | 层实例的集合，它们是保存在Map或WebMap中的表。 | Map                                                          |



| Name                                                         | Return Type                                                  | Summary                                                | Class |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------ | ----- |
| [add()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#add) |                                                              | 向layers集合添加一个层。                               | Map   |
| [addMany()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#addMany) |                                                              | 将层或层数组添加到层集合。                             | Map   |
| [destroy()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#destroy) |                                                              | 破坏映射和任何关联的资源，包括它的层、基图、表和地面。 | Map   |
| [findLayerById()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#findLayerById) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) | 根据给定的层ID返回一个层。                             | Map   |
| [findTableById()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#findTableById) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) | 根据给定的表ID返回一个表。                             | Map   |
| [remove()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#remove) | Layer                                                        | 从层集合中移除指定的层。                               | Map   |
| [removeAll()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#removeAll) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) | 删除所有层。                                           | Map   |
| [removeMany()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#removeMany) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | 删除指定的层。                                         | Map   |
| [reorder()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#reorder) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) | 改变图层的顺序                                         | Map   |



详情见：https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html



```js
map.allLayers.on('change',function(event){
  console.log(event)
	console.log(event.added)
})
```

