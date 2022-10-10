import { request_dm } from './index'

export function get_address(user_id) {
  return request_dm({
    url: '/get_address',
    method: 'get',
    params: {
      user_id
    }
  })
}
