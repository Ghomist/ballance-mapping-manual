import { DefaultTheme } from "vitepress";

export const zhNav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "制图手册",
    activeMatch: "(/mapping/)|(/scripting/)",
    items: [
      { text: "传统制图", link: "/mapping/intro/introduction", activeMatch: "/mapping/" },
      { text: "脚本制图", link: "/scripting/basic/intro", activeMatch: "/scripting/" }
    ]
  },
  { text: "渐进式教程", link: "/tutorial/blender/your-first-map", activeMatch: "/tutorial/" },
  {
    text: "参考资源",
    activeMatch: "/reference/",
    items: [
      { text: "Ballance 社区术语表", link: "/terms" },
      { text: "Ballance Wiki", link: "https://ballance.jxpxxzj.cn/wiki/" },
      { text: "地图下载站", link: "http://ballancemaps.ysepan.com/" },
      { text: "BCRC 资源中心", link: "https://bcrc.site/" },
      { text: "Blender 官网", link: "https://www.blender.org/" }
    ]
  }
];
