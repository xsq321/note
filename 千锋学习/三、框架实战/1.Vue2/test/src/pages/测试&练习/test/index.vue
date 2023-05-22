<template>
  <div>
    <button @click="fn(1)">按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    fn(val) {
      console.log(val, event)
    },
  },
}
</script>

<style lang="scss" scoped></style>
