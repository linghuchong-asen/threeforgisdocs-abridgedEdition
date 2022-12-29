<template><div><p><strong>加载模型</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webgis<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">'WebgisContainer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> entity <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">position</span> <span class="token operator">:</span> Webgis<span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">123.0744619</span><span class="token punctuation">,</span> <span class="token number">44.0503706</span><span class="token punctuation">,</span><span class="token number">66.1321456</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">model</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uri</span> <span class="token operator">:</span> <span class="token string">'../../../../Apps/SampleData/models/GroundVehicle/GroundVehicle.glb'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> entity<span class="token punctuation">;</span> <span class="token comment">// 追踪</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/example/img/model.png" alt="加载模型" tabindex="0" loading="lazy"><figcaption>加载模型</figcaption></figure>
</div></template>


