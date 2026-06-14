# Map Dimensions

This article introduces the unit size, measurement units, and dimensions of common objects in Ballance.

## Unit Length

In Ballance, the edge length of a 1x1 floor block (i.e., a changer base cube) is `5`.

The perfect sphere in Ballance (such as the Wood Ball, Stone Ball) has a diameter of `4`.

::: tip About measurement units

Most game engine data values don't include units, because handling units during computer simulation is very troublesome and unnecessary. Units are just defined by humans for quick number recognition. Therefore, the scale in Ballance is generally not counted with units.

When we need to perform physics estimation, we can record it as `meters`. For example, the radius of Wood Ball and Stone Ball is `2 meters`; the edge length of the changer base is `5 meters`; the magnitude of gravitational acceleration in Ballance is `3.03 m / s^2`.
:::

## Common Object Dimensions

The table below records the dimensions of common objects during the mapping process.

| Object               | Data description                                                                                           | Standard data                  | Common data | Notes                                                               |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------- | ------------------------------------------------------------------- |
| Dual Rail            | Cross-section (regular octagon) radius/center spacing of two rail cross-sections                           | 0.35/3.8                       | 0.375/3.75  | Common data is also widely used, depends on personal preference     |
| Guard Rail           | Cross-section (regular octagon) radius                                                                     | 0.25                           |             |                                                                     |
| 1x1 Floor/Cube       | Cube edge length                                                                                           | 5                              |             |                                                                     |
| Groove Floor         | Groove depth                                                                                               | 0.7                            |             |                                                                     |
| Wood Ball/Stone Ball | Sphere diameter                                                                                            | 4                              |             |                                                                     |
| Paper Ball           | Logic grid sphere diameter/maximum diameter                                                                | 4/5                            |             | Maximum diameter orientation is harder to find                      |
| Dome                 | Diameter of the circle projected on the floor by the steel bell                                            | 13.287                         |             |                                                                     |
| Stopper              | Distance between the top surface of this object used for padding and the top surface of the adjacent floor | 0.5                            |             |                                                                     |
| Elevator             | Elevator reserved gap length                                                                               | 21.8158                        | 22          |                                                                     |
| Swing                | Swing swing range length                                                                                   | 15                             |             |                                                                     |
| Pendulum             | Length                                                                                                     | 23.2416                        |             |                                                                     |
| Fan                  | Height difference between small yellow dot axis center and fan logic grid axis center                      | 0.15                           |             |                                                                     |
| Two-way Flip Board   | Length of single board in two-wing bridge/center spacing of two boards                                     | 6.616/15                       |             |                                                                     |
| Push Board           | Length                                                                                                     | 10.0613                        | 10          | Common data is only used for acceptable reserved area length        |
| Cork Bridge          | Length                                                                                                     | 15.3287                        | 15          | Common data is only used for acceptable reserved area length        |
| Seesaw               | Length                                                                                                     | 14.8                           | 15          | Common data is only used for acceptable reserved area length        |
| 34 Module            | Floor block edge length/cube cuboid data                                                                   | 5/4.1*4.1*5                    |             |                                                                     |
| T-Board              | Length                                                                                                     | Standard data not yet measured |             | Approximate data: reserved area length for T-board can be 10 or 9.6 |
| Box Float Board      | Board length/axis length                                                                                   | 5/10.15                        |             |                                                                     |
