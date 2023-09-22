<template>
  <div class="page app-login">
    <CommonHeader title="登 录" class="app-common_header" :back="true">
      <!-- 右侧 -->
      <template #right>
        <router-link :to="{ name: 'register-step1' }" custom v-slot="{ navigate }">
          <span @click="navigate">注册</span>
        </router-link>
      </template>
    </CommonHeader>
    <!-- form 表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="loginInfo.loginname"
          type="tel"
          name="tel"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请输入手机号', validator: validatorTel }]"
        />
        <van-field
          v-model="loginInfo.password"
          type="password"
          name="password"
          label="密 码"
          placeholder="密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登 录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FieldRuleValidator } from 'vant'
import { phoneReg } from '@/utils/common'
import useUserStore from '@/stores/user'

const userStore = useUserStore()

interface ILoginInfo {
  loginname: string
  password: string
}

// 验证手机号
const validatorTel: FieldRuleValidator = (tel: string) => {
  if (!tel) return '手机号不能为空！'
  if (!phoneReg.test(tel)) return '手机号输入错误'

  return true
}

// 登录信息
const loginInfo = ref<ILoginInfo>({
  loginname: '',
  password: ''
})
// 登录
const onSubmit = async () => {
  // store loginAction
  userStore.loginAction(loginInfo.value)
}
</script>

<style scoped></style>
