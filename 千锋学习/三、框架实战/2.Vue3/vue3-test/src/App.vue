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
      <el-menu-item index="comp2x1">01-props传值</el-menu-item>
      <el-menu-item index="comp2x2">02-组件实例和Vue实例</el-menu-item>
      <el-menu-item index="comp2x3">03-生命周期</el-menu-item>
      <el-menu-item index="comp2x4">04-过渡与动画</el-menu-item>
      <el-menu-item index="comp2x5">05-vuex</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>案例</template>
      <el-menu-item index="comp1x1">01-分页组件</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <div style="padding: 10px">
    <component :is="activeIndex"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Test from './components/Test.vue'

export default defineComponent({
  components: {
    Test
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
</style>
