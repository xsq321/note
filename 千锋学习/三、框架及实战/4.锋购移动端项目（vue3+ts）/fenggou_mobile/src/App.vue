<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="search">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </van-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { themeVars } from './config/theme'
let active = ref(0)
</script>

<style scoped></style>
