/**
 * @file 客户端
 */

// 引入 tailwindcss
import "virtual:windi.css";
import "virtual:windi-devtools";
// 引入项目全局样式
import "src/styles/main.scss";

import {AppName} from "./config/index";
import {app, router} from "./bootstrap/main";
import {userStore} from "src/store";

const user = userStore();
await Promise.all([user.loadUserInfo(), router.isReady()]);

app.mount(`#${AppName}`);

