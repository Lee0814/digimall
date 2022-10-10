<template>
  <div class="bottom-bar">
    <div class="check-content" @click="total_checked_change">
      <!-- <check-button @click="total_checked_change" class="check-button"/> -->
      全选
    </div>

    <div class="total">
      <!-- 合计:{{totalPrice}} -->
      总价：{{ total_price }}.00
    </div>

    <div class="calculate" @click="if_data_false">
      去结算({{ this.$store.state.number }})
    </div>
    <div class="flxed" v-show="this.is_data">下单成功</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartBottomBar',
  data() {
    return {
      is_data: false
    }
  },
  props: {
    total_price: {
      type: Number,
      default: 0
    }
  },
  methods: {
    total_checked_change() {
      // console.log(this.$store.state.is_checked);
      if (this.$store.state.is_checked == true) {
        this.$store.commit('total_is_false', false)
      } else {
        this.$store.commit('total_is_false', true)
      }
      this.$bus.$emit('test')
    },
    if_data_false() {
      // console.log(1);
      let that = this
      that.is_data = true
      this.$emit('order')
      // this.if_data=false
      setTimeout(function () {
        that.is_data = false
      }, 2000)
    }
  },
  components: {
    CheckButton
  }
  // computed: {
  //   totalPrice() {
  //     // return this.
  //   }
  // }
}
</script>

<style scoped>
.flxed {
  position: fixed;
  top: calc(46%);
  left: 40%;
  width: 80px;
  height: 30px;
  background-color: gray;
  border-radius: 10px;
  color: #eee;
  line-height: 30px;
  text-align: center;
}
.bottom-bar {
  width: 100%;
  height: 40px;
  background-color: #eee;
  position: relative;
  font-size: 15px;

  position: fixed;
  /* bottom: 40px; */
}
.check-content {
  /* display: flex; */
  /* align-items: center; */
  position: absolute;
  /* top: 10px; */
  left: 3.5%;
  height: 40px;
  line-height: 40px;
}
/* .check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
} */
.total {
  position: absolute;
  left: 30%;
  /* top: 10px; */
  color: #0086f6;
  height: 40px;
  line-height: 40px;
}
.calculate {
  position: absolute;
  left: 75%;
  width: 25%;
  height: 100%;
  background-color: #0086f6;
  line-height: 40px;
  padding-left: 5px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
}
</style>
