<template>
  <div></div>
</template>

<script setup>
import { reactive, readonly, shallowReadonly } from 'vue'

const user = reactive({
  name: 'll',
  job: {
    job1: 'ww'
  }
})

const user2 = shallowReadonly(user)
user2.name = 'qq'
console.log(user, user2)
</script>

<style lang="scss" scoped></style>
