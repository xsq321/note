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
      <span v-if="userStore.token" @click="exit">退出</span>
      <router-link v-else to="/login" v-slot="{ navigate }" custom>
        <span @click="navigate">登录</span>
      </router-link>
    </template>
  </CommonHeader>
  home
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { showToast } from 'vant'
import { ref } from 'vue'

const value = ref('')
const userStore = useUserStore()
const exit = () => {
  sessionStorage.setItem('token', '')
  userStore.setToken('')
  showToast('退出成功')
}
</script>

<style scoped>
::v-deep .van-search__content.van-search__content--round {
  height: 0.6rem;
}
</style>
