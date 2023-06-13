<template>
  <div>count: {{ countStore.count }}</div>
  <div>doubleCount: {{ countStore.doubleCount }}</div>
  <p><button @click="countStore.addCount(3)">count++</button></p>
</template>

<script setup>
import { useCountStore } from '@/stores/countStore.js'

const countStore = useCountStore()
console.log(countStore)

// countStore.$subscribe((mutation, state) => {
//   sessionStorage.setItem('count', state.count)
// })
</script>

<style lang="scss" scoped></style>
