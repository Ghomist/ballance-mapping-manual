import { enNav } from "./nav-bar";
import { enSidebar } from "./side-bar";
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: "Ballance Mapping Manual",
  themeConfig: {
    nav: enNav,
    sidebar: enSidebar,
    notFound: {
      linkLabel: "Back to Home",
      linkText: "Back to Home",
      title: "Page Not Found",
      quote: "Welcome to join the mapping community QQ group: 1005399899"
    },
    outlineTitle: "On this page",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Dark/Light Mode",
    returnToTopLabel: "Return to top",
    docFooter: {
      prev: "Previous",
      next: "Next"
    },
    footer: {
      message: "Released under the MIT License."
    },
    lastUpdated: {
      text: "Last Updated"
    },
    outline: {
      level: [2, 6],
      label: "Table of Contents"
    }
  }
};
