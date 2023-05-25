<template>
  <div>
    <p>vuex测试</p>
    <p>vuex中的数据num：{{ $store.state.test.num }}</p>
    <p><button @click="addNum">num++</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    addNum() {
      this.$store.dispatch('test/add', 2)
      console.log('$store', this.$store)
    },
  },
}
</script>

<style lang="scss" scoped></style>
