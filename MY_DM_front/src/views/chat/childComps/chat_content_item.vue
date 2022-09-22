<template>
  <div
    class="chat-content-item"
    :class="{ left: this.is_left, right: this.is_right }"
  >
    <img src="http://ceaser.fun/img/dm_c.png" alt="" />
    <section>{{ this.message }}</section>
  </div>
</template>

<script>
export default {
  name: 'chat_content-item',
  data() {
    return {}
  },
  props: {
    is_left: false,
    is_right: false,
    message: ''
  },
  components: {},
  methods: {}
}
</script>

<style scoped>

.chat-content-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  height: 50px;
}
img {
  width: 50px;
}
section {
  background-color: #fff;
  flex: 1;
  border-radius: 6px;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
}
.left section::after {
  content: '';
  position: absolute;
  left: -12px;
  top: 15px;
  border: 6px solid transparent;
  border-right-color: #fff;
}
.left section {
  margin-left: 10px;
}
.right img {
  position: relative;
  left: 300px;
  z-index: 100;
}
.right section {
  right: 65px;
}
.right section::after {
  content: '';
  position: absolute;
  right: -12px;
  top: 15px;
  border: 6px solid transparent;
  border-left-color: #fff;
}
</style>
