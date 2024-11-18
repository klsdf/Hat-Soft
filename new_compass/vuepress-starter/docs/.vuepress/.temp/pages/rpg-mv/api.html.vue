<template><div><h1 id="rpg-mv脚本api速查" tabindex="-1"><a class="header-anchor" href="#rpg-mv脚本api速查"><span>RPG-MV脚本API速查</span></a></h1>
<hr>
<p>本篇文档记录了RPG Maker MV已知的脚本API</p>
<h2 id="信息" tabindex="-1"><a class="header-anchor" href="#信息"><span>信息</span></a></h2>
<h3 id="显示文字" tabindex="-1"><a class="header-anchor" href="#显示文字"><span>显示文字</span></a></h3>
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
<th style="text-align:center">参数类型</th>
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
<th style="text-align:center">参数类型</th>
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
<th style="text-align:center">参数类型</th>
<th style="text-align:center"><div style="white-space: nowrap;">默认值</div></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">positionType</td>
<td style="text-align:center"><div style="white-space: nowrap;"><code v-pre>Int</code>(0-2)</div></td>
<td style="text-align:center">2<a href="#?">(?)</a></td>
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
<th style="text-align:center">参数类型</th>
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
<h4 id="空值" tabindex="-1"><a class="header-anchor" href="#空值"><span>空值</span></a></h4>
<p>描述：</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="JavaScript"><pre v-pre><code><span class="line">hello world</span>
<span class="line"></span></code></pre>
</div><table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">参数类型</th>
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


