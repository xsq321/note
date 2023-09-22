<template>
  <!-- click-left	点击左侧按钮时触发 -->
  <van-nav-bar :title="title" :left-arrow="back" @click-left="handleBack" fixed>
    <template v-if="!back" #left>
      <slot name="left" />
    </template>
    <template v-if="!title" #title>
      <slot name="title" />
    </template>
    <template #right>
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
interface IHeaderProps {
  title?: string
  back?: boolean
}
const { title, back = false } = defineProps<IHeaderProps>()

const router = useRouter()
// 返回上一页
const handleBack = () => {
  // 有返回按钮，才可以返回
  if (back) router.back()
}
</script>

<style scoped></style>
