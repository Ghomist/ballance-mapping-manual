import { defineConfig } from "vitepress";
import { zhConfig } from "./zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ballance-mapping-manual/",
  rewrites: {
    "zh/:rest*": ":rest*" // set zh as default
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      ...zhConfig
    }
    // en: {
    //   label: "English",
    //   lang: "en",
    //   link: "/en/"
    //   // ...enConfig
    // }
  },
  markdown: {
    image: { lazyLoading: true }
  },
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: "https://github.com/ghomist/ballance-mapping-manual" }],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换"
                }
              }
            }
          }
        }
      }
    }
  }
});
