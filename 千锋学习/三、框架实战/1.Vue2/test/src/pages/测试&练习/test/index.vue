<template>
  <div>
    <input type="text" v-model="msg" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      m: '3',
    }
  },
  computed: {
    msg: {
      get() {
        return this.m
      },
      set(val) {
        this.m = val
      },
    },
  },
  beforeCreate() {
    console.log(this.m)
  },
}
</script>

<style lang="scss" scoped></style>
