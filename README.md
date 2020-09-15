# Flash-Pop

Flash钓鱼弹窗版

![](https://raw.githubusercontent.com/r00tSe7en/pictures/master/flashpop.png)

在线预览：https://flash-pop.se7ensec.cn/



灵感来自：Beef 的 Fake Flash Update 模块

特别感谢：https://layer.layui.com/

感谢:

[@鲁人甲007](https://www.t00ls.net/members-profile-6993.html) 的提醒，已经将图片加载方式更改为加载base64编码后的图片，减少了HTTP请求，加快图像的加载时间。

[@heihu577](https://www.t00ls.net/members-topics-12029.html) 的优化，添加css引用，使文字支持选中，可信度大大提高。

[@1x2Bytes](https://b1eed.github.io/) 在使用过程中遇到异步加载js不允许使用document.write的问题，并给出了解决方法。

## 由于更新后的js采用的是dom方法添加`<script>`标签，第一次加载页面没反应属于正常情况。
