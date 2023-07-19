<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2023-02-01 16:58:51
 * @FilePath: /vue3-template-shelf/src/pages/home/index.vue
 * @LastEditors: 李大玄
 * @LastEditTime: 2023-07-19 15:49:21
-->
<script setup lang="ts">
import { ref } from "vue";
import { SmileTwoTone } from "@ant-design/icons-vue";

const message = ref<string>(" tempate");
const num = ref<number>(0);

const numClick = (val: number) => {
  num.value += val;
};
</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <a-result status="success">
      <template #icon>
        <SmileTwoTone />
      </template>
      <template #title>
        <h1 class="text-black text-opacity-85 p-4.5">
          {{ message }}
        </h1>
        {{ num }}
        <div></div>
        <a-button @click="numClick(1)" type="primary">+1</a-button>
        <a-button @click="numClick(2)" type="primary">+2</a-button>
      </template>
    </a-result>
  </div>
</template>

<style scoped lang="scss">
h1 {
  @apply font-normal text-2xl;
  @screen xl {
    @apply text-3xl;
  }
}
</style>
