# Mechanisms and Props

Objects in the game that can dynamically interact are generally called mechanisms. Props are a special type of mechanism, specifically referring to those mechanisms that can be freely moved and manipulated by the player's ball, such as: prop balls, prop boxes, etc. Sometimes Extra Life Balls and Extra Point Balls can also be considered a type of "prop".

## Placeholder Mechanism

The grouping of mechanisms and ordinary objects is slightly different. All mechanisms in Ballance maps have no textures. They are just **placeholders**, with the only useful information being the object information (i.e., coordinates, rotation, scale, etc.). The shape of the placeholder is only for easy distinction when mapping, and to provide an alignment reference (you can see that most mechanisms come with one or several cubes, used for alignment with floors).

When loading into the section to which the mechanism belongs, the game will **read and store** the placeholder's position (i.e., the object's origin), rotation, and scale information, then determine what kind of mechanism it should be replaced with based on the placeholder's group, and then assign the previously stored displacement, rotation, and scale information to the real mechanism.

::: tip Advanced Tip
The placeholder mechanism only uses object information, which also means that **the meshes (shape information) of these placeholders are not important**.

Therefore, you can completely group a floor of any shape into the fan group, and in the game, these floors will be replaced with fans instead of floors.

You can also directly delete their meshes, and when modeling this mechanism will not be visible. As long as the grouping is correct, it will also be properly replaced by the game.
:::

::: warning Note
Since the game reads the object's origin information, the mechanism's origin **is not allowed to be changed arbitrarily**. After changing the origin, the mechanism may have issues such as misalignment, etc.

In addition, mechanism scaling may lead to undefined behaviors. Unless tested in the game multiple times, we generally do not recommend scaling mechanisms.
:::

## Mechanism Replacement

Mechanism replacement is a way to implement custom mechanisms, script insertion, and other advanced operations.

When Ballance loads a level, it will first load the map into the scene, then according to the placeholder mechanism described above, replace the mechanism placeholders in the game with real mechanisms that have models and functions. However, during replacement, if there is already an object in the map with the same name as the mechanism, the mechanism replacement will not occur, and the game will directly delete the placeholder and treat the already existing object as the mechanism.

### Mechanism Model Replacement

Through mechanism replacement, we can easily change the mechanism's models, such as mirroring mechanisms, filling faces, etc.

Just find the mechanism you need to modify from the game's PH folder, import its model into Blender, then perform filling, mirroring, and other operations, and then export it to the custom map. Please ensure that the object's name remains unchanged for the replacement to succeed.

### Inserting Custom Scripts

See [Script Insertion Principle](../../scripting/basic/scripts-insertion) for details.
