import { request_dm } from './index'

export function delete_the_address(id) {
  return request_dm({
    url: '/delete_the_address',
    method: 'post',
    params: {
      id: id
    }
  })
}
