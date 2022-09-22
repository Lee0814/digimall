<template>
  <div class="chat-item" @click="this.click">
    <img src="http://ceaser.fun/img/dm_c.png" alt="" />
    <span class="one">官方客服</span>
    <span class="two">99划算节即将结束，不要错过哦</span>
  </div>
</template>

<script>
export default {
  name: 'chat_item',
  components: {},
  methods: {
    click() {
      this.$router.replace('/chatcontent')
    }
  }
}
</script>

<style scoped>
.chat-item {
  height: 70px;
  width: 93%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}
.chat-item img {
  width: 50px;
  border-radius: 50px;
  position: absolute;
  top: 9px;
  left: 9px;
}
.one {
  position: absolute;
  /* font-size: large; */
  font-weight: 500;
  left: 80px;
  top: 10px;
  color: black;
}
.two {
  position: absolute;
  left: 80px;
  bottom: 10px;
  /* color: #eee; */
  font-size: small;
}
</style>
