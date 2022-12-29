<template><div><h1 id="实体组-entitygroup" tabindex="-1"><a class="header-anchor" href="#实体组-entitygroup" aria-hidden="true">#</a> 实体组(EntityGroup)</h1>
<p>Entity实体的组，其中每一个Entity都有唯一的id。</p>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<p><strong>EntityGroup(owner)</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>owner</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html" target="_blank" rel="noopener noreferrer">DataSource<ExternalLinkIcon/></a> | <a href="https://www.vvpstk.com/public/Cesium/Documentation/CompositeEntityCollection.html" target="_blank" rel="noopener noreferrer">CompositeEntityCollection<ExternalLinkIcon/></a></td>
<td style="text-align:left">optional<a href="https://www.vvpstk.com/public/Cesium/Documentation/DataSource.html" target="_blank" rel="noopener noreferrer"><code v-pre>DataSource</code><ExternalLinkIcon/></a>或者<a href="https://www.vvpstk.com/public/Cesium/Documentation/CompositeEntityCollection.html" target="_blank" rel="noopener noreferrer"><code v-pre>CompositeEntityCollection</code><ExternalLinkIcon/></a>，用于创建EntityCollection。</td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h3 id="readonly-collectionchanged-event" tabindex="-1"><a class="header-anchor" href="#readonly-collectionchanged-event" aria-hidden="true">#</a> <code v-pre>readonly</code> <strong><a href="">collectionChanged : Event</a></strong></h3>
<p>获取在集合中添加或删除实体时触发的事件。生成的事件是 <a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#.collectionChangedEventCallback" target="_blank" rel="noopener noreferrer"><code v-pre>EntityCollection.collectionChangedEventCallback</code><ExternalLinkIcon/></a> 。</p>
<h3 id="readonly-id-string" tabindex="-1"><a class="header-anchor" href="#readonly-id-string" aria-hidden="true">#</a> <code v-pre>readonly</code> <strong><a href="">id : String</a></strong></h3>
<p>获取全局唯一ID。</p>
<h3 id="readonly-owner-datasource-compositeentitycollection" tabindex="-1"><a class="header-anchor" href="#readonly-owner-datasource-compositeentitycollection" aria-hidden="true">#</a> <code v-pre>readonly</code> <strong><a href="">owner : DataSource|CompositeEntityCollection</a></strong></h3>
<p>获取此实体集合的所有者。即，创建它的数据源或复合实体集合。</p>
<h3 id="show-boolean" tabindex="-1"><a class="header-anchor" href="#show-boolean" aria-hidden="true">#</a> <strong><a href="">show : Boolean</a></strong></h3>
<p>获取此实体集合是否应为显示出来。当为true时，仅当其自身的show属性也为true时，才显示每个实体。</p>
<h3 id="readonly-values-entity" tabindex="-1"><a class="header-anchor" href="#readonly-values-entity" aria-hidden="true">#</a> <code v-pre>readonly</code> <strong><a href="">values : Entity[ ]</a></strong></h3>
<p>获取集合中实体实例的数组。 不应该直接修改这个数组。</p>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<h3 id="staticcollectionchangedeventcallback-collection-added-removed-changed" tabindex="-1"><a class="header-anchor" href="#staticcollectionchangedeventcallback-collection-added-removed-changed" aria-hidden="true">#</a> <code v-pre>static</code><strong><a href="">collectionChangedEventCallback(collection, added, removed, changed)</a></strong></h3>
<p>由 <a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#collectionChanged" target="_blank" rel="noopener noreferrer"><code v-pre>EntityCollection#collectionChanged</code><ExternalLinkIcon/></a> 生成的事件的签名。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>collection</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html" target="_blank" rel="noopener noreferrer">EntityCollection<ExternalLinkIcon/></a></td>
<td style="text-align:left">触发事件的集合。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>added</code></td>
<td style="text-align:left">Array.&lt;<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer">Entity<ExternalLinkIcon/></a>&gt;</td>
<td style="text-align:left">已添加到集合中的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a> 实例的数组。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>removed</code></td>
<td style="text-align:left">Array.&lt;<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer">Entity<ExternalLinkIcon/></a>&gt;</td>
<td style="text-align:left">从集合中删除的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a> 实例的数组。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>changed</code></td>
<td style="text-align:left">Array.&lt;<a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer">Entity<ExternalLinkIcon/></a>&gt;</td>
<td style="text-align:left">已修改的 <a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer"><code v-pre>Entity</code><ExternalLinkIcon/></a> 实例的数组。</td>
</tr>
</tbody>
</table>
<h3 id="add-entity-entity" tabindex="-1"><a class="header-anchor" href="#add-entity-entity" aria-hidden="true">#</a> <strong><a href="">add(entity): Entity</a></strong></h3>
<p>添加实体。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>entity</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer">Entity<ExternalLinkIcon/></a></td>
<td style="text-align:left">实体。</td>
</tr>
</tbody>
</table>
<p>返回值:已添加的实体。</p>
<h3 id="computeavailability-timeinterval" tabindex="-1"><a class="header-anchor" href="#computeavailability-timeinterval" aria-hidden="true">#</a> <strong><a href="">computeAvailability(): TimeInterval</a></strong></h3>
<p>计算集合中实体的最大可用性。 如果集合包含无限可用数据和非无限数据的混合，它将只返回与非无限数据相关的间隔。 如果所有数据都是无限的，则返回一个无限的间隔。</p>
<p>返回值: 集合中实体的可用性。</p>
<h3 id="contains-entity-boolean" tabindex="-1"><a class="header-anchor" href="#contains-entity-boolean" aria-hidden="true">#</a> <strong><a href="">contains(entity): Boolean</a></strong></h3>
<p>是否含有某实体。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>entity</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer">Entity<ExternalLinkIcon/></a></td>
<td style="text-align:left">实体。</td>
</tr>
</tbody>
</table>
<p>返回值: 含有，返回true，反之，返回false。</p>
<h3 id="getbyid-id-entity" tabindex="-1"><a class="header-anchor" href="#getbyid-id-entity" aria-hidden="true">#</a> <strong><a href="">getById(id): Entity</a></strong></h3>
<p>根据ID获取实体。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>id</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">要获取的实体ID。</td>
</tr>
</tbody>
</table>
<p>返回值: 获取成功，返回该实体，如果ID不存在，返回未定义。</p>
<h3 id="getorcreateentity-id-entity" tabindex="-1"><a class="header-anchor" href="#getorcreateentity-id-entity" aria-hidden="true">#</a> <strong><a href="">getOrCreateEntity(id): Entity</a></strong></h3>
<p>获取具有指定id的实体，或创建该实体，如果该实体不存在，则将其添加到集合中。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>id</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">实体ID。</td>
</tr>
</tbody>
</table>
<p>返回值: 新的或存在的实体对象。</p>
<h3 id="remove-entity-boolean" tabindex="-1"><a class="header-anchor" href="#remove-entity-boolean" aria-hidden="true">#</a> <strong><a href="">remove(entity): Boolean</a></strong></h3>
<p>移除实体。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>entity</code></td>
<td style="text-align:left"><a href="https://www.vvpstk.com/public/Cesium/Documentation/Entity.html" target="_blank" rel="noopener noreferrer">Entity<ExternalLinkIcon/></a></td>
<td style="text-align:left">要移除的实体。</td>
</tr>
</tbody>
</table>
<p>返回值: 被移除返回true，不存在false。</p>
<h3 id="removeall" tabindex="-1"><a class="header-anchor" href="#removeall" aria-hidden="true">#</a> <strong><a href="">removeAll()</a></strong></h3>
<p>移除所有实体。</p>
<h3 id="removebyid-id-boolean" tabindex="-1"><a class="header-anchor" href="#removebyid-id-boolean" aria-hidden="true">#</a> <strong><a href="">removeById(id): Boolean</a></strong></h3>
<p>通过ID移除实体。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>id</code></td>
<td style="text-align:left">String</td>
<td style="text-align:left">要移除的实体ID。</td>
</tr>
</tbody>
</table>
<p>返回值: 被移除返回true，不存在false。</p>
<h3 id="resumeevents" tabindex="-1"><a class="header-anchor" href="#resumeevents" aria-hidden="true">#</a> <strong><a href="">resumeEvents()</a></strong></h3>
<p>在添加或删除项时，立即恢复引发<a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#collectionChanged" target="_blank" rel="noopener noreferrer"><code v-pre>EntityCollection#collectionChanged</code><ExternalLinkIcon/></a>事件。 当调用该函数时，while事件被挂起时所做的任何修改都将作为单个事件触发。 这个函数是引用计数的，可以安全地调用多次，只要有相应的调用<a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#resumeEvents" target="_blank" rel="noopener noreferrer"><code v-pre>EntityCollection#resumeEvents</code><ExternalLinkIcon/></a>。</p>
<h3 id="suspendevents" tabindex="-1"><a class="header-anchor" href="#suspendevents" aria-hidden="true">#</a> <strong><a href="">suspendEvents()</a></strong></h3>
<p>防止<a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#collectionChanged" target="_blank" rel="noopener noreferrer"><code v-pre>EntityCollection#collectionChanged</code><ExternalLinkIcon/></a>事件被引发，直到对<a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#resumeEvents" target="_blank" rel="noopener noreferrer"><code v-pre>EntityCollection#resumeEvents</code><ExternalLinkIcon/></a>进行相应调用，此时将引发一个包含所有挂起操作的单一事件。 这使得许多项目可以有效地添加和删除。 只要对<a href="https://www.vvpstk.com/public/Cesium/Documentation/EntityCollection.html#resumeEvents" target="_blank" rel="noopener noreferrer"><code v-pre>EntityCollection#resumeEvents</code><ExternalLinkIcon/></a>有相应的调用，就可以安全地多次调用这个函数。</p>
</div></template>


