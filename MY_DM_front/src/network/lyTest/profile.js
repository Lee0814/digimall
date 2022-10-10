import { request_dm } from './index'

export function get_profile(user_id) {
  return request_dm({
    url: '/profile',
    method: 'get',
    params: {
      user_id
    }
  })
}
