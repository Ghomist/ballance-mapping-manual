# Migrating from 3ds Max

If you are already proficient in using 3ds Max for mapping, the following text can help you quickly understand the differences between 3ds Max and Blender in the mapping process, and quickly become familiar with operations in Blender. The two are generally similar, but there are slight differences in some operations and features. See the table below for details:

| Operation        | 3ds Max                                                   | Blender                                                         |
| ---------------- | --------------------------------------------------------- | --------------------------------------------------------------- |
| Grouping         | Grouping using naming rules and Virtools scripts          | Group directly in Blender                                       |
| Building tracks  | Pre-fabricated presets pre-set in the file                | Create directly by filling in parameters or using asset library |
| Auto UV          | Supported through stacking modifiers                      | Native support, plugin support                                  |
| Software version | Limited by export plugin, only supports very old versions | Currently supports the latest version                           |

The differences in the table will be elaborated one by one below.

### Max Alignment Tool

BallanceBlenderPlugin provides a set of alignment tools, located at `Ballance` - `3ds Max Align` in the 3D view. This tool is similar to the alignment tool in 3ds Max. For specific usage, please refer to BBP's [legacy alignment documentation](https://yyc12345.github.io/BallanceBlenderHelper/zh-cn/legacy-align/).

In addition to the traditional alignment method, we strongly recommend using the snapping function in Blender. For details, please refer to [Snapping Function Detailed Explanation](../blender/snapping).

### Isolate Edit

In 3ds Max, when you want to focus on adjusting one or a few meshes, you usually use `Alt + Q` to isolate them, showing only that one object.

The corresponding shortcut key in Blender is `/`. After entering isolation mode, press the `/` key again to exit.

### Pear Wash Style Drag-to-Create

In the 3ds Max mapping tutorial by **Pear Wash washing**, there is a function to create objects by dragging pre-constructed components in 3ds Max. For example, Pear Wash provides a straight floor, and the mapper only needs to drag one end in 3ds Max to stretch it. Its length will be stretched, and the UV will also be automatically stretched.

If you are used to the above operation, you can try the replacement function in Blender. For details, see: [Correct Face Attributes](../../tutorial/blender/sector-1#stretching-and-shrinking-floors).

### Sampling

The method for creating complex floors in 3ds Max is usually sampling (lofting). Blender also has the same function: [Blender Sampling Method](../blender/sampling).

### Migration of Map Files

If you have already created a custom map or a half-finished map in 3ds Max, you can consider the following two migration methods:

- First use the plugin to export the level to NMO, and use the grouping template in the 3ds Max mapping template to give it grouping information, then directly import the NMO file into Blender. This method does not require re-grouping, and you can also directly export NMO later.
- Directly export the model to modern 3D model formats, such as fbx, glTF, etc., and then import into Blender. This operation will lose your grouping information, and currently requires you to re-group manually in Blender or use the automatic grouping function.
