# Flow Control

When programming, the developer needs to control every action the computer performs at each step, much like an assembly line, proceeding from top to bottom in sequence. Conditional branches and loops are the most important concepts in flow control.

In Virtools, flow control is mainly implemented through BBs of the Logics/Streaming and Logics/Looping classes.

## Conditional Branches

A conditional branch is the `if` statement in most programming languages. There are several ways to implement it in Virtools:

- `Test`: Simply compares two values, supporting common numeric comparisons and null checks.
- `Binary Switch`: Branches based on a Boolean value; the upstream data must be converted to Boolean yourself.
- `Switch On Parameter`: Similar to the `switch` statement in C, it jumps based on a fixed conditional parameter.

If the branch is meant to select among different variables, you can use `Parameter Selector`, where different logic inputs correspond to different parameters, with only one final logic output.

## Iteration Loops

The simplest loop is to directly connect the BB at the end back to the beginning, forming a closed loop.

If we need to introduce a condition, or loop in a specific context, we need to use the following BBs:

- `While`: Loops infinitely while a condition holds.
- `Iterator`: Iterates over the `Row`s of an `Array`, and obtains the data of each row.
- `Group Iterator`: Iterates over the objects in a `Group`, and obtains each object in the group.
- `Hierarchy Parser`: Iterates over the children of an object, and obtains each child of the target object.

If you need to loop within a certain range of values, a range, a number of times, or a duration, you can use the following BBs:

- `Timer`: Loops for a specified duration.
- `Counter`: Loops for a specified number of times.
- `Linear Progression`: Evolves a value from A to B, using the step parameter to control the number of loops.
- `Bezier Progression`: Evolves a value from A to B, with the evolution following a given Bezier function.

## Special

Virtools's BB-based scripting supports multiple lines proceeding at the same time, so there are some special BBs dedicated to specific scenarios:

- `Wait For All`: Waits until all inputs have been activated before activating the output.
- `Keep Active`: After activating any input other than `Reset` once, it will continuously activate the corresponding output. Activating `Reset` can stop the loop.

## More

Since these BBs are all provided by Virtools, their usage documentation can all be found. We recommend that once you understand the degree of control that scripts can achieve, you try them out yourself.
