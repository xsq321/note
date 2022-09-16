```vue
<template>
    <div>
        {{mqMsg}}
    </div>
</template>
 
<script>
  import mqtt from 'mqtt'
  // 配置mqtt
  var client = null
  const options = {
    connectTimeout: 40000,
    clientId: process.env.VUE_APP_CLIENT_ID,      //提取到配置文件
    username: process.env.VUE_APP_MQTT_UESRNAME,  //提取到配置文件
    password: process.env.VUE_APP_MQTT_PASSWORD,  //提取到配置文件
    clean: true
  }
export default {
  data () {
    return {
      mqMsg: ''
    }
  },
  mounted() {
    this.mqttMsg()
  },
  destroyed() {
    if(client) {
      client.end() //离开页面的时候  关闭mqtt连接
      client = null
    }
  },
  computed: {
    // mqtt 连接地址
    mqttUrl:() => process.env.VUE_APP_MQTT_URL,  //提取到配置文件
    topic:() => process.env.VUE_APP_TOPIC,       //提取到配置文件
  },
  methods: {
    mqttMsg () {
      if (!client) {
        client = mqtt.connect(this.mqttUrl, options)
      }
      // mqtt连接
      client.on('connect', (e) => {
        console.log(e, "MQTT连接成功！！！")
        client.subscribe(this.topic, { qos: 2 }, (error) => {  // qos 为通道
          if (!error) {
            console.log('消息订阅成功')
          } else {
            console.log('消息订阅失败')
          }
        })
      })
      // 接收消息处理
      client.on('message', (topic, message) => {
        console.log('收到来自', topic, '的消息---->>', message.toString())
        this.mqMsg = message.toString()
      })
      // 断开发起重连
      client.on('reconnect', (error) => {
        console.log('正在重连:', error)
      })
      // 链接异常处理
      client.on('error', (error) => {
        console.log('连接失败:', error)
      })
    },
    //下发指令
    commandIssue() {
        //第二个参数是发送的数据
      client.publish(this.topic, JSON.stringify(startCommand), 2, error => {
        if (!error) {
          console.log('----> ', '启动发送成功')
        }
      })
    },
  }
}
</script>
```

