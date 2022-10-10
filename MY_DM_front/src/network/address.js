import { request_dm } from './request_dm'

export default function add_address(user_id, name, phone, detail) {
  return request_dm({
    url: 'add_address',
    params: {
      user_id,
      name,
      phone,
      detail
    }
  })
}
