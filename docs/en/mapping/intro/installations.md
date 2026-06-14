# Tools Installation and Configuration

This document only recommends a single mapping toolchain/workflow:

- [Blender](https://www.blender.org/download/)
- [BallanceBlenderPlugin](https://github.com/yyc12345/BallanceBlenderHelper) (referred to as BBP in this manual)

This workflow is currently the most comfortable Ballance mapping process. Its advantage is that when not involving embedded scripts in custom maps, it can completely break free from dependence on Virtools.

Maps (also called levels) are typically saved as an NMO file in the file system. This file type originally could only be opened and edited with dedicated tools like Virtools, but Virtools is too old and difficult to use, and does not provide editing capabilities for models. Tools like Blender / 3ds Max are needed to model and then import into Virtools. This process involves various import/export plugins (the max export to NMO plugin only supports very old max versions), which is very cumbersome and has poor compatibility.

BallanceBlenderPlugin solves the above problems well by providing direct read/write capabilities for NMO files, enabling Blender to directly import and export NMO files, breaking free from the limitations of Virtools and the limitations of old 3ds Max. This allows you to use the more modern Blender for mapping, greatly improving mapping efficiency.

## Resource Download Tips

To facilitate beginners downloading all resources mentioned in this manual, you can go to the **_【Latest Ballance Mapping Tool Collection】_** directory in [Ghomist's personal cloud drive](http://ghostmisser.ysepan.com/) for download.

::: warning Reminder
This cloud drive only provides resource downloads in the **top directory**. Files in other directories are not related to this manual.
:::

::: tip Can't find Blender download?
Blender can be downloaded directly from its [official website](https://www.blender.org/download/). The software is free and open source, and we do not provide secondary redistribution.
:::

In addition to downloading from the cloud drive, you can also join the [Ballance Mapping Exchange QQ Group](https://qm.qq.com/q/6K8JNC3X8W) (group number 1005399899) to get all related resources. If you encounter installation/configuration issues, you can also discuss them in the group.

::: details Basic Mapping Tools Self-Check List

To help new mappers check whether all tools have been installed correctly, you can check one by one according to the resource self-check list below:

| Name                                            | Required             | Notes                                                          |
| ----------------------------------------------- | -------------------- | -------------------------------------------------------------- |
| [Blender](#blender)                             | Required             | Core modeling software                                         |
| [BallanceBlenderPlugin](#ballance-blender-plugin) | Required             | Core plugin for supporting Ballance mapping                    |
| [Mapping Asset Library](#mapping-asset-library) | Strongly Recommended | Mapping is possible without it, but you'll lack many materials |
| [Simple Lattice](#other-recommended-plugins)    | Optional             | Recommended for creating sloped floors                         |
| Virtools 2.5~3.5                                | Optional             | Only needed for scripting mapping or 3ds Max mapping           |

:::

## Blender

Blender is a free and open source 3D computer graphics software that can be used to create and render 3D models, animations, games, visual effects, etc. Its functions are very powerful and its use is quite complex, but fortunately for Ballance mapping, we only need to use a small part of its functions.

To install Blender, please go directly to the [Blender official website](https://www.blender.org/download/) to download and install.

::: tip Download Blender from other sources?
Blender has multiple download channels, such as Steam, Linux package managers, etc.

We recommend everyone download and install from the official website, because the version downloaded from Steam will automatically update (or prompt for updates). After updating, you may need to reconfigure and need to familiarize yourself with new features, which is quite cumbersome.
:::

### Configuration

Blender's configuration is not very related to mapping, but to cooperate with mapping, we recommend turning off `Translate: New Data` in `Edit` - `Preferences` - `Interface`. This will make Blender use English names when creating objects and data, which can effectively avoid most encoding issues. It is recommended to avoid using Chinese characters to name any data during the mapping process.

## Ballance Blender Plugin

[Ballance Blender Plugin](https://github.com/yyc12345/BallanceBlenderHelper) (referred to as BBP) is a Blender plugin developed by [yyc12345](https://github.com/yyc12345), specifically for Ballance mapping, and can also provide general Virtools format import/export.

Plugin download:

- [Official Github repository](https://github.com/yyc12345/BallanceBlenderHelper/releases/latest) (recommended when you can access Github)
- Refer to [Resource Download Tips](#resource-download-tips)

### Configuration

After downloading the plugin, you need to follow the [installation documentation](https://yyc12345.github.io/BallanceBlenderHelper/zh-cn/install-plugin/) and [configuration documentation](https://yyc12345.github.io/BallanceBlenderHelper/zh-cn/configure-plugin/) for installation and configuration.

After configuration, check whether the plugin can work normally:

- Open the `Add` menu in the upper left corner of the 3D view (or press `Shift + A` shortcut key) and you should see options like `Ballance - Floor/Rail/Module`, and all objects can be added, not grayed out.
- In Blender's `File - Import/Export` menu, there should be a `Virtools file(.nmo/.cmo/.vmo)` option, and it should not be grayed out.

::: warning Note
If the options mentioned above are grayed out, please check whether you have correctly [configured the texture folder (External Texture Folder)](https://yyc12345.github.io/BallanceBlenderHelper/zh-cn/configure-plugin/#_3).
:::

After configuration is complete, it is strongly recommended to close and restart Blender once to correctly reload the plugin and prevent unknown errors.

## Mapping Asset Library

The asset library is a file with a `.blend` extension that contains commonly used fixed objects and their resources for mapping, such as: inventory floors, fan bases, various wooden boards, lamp post decorations, etc. At the same time, this asset library also contains corresponding texture information and grouping information, and can be used directly by drag and drop without additional configuration.

::: warning Note
Please do not open the asset library file directly with Blender! Please install it according to the description below.
:::

### Configuration

The asset library only needs to be added to user asset libraries, and then its assets can be used in any new file.

The method to install the asset library is as follows:

1. Create a new folder in a location you like, name it `BallanceAssets`, and put the downloaded asset library file (with `.blend` extension) into it.
2. Open Blender (enter an empty project), find `Edit` - `Preferences` - `File Paths` - `Asset Libraries`.
3. Click the plus sign on the right to add an asset library folder. Select the folder created in the first step.
4. Below the path, set **Import Method** to `Append (Reuse Data)`.

::: tip Learn More
For more information about import methods and asset libraries, please refer to [Mapping Asset Library](../blender/assets).
:::

### How to Use

The usage of the asset library is also very simple. Just open an "Asset Browser" view, find the asset library you just created, and drag the objects into the 3D view.

We recommend changing the **Timeline** view at the bottom of Blender's default view to the **Asset Browser** view. Because Timeline is not needed in Ballance mapping, and the bottom view can be dragged out when needed and put away when not needed, similar to a drawer, making it convenient to access materials.

## Other Recommended Plugins

The installation method for Blender plugins is similar to BBP. In `Edit - Preferences`, find the `Add-ons` tab and select `Install...` from disk.

### [Simple Lattice](https://github.com/BenjaminSauder/SimpleLattice)

Quick lattice plugin. Mainly used for creating sloped surfaces in Ballance mapping.

Since the plugin is relatively old, it may not be installed directly into the latest version of Blender, so it is not recommended to download directly from the official repository. You can refer to [Resource Download Tips](#resource-download-tips) to see how to download.
