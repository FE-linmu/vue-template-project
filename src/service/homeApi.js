import './api.js'
import axios from 'axios'
/**
 * get 案例
 * @param options
 */
export const getExample = options => {
  return axios.get('/test/get', { params: options })
}

/**
 * post 案例
 * @param options
 * @returns {*}
 */
export const postExample = options => {
  return axios.post('/test/post', options)
}
