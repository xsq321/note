<template>
  <div>
    {{ countStore.count }}
  </div>
  <p><button @click="countStore.count += 10">count+10</button></p>
</template>

<script setup>
import { useCountStore } from '@/stores/countStore'
const countStore = useCountStore()
</script>

<style lang="scss" scoped></style>
