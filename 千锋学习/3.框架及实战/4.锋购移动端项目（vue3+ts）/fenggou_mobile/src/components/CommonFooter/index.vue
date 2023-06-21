<template>
  <van-tabbar v-model="active">
    <van-tabbar-item replace name="home" to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace name="cart" to="/cart" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace name="mine" to="/mine" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'

const route: RouteLocationNormalizedLoaded = useRoute()
const active = computed({
  get() {
    return route.path.substring(1)
  },
  set() {}
})
</script>

<style scoped></style>
