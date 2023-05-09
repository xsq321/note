<template>
  <div>
    <h1>生命周期</h1>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      interval1: null,
    }
  },
  beforeMount() {
    console.log(document.querySelector('h1'))
    console.log('$el', this.$el)
    // debugger
  },
  created() {
    this.interval1 = setInterval(() => {
      console.log('定时器')
      this.num++
    }, 2000)
  },
  mounted() {
    console.log('触发了mounted生命周期')
    console.log(this)
  },
  updated() {
    console.log('触发了updated生命周期')
  },
  destroyed() {
    clearInterval(this.interval1)
  },
}
</script>

<style lang="scss" scoped></style>
