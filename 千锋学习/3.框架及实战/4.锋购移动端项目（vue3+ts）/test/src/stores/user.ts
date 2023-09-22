import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref(sessionStorage.getItem('token') || '')
  const setToken = (val: string) => {
    token.value = val
  }
  return { token, setToken }
})
