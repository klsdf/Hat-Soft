<template><div><h1 id="rpg-mv脚本api速查" tabindex="-1"><a class="header-anchor" href="#rpg-mv脚本api速查"><span>RPG-MV脚本API速查</span></a></h1>
<hr>
<p>本篇文档记录了RPG Maker MV已知的脚本API</p>
<h2 id="信息" tabindex="-1"><a class="header-anchor" href="#信息"><span>信息</span></a></h2>
<h3 id="显示文字" tabindex="-1"><a class="header-anchor" href="#显示文字"><span>显示文字</span></a></h3>
<p><em>Show Text</em></p>
<p>共有4处可设定；</p>
<h4 id="可选-脸图" tabindex="-1"><a class="header-anchor" href="#可选-脸图"><span>（可选）脸图</span></a></h4>
<p>描述：</p>
<p>指定脸图给弹出的文本框，与事件编辑器-显示文字-脸图功能相同</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setFaceImage</span><span class="token punctuation">(</span>faceName<span class="token punctuation">,</span> faceIndex<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">faceName</td>
<td style="text-align:center"><code v-pre>String</code></td>
<td style="text-align:center">none</td>
<td>脸图的文件名</td>
</tr>
<tr>
<td style="text-align:center">faceIndex</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code>(0-7)</div></td>
<td style="text-align:center">none</td>
<td>脸图从左往右分别是0-3，第二行是4-7</td>
</tr>
</tbody>
</table>
<h4 id="可选-背景" tabindex="-1"><a class="header-anchor" href="#可选-背景"><span>（可选）背景</span></a></h4>
<p>描述：</p>
<p>文本框背景样式，与下拉菜单选择功能相同</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setBackground</span><span class="token punctuation">(</span>background<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">background</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code>(0-2)</div></td>
<td style="text-align:center">0</td>
<td>0：窗口，1：暗淡，2：透明</td>
</tr>
</tbody>
</table>
<h4 id="可选-窗口位置" tabindex="-1"><a class="header-anchor" href="#可选-窗口位置"><span>（可选）窗口位置</span></a></h4>
<p>描述：</p>
<p>文本框位置，与下拉菜单选择功能相同</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setPositionType</span><span class="token punctuation">(</span>positionType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">positionType</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code>(0-2)</div></td>
<td style="text-align:center">2<a href="#%E6%A0%87%E8%AF%86">(?)</a></td>
<td>0：顶部，1：中间，2：底部</td>
</tr>
</tbody>
</table>
<h4 id="文本内容" tabindex="-1"><a class="header-anchor" href="#文本内容"><span>文本内容</span></a></h4>
<p>描述：</p>
<p>显示文字方法中的关键组成，这部分用于指定弹出文本框中的文字部分</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">text</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>String</code></div></td>
<td style="text-align:center">none</td>
<td>对话框中的内容</td>
</tr>
</tbody>
</table>
<h4 id="用法实例" tabindex="-1"><a class="header-anchor" href="#用法实例"><span><strong>用法实例</strong></span></a></h4>
<hr>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setFaceImage</span><span class="token punctuation">(</span><span class="token string">"Actor1"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setPositionType</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"内容"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p><img src="@source/rpg-mv/image/api/message.png" alt="image"></p>
<h3 id="显示选项" tabindex="-1"><a class="header-anchor" href="#显示选项"><span>显示选项</span></a></h3>
<p><em>Show Choices</em></p>
<p>共有4处可设定；</p>
<h4 id="可选-选择框背景" tabindex="-1"><a class="header-anchor" href="#可选-选择框背景"><span>（可选）选择框背景</span></a></h4>
<p>描述：</p>
<p>与事件编辑器-显示选项下拉菜单的背景功能相同</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setChoiceBackground</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">background</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code>(0-2)</div></td>
<td style="text-align:center">0</td>
<td>0：窗口，1：暗淡，2：透明</td>
</tr>
</tbody>
</table>
<h4 id="可选-窗口位置-1" tabindex="-1"><a class="header-anchor" href="#可选-窗口位置-1"><span>（可选）窗口位置</span></a></h4>
<p>描述：</p>
<p>与事件编辑器-显示选项下拉菜单的窗口位置功能相同</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setChoicePositionType</span><span class="token punctuation">(</span>positionType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">positionType</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code>(0-2)</div></td>
<td style="text-align:center">2<a href="#%E6%A0%87%E8%AF%86">(?)</a></td>
<td>0：顶部，1：中间，2：底部</td>
</tr>
</tbody>
</table>
<h4 id="选项本体" tabindex="-1"><a class="header-anchor" href="#选项本体"><span>选项本体</span></a></h4>
<p>描述：</p>
<p>核心功能，选项本体的内容</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setChoices</span><span class="token punctuation">(</span>choices<span class="token punctuation">,</span> defaultType<span class="token punctuation">,</span> cancelType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">choices</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Array</code></div></td>
<td style="text-align:center">none</td>
<td>选项的内容，例如[&quot;是&quot;, &quot;否&quot;]</td>
</tr>
<tr>
<td style="text-align:center">defaultType</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code></div></td>
<td style="text-align:center">0</td>
<td>默认指向的选项，由0开始从上到下</td>
</tr>
<tr>
<td style="text-align:center">cancelType</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code></div></td>
<td style="text-align:center">0</td>
<td>与显示选项中取消功能相同</td>
</tr>
</tbody>
</table>
<h4 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数"><span>回调函数</span></a></h4>
<p>描述：</p>
<p>返回用户选择的选项</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setChoiceCallback</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">callback</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code></div></td>
<td style="text-align:center">none</td>
<td>选中的选项，由0开始从上到下</td>
</tr>
</tbody>
</table>
<h4 id="用法实例-1" tabindex="-1"><a class="header-anchor" href="#用法实例-1"><span><strong>用法实例</strong></span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setChoices</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"我"</span><span class="token punctuation">,</span> <span class="token string">"是"</span><span class="token punctuation">,</span> <span class="token string">"选"</span><span class="token punctuation">,</span> <span class="token string">"项"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setChoiceBackground</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setChoicePositionType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setChoiceCallback</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"你选择的是第"</span><span class="token operator">+</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"项！"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/rpg-mv/image/api/choices0.png" alt="image">
<img src="@source/rpg-mv/image/api/choices1.png" alt="image"></p>
<h3 id="数值输入处理" tabindex="-1"><a class="header-anchor" href="#数值输入处理"><span>数值输入处理</span></a></h3>
<p><em>Input Number</em></p>
<p>描述：</p>
<p>与事件编辑器-数值输入处理功能相同，但脱离了RM-MV只能输入8位数的限制</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setNumberInput</span><span class="token punctuation">(</span>variableId <span class="token punctuation">,</span>maxDigits<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">variableId</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code></div></td>
<td style="text-align:center">none</td>
<td>变量ID</td>
</tr>
<tr>
<td style="text-align:center">maxDigits</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int &gt; 0</code></div></td>
<td style="text-align:center">none</td>
<td>输入的位数，此处无限制</td>
</tr>
</tbody>
</table>
<h3 id="物品选择处理" tabindex="-1"><a class="header-anchor" href="#物品选择处理"><span>物品选择处理</span></a></h3>
<p><em>Select Item</em></p>
<p>描述：</p>
<p>与事件编辑器-物品选择处理功能相同：储存所选物品的物品ID；</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setItemChoice</span><span class="token punctuation">(</span>variableId <span class="token punctuation">,</span>itemType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">variableId</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code></div></td>
<td style="text-align:center">none<a href="#%E6%A0%87%E8%AF%86">(?)</a></td>
<td>变量ID</td>
</tr>
<tr>
<td style="text-align:center">itemType</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code>1-4</div></td>
<td style="text-align:center">1<a href="#%E6%A0%87%E8%AF%86">(?)</a></td>
<td>物品类型，1：普通，2：重要，3：隐藏A，4：隐藏B</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>如果您不清楚您在做什么，请勿使用此函数</p>
</div>
<h3 id="显示滚动文字" tabindex="-1"><a class="header-anchor" href="#显示滚动文字"><span>显示滚动文字</span></a></h3>
<p><em>Show Scrolling Text</em></p>
<p>描述：</p>
<p>与事件编辑器-显示滚动文字功能相同，滚动打印文字</p>
<p>需要与$gameMessage.add();一同使用</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setScroll</span><span class="token punctuation">(</span>speed<span class="token punctuation">,</span> noFast<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">speed</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Float &gt; 0</code></div></td>
<td style="text-align:center">2</td>
<td>文字滚动的速度</td>
</tr>
<tr>
<td style="text-align:center">noFast</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Boolean</code></div></td>
<td style="text-align:center">false</td>
<td>禁止快进文字，true启用，false禁用</td>
</tr>
</tbody>
</table>
<h4 id="用法实例-2" tabindex="-1"><a class="header-anchor" href="#用法实例-2"><span><strong>用法实例</strong></span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"内容1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"内容2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"内容3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">$gameMessage<span class="token punctuation">.</span><span class="token function">setScroll</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/rpg-mv/image/api/scrolling.png" alt="image"></p>
<h2 id="游戏进程" tabindex="-1"><a class="header-anchor" href="#游戏进程"><span>游戏进程</span></a></h2>
<h3 id="开关操作" tabindex="-1"><a class="header-anchor" href="#开关操作"><span>开关操作</span></a></h3>
<h3 id="变量操作" tabindex="-1"><a class="header-anchor" href="#变量操作"><span>变量操作</span></a></h3>
<h3 id="独立开关操作" tabindex="-1"><a class="header-anchor" href="#独立开关操作"><span>独立开关操作</span></a></h3>
<h3 id="计时器操作" tabindex="-1"><a class="header-anchor" href="#计时器操作"><span>计时器操作</span></a></h3>
<h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制"><span>流程控制</span></a></h2>
<h3 id="分支条件" tabindex="-1"><a class="header-anchor" href="#分支条件"><span>分支条件</span></a></h3>
<h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h3>
<h3 id="跳出循环" tabindex="-1"><a class="header-anchor" href="#跳出循环"><span>跳出循环</span></a></h3>
<h3 id="终止事件处理" tabindex="-1"><a class="header-anchor" href="#终止事件处理"><span>终止事件处理</span></a></h3>
<h4 id="空值" tabindex="-1"><a class="header-anchor" href="#空值"><span>空值</span></a></h4>
<p>描述：</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">hello world</span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center"><div style="white-space: nowrap;">参数类型</div></th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center"><div style="white-space: nowrap;">占位</div></td>
<td style="text-align:center">占位</td>
<td>占位</td>
</tr>
</tbody>
</table>
<h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h2>
<h3 id="标识" tabindex="-1"><a class="header-anchor" href="#标识"><span>标识</span></a></h3>
<hr>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span>?</span></a></h4>
<p>带有此标识代表内容未经验证</p>
<h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span>!</span></a></h4>
<p>带有此表示的内容为警告内容</p>
</div></template>


