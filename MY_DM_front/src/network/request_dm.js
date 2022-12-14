import axios from 'axios'

export function request_dm(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000'
    // baseURL: 'http://121.40.29.63:8888/api'
    // baseURL:'http://127.0.0.1:8888/api'
    // timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {
      // console.log(err);
    }
  )

  // 2.2.响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )

  // 3.发送真正的网络请求
  return instance(config)
}
