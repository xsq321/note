```js
import Map from "@arcgis/core/Map"
```

| Name                                                         | Type                                                         | Summary                                                      | Class                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [allLayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#allLayers) | [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) | A flattened collection of all [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) in the map. | Map                                                          |
| [allTables](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#allTables) | [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) | A flattened collection of tables anywhere in the map's hierarchy. | Map                                                          |
| [basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap) | [Basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html) | Specifies a basemap for the map.                             | Map                                                          |
| [declaredClass](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#declaredClass) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the class.                                       | [Accessor](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html#declaredClass) |
| [editableLayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#editableLayers) | [Collection                                                  | A collection of editable layers.                             | Map                                                          |
| [ground](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#ground) | [Ground](https://developers.arcgis.com/javascript/latest/api-reference/esri-Ground.html) | Specifies the surface properties for the map.                | Map                                                          |
| [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) | [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) | A collection of operational [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html). | Map                                                          |
| [tables](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#tables) | [Collection                                                  | A collection of [layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) instances that are tables saved in a [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) and/or a [WebMap](https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html). | Map                                                          |



| Name                                                         | Return Type                                                  | Summary                                                      | Class |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ----- |
| [add()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#add) |                                                              | Adds a layer to the [layers collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers). | Map   |
| [addMany()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#addMany) |                                                              | Adds a layer or an array of layers to the [layers collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers). | Map   |
| [destroy()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#destroy) |                                                              | Destroys the map, and any associated resources, including its [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers), [basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap), [tables](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#tables), and [ground](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#ground). | Map   |
| [findLayerById()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#findLayerById) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) | Returns a layer based on the given layer ID.                 | Map   |
| [findTableById()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#findTableById) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) | Returns a table based on the given table ID.                 | Map   |
| [remove()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#remove) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) | Removes the specified layer from the layers collection.      | Map   |
| [removeAll()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#removeAll) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Removes all layers.                                          | Map   |
| [removeMany()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#removeMany) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Removes the specified layers.                                | Map   |
| [reorder()](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#reorder) | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) | Changes the layer order.  改变图层的顺序                     | Map   |



详情见：https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html



```js
map.allLayers.on('change',function(event){
  console.log(event)
	console.log(event.added)
})
```

