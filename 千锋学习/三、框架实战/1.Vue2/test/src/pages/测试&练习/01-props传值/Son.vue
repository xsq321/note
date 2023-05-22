<template>
  <div>
    子组件，内容：{{ this.content }} <button @click="fn">改变父组件标题</button><br />
    子组件value：{{ value }}
    <button @click="$emit('update:value', '修改数据')" class="btn" id="btn">该变父组件值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 1,
    }
  },
  props: ['content', 'change', 'value'],
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

<style lang="scss" scoped>
/* 父子组件样式覆盖问题，先加载子组件样式后加载父组件样式，也就是说子组件样式在前面，
所以如果选择器的优先级相同的话，父组件样式会覆盖子组件样式 */
.btn {
  background-color: skyblue;
}
</style>
