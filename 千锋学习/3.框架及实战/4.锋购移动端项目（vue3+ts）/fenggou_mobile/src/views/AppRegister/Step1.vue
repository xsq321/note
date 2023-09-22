<template>
  <div class="page app_register1">
    <CommonHeader class="app-common_header" title="注册-Step1：验证手机号" :back="true" />
    <!-- form 表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="tel"
          type="tel"
          name="tel"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请输入手机号', validator: validatorTel }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 下一步 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { phoneReg } from '@/utils/common'
import { ref } from 'vue'
import type { FieldRuleValidator } from 'vant'
const tel = ref<string>('')

// 验证手机号
const validatorTel: FieldRuleValidator = (tel: string) => {
  if (!tel) return '手机号不能为空！'
  if (!phoneReg.test(tel)) return '手机号输入错误'

  return true
}

const router = useRouter()
// 下一步
const onSubmit = () => {
  router.push({ name: 'register-step2', query: { tel: tel.value } })
}
</script>

<style scoped></style>
