<template>
  <div class="common-list" :class="{ half: column === 2 }">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <!-- 循环 -->
      <div class="list-container">
        <div
          class="common-list_item"
          v-for="item in goodsList"
          :key="item.proid"
          @click="handleToDetail(item.proid)"
        >
          <img :src="item.img1" alt="" />
          <div class="info">
            <div class="name van-multi-ellipsis--l2">{{ item.proname }}</div>
            <div class="price">
              <span>{{ ((item.originprice * item.discount) / 10).toFixed(1) }}</span>
              <span
                >{{ item.originprice }} /
                <van-tag color="#d30707" plain type="primary">{{ item.discount }}折</van-tag>
              </span>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { IPageParams } from '@/api/pro'

type column = 1 | 2

interface IProps {
  column?: column
  action(params: IPageParams): any //传发送网络请求的方法
}

const { column = 1, action } = defineProps<IProps>()

onMounted(() => {
  onLoad()
})

const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
// 商品列表
const goodsList = ref<GoodsNS.IGoodsItem[]>([])
//定义页码信息
const pageInfo = reactive<IPageParams>({
  count: 1,
  limitNum: 10
})
const onLoad = async () => {
  try {
    const res = await action(pageInfo)
    console.log(res)
    goodsList.value = goodsList.value.concat(res)
    // 加载结束
    loading.value = false
    // 数据已全部加载完毕
    if (res.length === 0) {
      finished.value = true
    }
    // 页码+1
    pageInfo.count++
  } catch (error) {
    console.log(error)
  }
}

const router = useRouter()
// 去商品详情页
const handleToDetail = (proid: string) => {
  router.push({ name: 'detail', params: { proid } })
}
</script>

<style scoped lang="scss">
@import '@/assets/css/var.scss';
.common-list {
  margin-bottom: 50px;
  padding: 0 10px;
  padding-bottom: 50px;

  &.half .list-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .common-list_item {
      width: 3.4rem;
      flex-direction: column;
      img {
        width: 3.4rem;
        height: 3.4rem;
      }
      .info {
        padding: 10px 0;
      }
    }
  }

  .list-container {
    .common-list_item {
      display: flex;
      margin-bottom: 0.2rem;
      img {
        width: 2rem;
        height: 2rem;
        margin-right: 0.1rem;
      }
      .info {
        .name {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .price {
          span {
            &:first-of-type {
              font-size: 14px;
              font-weight: 600;
              color: $red-color;
              margin-right: 0.1rem;
            }
            &:last-of-type {
              font-size: 12px;
              color: #747373;
            }
          }
        }
      }
    }
  }
}
</style>
