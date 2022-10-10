<template>
  <div class="payment">
    <div class="payitem" v-for="(item, index) in payway" :key="index">
      <img class="logo" :src="item.logo" alt="" />
      <span class="payway">{{ item.payname }}</span>
      <input style="width: 18px; height: 18px" type="checkbox" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payway: [
        {
          logo: require('@/assets/img/purchase/zhifubao.svg'),
          payname: '支付宝支付'
        },
        {
          logo: require('@/assets/img/purchase/weixin.svg'),
          payname: '微信支付'
        }
      ]
    }
  }
}
</script>

<style scoped>
.payment {
  width: 350px;
  background-color: #fff;

  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 20px;
}
.payitem img {
  vertical-align: middle;
  height: 1.5em;
}
.payitem img:last-child {
  vertical-align: middle;
  height: 1em;
}
.payitem {
  font-size: 18px;
  padding-bottom: 20px;
}
.payitem span {
  padding-left: 5px;
}
.payitem input {
  float: right;
  vertical-align: middle;
  line-height: 1.5em;
}
.payitem:last-child {
  padding-bottom: 0;
}
</style>
