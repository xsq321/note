<template>
  <CommonHeader>
    <template #left>
      <van-icon name="apps-o" />
    </template>
    <template #center>
      <van-search
        v-model="value"
        shape="round"
        background="transparent"
        placeholder="请输入搜索关键词"
        style="width: 100%; height: 100%"
      />
    </template>
    <template #right>
      <div>登录</div>
    </template>
  </CommonHeader>
  home
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<style scoped>
::v-deep .van-search__content.van-search__content--round {
  height: 0.6rem;
}
</style>
