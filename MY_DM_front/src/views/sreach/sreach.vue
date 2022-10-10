<template>
  <div>
    <navbar class="navbar">
      <div slot="left">相机</div>
      <div slot="center">
        <input type="text" v-model="data" placeholder="请输入搜索关键字" />
      </div>
      <div slot="right" @click="get_search_data(data)">搜索</div>
    </navbar>
    <scroll class="goods_list">
      <goods_list :goods="showGoods"></goods_list>
    </scroll>
    <!-- <goods_list :goods="showGoods" class="goods_list"></goods_list> -->
  </div>
</template>

<script>
import scroll from '@/components/common/scroll/scroll.vue'
import navbar from '@/components/common/navbar/navbar'
import goods_list from 'components/content/goods/goods_list'
import { get_test } from 'network/sreach'

export default {
  name: '',
  data() {
    return {}
  },
  components: {
    scroll,
    navbar,
    goods_list
  },
  data() {
    return {
      showGoods: [],
      data: ''
    }
  },
  activated() {
    this.showGoods = []
    if (this.$route.query.search_in_cate) {
      this.get_search_data(this.$route.query.search_in_cate)
    } else if (this.$route.query.search_cate) {
      this.get_search_data(this.$route.query.search_cate)
    }
  },
  methods: {
    get_search_data(search_data) {
      get_test(search_data).then((res) => {
        this.showGoods = res
      })
    }
  }
}
</script>

<style>
.navbar {
  /* background-color: aqua; */
  background-color: #0086f6;
  width: 100%;
  height: 44px;
  color: #fff;
  /* line-height: 48px; */
  line-height: 44px;
  position: fixed;
  z-index: 10;
}
input {
  width: 100%;
  height: 30px;
  font-size: 14px;
  text-indent: 10px;
  outline: none;
  border: none;
  border-radius: 8px;
}
.goods_list {
  width: 95%;
  /* margin: 0 auto; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 2.5%;
  right: 2.5%;
  overflow: hidden;
}
</style>
