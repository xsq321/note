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
      <el-menu-item index="test">test</el-menu-item>
      <el-submenu index="2">
        <template slot="title">测试&练习</template>
        <el-menu-item index="comp2x1">01-props传值</el-menu-item>
        <el-menu-item index="comp2x2">02-组件实例和Vue实例</el-menu-item>
        <el-menu-item index="comp2x3">03-生命周期</el-menu-item>
        <el-menu-item index="comp2x4">04-过渡与动画</el-menu-item>
        <el-menu-item index="comp2x5">05-vuex</el-menu-item>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">案例</template>
        <el-menu-item index="comp1x1">01-分页组件</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view style="padding: 10px"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    activeIndex() {
      return this.$route.path.replace('/', '')
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(this.$route)
      // console.log(key, keyPath)
      // this.activeIndex = key
      this.$router.push(`/${key}`)
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
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
