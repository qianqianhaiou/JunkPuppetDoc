import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformHead({ assets }) {
    const fontFile = assets.find((file) =>
      file.match(/PuHui55Regular(.+)\.ttf/)
    );
    if (fontFile) {
      return [
        [
          "link",
          {
            rel: "preload",
            href: fontFile,
            as: "font",
            type: "font/ttf",
            crossorigin: "",
          },
        ],
      ];
    }
  },
  base: "/junk-puppet-doc",
  title: "拾荒木偶",
  description:
    "拾荒木偶 基于Electron+Puppeteer的可视化爬虫，无任何依赖。可视化浏览器自动化任务/采集/无代码/图形化/开源/操作简单/对抗反爬",
  head: [["link", { rel: "icon", href: "/junk-puppet-doc/images/robot.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "说明书",
        link: "/user-guide/readme",
        activeMatch: "/user-guide/",
      },
    ],
    sidebar: {
      "/user-guide/": [
        {
          text: "介绍",
          items: [
            { text: "什么是拾荒木偶？", link: "/user-guide/readme" },
            { text: "初始化你的应用程序", link: "/user-guide/create-app" },
          ],
        },
        {
          text: "使用",
          items: [
            { text: "新建任务", link: "/user-guide/new-task" },
            { text: "配置任务", link: "/user-guide/set-task" },
            { text: "运行任务", link: "/user-guide/run-task" },
            { text: "自动任务", link: "/user-guide/auto-task" },
            { text: "调试任务", link: "/user-guide/debug-task" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/qianqianhaiou/JunkPuppet" },
    ],
  },
});
