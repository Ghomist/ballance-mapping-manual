import "viewerjs/dist/viewer.min.css";
import { useRoute } from "vitepress";
import imageViewer from "vitepress-plugin-image-viewer";
import vImageViewer from "vitepress-plugin-image-viewer/lib/vImageViewer.vue";
import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("vImageViewer", vImageViewer);
  },
  setup() {
    const route = useRoute();
    imageViewer(route);
  }
};
