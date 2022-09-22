<template>
  <div class="chat">
    <navbar class="home_nav">
      <div slot="center">消息</div>
    </navbar>
    <div class="content">
      <chat_item></chat_item>
    </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import chat_item from './childComps/chat_item.vue'
export default {
  name: 'chat',
  methods: {
    goprofile() {
      this.$router.push('/profile')
    }
  },
  components: {
    navbar,
    chat_item
  }
}
</script>

<style scoped>
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
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  margin: 0 auto;
  margin-top: 44px;
  background-color: #eee;
}
</style>
