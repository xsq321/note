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
        <el-menu-item index="1-1">01-分页组件</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">测试&练习</template>
        <el-menu-item index="2-0">test</el-menu-item>
        <el-menu-item index="2-1">01-props传值</el-menu-item>
        <el-menu-item index="2-2">02-组件实例和Vue实例</el-menu-item>
      </el-submenu>
    </el-menu>
    <div style="padding: 10px">
      <Comp1x1 v-if="activeIndex === '1-1'" />
      <!-- ============================================== -->
      <Test v-if="activeIndex === '2-0'" />
      <Comp2x1 v-if="activeIndex === '2-1'" />
      <Comp2x2 v-if="activeIndex === '2-2'" />
    </div>
  </div>
</template>

<script>
import Comp1x1 from './案例/01-分页组件/Father.vue'

import Test from './测试&练习/test/index.vue'
import Comp2x1 from './测试&练习/01-props传值/Father.vue'
import Comp2x2 from './测试&练习/02-组件实例和Vue实例/index.vue'

export default {
  name: 'App',
  data() {
    return {
      activeIndex: '2-0',
    }
  },
  components: {
    Comp1x1,
    Test,
    Comp2x1,
    Comp2x2,
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath[1]
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
