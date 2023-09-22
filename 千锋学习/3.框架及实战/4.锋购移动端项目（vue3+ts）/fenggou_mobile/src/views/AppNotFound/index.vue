<template>
  <div class="page app-notfound">
    <CommonHeader title="Not Found" :back="true" class="app-common_header" />

    <van-empty description="一不小心走丢了哦😯...">
      <router-link v-slot="{ navigate }" to="/" custom>
        <van-button @click="navigate" round type="primary" class="bottom-button"
          >返回首页</van-button
        >
      </router-link>
    </van-empty>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
