<template>
  <div>
    <el-menu
      :default-active="route"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="board">仪 表 盘</el-menu-item>
      <el-menu-item index="list">列 表</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    route: {
      get() {
        return this.$route.path.slice(6); //解决刷新后导航栏不激活的问题
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
