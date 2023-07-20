import * as alias from "./alias";
import type {Router, RouteRecordRaw} from "vue-router";
import {createRouter as _createRouter, createWebHistory} from "vue-router";


const children: RouteRecordRaw[] = [
  { ...alias.Home, component: () => import("src/pages/home/index.vue")},
  {...alias.NotFount, component: () => import("src/pages/common/404.vue"),},
  {...alias.TestTemplate, component: () => import("src/pages/common/template.vue"),},
]

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("src/layout/index.vue"),
    redirect: {name: alias.Home.name},
    children
  },
];

export function createRouter(): Router {
  return _createRouter({
    routes,
    history: createWebHistory(),
  });
}