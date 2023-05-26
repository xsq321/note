<template>
  <div>
    父组件，title：{{ title }} <br />
    父组件value：{{ value }}
    <div class="btn">父组件内容</div>
    <Son :change="changeTitle" content="父组件值" ref="son" @son="fn3" :value.sync="value" />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  data() {
    return {
      title: '原标题',
      value: '原数据',
    }
  },
  components: {
    Son,
  },
  methods: {
    changeTitle(value) {
      this.title = value
      console.log(this)
    },
    fn3(val) {
      console.log('通过自定义事件获取子组件数据：', val)
    },
  },
  mounted() {
    // console.log(this.$refs.son.val)
    this.$emit('father', '父组件参数')
  },
}
</script>

<style lang="scss" scoped>
// 样式穿透，可观察控制台查看具体实现方式（其实就是加了一个自定义属性）
::v-deep .btn {
  background-color: pink;
  color: red;
}
.btn {
  background-color: yellowgreen;
}
</style>
