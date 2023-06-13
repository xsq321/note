import { onBeforeUnmount, onMounted, reactive } from 'vue'

export default function () {
  const mouse = reactive({
    x: 0,
    y: 0
  })
  const move = (e) => {
    console.log(e.pageX, e.pageY)
    mouse.x = e.pageX
    mouse.y = e.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', move)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', move)
  })
  return mouse
}
