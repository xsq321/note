<template>
  <div>
    {{ arr }}
    <p><button @click="arr.splice(0, 1, ++arr[0])">修改</button></p>
    <Son :num="arr[0]"></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  data() {
    return {
      arr: [1, 2, 3],
    }
  },
  components: { Son },
  updated() {
    console.log('父组件updated生命周期被触发')
  },
}
</script>

<style lang="scss" scoped></style>
