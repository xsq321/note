<template>
  <div>num: {{ num }}</div>
  <p><button @click="changeNum">num++</button></p>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let num = ref(1)
    const changeNum = () => {
      num.value++
    }
    return { num, changeNum }
  }
}
</script>

<style lang="scss" scoped></style>
