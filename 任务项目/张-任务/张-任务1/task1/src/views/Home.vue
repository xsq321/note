<template>
  <div id="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px"><Aside></Aside></el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside";

export default {
  name: "Home",
  components: {
    Aside,
  },
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 700px; //会同步影响 aside 的高度
}
</style>
