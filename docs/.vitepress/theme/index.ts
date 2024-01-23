// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress"; // .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme-without-fonts";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;