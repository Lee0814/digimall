import { request_dm } from './index'

export function add_order(cart_list, address) {
  for (let i in cart_list) {
    delete cart_list[i].id
    delete cart_list[i].choose
    cart_list[i].state = '待发货'
  }
  return request_dm({
    url: '/add_order',
    method: 'post',
    data: {
      cart_list,
      address
    }
  })
}

export function get_order(user_id) {
  return request_dm({
    url: '/get_order',
    method: 'get',
    params: {
      user_id
    }
  })
}
