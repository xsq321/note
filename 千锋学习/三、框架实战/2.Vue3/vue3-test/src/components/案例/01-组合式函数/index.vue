<template>
  <h2>组合式函数</h2>
  <hr />
  <h3>功能1：获取鼠标位置</h3>
  <p>x:{{ mouse.x }}，y:{{ mouse.y }}</p>
  <hr />
  <h3>功能2：累加功能</h3>
  <p>num:{{ num }}</p>
  <p><button @click="addNum">加一</button></p>
</template>

<script setup>
import useMouse from '@/hooks/useMouse.js'
import useNum from '@/hooks/useNum.js'

const mouse = useMouse()
const { num, addNum } = useNum()
</script>

<style lang="scss" scoped></style>
