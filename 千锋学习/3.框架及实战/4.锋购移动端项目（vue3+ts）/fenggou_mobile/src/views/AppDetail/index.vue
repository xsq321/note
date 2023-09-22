<template>
  <div class="page app-detail">
    <CommonHeader class="app-common_header" :title="proDetail?.proname" :back="true">
      <!-- 右侧 -->
      <template #right>
        <router-link to="/cart" custom v-slot="{ navigate }">
          <van-icon @click="navigate" name="cart-o" />
        </router-link>
      </template>
    </CommonHeader>
    <template v-if="proDetail">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in proDetail.banners" :key="item">
          <img :src="item" alt="" />
        </van-swipe-item>
      </van-swipe>
      <!-- 商品信息展示 -->
      <div class="app-detail_info">
        <van-space direction="vertical" fill>
          <h3>{{ proDetail.proname }}</h3>
          <p>{{ proDetail.desc }}</p>
        </van-space>
      </div>
      <!-- 加入购物车 -->
      <van-submit-bar
        :price="proDetail.originprice * 100"
        :button-text="isLogin ? '加入购物车' : '去登录'"
        @submit="handleAddCart"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { showNotify } from 'vant'
import { getProDetailApi } from '@/api/pro'
import useUserStore from '@/stores/user'
import { useRoute, useRouter } from 'vue-router'
import { postAddCartApi } from '@/api/cart'
const userStore = useUserStore()
const { isLogin, userinfo } = storeToRefs(userStore)
const route = useRoute()
const router = useRouter()

onMounted(() => {
  getProDetail()
})
// 商品详情对象
const proDetail = ref<GoodsNS.IGoodsItem>()
// 获取当前商品详情
const getProDetail = async () => {
  try {
    const res = await getProDetailApi(route.params.proid as string)
    proDetail.value = res
  } catch (error) {
    console.log(error)
  }
}

// 加入购物车
const handleAddCart = async () => {
  if (!isLogin.value) {
    router.push({ name: 'login' })
  } else {
    // 加入购物车
    try {
      const res = await postAddCartApi({
        userid: userinfo.value.userid,
        proid: route.params.proid as string,
        num: 1
      })
      if (res === 1) {
        // 友好提醒
        showNotify({ type: 'success', message: '商品添加成功！' })
      } else {
        showNotify({ type: 'danger', message: '商品添加失败！' })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped lang="scss">
.app-detail {
  .app-detail_info {
    padding: 0.2rem;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 250px;
  line-height: 250px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 250px;
  }
}
</style>
