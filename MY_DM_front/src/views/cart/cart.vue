<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <!-- <div slot="center">购物车{{Length}}</div> -->
      <div slot="center">购物车({{ this.$store.state.number }})</div>
    </nav-bar>

    <!-- 商品 -->
    <cart-list :cartList="cartList" />
    <!-- 汇总 -->
    <cart-bottom-bar @order="order" :total_price="total" v-show="is_show" />
    <div class="attention" v-show="!is_show">
      登录一下，你的购物车开起来~<span class="to_login" @click="to_login"
        >登录</span
      >
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar.vue'

import { get_cart_list } from 'network/cart'
import { add_order } from 'network/lyTest/order'
export default {
  name: 'cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {
      is_show: true,
      total_price: 0,
      cartList: []
    }
  },

  methods: {
    //去登录
    to_login() {
      this.$router.push({
        path: '/login/'
      })
    },
    //点击下单
    order() {
      this.$router.push('/purchase')
    },
    //获取购物车
    get_cart_list(user_id) {
      this.cartList = []
      get_cart_list(user_id).then((res) => {
        this.cartList = res
        for (let item of this.cartList) {
          item.choose = true
        }
        this.$store.commit('cartChange', this.cartList)
      })
    }
  },
  computed: {
    total() {
      let total = 0
      this.total_price = 0
      let number = 0
      console.log('action')
      for (let item of this.cartList) {
        if (item.choose == true) this.total_price += Number(item.price)
        total = this.total_price
        number++
      }
      this.$store.commit('total_number_change', number)
      this.$store.commit('total_price_change', total)
      return total
    }
  },
  created() {},
  activated() {
    if (!this.$store.state.user_id) {
      this.is_show = false
    } else {
      this.is_show = true
    }
    this.get_cart_list(this.$store.state.user_id)
  }
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  background-color: #0086f6;
  color: #fff;
  /* font-weight: 700; */
  /* margin-bottom: 10px; */
  position: fixed;
  top: 0;
  z-index: 1;
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
.to_login {
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
