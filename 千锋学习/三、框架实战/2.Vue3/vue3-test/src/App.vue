<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="Test">test</el-menu-item>
    <el-sub-menu index="1">
      <template #title>测试&练习</template>
      <el-menu-item index="Comp1x1">01-Vue3响应式</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>案例</template>
      <el-menu-item index="Comp2x1">01-组合式函数</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <div style="padding: 10px">
    <component :is="activeIndex"></component>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

import Test from './components/Test.vue'

import Comp1x1 from './components/测试&练习/01-Vue3响应式/index.vue'

import Comp2x1 from './components/案例/01-组合式函数/index.vue'

export default defineComponent({
  components: {
    Test,
    Comp1x1,
    Comp2x1
  },
  setup() {
    let activeIndex = ref('Test')
    const handleSelect = (key) => {
      activeIndex.value = key
    }
    return {
      activeIndex,
      handleSelect
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
p,
hr {
  margin: 10px 0;
}
</style>
