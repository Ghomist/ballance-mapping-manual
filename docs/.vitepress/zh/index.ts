import { zhNav } from "./nav-bar";
import { zhSidebar } from "./side-bar";
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: "Ballance 制图手册",
  themeConfig: {
    nav: zhNav,
    sidebar: zhSidebar,
    notFound: {
      linkLabel: "返回首页",
      linkText: "返回首页",
      title: "页面未找到",
      quote: "欢迎加入制图交流群 QQ 群：1005399899"
    },
    outlineTitle: "当前页大纲",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "深浅模式",
    returnToTopLabel: "返回顶部",
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    footer: {
      message: "Released under the MIT License."
    },
    lastUpdated: {
      text: "上次更新"
    },
    outline: {
      level: [2, 6],
      label: "目录"
    }
  }
};
