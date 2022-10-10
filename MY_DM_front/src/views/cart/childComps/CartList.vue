<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :index="index"
        :key="index"
        :item-info="item"
        :list="cartList"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/scroll'
import CartListItem from './CartListItem.vue'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    // this.$refs.scroll.refresh()
    // this.get_cart_list(this.$store.state.user_id)
  },
  methods: {},
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
.cart-list {
  /* width: 100%;
  height: calc(100vh - 44px - 49px); */
  background-color: #eee;
  border: 1px solid transparent;
}
.content {
  width: 100%;
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
  margin-top: 44px;
  border: 1px solid transparent;
}
</style>
