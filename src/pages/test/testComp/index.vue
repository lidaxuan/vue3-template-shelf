<template>
  <a-card>
    {{ msg }}

    <Child :title="msg" @childClick="childClick"></Child>
  </a-card>
</template>

<script setup lang="ts">
import {
  // 响应式: 核心
  ref, computed, reactive, readonly, watchEffect, watchPostEffect, watchSyncEffect, watch,
  // 响应式: 工具
  isRef, unref, toRef, toValue, toRefs, isProxy, isReactive, isReadonly,
  // 响应式: 进阶
  shallowRef, triggerRef, customRef, shallowReactive, shallowReadonly, toRaw, markRaw, effectScope,
  getCurrentScope, onScopeDispose,
  // 生命周期钩子
  onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount,
  onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated, onServerPrefetch,
  // 依赖注入
  provide, inject,

} from 'vue';
import Child from './child.vue';

const msg = ref<string>('父组件')

const childClick = (val: any) => {
  console.log(val);
}
provide('asd', 'xx')


</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>