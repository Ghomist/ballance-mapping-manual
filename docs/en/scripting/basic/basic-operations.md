# Basic Operations

This section mainly introduces some basic operations for Virtools scripts.

## BB Operations

### Creating a BB

To create one, you can use the right-click menu `Add Building Block` to find a BB by category, or use `Add Building Block by Name` (you can also use the shortcut `Ctrl + left double-click`) to add a BB by name.

### Changing Parameters

Double-clicking a BB lets you change its parameters. When modifying a parameter, if the parameter input is not connected to a variable, a variable is automatically created. If the parameter input is already connected to another BB's parameter output, or to a Parameter Operation, that parameter will not be shown in the parameter table.

In addition, for some BBs, right-clicking and choosing `Edit Settings` (or pressing the `S` shortcut while the BB is selected) lets you adjust their settings. Settings are different from parameters — they are generally fixed when the script is written and cannot be dynamically modified at runtime. Settings are sometimes important; for example, the setting of an Op is its corresponding operation, and the setting of an object-operation-type BB lets you configure it.

### Packaging a BB

Packaging a BB lets you bundle multiple BBs together into a new, freely editable "BB", which is called a **Behavior Graph** (abbreviated **BG**) in Virtools.

A packaged BG is no different from an ordinary BB and can be used just like one. Moreover, the internal structure of a BG is entirely under the developer's control. You can freely add various inputs/outputs, variable inputs/outputs to a BG (right-click and choose `Construct`), and even add BBs; the internal logic structure can be modified at any time.

The method for making a BG is very simple. Right-click in an empty area, choose `Draw Behavior Graph` (or directly press the `G` shortcut), then enter box-selection mode and box-select all the BBs you want to package. If you need to move a BB into or out of a BG, use `Ctrl + X` to cut the BB.

Double-clicking an empty area inside a BG minimizes it, and you can also right-click `Rename` (or press the `F2` shortcut while selected) to set the BG's name.

## Connection Lines

When dragging, connection lines will bypass BBs by default and distribute along the axes (horizontal and vertical). If you want to draw a straight line directly, hold down `Ctrl` while connecting.

Right-clicking a connection line also lets you insert control points (`Insert Control Point`), which makes more refined routing possible.

::: warning Common Knowledge
Precise routing is only a **possibility**. Because of the nature of BBs, it is hard to guarantee that you won't later need to modify a BB's position, and once you drag a BB, all the connection lines attached to it will be automatically re-routed. So be content with reasonable connection lines — just don't overlap them so much that they become completely unreadable. We don't recommend getting too hung up on styling.
:::

## Viewing Documentation

When a BB is selected, you can press `F1` to open that BB's documentation (English only). When you are unsure of a BB's specific purpose, reading the documentation is very helpful.

::: tip Hint
Some BBs built into Ballance (such as the physics-related BBs, and the BBs starting with `TT`) have no documentation. The purpose of these BBs may be found in other parts of this manual. If there is no material, please research on your own, or communicate with our [community](../../mapping/intro/introduction#community-support).
:::
