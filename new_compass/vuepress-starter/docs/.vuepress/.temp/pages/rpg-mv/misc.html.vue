<template><div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2>
<p>使用内置nwjs打包游戏。</p>
<p>可以选择加密与排除未使用的文件。</p>
<p>RPG Maker MV共支持5个平台的打包，但却只有Windows端打包表现尚可。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果替换掉了原有的nwjs，则不建议使用RPG Maker的原生打包<br>
解决方案详见<a href="https://www.bilibili.com/video/BV1Q5411f76j/?spm_id_from=333.999.0.0&amp;vd_source=10af50012daba245ec02ba424a64091a" target="_blank" rel="noopener noreferrer">RPGMaker打包原理与nwjs环境替换</a></p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>排除未使用的文件很可能使游戏失去必要的依赖项<br>
除非您清楚您在做什么，否则不建议选择</p>
</div>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3>
<p>选择部署后，RPG Maker会将游戏打包为单个类似于安装包的文件</p>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3>
<p>选择部署后，会在指定位置生成数个文件</p>
<p>其中，Game是Unix可执行文件，执行后即可启动游戏</p>
<h3 id="android-ios" tabindex="-1"><a class="header-anchor" href="#android-ios"><span>Android/iOS</span></a></h3>
<p>RPG Maker MV并不支持传统意义上移动端的打包</p>
<p>如果需要打包Android与iOS端，则需要第三方软件的辅助</p>
<p>Android建议使用官方开发工具 <a href="https://developer.android.com/" target="_blank" rel="noopener noreferrer">Android Studio</a></p>
<p>iOS端建议使用苹果官方开发工具 <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer">Xcode</a></p>
<blockquote>
<p>注：Xcode仅支持苹果的macOS操作系统</p>
</blockquote>
<h3 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器"><span>浏览器</span></a></h3>
<p>浏览器打包后即可构建一份静态网页，将其部署在服务器中即可</p>
<h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h3>
<p>非常遗憾的是，自2021年8月19日起，官方便已宣布放弃对Mac端的支持。</p>
</div></template>


