import { request_dm } from './index'

export function update_name(id, new_name) {
  return request_dm({
    url: '/update_name',
    method: 'post',
    params: {
      id,
      new_name
    }
  })
}
