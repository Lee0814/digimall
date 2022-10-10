<template>
  <div class="bottom">
    <div class="left">
      <img src="~assets/img/detail/客服.svg" alt="" class="one" />
      <span @click="gochatcontent">客服</span>
      <img src="~assets/img/detail/收藏.svg" alt="" class="two" />
      <span @click="add_collection_list">收藏</span>
    </div>
    <div class="right" @click="add_cart_list">加入购物车</div>
  </div>
</template>

<script>
export default {
  methods: {
    add_cart_list() {
      this.$emit('add_cart_list')
    },
    add_collection_list() {
      this.$emit('add_collection_list')
    },
    gochatcontent() {
      this.$emit('gochatcontent')
    }
  }
}
</script>

<style scoped>
.one {
  width: 30px;
  position: relative;
  left: 20px;
}
.two {
  width: 30px;
  position: relative;
  left: 20px;
}
.bottom {
  display: flex;
  flex: 1;
  /* position: fixed;
  left: 0px;
  right: 0px;
  bottom: 49px;
  width: 95%; */
  width: 93%;
  height: 49px;
  margin: 0 auto;
  margin-top: -58px;
  border-radius: 10px;
  background-color: #fff;
}
.left {
  flex: 1;
  border-radius: 10px;
  display: flex;
}
.left span {
  text-align: center;
  line-height: 49px;
  display: block;
  flex: 1;
}
.right {
  height: 100%;
  background-color: #0086f6;
  width: 100px;
  border-radius: 10px;
  line-height: 49px;
  text-align: center;
  font-size: 15px;
  color: #eee;
  z-index: 1;
}
</style>
