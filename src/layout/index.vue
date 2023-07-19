<!--
 * @Description:
 * @Author: 李大玄
 * @Date: 2023-02-01 16:58:51
 * @FilePath: /vue3-template-shelf/src/layout/index.vue
 * @LastEditors: 李大玄
 * @LastEditTime: 2023-07-19 15:45:07
-->
<template>
  <a-layout class="h-full">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys1" @select="firstMenuChange" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item v-for="item in Menu" :key="`${item.id}`">
          <div class="flex items-center">
            <component :is="item.icon" class="mr-1 text-base"></component>
            {{ item.name }}
          </div>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout class="" style="height: calc(100% - 64px)">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu v-for="item in sideMenu" :key="item.id">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <a-menu-item v-for="sideItem in item.children" :key="sideItem.id">{{ sideItem.name }}</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">

<!--        <a-breadcrumb style="margin: 16px 0">-->
<!--          <a-breadcrumb-item>Home</a-breadcrumb-item>-->
<!--          <a-breadcrumb-item>List</a-breadcrumb-item>-->
<!--          <a-breadcrumb-item>App</a-breadcrumb-item>-->
<!--        </a-breadcrumb>-->
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import {Menu} from './menu';
import {ref} from "vue";

const selectedKeys1 = ref<string[]>(["1"]);
const selectedKeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const sideMenu = ref<Array<any>>([]);

const firstMenuChange = (val: any) => {
  const item = Menu.find(item => item.id == val.key) || {children: [], id: 1};
  console.log(item.children);
  openKeys.value = [item.children[0].id as any];
  sideMenu.value = [].concat(item.children as any) as any;
}
firstMenuChange({key: 1});
</script>
<style lang="scss" scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
