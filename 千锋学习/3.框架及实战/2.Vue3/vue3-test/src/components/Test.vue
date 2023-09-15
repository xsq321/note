<template>
  <div></div>
</template>

<script setup>
import { reactive, toRaw } from 'vue'

function useRaw() {
  const a1 = { title: 100 }
  const a2 = reactive(a1)
  const a3 = toRaw(a2)
  console.log('toRow(a2)===a1', a3 === a1)
  console.log('a2===a1', a2 === a1)
  return [a1, a2, a3]
}
let arr = useRaw()
console.log(arr)
</script>

<style lang="scss" scoped></style>
