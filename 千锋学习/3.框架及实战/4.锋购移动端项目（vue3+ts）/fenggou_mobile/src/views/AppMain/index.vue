<template>
  <div class="page app-main">
    <!-- 顶部导航 -->
    <CommonHeader class="app-common_header">
      <!-- 左侧 -->
      <template #left>
        <van-icon name="apps-o" />
      </template>
      <!-- 中间 -->
      <template #title>
        <van-search shape="round" background="#d30707" placeholder="请输入搜索关键词" />
      </template>
      <!-- 右侧 -->
      <template #right>
        <span v-if="userStore.isLogin">{{ userStore.userinfo.nickname }}</span>
        <router-link v-else to="/login" custom v-slot="{ navigate }">
          <span @click="navigate">登录</span>
        </router-link>
      </template>
    </CommonHeader>
    <!-- 轮播图 -->
    <AppMainBanner />
    <!-- 十宫格 -->
    <AppMainNavList />
    <!-- 商品列表 -->
    <CommonList :column="2" :action="getProListApi" />
  </div>
</template>

<script setup lang="ts">
import { getProListApi } from '@/api/pro'
import useUserStore from '@/stores/user'
const userStore = useUserStore()
</script>

<style scoped lang="scss"></style>
