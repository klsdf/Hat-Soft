## 部署

使用内置nwjs打包游戏。

可以选择加密与排除未使用的文件。

RPG Maker MV共支持5个平台的打包，但却只有Windows端打包表现尚可。
::: tip
如果替换掉了原有的nwjs，则不建议使用RPG Maker的原生打包\
解决方案详见[RPGMaker打包原理与nwjs环境替换](https://www.bilibili.com/video/BV1Q5411f76j/?spm_id_from=333.999.0.0&vd_source=10af50012daba245ec02ba424a64091a)
:::
::: warning
排除未使用的文件很可能使游戏失去必要的依赖项\
除非您清楚您在做什么，否则不建议选择
:::

### Windows

选择部署后，RPG Maker会将游戏打包为单个类似于安装包的文件

### Linux

选择部署后，会在指定位置生成数个文件

其中，Game是Unix可执行文件，执行后即可启动游戏

### Android/iOS

RPG Maker MV并不支持传统意义上移动端的打包

如果需要打包Android与iOS端，则需要第三方软件的辅助

Android建议使用官方开发工具 [Android Studio](https://developer.android.com/)

iOS端建议使用苹果官方开发工具 [Xcode](https://developer.apple.com/xcode/)
>注：Xcode仅支持苹果的macOS操作系统

### 浏览器

浏览器打包后即可构建一份静态网页，将其部署在服务器中即可

### macOS

非常遗憾的是，自2021年8月19日起，官方便已宣布放弃对Mac端的支持。
