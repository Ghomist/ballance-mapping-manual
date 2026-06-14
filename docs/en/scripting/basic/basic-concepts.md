# Basic Concepts

This section mainly introduces what scripts are made of and how they run.

## Building Blocks

A **building block** is called a **Building Block** in Virtools terminology, abbreviated as **BB** by the community. The rest of this manual will use the abbreviation.

A BB is the smallest unit in a script, and it represents a **function**. For example, one BB can represent "when the player's ball collides with a certain object", and another BB can represent "play a sound effect".

::: tip Hint
A BB can roughly be compared to the concept of a "function" or "class" in other programming languages, or to a "chip".
:::

A complete script is usually composed of multiple BBs connected together. The inside of a BB is responsible for implementing the specific code, and when we write scripts we only need to use it.

For example, when we need to set the coordinates of an object, we can use the `Set Position` BB. But the specifics of _how to set the coordinates and how to interact with the game engine_ are nothing we need to worry about. We only need to add this BB, connect it correctly, and finally provide the specific coordinates.

For a detailed introduction to BBs, see [Building Block Overview](../building-block/intro.md).

## Connection Lines

Connection lines come in two types: solid lines and dashed lines. Solid lines carry the logic flow and indicate the order of logic; dashed lines carry the data flow and indicate data transfer.

For a BB, the ports that control logic are generally located on the left and right sides, and the ports that control data input and output are generally located on the top and bottom sides. So the correct way to read a script is to follow the solid lines, first understanding which BBs the script uses in sequence, and then, during detailed analysis, observe where the data of a specific BB comes from.

The number on a logic connection line indicates its delay, in units of frames (Frame). By default the delay is generally 0. When connecting a line would cause the script to form a loop, the delay automatically becomes 1. This is to prevent a script with no delay from running infinitely and freezing the game, so a loop must have a delay of at least 1 frame.

Double-clicking a logic connection line lets you modify its delay. If you need to delay for a fixed duration, we do not recommend directly modifying the line's delay, because the frame rate during gameplay is uncertain, and so the delay would also be uncertain. To delay a fixed duration, use the `Delayer` BB.

## Variables

A variable is a mechanism for temporarily storing a "value". In vt, the default form of a variable is a rather flat gray cuboid. When you double-click a BB to edit its parameters, the corresponding variables are actually created automatically.

Variables come in many types, most of which you will almost never use. The table below lists the types that are frequently used:

| Type             | Description                                            |
| ---------------- | ------------------------------------------------------ |
| Integer          | Integer                                                |
| Float            | Floating-point number                                  |
| Vector 3D        | 3D vector                                              |
| Quaternion       | Quaternion, represents rotation                        |
| Matrix           | 4x4 matrix, can represent rotation and scale together  |
| Color            | Color                                                  |
| String           | String                                                 |
| Behaviour Object | Behaviour object; the vast majority of objects derive from it |
| 3D Entity        | 3D entity; the vast majority of visible objects in the game |

You can learn about more types in detail when you actually need them.

Because a script must be attached to a behaviour object, there is a special `This` variable that points to the behaviour object to which the current script is attached.

## Initial Conditions

**Initial Conditions** (Initial Conditions), called **IC** in vt, is a special mechanism in vt used to record the initial state of a behaviour object.

For example, after you set IC for an object (you can Set IC from the right-click menu), no matter what operations you perform on it, as long as you restore IC (Restore IC), the object will be restored to the state it was in when IC was set.

Note that if you use the `Level` right-click and then `Save As...` method to save directly to nmo, the IC information of all objects will be lost. This is because the nmo format does not store IC information.

However, Ballance can only load levels with the nmo extension. Therefore, if you need to use IC in the game, save the level directly as a cmo (either via the top-left toolbar `File - Save As...` or the `Ctrl + S` shortcut), and manually change the extension to nmo.
