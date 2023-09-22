import { getUserInfoApi, postLoginApi, type ILoginParams } from '@/api/user'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router from '@/router'
import { showNotify } from 'vant'

const useUserStore = defineStore(
  'user',
  () => {
    // state
    const token = ref<string>('')
    const userinfo = ref<UserNS.IUserInfo>({
      userid: '',
      username: '',
      nickname: ''
    })
    //用户是否已经登录成功 计算属性==》  getters
    const isLogin = computed(() => !!userinfo.value.userid)
    // 登录方法==》 actions
    const loginAction = async (params: ILoginParams) => {
      // 调用登录接口，返回token; 再调用获取个人信息接口，
      try {
        const res = await postLoginApi(params)
        console.log(res)
        // 有值，再去取
        if (res) {
          const { userid } = res
          // 存仓库
          token.value = res.token

          // 根据userid获取用户信息
          const info = await getUserInfoApi(userid)
          console.log(info)
          // 用户信息存仓库
          userinfo.value = info[0]

          // 成功通知
          showNotify({ type: 'success', message: '恭喜你，登录成功！' })

          // 回首页
          router.push('/')
        }
      } catch (error) {
        console.log(error)
      }
    }

    // 退出登录  ===》action
    const exitAction = () => {
      // 清空仓库
      token.value = ''
      userinfo.value = {
        userid: '',
        username: '',
        nickname: ''
      }
      // 回首页
      router.push('/')
    }

    return { token, userinfo, isLogin, loginAction, exitAction }
  },
  {
    persist: true
  }
)

export default useUserStore
