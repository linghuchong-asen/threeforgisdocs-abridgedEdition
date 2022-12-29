import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
