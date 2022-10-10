import { request_dm } from './index'

export function reguser(username, reg_password) {
  return request_dm({
    url: '/register',
    method: 'post',
    data: {
      username: username,
      password: reg_password
    }
  })
}
