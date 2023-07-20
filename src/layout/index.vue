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
            {{ item.title }}
          </div>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout class="" style="height: calc(100% - 64px)">
      <a-layout-sider width="200" style="background: #fff">
        {{ selectedKeys2 }}
        <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline" :router="true" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu v-for="item in sideMenu" :key="item.id">
            <template #title>
              <span>{{ item.title }}</span>
            </template>
            <a-menu-item v-for="sideItem in item.children" :key="sideItem.id" @click="pathClick(sideItem)">
              {{ sideItem.title }}
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">

        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import {Menu} from './menu';
import {ref, toRef} from "vue";
import {router} from 'src/bootstrap/main';

const selectedKeys1 = ref<string[]>([""]);
const selectedKeys2 = ref<string[]>([""]);
const openKeys = ref<string[]>([""]);
const sideMenu = ref<Array<any>>([]);

Menu.forEach(item1 => {
  item1.children.forEach(item2 => {
    item2.children.forEach(item3 => {
      if (item3.path == router.currentRoute.value.path) {
        selectedKeys2.value = [item3.id];
        return;
      }
    })
  })
})


const firstMenuChange = (val: any) => {
  selectedKeys1.value = [val.key];
  const item = Menu.find(item => item.id == val.key) || {children: [], id: 1};
  openKeys.value = [item.children[0].id as any];
  sideMenu.value = [].concat(item.children as any) as any;
}
firstMenuChange({key: Menu[0].id});

const pathClick = (sideItem: { name: string, path: string, id: number | string }) => {
  router.push({path: sideItem.path})
}

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
