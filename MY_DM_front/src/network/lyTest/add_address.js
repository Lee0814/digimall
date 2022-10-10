import { request_dm } from './index'

export function add_address(user_id, name, phone, detail,isDefault) {
  return request_dm({
    url: '/add_address',
    method: 'post',
    params: {
      user_id,
      name,
      phone,
      detail,
      isDefault
    }
  })
}
