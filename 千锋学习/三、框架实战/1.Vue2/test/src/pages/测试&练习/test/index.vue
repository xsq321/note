<template>
  <div>
    <p>test</p>
    <p>{{ $store.state.test.num }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(process.env)
  },
}
</script>

<style lang="scss" scoped></style>
