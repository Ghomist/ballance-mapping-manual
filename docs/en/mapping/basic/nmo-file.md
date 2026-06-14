# NMO File

The NMO file is the file format for Ballance maps. It is a file format dedicated to Virtools, used to store all object information in the level.

::: tip Hint
If you have experience with other game engines, such as Unity, you can understand the NMO file as the scene file in Unity.
:::

## Texture File Save Format

### Save Options

The Save Options for textures controls how textures are saved in Ballance maps. To minimize map file size as much as possible and ensure that the map won't have rendering errors due to not finding textures, please follow the following requirements to set the texture's Save Options:

- For all Ballance original textures (e.g., floor textures, rail textures, wooden board textures, etc. - anything that can be found in the Texture folder), use the `External` save format.
- For all other textures (e.g., textures you added yourself, like that funny pillar top face in the extra), use the `Raw Data` save format.
- **Strongly not recommended** to use `Use Global`, because depending on the user's global options, this save method can cause ambiguity. Unless you are fixing some old maps, or you know what you're doing, otherwise do not use it.

### Video Format

The Video Format determines how your texture is passed to the GPU when the game is running (just understand it that way). To prevent texture errors, especially transparency errors, and to minimize display pressure, please follow the following requirements to set the texture's Video Format:

- For non-transparent textures (e.g., floor textures, etc.), please use `16Bits ARGB1555`.
- For textures with transparency (e.g., the transparent part of the pillar's lower half, the fan's net cover), please use `32Bits ARGB8888`.
- **Strongly not recommended** to use any other Video Format ~~(because I haven't used them either)~~.
