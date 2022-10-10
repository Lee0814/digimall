<template>
  <div class="chat">
    <navbar class="home_nav">
      <div slot="center">消息</div>
    </navbar>
    <div class="content" v-show="show">
      <chat_item></chat_item>
    </div>
    <div class="attention" v-show="!show">
      登录一下，你的消息开起来~<span class="gologin" @click="gologin"
        >登录</span
      >
    </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import chat_item from './childComps/chat_item.vue'
export default {
  name: 'chat',
  methods: {
    gologin() {
      this.$router.push('/login')
    }
  },
  components: {
    navbar,
    chat_item
  },
  data() {
    return {
      show: true
    }
  },
  activated() {
    if (!this.$store.state.user_id) {
      this.show = false
    } else {
      this.show = true
    }
  }
}
</script>

<style scoped>
.chat {
  width: 100vw;
  height: calc(100vh - 49px);
  background-color: #eee;
}
.home_nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  width: 93%;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  margin: 0 auto;
  margin-top: 44px;
  background-color: #eee;
}
.attention {
  /* width: 280px; */
  width: 80%;
  height: 35px;
  font-size: 14px;
  text-indent: 15px;
  line-height: 35px;
  background-color: #0086f6;
  border-radius: 5px;
  color: #fff;
  position: absolute;
  top: 45%;
  left: 10%;
}
.gologin {
  text-indent: 0;
  display: inline-block;
  /* position: fixed; */
  /* right: 11%; */
  position: absolute;
  right: 0%;
  background-color: #fff;
  color: #0086f6;
  width: 50px;
  text-align: center;
  border-radius: 5px;
}
</style>
