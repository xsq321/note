<template>
  <div>
    {{ countStore.count }}
  </div>
  <p><button @click="countStore.count += 10">count+10</button></p>
  <button @click="open">show message</button>
</template>

<script setup>
import { useCountStore } from '@/stores/countStore'
import { ElMessage } from 'element-plus'
const countStore = useCountStore()

const open = () => {
  ElMessage('sss')
}
</script>

<style lang="scss" scoped></style>
