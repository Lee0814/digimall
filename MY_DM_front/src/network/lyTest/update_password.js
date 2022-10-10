import { request_dm } from './index'

export function update_password(id, new_password) {
  return request_dm({
    url: '/update_password',
    method: 'post',
    params: {
      id,
      new_password
    }
  })
}
