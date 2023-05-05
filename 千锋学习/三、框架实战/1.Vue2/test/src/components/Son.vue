<template>
  <div>
    子组件，内容：{{ this.content }}
    <button @click="fn">改变父组件标题</button>
  </div>
</template>

<script>
export default {
  props: ["content", "change"],
  methods: {
    fn() {
      // this.change("改标题");
      let that = this;
      this.change.call(that, "标题2");
      console.dir(this);
    },
  },
};
</script>

<style lang="scss" scoped></style>
