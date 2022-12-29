import { defineClientConfig } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import HomePage from "@theme-hope/components/HomePage";
import NormalPage from "@theme-hope/components/NormalPage";
import Navbar from "@theme-hope/modules/navbar/components/Navbar";
import Sidebar from "@theme-hope/modules/sidebar/components/Sidebar";
import Layout from "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index";
import { injectDarkMode, setupDarkMode } from "@theme-hope/modules/outlook/composables/index";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index";

import "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import GlobalEncrypt from "@theme-hope/modules/encrypt/components/GlobalEncrypt";
import LocalEncrypt from "@theme-hope/modules/encrypt/components/LocalEncrypt";
import Slide from "D:/聚米画沙/web/project/three.js封装--用于webgis场景/three.js封装--聚米画沙--文档/threedocs-hope-用户版/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.146_vuepress@2.0.0-beta.60/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js";


export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
    
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    
  },
  layouts: {
    Layout,
    NotFound,
    Slide,
    
  }
});