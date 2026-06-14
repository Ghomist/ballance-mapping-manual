# Cleanup and Release

This chapter is the last chapter of the tutorial. If you have read this far, then you are pretty much able to complete a custom map on your own. The remaining work may seem trivial — after all, your map is already playable. But if you want to do better, for example to facilitate subsequent updates and maintenance, or to reduce the size of the map/project file, you can refer to the content of this chapter.

## Merging Objects

If your floors and rails heavily used the assembly method during production, then there may be a large number of floor "fragments" in your project file. We can combine some adjacent fragments together to reduce the number of objects.

Merging objects only requires selecting them and then pressing `Ctrl + J`.

In addition, due to the Stopper sound bug, it is recommended to merge all the Stoppers together, to ensure there is at most one Stopper in the map. This way, in the game, all the Stoppers can make a sound.

After merging objects, if you need to adjust positions and so on, you can operate directly in Edit Mode. You can also (it's recommended to use **Face** mode) select a certain part and then press `P` and choose **Selection** to separate it.

## Merging Vertices

Another benefit of merging objects is being able to merge duplicate vertices together. Merging vertices can save a large number of vertices, which is very beneficial for reducing the size of the map file. It can also reduce, to a certain extent, the physics clipping-through bugs caused by having too many vertices.

In Edit Mode, press `1` to switch to vertex mode, press `A` to select all vertices, then press `M` and choose **By Distance**, to merge all the coincident vertices of the object. Generally, for objects aligned using vertex snapping, the default merge threshold can merge them all. In special cases, if vertices that look very close together are not merged, you can manually select those vertices and then increase the merge distance.

When merging vertices, you must remember to check **Keep Sharp Edges** in the dialog box! This can very effectively prevent the [Floor Blackening Problem](../../mapping/blender/black-floor).

## Tidying Up Object Names

Maintaining a good naming format is beneficial for subsequent maintenance. In past workflows, maintaining object naming was a rather troublesome task — at least compared to Blender mapping. With the help of BBP, you only need to, in the **Outliner**, right-click the collection where all our objects are located (Collection), and then choose **Adjust Object Names**, to adjust the object names in one click, which is very convenient.

The name adjustment is based on the object's grouping; for the specific rules, see the [BBP naming convention documentation](https://yyc12345.github.io/BallanceBlenderHelper/zh-cn/naming-convention/).

<!-- TODO: ## Cleaning Up Unused Objects -->

## Map Testing and Release

We recommend using BML/BMLP to test the map. The advantages are as follows:

- You can fly with `F1`.
- You can quickly switch sectors.
- You can freely change the ball and generate props.
- There is a centralized folder for storing map files, with no need to manually replace the original levels.

Before release, **you must be able to complete the map at least once yourself in non-cheat mode**, to ensure the playability of the map. In addition, we recommend using BML/BMLP's cheat mode to test every detail of the map, ensuring the floor patterns, texture mapping, alignment, and so on.

After completing the final testing, you can send the map file to the community to invite everyone to play, or you can apply to upload it to the map download site.
