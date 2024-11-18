# RPG-MV脚本API速查
---

本篇文档记录了RPG Maker MV已知的脚本API

## 信息

### 显示文字

共有4处可设定；

#### （可选）脸图

描述：

指定脸图给弹出的文本框，与事件编辑器-显示文字-脸图功能相同

```js:no-line-numbers title="JavaScript"
$gameMessage.setFaceImage(faceName, faceIndex);
```
|参数|参数类型|<div style="white-space: nowrap;">默认值</div>|说明|
| :---: | :---: | :---: | --- |
|faceName|`String`|none|脸图的文件名|
|faceIndex|<div style="white-space: nowrap;">`Int`(0-7)</div>|none|脸图从左往右分别是0-3，第二行是4-7|

#### （可选）背景

描述：

文本框背景样式，与下拉菜单选择功能相同

```js:no-line-numbers title="JavaScript"
$gameMessage.setBackground(background);
```
|参数|参数类型|<div style="white-space: nowrap;">默认值</div>|说明|
| :---: | :---: | :---: | --- |
|background|<div style="white-space: nowrap;">`Int`(0-2)</div>|0|0：窗口，1：暗淡，2：透明|

#### （可选）窗口位置

描述：

文本框位置，与下拉菜单选择功能相同

```js:no-line-numbers title="JavaScript"
$gameMessage.setPositionType(positionType);
```
|参数|参数类型|<div style="white-space: nowrap;">默认值</div>|说明|
| :---: | :---: | :---: | --- |
|positionType|<div style="white-space: nowrap;">`Int`(0-2)</div>|2[(?)](#?)|0：顶部，1：中间，2：底部|

#### 文本内容

描述：

显示文字方法中的关键组成，这部分用于指定弹出文本框中的文字部分

```js:no-line-numbers title="JavaScript"
$gameMessage.add(text);
```
|参数|参数类型|<div style="white-space: nowrap;">默认值</div>|说明|
| :---: | :---: | :---: | --- |
|text|<div style="white-space: nowrap;">`String`</div>|none|对话框中的内容|

#### **用法实例**
---

```js:no-line-numbers title="JavaScript"
$gameMessage.setFaceImage("Actor1",0);
$gameMessage.setBackground(0);
$gameMessage.setPositionType(2);
$gameMessage.add("内容");
```

![image](image/api/message.png)





#### 空值

描述：

```js:no-line-numbers title="JavaScript"
hello world
```
|参数|参数类型|<div style="white-space: nowrap;">默认值</div>|说明|
| :---: | :---: | :---: | --- |
||<div style="white-space: nowrap;">占位</div>|占位|占位|
















































## 附录

### 标识
---

#### ?

带有此标识代表内容未经验证

#### !

带有此表示的内容为警告内容