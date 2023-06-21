<template>
  <div class="header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/assets/css/var.scss';
.header {
  height: 1rem;
  background-color: $red-color;
  color: white;
  display: flex;
  font-size: 0.4rem;
}
.left {
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.right {
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.3rem;
}
</style>
