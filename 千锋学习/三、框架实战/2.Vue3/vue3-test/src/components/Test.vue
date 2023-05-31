<template>
  <div>{{ stu }}</div>
  <p><button @click="stu.score.all.one = 88">修改</button></p>
</template>

<script setup>
import { computed, mergeProps, reactive, ref, watch } from 'vue'

const stu = reactive({
  name: 'kk',
  age: 'ii',
  score: {
    english: 85,
    all: {
      one: 70
    }
  }
})

console.log(stu)
console.log(stu.score)
watch(stu.score, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
</script>

<style lang="scss" scoped></style>
