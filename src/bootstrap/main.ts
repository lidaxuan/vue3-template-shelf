import application from "./app.vue";
import {createPinia} from "pinia";
import {createApp as create} from "vue";
import {createRouter} from "src/router/";
import {beforeEach} from "src/router/hook";
import ant from "ant-design-vue";
import type {App} from "vue";
import * as ElIconModules from "@ant-design/icons-vue";




/**
 * @file 创建 Vue 实例
 */
export function createApp() {
  const app: App = create(application);
  
  const store = createPinia();
  app.use(store);
  
  for (const name in ElIconModules) {
    app.component(name, (ElIconModules as any)[name])
  }
  
  const router = createRouter();
  router.beforeEach(beforeEach);
  
  app.use(router);
  ant.install(app);
  return {app, router};
}
