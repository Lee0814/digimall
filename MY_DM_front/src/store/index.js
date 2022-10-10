import Vue from 'vue'
import Vuex from 'vuex'
import localCache from '@/common/cache'
import { get_profile } from '@/network/lyTest/profile'

Vue.use(Vuex)
const state = {
  user_id: '',
  UserName: '登录/注册',
  UserAvatar: 'USER',
  total_price: 0,
  is_checked: true,
  number: 0,
  cartList: [],
  addressList: [],
  orderList: [],
  defaultAddress: {}
}
const mutations = {
  user_id_change(state, user_id) {
    state.user_id = user_id
  },
  user_id_change(state, user_id) {
    state.user_id = user_id
  },
  total_price_change(state, total_price) {
    state.total_price = total_price
  },
  total_price_min(state, total_price) {
    state.total_price -= total_price
  },
  total_price_add(state, total_price) {
    state.total_price += total_price
  },
  total_is_false(state, is_checked) {
    state.is_checked = is_checked
  },
  total_number_change(state, number) {
    state.number = number
  },
  zero(state, new1) {
    state.total_price = new1
  },
  //点击首页获取个人信息
  getProfile(state, result) {
    console.log('执行')
    console.log(result)
    state.UserName = result[0].username
    state.user_id = localCache.getCache('user_id')
  },
  //购物车信息存储
  cartChange(state, res) {
    console.log('更新vuex')
    state.cartList = res
  },
  //地址信息
  addressChange(state, res) {
    state.addressList = res
  },
  defaultAddressChange(state, item) {
    state.defaultAddress = item
  },
  orderChange(state, res) {
    state.orderList = res
  },
  currentGoodChange(state, res) {
    state.currentGood = res
  }
}
const actions = {
  async AsyncGetProfile({ commit }) {
    const user_id = localCache.getCache('user_id')
    console.log(user_id)
    const result = await get_profile(user_id)

    commit('getProfile', result)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store
