<template>
  <div>
    <h2>过渡与动画</h2>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <button @click="isShow = !isShow">显示/隐藏</button> <br /><br />
    <transition name="slide">
      <div class="drawer" v-show="isShow"></div>
    </transition>
    <hr />
    <h2>第三方集成库 animate.css</h2>
    <br />
    <div class="animate__animated animate__pulse">直接展示动画</div>
    <br />
    <button @click="className = 'myAnimate1'">点击展示动画</button>
    <div :class="className">Animate.css</div>
    <br />
    <h4>联合transition标签使用</h4>
    <button @click="isShow2 = !isShow2">显示/隐藏</button>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__bounceInDown"
      leave-active-class="animate__animated animate__bounceOutDown"
    >
      <div v-show="isShow2">内容部分</div>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  data() {
    return {
      isShow: false,
      className: '',
      isShow2: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.drawer {
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: skyblue;
}

// 过渡
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave,
.slide-enter-to {
  // 都是相对原始位置，不会受进入时的移动的影响，所以0代表的就是原始位置；其实这个可以直接省略
  transform: translateX(0);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s linear;
}

// 动画
// .slide-enter-active {
//   animation: enter 1s;
// }
// .slide-leave-active {
//   animation: leave 1s;
// }
// @keyframes enter {
//   from {
//     transform: translateX(-100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// }
// @keyframes leave {
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// }

// 使用animation调用集成库的动画
.myAnimate1 {
  animation: bounce 1s;
}
</style>
