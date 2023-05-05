<template>
  <div>
    父组件，title：{{ title }}
    <Son :change="changeTitle" content="父组件值" />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  data() {
    return {
      title: "原标题",
    };
  },
  components: {
    Son,
  },
  methods: {
    changeTitle(value) {
      this.title = value;
      console.log(this);
    },
  },
};
</script>

<style lang="scss" scoped></style>
