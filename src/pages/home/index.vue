<script setup lang="ts">


import {ref} from "vue";
import {Result, Button} from "ant-design-vue";
import {SmileTwoTone} from "@ant-design/icons-vue";

const message = ref<string>("Vue3 tempate");
const num = ref<number>(0);

const numClick = (val:number) => {
  num.value  += val;
}

</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <Result status="success">
      <template #icon>
        <SmileTwoTone />
      </template>
      <template #title>
        <h1 class="text-black text-opacity-85 p-4.5">
          {{ message }}</h1>
        <Button @click="numClick(1)" type="primary">+1</Button>
        <Button @click="numClick(2)" type="primary">+2</Button>
        {{ num }}
      </template>
    </Result>
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
