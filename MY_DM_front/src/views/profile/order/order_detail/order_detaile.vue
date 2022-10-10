<template>
  <div class="order">
    <div class="title">
      <div class="title_img" @click="goprofile"></div>
      <div>订单详情</div>
    </div>
    <scroll class="order-detail">
      <div class="order-store">DM在线商城</div>
      <order-detail :itemInfo="orderItem"></order-detail>
      <div class="intros">
        <div class="intro" v-for="(item, index) in intros" :key="index">
          <div class="key">{{ item.left }}</div>
          <div class="value">
            <span class="desc">{{ item.desc }}</span
            ><span class="fact-price">{{ item.right }}</span>
          </div>
        </div>
      </div>
      <div class="addres">
        <div class="addres-key">收货信息</div>
        <div class="addres-value">
          <p class="addres-name">
            <span>{{ orderItem.name }}</span
            ><span>{{ orderItem.phone }}</span>
          </p>
          <p class="addres-detail">
            {{ orderItem.detail }}
          </p>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from '@/components/common/scroll/scroll.vue'
import orderDetail from './good_item.vue'
export default {
  name: 'Order',
  components: {
    scroll,
    orderDetail
  },
  data() {
    return {
      intros: [
        {
          left: '商品总价',
          desc: '商品总价',
          right: ''
        },
        {
          left: '运费',
          desc: '运费(快递)',
          right: '5.00'
        },
        {
          left: 'DM VIP',
          desc: 'DM VIP专享9.5折优惠',
          right: 0
        },
        {
          left: '红包',
          desc: '无',
          right: 0
        },
        {
          left: '实付款',
          desc: '',
          right: 120
        },
        {
          left: '创建编号',
          desc: '1115',
          right: ''
        },
        {
          left: '创建时间',
          desc: '2022-10-1',
          right: ''
        }
      ],
      orderItem: {}
    }
  },
  methods: {
    goprofile() {
      this.$router.push('/order')
    }
  },

  created() {
    this.orderItem = this.$route.query.orderItem
    this.intros[0].right = this.orderItem.price
    this.intros[4].right =
      Number(this.orderItem.price) + Number(this.intros[1].right) + '.00'
    this.intros[5].desc = this.orderItem.id
    this.intros[6].desc = this.orderItem.time
  },
  activated() {
    // if (this.$store.state.currentGood) {
    //   console.log('从vuex获取itemInfo');
    //   this.orderItem = this.$store.state.currentGood
    // } else {
    //   this.orderItem = this.$route.query.orderItem
    // }
    console.log('执行活跃函数');
    this.orderItem = this.$store.state.currentGood
    this.intros[0].right = this.orderItem.price
    this.intros[4].right =
      Number(this.orderItem.price) + Number(this.intros[1].right) + '.00'
    this.intros[5].desc = this.orderItem.id
    this.intros[6].desc = this.orderItem.time
    this.$store.state.currentGood = {}
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
  width: 100vw;
  height: 50px;
  background-color: #0086f6;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  position: relative;
  top: 0%;
}

.title_img {
  width: 30px;
  height: 30px;
  background-image: url('assets/img/profile/返回.svg');
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 9.5px;
  left: 10px;
}
.order-store {
  padding: 10px;
  font-size: 18px;
  color: black;
}
.order-detail {
  overflow: hidden;
  width: 350px;
  margin: 15px auto;
  height: calc(100% - 130px);
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
.intros {
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(218, 218, 218);
}
.intro {
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
}
.key {
  color: black;
  font-size: 14px;
}
.desc {
  font-size: 12px;
  padding-right: 10px;
}
.fact-price {
  font-size: 15px;
  color: #0086f6;
}
.addres {
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
}
.addres-key {
  width: 30%;
}
.addres-name span {
  padding-left: 5px;
}
.addres-value {
  width: 60%;
}
.addres-detail {
  font-size: 12px;
  padding: 5px 0 0 5px;
}
</style>
