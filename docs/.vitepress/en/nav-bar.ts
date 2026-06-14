import { DefaultTheme } from "vitepress";

export const enNav: DefaultTheme.NavItem[] = [
  { text: "Home", link: "/en/" },
  {
    text: "Mapping Manual",
    activeMatch: "(/en/mapping/)|(/en/scripting/)",
    items: [
      {
        text: "Traditional Mapping",
        link: "/en/mapping/intro/introduction",
        activeMatch: "/en/mapping/"
      },
      {
        text: "Scripting Mapping",
        link: "/en/scripting/basic/intro",
        activeMatch: "/en/scripting/"
      }
    ]
  },
  {
    text: "Progressive Tutorial",
    link: "/en/tutorial/blender/your-first-map",
    activeMatch: "/en/tutorial/"
  },
  {
    text: "References",
    activeMatch: "/en/reference/",
    items: [
      { text: "Ballance Community Terminology", link: "/en/terms" },
      { text: "Ballance Wiki", link: "https://ballance.jxpxxzj.cn/wiki/" },
      { text: "Map Download Site", link: "http://ballancemaps.ysepan.com/" },
      { text: "BCRC Resource Center", link: "https://bcrc.site/" },
      { text: "Blender Official Website", link: "https://www.blender.org/" }
    ]
  }
];
