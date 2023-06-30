<template>
  <div>
    <div>子组件</div>
    <!-- <p>{{ num }}</p> -->
    <p>{{ num2 }}</p>
  </div>
</template>

<script>
export default {
  props: ['num'],
  computed: {
    num2() {
      return this.num * 2
    },
  },
  updated() {
    console.log('子组件updated生命周期被触发')
  },
}
</script>

<style lang="scss" scoped></style>
