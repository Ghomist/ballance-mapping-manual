# In-Game Decorations

Although decorations in the game are not the main content of a level, reasonably adding decorations can still achieve the effect of adding the finishing touches.

## Guardrails and Rivets

Guardrails are the steel rails commonly found on the sides of floors, used to prevent the ball from accidentally falling off the floor. Rivets are decorative items used to fix the guardrails, making players feel that the guardrails are fixed onto the floor.

Place guardrails along the floor as is. The only point to note is that guardrails should not be placed too high or too low. If too high, the ball can easily fall in, giving an abrupt feeling; if too low, it's easily crossed over, failing to serve as a guardrail.

### Height

Since the height of the original version's guardrails is also uncertain, and more like casually placed, when mapping you also don't need to strictly control the height. You only need to feel that it's appropriate. If you really want to set a fixed value, the reference value is: guardrail bottom height distance from the floor is `1.5`; rivet height distance from the floor is `0.7`.

### Grouping

Guardrails need to have the same grouping as steel rails, because visually guardrails also appear in the form of steel rails.

Note that the rivets paired with guardrails **do not need to be grouped into any group**, they are purely decorative. Therefore, it is also recommended not to merge the rivets and guardrails together.

## Street Lamps and Pillars

Street lamps are generally in pairs of two, serving only as decorative items. Place them subjectively where you think looks beautiful.

Pillars serve as decorations that support the floor, providing visual support, and some mappers will also include pillars as part of player interaction. When placing, try to pay attention to the floor's support and force, making the track look more compliant with real physics.

::: warning Small Suggestion
Don't place too many pillars, as it will greatly affect the overall aesthetic quality of the map. ~~And this will be called **hairy leg maps** by some community players.~~
:::

**Pillars that the player's ball cannot reach** or **those that, even if the player's ball touches them, have no significant impact**, it is recommended not to group them at all. This can reduce physicalized objects and speed up the map loading time. ~~(Although the impact is negligible.)~~

## Cloud Layers

Cloud layers are located below the floor and are generally of only two types: ordinary cloud layers and Level 12 storm cloud layers. Cloud layers can effectively increase the player's sense of immersion, creating a high-altitude atmosphere. However, during the mapping process, it is not recommended to add cloud layers, because cloud layer objects are very large, very easy to accidentally select, misoperate, and also easily cause occlusion for some lower objects.
