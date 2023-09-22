<template>
  <div class="page app_register2">
    <CommonHeader class="app-common_header" title="注册-Step2：输入验证码" :back="true" />
    <!-- form 表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="telcode"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button @click="handleSendCode" :disabled="!!second" size="small" type="primary"
              >发送验证码 {{ second ? `(${second}s)` : '' }}</van-button
            >
          </template>
        </van-field>
      </van-cell-group>

      <div style="margin: 16px">
        <van-button :disabled="!canNext" round block type="primary" native-type="submit">
          下一步
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'
// 验证码
const telcode = ref<string>('')
const second = ref<number>(10)
let timer: null | number = null

const router = useRouter()
const route = useRoute()

onMounted(() => {
  handleSendCode()
})

onUnmounted(() => {
  timer && clearInterval(timer)
})

// 发送验证码
const handleSendCode = () => {
  console.log('发送验证码')

  // 每次开启定时器的时候，设置成10
  second.value = 10

  timer = setInterval(() => {
    second.value--
    if (second.value === 0) {
      clearInterval(timer as number)
    }
  }, 1000)
}

// 能否点击下一步
const canNext = computed(() => {
  if (!telcode.value) return false
  return true
})

// 下一步
const onSubmit = () => {
  router.push({ name: 'register-step3', query: { tel: route.query.tel } })
}
</script>

<style scoped></style>
