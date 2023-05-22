<template>
  <div>
    <ul @click="pick">
      <li v-for="index in total" :key="index" :class="{ active: index == page }">
        {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  },
  props: {
    total: {
      default: 9,
    },
    currentPage: {
      default: 1,
    },
  },
  methods: {
    pick(e) {
      // console.dir(e.target)
      if (e.target.tagName === 'LI') {
        this.page = e.target.innerHTML
        this.$emit('getPage', this.page)
      }
    },
  },
  created() {
    this.page = this.currentPage
  },
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    list-style: none;
    padding: 10px;
    border: 1px solid gray;
    margin: 10px;
    cursor: pointer;
  }
}
.active {
  background-color: skyblue;
}
</style>
