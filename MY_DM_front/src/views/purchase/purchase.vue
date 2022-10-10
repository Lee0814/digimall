<template>
  <div class="purchase">
    <div class="purchase-navbar">
      <img
        src="@/assets/img/purchase/back_light.svg"
        @click="back"
        alt=""
      /><span>确认订单</span>
    </div>
    <scroll class="content">
      <!-- 地址显示 -->
      <div class="address">
        <div class="detail">{{ address.detail }}</div>
        <div class="user">
          <span class="name">{{ address.name }}</span>
          <span>{{ address.phone }}</span>
        </div>
        <img
          @click="showMoreAddress"
          class="more"
          src="@/assets/img/purchase/more.svg"
          alt=""
        />
      </div>
      <!-- 商品显示 -->
      <div class="purchase-goods">
        <div class="store">DM线上自营店</div>
        <div v-for="(item, index) in cartList" :key="index">
          <good-item :itemInfo="item"></good-item>
        </div>
      </div>

      <payway></payway>
    </scroll>

    <bottom-bar @submit="order"></bottom-bar>
    <div class="attention" v-show="isShow">恭喜您下单成功</div>
    <div v-show="isShowMoreAddress" class="show-address">
      <div
        class="show-address-item"
        v-for="(item, index) in addressList"
        :key="index"
        @click="chooseAddress(item)"
      >
        <p class="show-address-item-detail">{{ item.detail }}</p>
        <p class="show-address-item-info">
          <span>{{ item.name }}</span>
          <span class="show-address-item-phone">{{ item.phone }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from '@/components/common/scroll/scroll.vue'
import payway from './children/payway.vue'
import bottomBar from './children/bottom_bar.vue'
import goodItem from './children/good_item.vue'

import { get_cart_list } from 'network/cart'
import { add_order } from 'network/lyTest/order'
export default {
  components: {
    scroll,
    bottomBar,
    payway,
    goodItem
  },
  data() {
    return {
      total_price: 0,
      cartList: [],
      isShow: false,
      addressList: [],
      address: {},
      isShowMoreAddress: false
    }
  },
  methods: {
    back() {
      this.$router.push('/carts')
    },
    //点击下单
    order() {
      add_order(this.cartList, this.address)
      //重新更新购物车
      get_cart_list(this.$store.state.user_id).then((res) => {
        this.cartList = res
        console.log(res)
        for (let item of this.cartList) {
          item.choose = true
        }
        this.$store.commit('cartChange', this.cartList)
        this.$store.commit('total_number_change', 0)
        this.$store.commit('total_price_change', 0)
      })
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.$router.push('/profile')
      }, 1500)
    },
    //获取购物车
    get_cart_list(user_id) {
      this.cartList = []
      get_cart_list(user_id).then((res) => {
        this.cartList = res
        for (let item of this.cartList) {
          item.choose = true
        }
        console.log(this.cartList)
      })
    },
    chooseAddress(item) {
      this.address = item
      this.isShowMoreAddress = false
    },
    showMoreAddress() {
      this.isShowMoreAddress = true
    }
  },
  activated() {
    this.cartList = this.$store.state.cartList
    this.addressList = this.$store.state.addressList
    this.address = this.$store.state.defaultAddress
    this.isShowMoreAddress = false
  }
}
</script>

<style scoped>
.purchase-navbar {
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  color: black;
  position: relative;
}
.purchase-navbar img {
  height: 1.7em;
  vertical-align: middle;
}
.purchase-navbar span {
  position: absolute;
  top: 2px;
  left: 48px;
}
.purchase {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  position: relative;
}
.content {
  height: calc(100% - 109px);
  overflow: hidden;
  /* height: calc(100vh - 49px -49px); */
}
.address {
  width: 350px;
  background-color: #fff;

  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 20px;
  position: relative;
}
.address img {
  position: absolute;
  height: 80%;
  top: 10%;
  right: 0;
}
.detail {
  font-size: 17px;
  color: black;
  padding-bottom: 10px;
}
.name {
  padding-right: 5px;
}
.purchase-goods {
  width: 350px;
  background-color: #fff;

  border-radius: 10px;
  margin: 10px auto;
  padding: 10px 20px;
}
.store {
  font-size: 16px;
  color: black;
  padding-bottom: 10px;
}
.attention {
  width: 250px;
  position: absolute;
  font-size: 20px;
  padding: 30px 50px;
  background-color: rgb(236, 236, 236);
  color: var(--color-high-text);
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
}
.show-address {
  width: 300px;
  height: 400px;
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;
  overflow: scroll;
}
.show-address-item {
  padding: 10px;
  background-color: rgb(222, 222, 222);
  border-radius: 10px;
  margin-bottom: 20px;
}
.show-address-item-detail {
  font-size: 17px;
  padding-bottom: 10px;
  color: black;
}
.show-address-item-phone {
  padding-left: 10px;
}
</style>
