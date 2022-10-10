import { request_dm } from './index'

export function get_collection(user_id) {
  return request_dm({
    url: '/get_collection',
    method: 'get',
    params: {
      user_id
    }
  })
}
