# 概述

这是一份关于如何制作 Ballance 自制地图的手册，或者说教程，献给对 Ballance 仍然感兴趣的玩家们。希望你在开始之前先通读本页面，了解一些基本的信息。本页面的最底部是关于如何开始制图的，或者你也可以直接在侧边菜单栏选你喜欢的章节阅读。

::: warning 写给制图新人的劝退警告！
我们 **_自私地_** 希望您是一个有充足探究精神的人，希望您能够触类旁通，因为本手册及其相关资源并没有责任把所有事情解释得面面俱到（维护者的个人精力永远是有限的）。

制图工作异常的繁琐，也可能会遇到相当多的问题，有些问题可能是我们至今未能查明和解决的（Ballance 真的年龄不小了），**如果您认为您能够克服重重困难，只为制作全新的关卡给其他人游玩**，那么我们非常欢迎新的制图者加入！
:::

## 社区与支持

欢迎您加入 [Ballance 中文社区](https://ballance.jxpxxzj.cn/wiki/Ballance%E5%90%A7)（玩家交流群可以在 [这里](https://ballance.jxpxxzj.cn/wiki/Ballance%E5%90%A7#%E7%8E%A9%E5%AE%B6%E4%BA%A4%E6%B5%81%E7%BE%A4) 找到）以及 [Ballance Discord 服务器](https://ballance.jxpxxzj.cn/wiki/Ballance_Discord%E6%9C%8D%E5%8A%A1%E5%99%A8)。目前所有的资源和资料均为 Ballance 玩家社区经过多年探索和开发逐步积累起来的，可以和其他游戏玩家、制图者一起交流，为这个社区注入新的活力。

推荐加入 [Ballance 制图交流群](https://qm.qq.com/q/6K8JNC3X8W) 交流所有与 Ballance 制图相关的问题。如果在阅读文档方面遇到任何问题、需要反馈或建议，也欢迎加群反馈。

<!-- TODO: 后续记得开放 Issue 和 PR -->

## 计划与贡献

另外一个与本手册内容雷同的手册是 [A-Peek-Into-Ballance-Mapping](https://yyc12345.github.io/A-Peek-Into-Ballance-Mapping/)（主要作者是 yyc12345），该手册是以笔记的形式记录了 Ballance 制图过程中可能出现的问题以及一些常见的操作。

本项目最初旨在作为上述手册的扩展延伸，~~抄袭复制~~ 整理归纳了其大部分内容，使得手册阅读起来更规整和专业。而未来我们更希望本手册成为一本 **完整的 Ballance 社区创作者指南**，尽管目前只涉及到制图板块。

未来该手册将不断维护 ~~（当然那得是还有新人想要制图的话）~~，计划加入更多高级的制作技巧指南，另外关于脚本制图的指南也在计划中。

如果您想要反馈或贡献，欢迎 Issue 或 Pull Request！

## 特别鸣谢

感谢 [yyc12345](https://github.com/yyc12345) 开发了 [BallanceBlenderPlugin](https://github.com/yyc12345/BallanceBlenderHelper) 使得 Blender 制图成为可能。也感谢 yyc12345 编写了 [A-Peek-Into-Ballance-Mapping](https://yyc12345.github.io/A-Peek-Into-Ballance-Mapping/)，这是本项目的根源以及灵感来源。

也感谢 Ballance 社区中为这款老游戏做过贡献的所有人，没有他们的投入就不会有如今这些成果。

## 废话结束！开始制图！

本手册主要分为 [制图手册](#概述) 和 [渐进式教程](/tutorial/blender/your-first-map) 两个部分：

1. 手册部分主要解释了制图相关的知识点，包括基础知识、制图方法等，您可以根据左侧的侧边栏选择需要的章节 **按需阅读**
2. 渐进式教程是主要写给 **第一次接触用 Blender 制作 Ballance 地图的人**，旨在指导制图新人一步一步地制作出属于自己的第一张自制地图。

手册必吃榜：

- 如果你第一次接触 Ballance 制图，可以先从 [关于制图](about-mapping) 开始阅读，了解制图的基本概念和方法。
- 如果你需要详细了解 Ballance 地图的构成和机制，可以先阅读 **制图基础** 部分。这些内容对你巩固基础来说非常有用，**但大可不必把它们全部阅读完毕再开始制图**。
- 工欲善其事，必先利其器，制图的第一步一定是 [工具安装与配置](installations)。
- 如果你对基本的地图构成有一定了解，但没有实操经验，可以尝试我们的 [渐进式教程](/tutorial/blender/your-first-map)，跟随教程一步一步做出你的第一张自制地图。
- 如果你之前使用 3ds Max 制图，且正在从 3ds Max 迁移到 Blender，可以查看 [从 3ds Max 迁移](migrate-from-max)。
- 如果你已经了解并掌握了基础制图（不论是 Blender 还是 3ds Max），想要尝试用脚本实现更多更惊艳的创意，可以查看 [脚本制图](../../scripting/basic/intro)。

**祝好运！**
