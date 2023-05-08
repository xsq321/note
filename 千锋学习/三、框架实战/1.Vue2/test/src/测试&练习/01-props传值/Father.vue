<template>
  <div>
    父组件，title：{{ title }}
    <Son :change="changeTitle" content="父组件值" ref="son" @son="fn3" />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  data() {
    return {
      title: '原标题',
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

<style lang="scss" scoped></style>
