import { request_dm } from './index'

export function delete_user(userid) {
  return request_dm({
    url: '/logout',
    method: 'post',
    data: {
      id: userid
    }
  })
}
