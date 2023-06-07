import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 1
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    addCount(val) {
      this.count += val
    }
  }
})
