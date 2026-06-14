# About Mapping

**Custom maps** are levels created spontaneously by players, generally published in NMO format. Other players can download and install them (or replace original levels) to play entirely new levels.

**Creating custom maps in Ballance** is called **mapping**. Mapping is a **complex and tedious** task. Even though there are many related tools to help mappers produce quickly, mapping still requires a lot of time and effort.

## Publishing and Downloading Custom Maps

Currently, the main platform for publishing and downloading custom maps in the Ballance Chinese community is the [Map Download Site](http://ballancemaps.ysepan.com/). Players can freely download custom maps to play.

To publish a map, regular players generally cannot publish directly to the map download site. You can choose any of the following publishing methods:

- Join the QQ group in the [Ballance Chinese Community](https://ballance.jxpxxzj.cn/wiki/Ballance%E5%90%A7) (it is recommended to join the main group first, as this group chat is currently the largest Ballance player exchange and discussion center), then send your map files.
- Join the [Ballance Discord Server](https://ballance.jxpxxzj.cn/wiki/Ballance_Discord%E6%9C%8D%E5%8A%A1%E5%99%A8) and publish your map in the `#mapping` channel.

You can also use any method you like to distribute files. After seeing new maps, the community will periodically sync them to the map download site, ~~as long as they're not low-quality maps~~.

## Comparison of Mapping Methods

This manual recommends the Blender + BallanceBlenderPlugin mapping workflow, but this is not the only mapping method. The table below lists several common mapping methods with a brief comparison:

| Method                               | Learning Difficulty  | Efficiency                  | Tutorials & Resources             | Tool Stability |
| ------------------------------------ | -------------------- | --------------------------- | --------------------------------- | -------------- |
| Blender + BBP                        | Medium               | Very high after mastery<br> | More<br>but lacks video tutorials | High           |
| Pear Wash Mapping Flow               | Medium               | Relatively high             | More                              | Low            |
| 3ds Max Modeling + Virtools Assembly | Relatively difficult | Normal                      | More                              | Low            |
| Pure Virtools                        | Relatively difficult | Very low                    | Very few                          | Low            |

Regarding tool stability, due to 3ds Max and the fact that Virtools itself has stopped updating, the Blender + BBP mapping method is much more stable in terms of tool stability.

The Blender + BBP mapping method is currently the only mapping method that can completely break free from Virtools, and is relatively more efficient. It is recommended.

::: warning Why is 3ds Max not recommended?
Due to the limitations of the **NMO export plugin**, we can only use versions like 3ds Max 2010. The old 3ds Max has many problems on modern systems, and many problems are not even related to mapping, including but not limited to: **right-click menu graphical glitches**, **crashes when undoing**, **crashes when attaching objects**, **rendering lag on some systems**, etc. Although some problems can be avoided through operational habits and software configuration, this is obviously not something mappers must endure, because using modern tools like Blender almost eliminates the above problems.
:::

## Common Questions

::: details Does Ballance have a dedicated mapping tool/map editor?
**Currently not.** And based on the current development status of the community, **there won't be one in the future either.**
:::

::: details Can I map like drawing? Can I avoid learning 3D modeling?
**Almost impossible.** There is a very old tool that can use Windows Paint for mapping, but it has very large limitations and low efficiency, and does not support the Blender mapping workflow. **It is not recommended.**

In addition, Blender modeling is currently one of the most comfortable mapping methods. ~~You can also take this opportunity to learn modeling. More skills are always better.~~
:::

::: details Are there video tutorials?
Currently, there is no complete video tutorial for the Blender-related mapping process. It is recommended to read the **text and image version** of the [Progressive Tutorial](/en/tutorial/blender/your-first-map).

You can also check out [yyc's video tutorial collection](https://space.bilibili.com/12353755/lists) (currently not complete).
:::

::: details Why not use xxx (such as the latest version of 3ds Max, Maya, etc.) for mapping?
Because Ballance only supports reading materials in NMO format. Currently, the tools that support exporting models as NMO files are only the export plugin for old versions of 3ds Max and the latest BallanceBlenderPlugin.

Currently, it is theoretically possible to use [libcmo21](https://github.com/yyc12345/libcmo21) to export as NMO in any modeling software, or even create mapping tools. For example, BBP is just a wrapper around libcmo21. If you have the ability to develop plugins or map editors, we very much welcome you to try to implement them.
:::
