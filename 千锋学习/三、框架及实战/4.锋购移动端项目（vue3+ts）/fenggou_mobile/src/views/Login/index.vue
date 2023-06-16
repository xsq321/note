<template>
  <CommonHeader>
    <template #left>
      <van-icon name="arrow-left" @click="$router.back()" />
    </template>
    <template #center> 登录 </template>
  </CommonHeader>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const userStore = useUserStore()
const router = useRouter()

interface IUserInfo {
  username: string
  password: string
}

const onSubmit = (values: IUserInfo) => {
  console.log('submit', values)
  userStore.setToken(values.password + values.username)
  sessionStorage.setItem('token', values.password + values.username)
  router.back()
}
</script>

<style scoped></style>
