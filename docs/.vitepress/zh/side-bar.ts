import { DefaultTheme } from "vitepress";

export const zhSidebar: DefaultTheme.Sidebar = {
  "/mapping/": [
    {
      text: "简介",
      base: "/mapping/intro/",
      collapsed: false,
      items: [
        { text: "概述", link: `introduction` },
        { text: "关于制图", link: `about-mapping` },
        { text: "工具安装与配置", link: `installations` },
        { text: "从 3ds Max 迁移", link: `migrate-from-max` }
      ]
    },
    {
      text: "制图基础",
      base: "/mapping/basic/",
      collapsed: false,
      items: [
        { text: "地图度量", link: `dimension` },
        { text: "关卡", link: `level` },
        { text: "归组", link: `grouping` },
        { text: "路面与钢轨", link: `floor-and-rail` },
        { text: "机关与道具", link: `module` },
        { text: "游戏内装饰", link: `decoration` },
        { text: "死亡区", link: `depth-test-cube` },
        { text: "NMO 文件", link: `nmo-file` }
      ]
    },
    {
      text: "Blender 制图技巧",
      base: "/mapping/blender/",
      collapsed: false,
      items: [
        { text: "基础操作指南", link: `basic-manual` },
        { text: "制图资产库", link: `assets` },
        { text: "吸附对齐", link: `snapping` },
        { text: "材质贴图", link: `texture` },
        { text: "放样介绍", link: `sampling` },
        { text: "放样制作钢轨", link: `sampling-rail` },
        { text: "放样制作路面", link: `sampling-floor` },
        { text: "疑难杂症", link: `trouble-shooting` },
        { text: "路面发黑问题", link: `black-floor` }
      ]
    }
  ],
  "/scripting/": [
    {
      text: "脚本制图基础",
      base: "/scripting/basic/",
      collapsed: false,
      items: [
        { text: "概述", link: `intro` },
        { text: "快速开始", link: `quick-start` },
        { text: "脚本插入原理", link: `scripts-insertion` },
        { text: "基础概念", link: `basic-concepts` },
        { text: "基础操作", link: `basic-operations` },
        { text: "调试脚本", link: `debugging` }
      ]
    },
    {
      text: "构建单元",
      base: "/scripting/building-block/",
      collapsed: false,
      items: [
        { text: "概述", link: `intro` },
        { text: "Op", link: `op` },
        { text: "流控制", link: `stream` },
        { text: "物理系统", link: `physics` },
        { text: "消息机制", link: `message` },
        { text: "粒子系统", link: `particle` }
      ]
    },
    {
      text: "演示示例",
      base: "/scripting/example/",
      collapsed: false,
      items: [
        { text: "操控游戏数据", link: `modify-in-game-data` },
        { text: "碰撞检测", link: `collide-detect` },
        { text: "按键检测", link: `key-event` }
      ]
    }
  ],
  "/tutorial/": [
    {
      text: "Blender 制图流程",
      base: "/tutorial/blender/",
      collapsed: false,
      items: [
        { text: "你的第一张自制地图", link: `your-first-map` },
        { text: "最小的关卡", link: `smallest-level` },
        { text: "第一小节：拼接路面", link: `sector-1` },
        { text: "第二小节：构建钢轨", link: `sector-2` },
        { text: "第三小节：放置机关", link: `sector-3` },
        { text: "装饰与死亡区", link: `decorations-and-depth-test-cube` },
        { text: "清理与发布", link: `clean-and-release` }
      ]
    },
    {
      text: "3ds Max 制图流程",
      base: "/tutorial/max/",
      collapsed: false,
      items: [{ text: "使用 Max 制图", link: `index` }]
    }
  ]
};
