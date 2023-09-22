<template>
  <van-config-provider :theme-vars="themeVars">
    <!-- 路由出口 -->
    <main class="app-container">
      <RouterView />
    </main>
    <!-- 底部 -->
    <CommonFooter v-if="!route.meta.hideFooter" />
  </van-config-provider>
</template>

<script setup lang="ts">
import { themeVars } from '@/config/theme'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
const route: RouteLocationNormalizedLoaded = useRoute()
</script>

<style scoped>
.app-container {
  padding-top: 45px;
}
</style>
