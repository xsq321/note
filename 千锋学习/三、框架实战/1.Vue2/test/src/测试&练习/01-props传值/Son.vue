<template>
  <div>
    子组件，内容：{{ this.content }}
    <button @click="fn">改变父组件标题</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 1,
    }
  },
  props: ['content', 'change'],
  methods: {
    fn() {
      // this.change("改标题");
      // 测试methods中函数的this指向
      let that = this
      this.change.call(that, '标题2')
      console.dir(this)
    },
    fn2(val) {
      console.log('监听父组件事件并拿到参数：', val)
    },
  },
  mounted() {
    // 触发事件
    this.$emit('son', '子组件参数')
    // 测试子组件是否可以监听父组件事件
    this.$parent.$on('father', this.fn2)
  },
}
</script>

<style lang="scss" scoped></style>
