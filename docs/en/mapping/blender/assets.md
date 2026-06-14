# Mapping Asset Library

## Import Method Introduction

Blender supports three import methods for assets:

| Import Method       | Principle Introduction                                                                                                                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Link                | Links the asset to the current file, so the asset is not editable. Changes to the asset file will be reflected in all files using this asset.                                                            |
| Append              | Copies the asset once and adds it to the current file. Copies the object and its associated resources, including meshes, materials, modifiers, etc. Dragging and dropping three times will create three copies. |
| Append (Reuse Data) | When using an asset for the first time, the append method is used. Subsequent uses will reuse the first copied asset.                                                                                    |

For general Ballance mapping, we recommend choosing the "Append (Reuse Data)" import method. Linking is obviously inappropriate, as an independent Ballance map should not maintain strong coupling with the asset library. Using all append mode will increase too many duplicate meshes, making the final map file larger.

## Mesh Sharing Problem

> The mesh sharing problem most commonly occurs when you use the "Append (Reuse Data)" import method, then edit the imported object, and find that other imported identical objects are also affected.

During the mapping process, there is often a need to edit objects in the assets. Since we recommend the reuse data import method, all identical objects imported into the scene share the same Mesh, which will cause editing one object to affect other identical objects. For example, if you import ten fan bases and one needs the side removed, removing this side will remove the side of all fan bases.

To solve this problem, the core idea is to make the mesh independent. We recommend the following two methods:

- Select the object and press `Shift + D` to duplicate a copy. When duplicating, make sure not to check the "Linked" option (Blender does not check it by default).
- Find the 3D Viewport's `Object` - `Relations` - `Make Single User`, select `Object & Data`. (Data includes mesh information. Only choose to make materials independent when you need to edit materials in special situations)
