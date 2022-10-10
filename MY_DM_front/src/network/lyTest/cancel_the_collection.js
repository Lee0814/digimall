import { request_dm } from './index'

export function cancel_the_collection(id) {
  return request_dm({
    url: '/cancel_the_collection',
    method: 'post',
    params: {
      id: id
    }
  })
}
