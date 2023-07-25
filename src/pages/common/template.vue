<template>
  <a-card>
    {{ msg }}
    <a-divider></a-divider>
    {{ plusOne }}
    <a-button @click="() => count += 1">+1</a-button>
    <a-button @click="() => count -= 1">-1</a-button>
    <a-divider></a-divider>
    <span>{{ queryForm }}</span>
    <a-button type="primary" @click="edit">修改queryForm</a-button>
    <a-button type="primary" @click="setReadonly">将queryForm 设置readonly</a-button>
  </a-card>
  <a-card>

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
  provide, inject, Ref, defineProps

} from 'vue';

const msg = ref<string>('你好');
let queryForm = reactive<any>({
  name: '张三',
  id: 112,
  age: 12
})

const edit = () => queryForm.id = Math.random()

const setReadonly = () => queryForm = readonly(queryForm)

const stop = watchEffect(() => {
  console.log(queryForm)
}, {
  flush: 'pre',
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})

console.log('isReactive', isReactive(msg));
console.log('isReactive', isReactive(queryForm));


const count = ref(10)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})

onMounted(() =>  {
  console.log('onMounted');
})

// plusOne.value = 1

</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>