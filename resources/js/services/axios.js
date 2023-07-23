import axios from 'axios'
import NProgress from 'nprogress'

// axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = false

const token = localStorage.getItem('access_token')
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start()
  return config
}, function (error) {
  // Do something with request error
  NProgress.done()
  console.error(error)
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  NProgress.done()
  return response
}, function (error) {
  // Do something with response error
  NProgress.done()
  console.error(error)
  return Promise.reject(error)
})

export default axios
