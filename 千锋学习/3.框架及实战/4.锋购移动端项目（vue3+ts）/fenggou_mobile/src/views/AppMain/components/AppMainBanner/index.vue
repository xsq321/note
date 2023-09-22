<template>
  <div class="page app-main_banner">
    <div class="swiper_container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerList" :key="item.bannerid">
          <img :src="item.img" :alt="item.alt"
        /></van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getBannerListApi } from '@/api/banner'

onMounted(() => {
  getBannerList()
})

// 轮播图列表
const bannerList = ref<BannerNS.IBannerItem[]>([])
// 获取轮播图
const getBannerList = async () => {
  try {
    const res = await getBannerListApi()
    bannerList.value = res
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/var.scss';
.app-main_banner {
  height: 2.8rem;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    width: 20rem;
    height: 20rem;
    background-color: $red-color;
    border-radius: 50%;
    position: absolute;
    top: -18rem;
    left: -6.5rem;
    z-index: -1;
  }
}
.swiper_container {
  width: 7rem;
  height: 2.8rem;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 2.8rem;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 2.8rem;
  }
}
</style>
