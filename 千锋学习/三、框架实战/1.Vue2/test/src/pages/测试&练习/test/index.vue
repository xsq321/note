<template>
  <div>
    {{ arr }}
    <p><button @click="arr.splice(0, 1, ++arr[0])">修改</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
    }
  },
}
</script>

<style lang="scss" scoped></style>
