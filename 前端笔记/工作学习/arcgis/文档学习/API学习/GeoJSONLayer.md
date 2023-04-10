```js
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
```



#### 1. 属性概述

| Name                                                         | Type                                                         | Summary                                                      | Class                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [blendMode](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#blendMode) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 混合模式是用来混合图层在一个图层中创建一个有趣的效果，甚至产生一个看起来像新的图层。 | GeoJSONLayer                                                 |
| [capabilities](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#capabilities) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | 描述该层的支持功能。                                         | GeoJSONLayer                                                 |
| [copyright](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#copyright) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 该层的版权信息。                                             | GeoJSONLayer                                                 |
| [customParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#customParameters) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | 一个自定义参数列表，附加到该层获取的所有资源的URL。          | GeoJSONLayer                                                 |
| [declaredClass](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#declaredClass) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 类的名称。                                                   | [Accessor](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html#declaredClass) |
| [definitionExpression](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#definitionExpression) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 用于筛选客户端特性的SQL where子句。                          | GeoJSONLayer                                                 |
| [displayField](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#displayField) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 层的主显示字段的名称。                                       | GeoJSONLayer                                                 |
| [editingEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#editingEnabled) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 指示该层是否可编辑。                                         | GeoJSONLayer                                                 |
| [effect](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#effect) | [Effect](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureEffect.html#Effect) | Effect提供了各种过滤器功能，可以在图层上执行，以实现不同的视觉效果，类似于图像过滤器的工作原理。 | GeoJSONLayer                                                 |
| [elevationInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#elevationInfo) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | 指定如何将特征放置在垂直轴(z)上。                            | GeoJSONLayer                                                 |
| [featureEffect](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#featureEffect) | [FeatureEffect](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureEffect.html) | featureEffect可以用来绘画好看的特征。                        | GeoJSONLayer                                                 |
| [featureReduction](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#featureReduction) | [Feature](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureReductionCluster.html) | 配置减少视图中点特征数量的方法。                             | GeoJSONLayer                                                 |
| [fields](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#fields) | [Field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | 层中字段的数组。                                             | GeoJSONLayer                                                 |
| [fieldsIndex](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#fieldsIndex) | [FieldsIndex](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FieldsIndex.html) | 一个方便的属性，可用于按名称对字段进行不区分大小写的查找。   | GeoJSONLayer                                                 |
| [fullExtent](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#fullExtent) | [Extent](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html) | 层的全部范围。                                               | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#fullExtent) |
| [geometryType](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#geometryType) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 层中特征的几何类型。                                         | GeoJSONLayer                                                 |
| [hasZ](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#hasZ) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 指示层中的客户端特征是否具有Z(高度)值。                      | GeoJSONLayer                                                 |
| [id](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#id) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 分配给层的唯一ID。                                           | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#id) |
| [isTable](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#isTable) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 如果该层是从服务中的非空间表加载的，则返回true。             | GeoJSONLayer                                                 |
| [labelingInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#labelingInfo) | [LabelClass](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | 此层的标签定义，指定为LabelClass的数组。                     | GeoJSONLayer                                                 |
| [labelsVisible](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#labelsVisible) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 指示是否显示该层标签。                                       | GeoJSONLayer                                                 |
| [legendEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#legendEnabled) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 指示该层是否包含在图例中。                                   | GeoJSONLayer                                                 |
| [listMode](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#listMode) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 指示该层应该如何在LayerList小部件中显示。                    | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#listMode) |
| [loaded](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#loaded) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 指示该层的资源是否已加载。                                   | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#loaded) |
| [loadError](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#loadError) | [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) | 如果加载时发生错误，则返回Error对象。                        | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#loadError) |
| [loadStatus](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#loadStatus) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 表示加载操作的状态。                                         | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#loadStatus) |
| [loadWarnings](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#loadWarnings) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | 加载时发生的警告列表。                                       | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#loadWarnings) |
| [maxScale](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#maxScale) | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | 图层在视图中可见的最大比例(放大最多)。                       | GeoJSONLayer                                                 |
| [minScale](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#minScale) | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | 图层在视图中可见的最小比例(大部分缩小)。                     | GeoJSONLayer                                                 |
| [objectIdField](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#objectIdField) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 包含层中每个特征的惟一值或标识符的字段的名称。               | GeoJSONLayer                                                 |
| [opacity](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#opacity) | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | 图层的不透明度。                                             | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#opacity) |
| [orderBy](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#orderBy) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | 确定在视图中绘制特征的顺序。                                 | GeoJSONLayer                                                 |
| [outFields](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#outFields) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | 来自geoJSON文件的字段名数组，用于包含每个特性。              | GeoJSONLayer                                                 |
| [popupEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#popupEnabled) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 指示当点击层中的特征时是否显示弹出窗口。                     | GeoJSONLayer                                                 |
| [popupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#popupTemplate) | [PopupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html) | 该层的弹出模板。                                             | GeoJSONLayer                                                 |
| [refreshInterval](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#refreshInterval) | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | 以分钟为单位的层刷新间隔。                                   | GeoJSONLayer                                                 |
| [renderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#renderer) | [Renderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html) | 分配给该层的渲染器。                                         | GeoJSONLayer                                                 |
| [screenSi.](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#screenSizePerspectiveEnabled) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 在SceneView中对屏幕大小的点符号应用透视缩放。                | GeoJSONLayer                                                 |
| [spatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#spatialReference) | [SpatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html) | 层的空间参考。                                               | GeoJSONLayer                                                 |
| [templates](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#templates) | [FeatureTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureTemplate.html)[[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | 在层中定义的特征模板数组。                                   | GeoJSONLayer                                                 |
| [timeExtent](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#timeExtent) | [TimeExtent](https://developers.arcgis.com/javascript/latest/api-reference/esri-TimeExtent.html) | 该层的时间范围。                                             | GeoJSONLayer                                                 |
| [timeInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#timeInfo) | [TimeInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html) | TimeInfo提供了诸如存储每个特性的开始和结束时间的日期字段以及该层的fullTimeExtent等信息。 | GeoJSONLayer                                                 |
| [timeOffset](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#timeOffset) | [TimeInterval](https://developers.arcgis.com/javascript/latest/api-reference/esri-TimeInterval.html) | 基于某个时间间隔的时间数据的临时偏移量。                     | GeoJSONLayer                                                 |
| [title](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#title) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 在图例和LayerList小部件等地方用来识别它的层的标题。          | GeoJSONLayer                                                 |
| [type](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#type) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 对于GeoJSONLayer，类型总是"geojson"。                        | GeoJSONLayer                                                 |
| [url](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#url) | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | GeoJSON文件的URL。                                           | GeoJSONLayer                                                 |
| [useViewTime](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#useViewTime) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 确定该层是否会根据视图的timeExtent更新其时态数据。           | GeoJSONLayer                                                 |
| [visible](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#visible) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 指示该层在视图中是否可见。                                   | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#visible) |

---



#### 2. 方法概述

| Name                                                         | Return Type                                                  | Summary                                                      | Class                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [applyEdits()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#applyEdits) | [Promise](https://developers.arcgis.com/javascript/latest/programming-patterns/#promises) | 应用编辑到一个层的特征。                                     | GeoJSONLayer                                                 |
| [cancelLoad()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#cancelLoad) |                                                              | 如果load()操作已经在进行，则取消该操作。                     | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#cancelLoad) |
| [createLayerView()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#createLayerView) | [Promise](https://developers.arcgis.com/javascript/latest/programming-patterns/#promises) | 当层被添加到Map中时，由视图调用，例如MapView和SceneView。图层集合，必须为它创建一个图层视图。 | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#createLayerView) |
| [createPopupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#createPopupTemplate) | [PopupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html) | 为该层创建一个弹出模板，填充该层的所有字段。                 | GeoJSONLayer                                                 |
| [createQuery()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#createQuery) | [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) | 创建查询参数对象，可用于获取满足层配置的特性，如definitionExpression。 | GeoJSONLayer                                                 |
| [destroy()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#destroy) |                                                              | 破坏层和任何关联的资源(包括它的portalItem，如果它是层上的属性的话)。 | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#destroy) |
| [emit()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#emit) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 在实例上发出一个事件。                                       | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#emit) |
| [getField()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#getField) | [Field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html) | 返回字段名的Field实例(不区分大小写)。                        | GeoJSONLayer                                                 |
| [getFieldDomain()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#getFieldDomain) | [Domain](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Domain.html) | 返回与给定字段名关联的Domain。                               | GeoJSONLayer                                                 |
| [hasEventListener()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#hasEventListener) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 指示实例上是否有与所提供的事件名称匹配的事件监听器。         | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#hasEventListener) |
| [isFulfilled()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#isFulfilled) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | isfulfillment()可用于验证是否完成了类的实例创建(解析或拒绝)。 | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#isFulfilled) |
| [isRejected()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#isRejected) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | isRejected()可以用来验证创建类的实例是否被拒绝。             | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#isRejected) |
| [isResolved()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#isResolved) | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | isResolved()可用于验证创建类的实例是否已解析。               | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#isResolved) |
| [load()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#load) | [Promise](https://developers.arcgis.com/javascript/latest/programming-patterns/#promises) | 装入该类引用的资源。                                         | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#load) |
| [on()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#on) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | 在实例上注册一个事件处理程序。                               | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#on) |
| [queryExtent()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#queryExtent) | [Promise](https://developers.arcgis.com/javascript/latest/programming-patterns/#promises) | 对该层执行一个查询，并返回满足查询的特征的范围。             | GeoJSONLayer                                                 |
| [queryFeatureCount()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#queryFeatureCount) | [Promise](https://developers.arcgis.com/javascript/latest/programming-patterns/#promises) | 对该层执行一个查询，并返回满足查询的特性的数量。             | GeoJSONLayer                                                 |
| [queryFeatures()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#queryFeatures) | [Promise](https://developers.arcgis.com/javascript/latest/programming-patterns/#promises) | 对该层执行一个查询并返回一个FeatureSet，一旦承诺解决，就可以使用.then()方法访问它。 | GeoJSONLayer                                                 |
| [queryObjectIds()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#queryObjectIds) | [Promise](https://developers.arcgis.com/javascript/latest/programming-patterns/#promises) | 对该层执行一个查询，并为满足输入查询的特征返回一个Object id数组。 | GeoJSONLayer                                                 |
| [refresh()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#refresh) |                                                              | 获取该层的所有数据。                                         | GeoJSONLayer                                                 |
| [when()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#when) | [Promise](https://developers.arcgis.com/javascript/latest/programming-patterns/#promises) | 一旦创建了类的实例，就可以利用When()。                       | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#when) |

---



#### 3. 事件概述

| Name                                                         | Type                                                         | Summary                                                     | Class                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------ |
| [edits](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#event-edits) | `{addedFeatures: Object[],addedFeatures.objectId: Number,deletedFeatures: Object[],deletedFeatures.objectId: Number,updatedFeatures: Object[],updatedFeatures.objectId: Number}` | applyEdits()成功完成后触发。                                | GeoJSONLayer                                                 |
| [layerview-create](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#event-layerview-create) | `{view: View,layerView: LayerView}`                          | 在图层的LayerView被创建并呈现在视图中之后触发。             | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#event-layerview-create) |
| [layerview-create-error](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#event-layerview-create-error) | `{view: View,error: Error}`                                  | 当一个层被添加到映射中后，在创建LayerView过程中出错时触发。 | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#event-layerview-create-error) |
| [layerview-destroy](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#event-layerview-destroy) | `{view: View,layerView: LayerView}`                          | 在图层的LayerView被破坏并且不再呈现在视图中时触发。         | [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#event-layerview-destroy) |
| [refresh](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#event-refresh) | `{dataChanged: Boolean}`                                     | 如果该层设置了refreshInterval或调用refresh()方法，则触发。  | GeoJSONLayer                                                 |







#### 本地创建 geojson

```js
// create a geojson layer from geojson feature collection
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: 1,
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [100.0, 0.0],
            [101.0, 0.0],
            [101.0, 1.0],
            [100.0, 1.0],
            [100.0, 0.0]
          ]
        ]
      },
      properties: {
        prop0: "value0",
      }
    }
  ]
};

// create a new blob from geojson featurecollection
const blob = new Blob([JSON.stringify(geojson)], {
  type: "application/json"
});

// URL reference to the blob
const url = URL.createObjectURL(blob);
// create new geojson layer using the blob url
const layer = new GeoJSONLayer({
  url
});
```

