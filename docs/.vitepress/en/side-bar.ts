import { DefaultTheme } from "vitepress";

export const enSidebar: DefaultTheme.Sidebar = {
  "/en/mapping/": [
    {
      text: "Intro",
      base: "/en/mapping/intro/",
      collapsed: false,
      items: [
        { text: "Overview", link: `introduction` },
        { text: "About Mapping", link: `about-mapping` },
        { text: "Install and Config", link: `installations` },
        { text: "Migrating from 3ds Max", link: `migrate-from-max` }
      ]
    },
    {
      text: "Basics",
      base: "/en/mapping/basic/",
      collapsed: false,
      items: [
        { text: "Map Dimensions", link: `dimension` },
        { text: "Level", link: `level` },
        { text: "Grouping", link: `grouping` },
        { text: "Floor and Rail", link: `floor-and-rail` },
        { text: "Modules and Items", link: `module` },
        { text: "In-game Decorations", link: `decoration` },
        { text: "Depth Test Cube", link: `depth-test-cube` },
        { text: "NMO File", link: `nmo-file` }
      ]
    },
    {
      text: "Skills and Tips",
      base: "/en/mapping/blender/",
      collapsed: false,
      items: [
        { text: "Basic Operation Guide", link: `basic-manual` },
        { text: "Mapping Asset Library", link: `assets` },
        { text: "Snapping and Alignment", link: `snapping` },
        { text: "Textures", link: `texture` },
        { text: "Sampling Introduction", link: `sampling` },
        { text: "Sampling Rails", link: `sampling-rail` },
        { text: "Sampling Floors", link: `sampling-floor` },
        { text: "Troubleshooting", link: `trouble-shooting` },
        { text: "Black Floor Issue", link: `black-floor` }
      ]
    }
  ],
  "/en/scripting/": [
    {
      text: "Scripting Mapping Basics",
      base: "/en/scripting/basic/",
      collapsed: false,
      items: [
        { text: "Overview", link: `intro` },
        { text: "Quick Start", link: `quick-start` },
        { text: "Script Insertion Principle", link: `scripts-insertion` },
        { text: "Basic Concepts", link: `basic-concepts` },
        { text: "Basic Operations", link: `basic-operations` },
        { text: "Debugging Scripts", link: `debugging` }
      ]
    },
    {
      text: "Building Blocks",
      base: "/en/scripting/building-block/",
      collapsed: false,
      items: [
        { text: "Building Block Overview", link: `intro` },
        { text: "OP", link: `op` },
        { text: "Flow Control", link: `streaming` },
        { text: "Physics System", link: `physics` },
        { text: "Message Mechanism", link: `message` },
        { text: "Particle System", link: `particle` }
      ]
    },
    {
      text: "Example Demonstrations",
      base: "/en/scripting/example/",
      collapsed: false,
      items: [
        { text: "Modifying In-game Data", link: `modify-in-game-data` },
        { text: "Collision Detection", link: `collide-detect` },
        { text: "Key Event Detection", link: `key-event` }
      ]
    }
  ],
  "/en/tutorial/": [
    {
      text: "Blender Mapping Workflow",
      base: "/en/tutorial/blender/",
      collapsed: false,
      items: [
        { text: "Your First Custom Map", link: `your-first-map` },
        { text: "The Smallest Level", link: `smallest-level` },
        { text: "Sector 1: Assembling Floors", link: `sector-1` },
        { text: "Sector 2: Building Rails", link: `sector-2` },
        { text: "Sector 3: Placing Modules", link: `sector-3` },
        { text: "Decorations and Depth Test Cube", link: `decorations-and-depth-test-cube` },
        { text: "Cleanup and Release", link: `clean-and-release` }
      ]
    },
    {
      text: "3ds Max Mapping Workflow",
      base: "/en/tutorial/max/",
      collapsed: false,
      items: [{ text: "Mapping with Max", link: `index` }]
    }
  ]
};
