<template>
  <div class="order">
    <div class="title">
      <div class="title_img" @click="goprofile"></div>
      <div>订单</div>
    </div>
    <ul class="cate">
      <li
        :class="{ choose: index == current }"
        @click="choose(index)"
        v-for="(item, index) in cates"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
    <scroll class="order-list">
      <div
        class="container"
        @click="goOrderDetail(item, index)"
        v-for="(item, index) in list"
        :key="index"
      >
        <order-item :itemInfo="item"></order-item>
      </div>
    </scroll>
    <!-- <orderlist /> -->
  </div>
</template>

<script>
// import orderlist from './children/OrderList'
import orderItem from './order_item.vue'
import scroll from '@/components/common/scroll/scroll.vue'

import { get_order } from '@/network/lyTest/order'

export default {
  name: 'Order',
  components: {
    orderItem,
    scroll
  },
  data() {
    return {
      orderList: [],
      cates: ['全部', '待发货', '待收货', '已完成'],
      current: 0
    }
  },
  methods: {
    goprofile() {
      this.$router.push('/profile')
    },
    choose(index) {
      this.current = index
    },
    goOrderDetail(item, index) {
      this.$store.commit('currentGoodChange', item)

      this.$router.push({
        path: 'orderdetail',
        query: {
          orderItem: item
        }
      })
    }
  },
  computed: {
    list() {
      const list = []
      const orderList = this.orderList
      switch (this.current) {
        case 0:
          for (let index in this.orderList) {
            list.push(orderList[index])
          }
          break
        case 1:
          for (let index in this.orderList) {
            if (orderList[index].state == '待发货') {
              list.push(orderList[index])
            }
          }
          break
        case 2:
          for (let index in this.orderList) {
            if (orderList[index].state == '待收货') {
              list.push(orderList[index])
            }
          }
          break
        case 3:
          for (let index in this.orderList) {
            if (orderList[index].state == '已完成') {
              list.push(orderList[index])
            }
          }
          break
      }
      return list
    }
  },
  activated() {
    get_order(this.$store.state.user_id).then((res) => {
      this.orderList = res
    })
  }
}
</script>

<style scoped>
.order {
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
  position: relative;
}
.title {
  /* width: 100vw; */
  width: 100%;
  height: 44px;
  background-color: #0086f6;
  font-size: 16px;
  font-weight: bolder;
  color: #fff;
  text-align: center;
  line-height: 44px;
  position: relative;
  top: 0%;
}

.title_img {
  width: 25px;
  height: 25px;
  background-image: url(assets/img/profile/返回.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 9px;
  left: 3.5%;
}
.cate {
  display: flex;
  width: 350px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  margin: 0 auto;
}
.cate li {
  list-style: none;
  flex: 1;
  text-align: center;
}
.choose {
  color: #0086f6;
}

.order-list {
  height: calc(100% - 149px);
  overflow: hidden;
}
.container {
  overflow: hidden;
}
</style>
