<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="test">test</el-menu-item>
    <el-sub-menu index="1">
      <template #title>测试{{ '&' }}练习</template>
      <el-menu-item index="comp1x1">01-Vue3响应式</el-menu-item>
      <el-menu-item index="comp1x2">02-Pinia</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>案例</template>
      <el-menu-item index="comp2x1">01-组合式函数</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <div style="padding: 10px">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
let activeIndex = computed(() => route.path.substring(1))
const handleSelect = (key) => {
  activeIndex.value = key
  router.push(key)
}
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
