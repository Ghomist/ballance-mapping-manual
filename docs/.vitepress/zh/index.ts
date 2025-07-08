import { zhNav } from "./nav-bar";
import { zhSidebar } from "./side-bar";
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: "Ballance 制图手册",
  themeConfig: {
    // search: {
    //   provider: "local",
    //   
    //   }
    // },
    notFound: {
      linkLabel: "返回首页",
      linkText: "返回首页",
      title: "页面未找到",
      quote: ""
    },
    nav: zhNav,
    sidebar: zhSidebar,
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    darkModeSwitchLabel: "深浅模式",
    footer: {
      message: "Released under the MIT License."
    },
    returnToTopLabel: "返回顶部",
    lastUpdated: {
      text: "上次更新"
    },
    outline: {
      level: [2, 6],
      label: "目录"
    },
    outlineTitle: "当前页大纲"
  }
};
