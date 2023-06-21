<template>
  <div>
    父组件：子组件选择的是第{{ currentPage }}页
    <Page @getPage="changePage" :currentPage="currentPage" :total="15" />
  </div>
</template>

<script>
import Page from './Page.vue'
export default {
  data() {
    return {
      currentPage: '2',
    }
  },
  components: {
    Page,
  },
  methods: {
    changePage(val) {
      this.currentPage = val
    },
  },
}
</script>

<style lang="scss" scoped></style>
