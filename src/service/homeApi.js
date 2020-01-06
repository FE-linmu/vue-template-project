import './api.js'
import axios from 'axios'
/**
 * get 案例
 * @param options
 */
export const getExample = options => {
  return axios.get('./mock/home1.json', { params: options })
}

/**
 * post 案例
 * @param options
 * @returns {*}
 */
export const postExample = options => {
  return axios.post('./mock/home2.json', options)
}
