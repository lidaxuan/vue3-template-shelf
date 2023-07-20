import application from "./app.vue";
import {createPinia} from "pinia";
import {createApp as create} from "vue";
import {createRouter} from "src/router/";
import {beforeEach} from "src/router/hook";
import ant from "ant-design-vue";
import type {App} from "vue";
import * as ElIconModules from "@ant-design/icons-vue";


export const app: App = create(application);
export const store = createPinia();
export const router = createRouter();

for (const name in ElIconModules) {
  app.component(name, (ElIconModules as any)[name])
}

router.beforeEach(beforeEach);
app.use(store);
app.use(router);
ant.install(app);

