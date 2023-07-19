/**
 * @file 客户端
 */

// 引入 tailwindcss
import "virtual:windi.css";
import "virtual:windi-devtools";
// 引入项目全局样式
import "src/styles/main.scss";

import { AppName } from "./config/index";
import { createApp } from "./bootstrap/main";
import { userStore } from "src/store";

const main = async function () {
  const { app, router } = createApp();

  const user = userStore();

  await Promise.all([
    user.loadUserInfo(), // 获取用户信息
    router.isReady()     // 加载路由
  ]);
  
  app.mount(`#${AppName}`);
};

setTimeout(main);
