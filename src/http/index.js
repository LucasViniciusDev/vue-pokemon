import http from 'axios'
import * as interceptors from './interceptors'

http.defaults.baseURL = process.env.VUE_APP_API_URL
http.interceptors.response.use(interceptors.response, interceptors.error)

export default http
