<template>
  <div class="content">
    <img class="store_img" src="~assets/img/detail/3.1店铺.svg" alt="" />
    <div class="store_name">DM线上自营店</div>
    <img class="go_store" src="~assets/img/profile/进入箭头.svg" alt="" />
    <div class="state">{{ itemInfo.state }}</div>
    <img class="goods_img" :src="itemInfo.image_url" alt="" />
    <div class="introduce">
      {{ itemInfo.title }}
    </div>
    <div class="price">￥{{ itemInfo.price }}</div>
    <div class="type">{{ itemInfo.desc }}</div>
    <div class="number">x{{ itemInfo.count }}</div>
    <div class="actual_payment">实付款￥{{ finalPrice }}</div>
    <div class="more">更多</div>
    <div class="delete_the_order">删除订单</div>
  </div>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    finalPrice() {
      return Number(this.itemInfo.price) + 5 + '.00'
    }
  },
  methods: {}
}
</script>

<style scoped>
.content {
  width: 350px;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  font-size: 13px;
  position: relative;
  margin: 10px auto;
}

.store_img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 1%;
  left: 4%;
}

.store_name {
  color: black;
  font-size: 15px;
  position: absolute;
  top: 6%;
  left: 14%;
}

.go_store {
  width: 26px;
  height: 26px;
  position: absolute;
  top: 3%;
  left: 41%;
}

.state {
  color: #0086f6;
  position: absolute;
  top: 7%;
  right: 5%;
}

.goods_img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  position: absolute;
  top: 24%;
  left: 4%;
}

.introduce {
  width: 150px;
  color: black;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  top: 27%;
  left: 29%;
}

.price {
  color: black;
  font-size: 15px;
  position: absolute;
  top: 27%;
  right: 5%;
}

.type {
  width: 200px;
  font-size: 13px;
  position: absolute;
  top: 42%;
  left: 29%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.number {
  font-size: 13px;
  position: absolute;
  top: 42%;
  right: 5%;
}

.actual_payment {
  color: black;
  font-size: 15px;
  position: absolute;
  top: 65%;
  right: 5%;
}

.more {
  position: absolute;
  top: 84%;
  left: 5%;
}

.delete_the_order {
  width: 60px;
  height: 20px;
  color: black;
  /* border: 1px solid gray;
    border-radius: 5%; */
  text-align: center;
  line-height: 20px;
  position: absolute;
  /* top: 80.5%; */
  top: 81%;
  right: 5%;
}
</style>
