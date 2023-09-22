<template>
  <div class="page app-mine">
    <CommonHeader title="个人中心" class="app-common_header" />

    <div class="info">
      <van-empty v-if="!isLogin" description="还没有登录哦😯....">
        <router-link v-slot="{ navigate }" :to="{ name: 'login' }" custom>
          <van-button @click="navigate" round type="primary" class="bottom-button"
            >去登录吧</van-button
          >
        </router-link>
      </van-empty>
      <div v-else class="userinfo">
        <van-image width="2rem" height="2rem" round fit="cover" :src="userinfo.avatar" />
        <h3>{{ userinfo.nickname || userinfo.username }}</h3>
        <van-button @click="exitLogin" round type="primary" class="bottom-button"
          >退出登录</van-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUserStore from '@/stores/user'
const userStore = useUserStore()
const { isLogin, userinfo } = storeToRefs(userStore)

// 退出登录
const exitLogin = () => {
  userStore.exitAction()
}
</script>

<style scoped lang="scss">
.app-mine {
  .info {
    .userinfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0.5rem;

      & > * {
        margin-bottom: 0.7rem;
      }
    }
  }
}

.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
