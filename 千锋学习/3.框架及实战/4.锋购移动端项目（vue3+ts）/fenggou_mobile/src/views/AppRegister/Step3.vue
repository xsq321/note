<template>
  <div class="page app_register1">
    <CommonHeader class="app-common_header" title="注册-Step3：输入密码" :back="true" />
    <!-- form 表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密   码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '密码不能为空' }]"
        />
        <van-field
          v-model="confirmPwd"
          type="password"
          name="confirmPwd"
          label="确认密码"
          placeholder="请再次输入密码"
          :rules="[{ required: true, message: '确认密码不能为空', validator: validatorConfirmPwd }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 注 册 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type FieldRuleValidator, showNotify } from 'vant'
import { useRouter, useRoute } from 'vue-router'
import { postRegisterApi } from '@/api/user'

const route = useRoute()
const router = useRouter()

const password = ref<string>('')
const confirmPwd = ref<string>('')

// 验证密码
const validatorConfirmPwd: FieldRuleValidator = (rePwd: string) => {
  if (!rePwd) return '确认密码不能为空！'
  if (password.value !== rePwd) return '两次输入密码不一致！'

  return true
}

// 下一步
const onSubmit = async () => {
  try {
    const res = await postRegisterApi({ tel: route.query.tel as string, password: password.value })
    if (res === '注册成功') {
      // 友好提醒
      showNotify({ type: 'success', message: '恭喜你，注册成功！' })
      // 页面跳转 login
      router.push({ name: 'login' })
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped></style>
