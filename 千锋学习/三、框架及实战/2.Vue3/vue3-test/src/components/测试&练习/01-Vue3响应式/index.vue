<template>
  <div>num: {{ num }}</div>
  <p><button @click="changeNum">num++</button></p>
  <hr />
  <div>arr:{{ arr }}</div>
  <p><button @click="changeArr">arr[0]++</button></p>
  <hr />
  <div>name:{{ name }}</div>
  <p><button @click="changeName">修改name</button></p>
</template>

<script>
import { reactive, ref, toRef } from 'vue'
export default {
  setup() {
    // ref 定义基本数据类型
    let num = ref(1)
    console.log(num)
    const changeNum = () => {
      num.value++
    }

    // ref 定义对象
    let obj = ref({
      name: 'obj'
    })
    console.log(obj)

    // reactive 定义对象
    let obj2 = reactive({
      name: 'obj2'
    })
    console.log(obj2)

    // reactive 定义数组
    let arr = reactive([1, 2, 3])
    console.log(arr)
    const changeArr = () => {
      arr[0]++
      arr.push(6)
      console.log(arr)
    }

    // 验证 toRef 并不能将普通对象的某个属性转为响应式的，即只能用于响应式对象
    let obj3 = { name: 'obj3' }
    let name = toRef(obj3, 'name')
    console.log(name)
    const changeName = () => {
      name.value = 'ooo'
      console.log(name, obj3)
    }

    return { num, changeNum, arr, changeArr, name, changeName }
  }
}
</script>

<style lang="scss" scoped></style>
