# Material Texture

Material and Texture are attributes attached to the mesh, used to draw the surface pattern of the object. For ease of understanding, the following text will use **Material** to refer to both.

## Changing Materials

In Blender, we can directly add or change materials in the material panel.

1. Go to the object's material panel, add an empty material slot, then assign a material to it (located to the left of the new material button).
2. Switch to **Edit Mode** in the 3D Viewport, press `3` to switch to **Face Mode**, then select the face you want to apply the material to, and click the `Assign` button in the material panel.

## Material System

BBP provides a material system compatible with Virtools.

Since Blender's material properties cannot be directly compatible with Virtools, any method of directly modifying Blender object materials is invalid and will not take effect in the game.

The correct approach is to go to the Virtools Material part of the material panel, set the parameters in it just like in Virtools, then click **Apply** in the panel to automatically convert it to an almost equivalent Blender material to achieve visual effects.

> The reason for doing this is that BBP reads and writes data in Virtools Material when importing and exporting materials, not the Blender material itself. Because the age gap between Blender and Virtools is too large and the material systems are very different, this is forced and is also the only way to have complete control over Virtools materials in Blender. Then you might have a question, when should you use Blender's material system? For example, for operations such as connecting nodes. The answer is: during the mapping process, do not use Blender's material system at all. All mapping material operations need to be completed through the Virtools Material panel. Only when your map is finished and you want to render preview images or create animations in Blender, do you need to operate in Blender's material system to add effects to your map materials that can only be presented in Blender, such as normals, displacement, etc.
> —— yyc12345

## Adjusting UV

BBP has added several UV adjustment tools specifically for Ballance mapping.

### Floors and Wooden Boards

Select the face you want to adjust in Edit Mode, then select `Flatten UV` in the `Ballance` menu.

Then observe the dialog box in the lower left corner. If adjusting a Floor, select **Floor-specific flatten mode** (the second item). For wooden boards, select **Wooden board-specific flatten mode** (the third item). Select **Scale by size** for the scale mode, and fill in 5 for the size in the scale settings. Then adjust the **Reference Edge** in the dialog box (generally you can just increase from 0 upwards) until your Floor becomes normal.

### Rails

Rails actually don't need UV adjustment, because in the game, Rails will be automatically smoothed, and there is not much difference after adjusting UV.

But to have better visual effects in Blender, we can give Rails a special UV to make them display similarly to the game.

First, select the Rail (no need to enter Edit Mode), then select `Rail UV` in the `Ballance` menu. Then select the material that needs to be adjusted (generally the name contains `Rail`, you can search by name), and click OK.

## Semi-transparent Materials

Implementing semi-transparent materials in Ballance is not an easy task. The main reason is that our understanding of the Virtools material system is still not thorough enough, and its behavior is difficult to predict. It is easy to encounter situations where it works in Blender but not in the game.

### Specific Implementation

The following will introduce how to implement a semi-transparent glass from scratch.

1. First, create a geometry. It is recommended to use a Cube, or you can use a Plane.
2. Go to its material panel, add an empty material slot, then create a new material and rename it to `Glass` (or any name you like).
3. Scroll down to the Virtools Material part of the material panel and set the parameters in it:
   1. Four colors: You can set them arbitrarily. To achieve transparency, you need to adjust the transparency of `Diffuse` to **a value less than 1**.
   2. Two-sided: If you are using a Plane, it is recommended to check this option. By default, materials are only displayed on one side.
   3. Transparency parameters:
      - Alpha Test: **Close** it.
      - Alpha Blend: **Open** it, set `Source Blend` to `Source Alpha`, `Destination Blend` to `Inverse Source Alpha`.
      - Depth Buffer: **Check Write Depth Buffer**, set the depth comparison function to `Less Equal` (default value).
4. Click the **Apply Button** in Virtools Material to convert the material to a Blender material and display it.
5. Go back to the material panel **Add another empty material slot, and move this empty material slot to the first position of the materials** (this step is to ensure Virtools can correctly recognize the transparent material we just created).

At this point, you should be able to see this semi-transparent glass in both Blender and the game.

### Common Problems

If you want to create a semi-transparent material with a texture (for example, a semi-transparent Rail or Floor), follow steps 3~4 of the above operation to directly set parameters for the material with the texture and apply it. If you only want to set transparency for one object, remember to create a copy of the material first (that is, duplicate a copy) to prevent interference with other objects using this material.

After setting transparency, if you see the texture itself in Blender and can't see the transparency effect, or see a solid color block, don't worry. Hold `Z` in the 3D Viewport and switch to **Solid Mode** to see the transparency effect.

If you can't see the transparency effect in Ballance, or if the object is completely hidden (fully transparent) in Ballance, please make sure **the first material slot of the object in Blender is an empty material slot**. Generally, Virtools will only recognize starting from the second material slot.

::: warning Occlusion Problem
Due to Ballance's rendering mechanism issues, semi-transparent materials will completely block textures with transparency channels. A common situation is that pillars behind semi-transparent objects will be completely blocked. There is still no good solution at present, and mappers need to pay attention to avoid this.
:::
