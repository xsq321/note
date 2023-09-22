<template>
  <!-- 顶部导航 -->
  <CommonHeader class="app-common_header" :back="true">
    <!-- 中间 -->
    <template #title>
      <van-search
        v-model="keyword"
        shape="round"
        background="#d30707"
        placeholder="请输入搜索关键词"
      />
    </template>
  </CommonHeader>

  <!-- 商品列表 -->
  <CommonList :column="1" :action="getProListApi" />
</template>

<script setup lang="ts">
import { getProListApi } from '@/api/pro'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
// 获取参数
const keyword = ref<string>((route.query.search as string) || '')
</script>

<style scoped></style>
