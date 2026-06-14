# Basic Operations Guide

This guide will introduce the most basic operations in Blender, such as manipulating objects and editing meshes. Due to space limitations, we will not cover more advanced operations or provide extensive explanations. The goal is to help you quickly get started with Blender. You will need to spend time learning more operations on your own.

::: tip A Note Before Starting
The following introductions are all based on default shortcut key behavior. If you don't like the default shortcuts or can't get used to them, you can change them in the settings. If you feel any explanation is not detailed enough, I suggest opening Blender and practicing through trial and error.
:::

## View Related Operations

### Changing View Perspective

By default in Blender, holding the middle mouse button allows you to orbit around and inspect. Holding `Shift` while using the middle mouse button allows you to pan the view (drag the view).

In the top-right corner of the 3D Viewport, there is a coordinate system. Clicking on an axis will switch to the corresponding view. However, we recommend using shortcut keys for more convenient switching. Hold the `~` key (the key above `Tab` on the keyboard, referred to as the tilde for convenience), then drag the mouse in the corresponding direction and release `~` to switch views. Common ones include:

- Up: Top view
- Upper left: Front view
- Left: Left view
- Lower right: Adjust the view to just fit the currently selected object

### Render Mode

Blender has four render modes in total. Hold the `Z` key and drag the mouse to switch between them. In mapping, the most commonly used are **Wireframe Mode** and **Material Preview Mode**.

Sometimes in [Edit Mode](#edit-mode), we want to preview materials while being able to select certain vertices on the back of the object. In this case, press `Alt + Z` to toggle transparency.

## Object Related Operations

### Creating Objects

The shortcut for creating objects is `Shift + A`. After installing the BBP plugin, you can directly create Ballance-related objects, such as Floors and Rails.

### Manipulating Objects

The three most basic operations:

- Move object: `G`
- Rotate object: `R`
- Scale object: `S`

The operation method is: first click to select the object, then press the shortcut key, then move the mouse to operate. When you reach the desired result, click to apply. Right-clicking cancels the operation.

After pressing the operation shortcut key, you can then press the `X`, `Y`, or `Z` keys to limit the operation to a specific axis. You can change the coordinate system for operations by modifying the coordinate system in the middle at the top of the 3D Viewport.

While moving the mouse, you can also choose to press numbers to input specific values for the operation. Common examples:

- To move an object 5 units along the X axis: `G` `X` `5`
- To rotate an object 90 degrees around the Z axis: `R` `Z` `90`

### Applying Operations

Press `N` to open the item properties panel where you can see the object's position, rotation, scale, and dimension properties.

Applying operations means applying the object's current displacement, rotation, and scale (relative to the world origin) to the mesh itself. This maintains the object's current visual state, with specific effects as follows:

- When the object is not at the world origin, applying position changes the object's origin to the world origin, meaning the object's coordinates will be set to all zeros.
- When the object has rotation angles, applying rotation fixes the object at this rotation angle while clearing the angles to zero.
- When the object has a scale that is not 1, applying scale fixes the object's size while setting the scale to 1.

Special situations may require applying operations. The shortcut is `Ctrl + A`.

### Duplicating Objects

With an object selected, press `Shift + D` to duplicate it. In the operation options in the lower left corner, you can set whether to link. If linked, only the object itself will be duplicated, and its mesh, materials, etc. will be shared with the original object.

### Joining Objects

With multiple objects selected, press `Ctrl + J` to join objects together into a single object.

This is useful when there are too many Floor and Rail components in the scene. However, after joining, it is inconvenient to make adjustments, and it is easy to make mistakes, so it is recommended to join objects before exporting or publishing the map.

Generally, joining objects can also be combined with vertex merge operations. After merging Floors, if there are overlapping vertices, merging them will save the number of vertices.

## Edit Mode

Edit Mode corresponds to an object's mesh, allowing you to edit its mesh shape, etc. The shortcut to enter Edit Mode is `Tab`.

In Edit Mode, there are multiple selection methods. The three commonly used ones are:

- `1`: Vertex mode
- `2`: Edge mode
- `3`: Face mode

General operations in Edit Mode are the same as manipulating normal objects, but when manipulating vertices, it will affect their connected edges and faces, so you need to be more careful.

Common operations in Edit Mode include:

- `K`: Knife tool, which can cut new edges on existing faces.
- `Ctrl + R`: Loop cut tool.
- `E`: Extrude tool. Not commonly used in Ballance mapping.
- `F`: Face fill tool. Usage is to first select a series of vertices, then press `F` to create a new face using these vertices.
- `Shift + N`: Recalculate normals.
- `P`: Separate tool. Can separate the selected part or connected parts into new objects, which is useful when separating already joined objects.
- `L`: Select connected objects to the currently selected one.
- `M`: Merge objects. Generally used for vertices. After selecting all vertices, merge by distance to reduce the number of vertices.

::: warning Vertex Merge Precautions
When you use **Merge by Distance** in Blender, please make sure the **Sharp Edges** option in the execution box in the lower left corner is checked. If this option is not checked, the merged object will have various normal merge errors, which may cause the Floor exported to the game to appear black.
:::
