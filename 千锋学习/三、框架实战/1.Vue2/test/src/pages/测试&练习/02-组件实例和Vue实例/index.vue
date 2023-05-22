<template>
  <div>
    <p>
      每个组件都是一个 VueComponent 构造函数，每用一次组件标签就会创建一个对应的组件实例对象，其实 Vue 解析组件标签时执行了 new VueComponent(options)
    </p>
    <p>Vue 强制让 VueComponent 的原型对象的隐式原型指向了 Vue 的原型对象，这样组件实例的原型链上就有了 Vue 的原型对象</p>
    <p>Vuecomponent.prototype.__proto__ === Vue.prototype</p>
    <p>请观察控制台</p>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('Vue的原型对象', this.$root.__proto__)
    console.log('Vue实例', this.$root)
    console.log('VueComponent的原型对象', this.__proto__)
    console.log('VueComponent实例', this)
  },
}
</script>

<style lang="scss" scoped>
p {
  line-height: 2em;
}
</style>
