<template>
  <div class="main">
    <scroll
      class="scroll"
      @scroll="contentscroll"
      ref="scroll"
      :probeTybe="2"
      :pullUpLoad="true"
    >
      <ul id="message">
        <!-- <li><p class="time">下午 6:30</p></li> -->
        <li>
          <p class="time">上午 {{ hours }}:{{ minutes }}</p>
        </li>
        <li class="text-left">
          <span>宇哥，在干嘛呢</span>
        </li>

        <li
          v-for="(item, index) in msg"
          :class="item.isLeft ? 'text-left' : 'text-right'"
          :key="index"
        >
          <span>{{ item.message }}</span>
        </li>
      </ul>
    </scroll>
    <div class="foot">
      <span class="voice" @click="focusIn"> </span>
      <input
        ref="inp"
        type="text"
        id="inp"
        v-model="inp"
        @keyup.enter="send()"
      />
      <span class="expression" @click="send()">发送</span>
    </div>
  </div>
</template>

<script>
import ws from '@/network/websocket'
//better_scroll
import scroll from '@/components/common/scroll/scroll.vue'
export default {
  name: 'chat_content',
  data() {
    return {
      // 自己的数据
      msg: [],

      inp: '',
      //接收的数据
      ws: {},
      xianzaiweizhi: '',
      hours: '',
      minutes: ''
    }
  },
  components: {
    scroll
  },
  methods: {
    foo() {
      // 接收数据
      this.ws = ws
      ws.onopen = () => {
        console.log(ws.readyState)
      }
      ws.onmessage = (res) => {
        const msg_item = {}
        msg_item.message = res.data
        msg_item.isLeft = true
        this.msg.push(msg_item)

        console.log(res)
      }
      ws.onclose = () => {
        console.log('连接断开')
      }
      ws.onerror = (err) => {
        console.log(err)
      }
    },
    //点击 发送数据
    send() {
      if (!this.hours) {
        const nowTime = new Date()
        this.hours = nowTime.getHours()
        this.minutes = nowTime.getMinutes()
      }
      if (!this.inp) return
      // this.msg.push(this.inp)
      // const msg = this.inp
      const msg_item = {}
      msg_item.message = this.inp
      msg_item.isLeft = false
      console.log(this.msg)

      this.msg.push(msg_item)
      this.ws.send(this.inp)
      this.inp = ''
    },
    disconnect() {
      ws.onclose()
      ws.send('okk')
    },
    contentscroll(position) {
      this.xianzaiweizhi = position.y
    },
    pullingUp() {
      console.log(2)
    },
    focusIn() {
      this.$refs.inp.focus()
    }
  },
  // watch: {
  //   xianzaiweizhi: function (newData, oldData) {
  //     console.log(this.$refs.scroll.b_s.offsetHeight)
  //     // console.log(newData)
  //     if (-newData > 100) {
  //       console.log('该跳转了')
  //       this.$refs.scroll.b_s.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //       })
  //     }
  //   }
  // },
  created() {
    this.foo()
    const nowTime = new Date()
    this.hours = nowTime.getHours()
    this.minutes = nowTime.getMinutes()
  },
  destroyed() {
    this.disconnect()
  }
}
</script>

<style scoped>
.scroll {
  height: calc(100% - 110px);
  overflow: hidden;
}
.main {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #ededed;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
}
.main ul {
  padding: 20px 60px 0 60px;
  list-style: none;
  letter-spacing: 1px;
}
.main li {
  padding: 5px;
  margin-bottom: 10px;
  position: relative;
}
.main .time {
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  color: #999;
}
.main li span {
  text-align: left;
  font-size: 18px;
  display: inline-block;
  border-radius: 7px;
  background-color: #a6e860;
  padding: 10px 12px 12px 12px;
  position: relative;
}
.main li.text-left span {
  background: white;
}
.main li.text-left:before {
  content: '';
  width: 40px;
  height: 40px;
  border-radius: 3px;
  display: block;
  background: url('http://ceaser.fun/img/dm_c.png') no-repeat center center;
  background-size: 100%;
  position: absolute;
  left: -45px;
  top: 7px;
}
.main li.text-left span:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right: 12px solid white;
  position: absolute;
  top: 10px;
  left: -18px;
}
.text-right {
  text-align: right;
}
.main li.text-right:before {
  content: '';
  width: 40px;
  height: 40px;
  border-radius: 3px;
  display: block;
  background: url('http://ceaser.fun/img/dm_c.png') no-repeat center center;
  background-size: 100%;
  position: absolute;
  right: -45px;
  top: 7px;
}
.main li.text-right span:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-left: 12px solid #a6e860;
  position: absolute;
  top: 10px;
  right: -18px;
}
/* 聊天界面 */
/* 输入框 */
.foot {
  width: 100%;
  box-sizing: border-box;
  height: 60px;
  position: absolute;
  bottom: 49px;
  padding: 0 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;
}
.foot input {
  width: 70%;
  height: 40px;
  border: none;
  text-indent: 10px;
  outline: medium;
  font-size: 18px;
}
.foot span {
  font-size: 18px;
  width: 30px;
  height: 30px;
}
.voice {
  width: 40px;
  height: 40px;
  background: url('@/assets/img/chat/jianpan.svg') no-repeat center center;
  background-size: 100%;
}
.expression {
  width: 50px !important;
  line-height: 200%;
}
/* .plus {
  background: url('http://ceaser.fun/img/dm_c.png') no-repeat center center;
  background-size: 100%;
} */
/* .expression {
  background: url('http://ceaser.fun/img/dm_c.png') no-repeat center center;
  background-size: 100%;
} */
</style>
