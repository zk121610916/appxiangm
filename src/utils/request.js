import axios from 'axios'
import bigint from 'json-bigint'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
request.defaults.transformResponse = [function (data) {
  return data ? bigint.parse(data) : ''
}]
export default request
