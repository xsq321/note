#### vue-demo

```vue
<script>
import EZUIKit from "ezuikit-js";
var player = null;

export default {
  methods:{
    initVideo(accessToken){
      player = new EZUIKit.EZUIKitPlayer({
        id: 'video-container', // 视频容器ID
        accessToken: accessToken,
        url: 'ezopen://open.ys7.com/G39444019/1.live',
        template: 'pcL',
        plugin: ['talk'], // 加载插件，talk-对讲
        width: 600,
        height: 400,
      });
      window.player = player;
    }
  },
  mounted: () => {
    this.initVideo(accessToken)
  },
  destroyed() {
    player.stop()
  },
};
</script>
```





#### VideoLive.vue

```vue
<template>
  <div>
    <el-card style="width: 840px" v-loading="loading" element-loading-text="加载中...">
      <div slot="header">
        <span style="font-size: 18px">视频直播</span>
      </div>
      <div id="video-container-live"></div>
      <ul>
        <li @click="changeChannelNo(1)" :class="{ active: activeIndex === 1 }"><img src="@/assets/images/list/video_nav/01.jpeg" alt="通道1" title="通道1" /></li>
        <li @click="changeChannelNo(2)" :class="{ active: activeIndex === 2 }"><img src="@/assets/images/list/video_nav/02.jpeg" alt="通道2" /></li>
        <li @click="changeChannelNo(3)" :class="{ active: activeIndex === 3 }"><img src="@/assets/images/list/video_nav/03.jpeg" alt="通道3" /></li>
        <li @click="changeChannelNo(4)" :class="{ active: activeIndex === 4 }"><img src="@/assets/images/list/video_nav/04.jpeg" alt="通道4" /></li>
        <li @click="changeChannelNo(5)" :class="{ active: activeIndex === 5 }"><img src="@/assets/images/list/video_nav/05.jpeg" alt="通道5" /></li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import EZUIKit from 'ezuikit-js'
import axios from 'axios'
var player = null
export default {
  data() {
    return {
      videoWidth: 800,
      activeIndex: 2,
      loading: false,
    }
  },
  methods: {
    changeChannelNo(channelNo) {
      this.activeIndex = channelNo
      this.loading = true
      player.stop().then(async () => {
        await player.play({
          url: `ezopen://open.ys7.com/K88297362/${channelNo}.live`,
        })
        setTimeout(() => {
          this.loading = false
        }, 2000)
      })
    },
    initVideo(accessToken) {
      player = new EZUIKit.EZUIKitPlayer({
        id: 'video-container-live', // 视频容器ID
        accessToken: accessToken,
        // accessToken: 'at.csnz9an08gn9go7r9gpkcsr1axjyp1un-709q6pchx4-00xj12t-zalpzvlak',
        url: `ezopen://open.ys7.com/K88297362/2.live`,
        // simple - 极简版; pcLive-pc直播；pcRec-pc回放；mobileLive-移动端直播；mobileRec-移动端回放;security - 安防版;voice-语音版;
        template: 'pcLive',
        plugin: ['talk'], // 加载插件，talk-对讲
        width: this.videoWidth,
        height: (this.videoWidth * 2) / 3,
        enableSharedArrayBufferGuide: true, // 引导用户主动开启谷歌浏览器实验室特性
      })
      window.player = player
    },
  },
  mounted() {
    axios({
      method: 'get',
      url: process.env.NODE_ENV === 'development' ? '/access/accessToken' : 'http://124.70.195.185:8090/accessToken',
      // url: '/access/accessToken',
    })
      .then((res) => {
        let accessToken = res.data
        // console.log(accessToken)
        this.initVideo(accessToken)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  destroyed() {
    player.stop()
  },
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  margin: 10px 0 0 0;
  // border: 1px solid skyblue;

  li {
    list-style: none;
    margin: 0 5px;
    &:hover {
      cursor: pointer;
      border: 1px solid pink;
    }
    &.active {
      border: 3px solid pink;
    }
    img {
      width: 120px;
      height: 80px;
      vertical-align: middle;
    }
  }
}
</style>

```

