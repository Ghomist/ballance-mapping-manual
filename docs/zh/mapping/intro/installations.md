# 工具安装与配置

本文档仅推荐唯一的制图工具链/工作流：

- [Blender](https://www.blender.org/download/)
- [BallanceBlenderPlugin](https://github.com/yyc12345/BallanceBlenderHelper)（本手册简称为 BBP）

这套工作流就是目前最舒服的 Ballance 制图流程，其优势在于：不涉及自制图内嵌脚本时，可以完全摆脱对 Virtools 的依赖。

地图（也叫关卡）在文件系统中通常被保存为一个 NMO 文件。该文件类型原本只能借助专用工具 Virtools 打开及编辑，但 Virtools 过于古老，难以使用，且对模型不提供编辑能力，需要借助 Blender / 3ds Max 这样的工具建模后导入 Virtools 中，过程中又涉及到各类导入导出插件（max 导出 NMO 的插件仅支持非常古老的 max 版本），非常繁琐且兼容性较差。

BallanceBlenderPlugin 则很好地解决了上述问题，提供了直接对 NMO 文件的读写能力，使 Blender 能够直接导入、导出 NMO 文件，摆脱了 Virtools 的限制，也摆脱了老旧 3ds Max 的限制，能够使用更现代化的 Blender 进行制图，大大提高了制图效率。

## 资源下载提示

为了方便新手统一下载本文所述资源，**除了 Blender 软件本身**，其它的插件、资产库等都可以前往 [Ghomist 的个人网盘](http://ghostmisser.ysepan.com/) 的 **【最新 Ballance 制图工具合集】** 目录进行下载。

::: info 提醒
该网盘仅置顶目录提供资源下载，其它目录的文件与本手册无关。

Blender 可以直接在其 [官网](https://www.blender.org/download/) 下载，软件免费开源，我们不提供二次转载。
:::

除了在网盘下载外，也可以加入 [Ballance 制图交流 QQ 群](https://qm.qq.com/q/6K8JNC3X8W)（群号 1005399899）获取所有相关资源。如遇安装配置等问题也可在群内交流讨论。

为了方便新人检测是否已将所有的工具安装到位，可以根据下面的资源自检表进行逐一检查：

| 名称                                            | 是否必需 | 备注                             |
| ----------------------------------------------- | -------- | -------------------------------- |
| [Blender](#blender)                             | 必需     | 核心建模软件                     |
| [BallanceBlenderPlugin](#ballanceblenderplugin) | 必需     | 用于支持 Ballance 制图的核心插件 |
| [制图资产库](#制图资产库)                       | 强烈建议 | 不装也能制图，但会缺少素材       |
| [Simple Lattice](#其它插件推荐)                 | 否       | 推荐安装，用于制作斜坡路面       |
| Virtools 2.5~3.5                                | 否       | 仅在脚本制图时才需要             |

## Blender

Blender 是一款自由和开源的三维计算机图形软件，它可以用于创建和渲染三维模型、动画、游戏、视觉效果等。它的功能十分强大，使用也颇为复杂，但好在用于 Ballance 制图时，我们只需要使用其很小一部分功能就足矣。

安装 Blender 请直接前往 [Blender 官网](https://www.blender.org/download/) 下载安装。

::: info 其它渠道下载 Blender？
Blender 有多种下载渠道，例如 Steam、Linux 包管理器等。

我们推荐大家从官网下载安装，因为 Steam 下载的版本会自动更新（或者提示需要更新），更新后可能需要重新配置，且需要熟悉新特性，较为繁琐。
:::

### 配置

Blender 的配置与制图关系不大，但为了配合制图，我们推荐将 `编辑` - `偏好设置` - `界面` 中的 `翻译：新建数据` 关闭。这会使 Blender 创建物体和数据时使用英文名称，能够有效避免大多数的编码问题。建议在制图过程中尽量避免使用中文字符命名任何数据。

## Ballance Blender Plugin

[Ballance Blender Plugin](https://github.com/yyc12345/BallanceBlenderHelper) （简称 BBP）是由 [yyc12345](https://github.com/yyc12345) 开发的一款 Blender 插件，专用于 Ballance 制图，并且也可提供通用的 Virtools 格式导入导出。

插件下载：

- [官方 Github 仓库](https://github.com/yyc12345/BallanceBlenderHelper/releases/latest)（能访问 Github 时，推荐）
- 参考 [资源下载提示](#资源下载提示)

### 配置

下载好插件后需要依次按照 [安装文档](https://yyc12345.github.io/BallanceBlenderHelper/zh-cn/install-plugin/) 与 [配置文档](https://yyc12345.github.io/BallanceBlenderHelper/zh-cn/configure-plugin/) 进行安装配置。

## 制图资产库

资产库是一个后缀为 `blend` 的文件，其中包含了制图常用的固定物体及其资源，如：盘点路面、风扇底座、各种木板、灯柱装饰等。同时，该资产库也包含了对应的贴图信息以及归组信息，可以直接拖放使用，无需额外配置。

::: warning 注意
资产库文件请不要直接用 Blender 打开！请按照下文描述进行安装。
:::

### 配置

资产库只需要添加至用户资产库当中，随后可以在任意新文件中使用其中的资产。

安装资产库的方法如下：

1. 在你喜欢的地方新建一个文件夹，命名为 `BallanceAssets`，将下载好的资产库文件（后缀为 `.blend`）放入其中。
2. 打开 Blender（进入一个空项目即可），找到 `编辑` - `偏好设置` - `文件路径` - `资产库`。
3. 点击右侧的加号，添加一个资产库文件夹。选择第一步创建的文件夹即可。
4. 在路径下方将 **导入方法** 设置为 `追加（重用数据）`。

::: info 了解更多
关于导入方法以及资产库的更多相关介绍可以查看 [制图资产库](../blender/assets)。
:::

### 如何使用

资产库的使用方法也很简单，只需打开一个“资产浏览器”视图，找到您刚刚创建的资产库，将其中的物体拖入3D视图即可。

我们推荐把 Blender 默认视图中底部的 **时间线** 视图更改为 **资产浏览器** 视图。因为在 Ballance 制图中不需要用到时间线，并且底部视图可以在需要时拖出来，不需要时收起来，类似于抽屉，方便取用素材。

## 其它插件推荐

### [Simple Lattice](https://github.com/BenjaminSauder/SimpleLattice)

快速晶格插件。在 Ballance 制图中主要用于制作坡面。

由于插件较旧，不能直接安装至最新版 Blender，因此不建议直接在官方仓库下载。可以前往 [资源下载提示](#资源下载提示) 区查看如何下载。
