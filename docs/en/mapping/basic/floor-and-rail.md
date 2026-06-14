# Floor and Rail

Floors and rails are the main objects that collide with the player's ball in the game.

## Floor

Floors are the roads seen everywhere in the game, which will be given physical properties by the game, serving as constant, fixed objects, and the player's ball can walk on them. The mesh of the floor determines its collision shape.

In the game, for a floor to work normally, the floor object needs to be grouped into the following groups:

- `Phys_Floors`: To physicalize the floor, otherwise it cannot collide with the player's ball.
- `Sound_HitID_01`: When the player collides with objects in this group, a concrete floor collision sound effect will be played.
- `Sound_RollID_01`: When the player's ball rolls on objects in this group, a concrete floor rolling sound effect will be played.
- `Shadow`: When the player's ball is within a certain distance above objects in this group, a shadow will be cast.

## Rail

Rails can be seen as a special type of floor. Their physical properties are completely identical to floors, with the following main differences:

- Rail group objects in the game will have a visual ~~blur~~ smoothing effect.
- Rails do not need to be grouped into the shadow group.

If you want a rail to work normally, the rail object needs to be grouped into the following groups:

- `Phys_FloorRails`: To physicalize the rail, otherwise it cannot collide with the player's ball.
- `Sound_HitID_03`: When the player collides with objects in this group, a steel rail collision sound effect will be played.
- `Sound_RollID_03`: When the player's ball rolls on objects in this group, a steel rail rolling sound effect will be played.

### Rail Parameters

> ~~If I want to make rails instead of writing a bunch of messy stuff here, then the following might be useful (~~

Rails in Ballance look cylindrical in shape, but actually their cross-section is **regular octagon**.

Rails are generally divided into flat-top and pointed-top, i.e., whether the edges of the octagon face upward or the corners face upward. All original single rails are flat-top, which can guarantee that a perfect sphere can walk on them without falling. All original double rails are pointed-top, ~~possibly to prevent players from manually aligning and escaping the level~~.

When you need to create rails yourself, the following parameters may be useful:

| Data                             | Value     | Notes                                                    |
| -------------------------------- | --------- | -------------------------------------------------------- |
| Single rail cross-section radius | `0.35`    |                                                          |
| Double rail center spacing       | `3.75`    | Approximately this value, easy to remember               |
| Single/double rail Z axis offset | `0.62`    | Player ball radius is `2`, calculated by Imbalance Dream |
| Ordinary side rail tilt angle    | `79.563°` | Provided by BallanceBug                                  |
| Ordinary side rail spacing       | `3.864`   | Provided by BallanceBug                                  |
| Spiral rail layer spacing        | `5`       | Measured from Level 10                                   |
| Side spiral rail layer spacing   | `3.6`     | Measured from end of Level 13, start of Level 9          |

## Stopper

Stopper is a special type of colliding object in the game. The player's ball cannot collide with it, but mechanism props in the scene can.

Stopper needs to be grouped into the following groups:

- `Phys_FloorStopper`: To physicalize the Stopper object, otherwise it cannot collide with mechanism props.

### Common Uses

- Mechanism support: Most common Stopper usage in the original version, for example, when tilting boards and push boards flip down, there will be a wooden component for support.
- Invisible prop support: More common in custom maps, making the Stopper invisible, generally used to limit the movement of prop balls and prop boxes, reducing the randomness of props without affecting the player's visual experience.

### Sound Bug

Due to a mistake in the original version of Ballance script writing, only the first object located in the `Phys_FloorStopper` group will emit collision sounds.

Therefore, for all Stoppers in the map to have sounds, it is recommended to **before publishing the map** merge all Stoppers into one object. The specific operation is: select all Stoppers in Blender, then press `Ctrl + J` to merge them.
