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
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">测试&练习</template>
        <el-menu-item index="2-1">01-props传值</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <div style="padding: 10px">
      <Father v-show="activeIndex === '2-1'" />
      <PageFather v-show="activeIndex === '1-1'" />
    </div>
  </div>
</template>

<script>
import Father from '@/测试&练习/01-props传值/Father.vue'
import PageFather from './案例/01-分页组件/Father.vue'

export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1-1',
    }
  },
  components: {
    Father,
    PageFather,
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
