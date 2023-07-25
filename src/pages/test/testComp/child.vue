<template>
  <div>
    {{ msg }}
    {{propsObj}}
    <a-button  @click="childClick">像父组件emit</a-button>
  </div>
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
  provide, inject, defineEmits
} from 'vue';
const propsObj  =  defineProps(['title'])

const emit = defineEmits(['childClick']);
const childClick = () => {
  emit('childClick', {name: 'child'})
}

const msg = ref<string>('你好')
const val  =  inject('asd', 'aa')
console.log(val)
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>