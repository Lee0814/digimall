import { request_dm } from './index'

export function lyuser_login(username, password) {
  return request_dm({
    url: '/login',
    method: 'post',
    data: {
      username: username,
      password: password
    }
  })
}
