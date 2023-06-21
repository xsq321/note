<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view></router-view>
    <CommonFooter v-if="!$route.meta.hideFooter" />
  </van-config-provider>
</template>

<script setup lang="ts">
import { themeVars } from './config/theme'
const test = false
</script>

<style scoped></style>
