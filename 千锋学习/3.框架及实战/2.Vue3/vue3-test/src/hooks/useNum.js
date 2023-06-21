import { ref } from 'vue'

export default function () {
  const num = ref(0)
  const addNum = () => {
    num.value++
  }
  return { num, addNum }
}
