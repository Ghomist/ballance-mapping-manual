# Script Insertion Principle

If you write a script directly in a custom map, the game will not execute it, because scripts are in an inactive state by default, and the game will not actively activate the scripts inside the map. Therefore, we need to use a special method to insert **the custom script we wrote** into **a script that the game will activate**.

## Mechanism Replacement Principle

Ballance maps have a [mechanism replacement mechanism](../../mapping/basic/module#mechanism-replacement). Since mechanisms usually carry scripts, after the game finishes replacing the mechanisms in the map, it will activate the scripts on those mechanisms. By using objects and scripts with the same name, we can make the game think the replacement succeeded, thereby activating our custom script.

Any mechanism can be used to implement script insertion, but in practice we mostly use the **spawn point checkpoint fire**. The reasons are as follows:

- Every Ballance level will have **exactly one** spawn point checkpoint fire.
- Its script is relatively simple, requiring fewer scripts to be imported.

## Inserting via the Template

Based on this principle, we could import the spawn point checkpoint fire from the game folder into our map, but we would have to reorganize the scripts each time. That is why we made a script insertion template — each time you use it, you only need to merge it into the map.

You can also write your script directly on top of the template. This way, each time you export the map to nmo, you only need to re-import and merge the script in Virtools, which is very useful when you need to frequently modify the map model while also testing it with a script.

For downloading and using the template, see [Quick Start](quick-start).
