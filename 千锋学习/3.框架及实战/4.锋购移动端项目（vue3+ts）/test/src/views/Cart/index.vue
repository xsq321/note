<template>
  <CommonHeader>
    <template #left>
      <div>left</div>
    </template>
    <template #center>
      <!-- <div>购物车</div> -->
      <van-search
        v-model="value"
        shape="round"
        background="transparent"
        placeholder="请输入搜索关键词"
      />
    </template>
    <template #right>
      <div>right</div>
    </template>
  </CommonHeader>
  cart
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<style scoped></style>
