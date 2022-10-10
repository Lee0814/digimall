import { request_dm } from './index'

export function update_default(id, new_default) {
  return request_dm({
    url: '/update_default',
    method: 'post',
    params: {
      id,
      new_default
    }
  })
}
