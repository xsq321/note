<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">案例</template>
        <el-menu-item index="Comp1x1">01-分页组件</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">测试&练习</template>
        <el-menu-item index="Test">test</el-menu-item>
        <el-menu-item index="Comp2x1">01-props传值</el-menu-item>
        <el-menu-item index="Comp2x2">02-组件实例和Vue实例</el-menu-item>
        <el-menu-item index="Comp2x3">03-生命周期</el-menu-item>
        <el-menu-item index="Comp2x4">04-过渡与动画</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 动态组件，代替了使用v-if实现组件的切换 -->
    <component :is="activeIndex" style="padding: 10px"></component>
  </div>
</template>

<script>
import Comp1x1 from './案例/01-分页组件/Father.vue'

import Test from './测试&练习/test/index.vue'
import Comp2x1 from './测试&练习/01-props传值/Father.vue'
import Comp2x2 from './测试&练习/02-组件实例和Vue实例/index.vue'
import Comp2x3 from './测试&练习/03-生命周期/index.vue'
import Comp2x4 from './测试&练习/04-过渡与动画/index.vue'

export default {
  name: 'App',
  data() {
    return {
      activeIndex: 'Comp2x1',
    }
  },
  components: {
    Comp1x1,
    Test,
    Comp2x1,
    Comp2x2,
    Comp2x3,
    Comp2x4,
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
      this.activeIndex = key
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
