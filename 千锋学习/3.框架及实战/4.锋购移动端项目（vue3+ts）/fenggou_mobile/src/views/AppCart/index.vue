<template>
  <div class="page app-cart">
    <CommonHeader title="购物车" class="app-common_header" />
    <!-- 没有登录时显示 -->
    <van-empty v-if="!isLogin" description="请登录后查看哦😯">
      <router-link v-slot="{ navigate }" :to="{ name: 'login' }" custom>
        <van-button @click="navigate" round type="primary" class="bottom-button"
          >去登录吧</van-button
        >
      </router-link>
    </van-empty>
    <div v-else>
      <template v-if="cartList">
        <van-swipe-cell v-for="item in cartList" :key="item.cartid">
          <div class="cart-item">
            <van-checkbox
              :model-value="item.flag"
              @update:model-value="handleUpdateFlag(item.cartid, !item.flag)"
            ></van-checkbox>
            <van-card
              :num="item.num"
              :price="item.originprice"
              :title="item.proname"
              :thumb="item.img1"
            >
              <template #tags>
                <van-tag v-if="item.discount" plain type="primary">{{ item.discount }}折</van-tag>
                <van-tag plain type="primary">标签</van-tag>
              </template>
              <template #footer>
                <van-button
                  @click="handleUpdateNum(item.cartid, item.num - 1)"
                  :disabled="item.num === 1"
                  size="mini"
                  >-</van-button
                >
                <van-button @click="handleUpdateNum(item.cartid, item.num + 1)" size="mini"
                  >+</van-button
                >
              </template>
            </van-card>
          </div>

          <template #right>
            <van-button
              @click="handleDelete(item.cartid)"
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>

        <van-submit-bar
          class="cart-bottom"
          :price="totalPrice * 100"
          button-text="提交订单"
          @submit="onSubmit"
        >
          <van-checkbox :model-value="checkAll" @update:model-value="handleCheckAll"
            >全选</van-checkbox
          >
        </van-submit-bar>
      </template>
      <van-empty v-else description="购物车空空也😭，快去装满吧..."> </van-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { showConfirmDialog } from 'vant'
import useUserStore from '@/stores/user'
import {
  postCartListApi,
  postRemoveCartItemApi,
  postUpdateAllSelectApi,
  postUpdateCartNumApi,
  postUpdateSelectCartItemApi
} from '@/api/cart'

const userStore = useUserStore()
const { isLogin, userinfo } = storeToRefs(userStore)

onMounted(() => {
  // 登录了，再去加载列表
  if (isLogin.value) {
    getCartList()
  }
})
// 购物车列表
const cartList = ref<CartNS.ICartItem[]>([])
// 获取购物车列表
const getCartList = async () => {
  try {
    const res = await postCartListApi(userinfo.value.userid)
    // console.log(res)
    cartList.value = res
  } catch (error) {
    console.log(error)
  }
}

// 更新购物车数量
const handleUpdateNum = async (cartid: string, num: number) => {
  try {
    const res = await postUpdateCartNumApi({ cartid, num })
    // 修改数量之后，再次更新列表
    getCartList()
  } catch (error) {
    console.log(error)
  }
}
// 删除购物车单条数据
const handleDelete = (cartid: string) => {
  showConfirmDialog({
    title: '删除',
    message: '你确定删除当条商品？'
  })
    .then(async () => {
      // on confirm  去删除
      try {
        const res = await postRemoveCartItemApi(cartid)
        // console.log(res)
        // 删除之后，重新获取当前购物车列表
        getCartList()
      } catch (error) {
        console.log(error)
      }
    })
    .catch(() => {
      // on cancel
    })
}

// 更新商品选中状态
const handleUpdateFlag = async (cartid: string, flag: boolean) => {
  try {
    await postUpdateSelectCartItemApi({ cartid, flag })
    // 更新之后，重新获取当前购物车列表
    getCartList()
  } catch (error) {
    console.log(error)
  }
}

// 反选功能：所有商品都选中，则全选按钮选中
const checkAll = computed(() => cartList.value.every((item) => item.flag))

// 全选或全不选
const handleCheckAll = async () => {
  try {
    await postUpdateAllSelectApi({ userid: userinfo.value.userid, type: !checkAll.value })
    // 修改完选中状态之后，重新加载购物车列表
    getCartList()
  } catch (error) {
    console.log(error)
  }
}

// 总价
const totalPrice = computed(() => {
  return cartList.value.reduce((prev, item) => {
    return item.flag ? prev + item.num * item.originprice : prev
  }, 0)
})

const onSubmit = () => {}
</script>

<style scoped lang="scss">
.app-cart {
  padding-bottom: 2.1rem;
  .cart-bottom {
    margin-bottom: 1rem;
  }
  .cart-item {
    display: flex;
    padding-left: 0.2rem;
    background-color: var(--van-card-background);
    .van-card {
      flex: 1;
    }
  }
}

.bottom-button {
  width: 160px;
  height: 40px;
}
.delete-button {
  height: 100%;
}
</style>
