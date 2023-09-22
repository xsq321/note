import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
