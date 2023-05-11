/*
 * @Author: 端和金 duanhejin@yozosoft.com
 * @Date: 2022-12-23 11:09:13
 * @LastEditors: 端和金 duanhejin@yozosoft.com
 * @LastEditTime: 2022-12-23 11:12:11
 * @FilePath: \wo-websocket-cluster\src\libs\axios\retry\index.ts
 * @Description: axios重试
 */
import axios, { AxiosRequestConfig } from 'axios'
import axiosRetry from 'axios-retry'

const createInstance = () => {
  return axios.create({
    timeout: 30000
  })
}

const requestRetry = async (config: AxiosRequestConfig) => {
  const instance = createInstance()
  axiosRetry(instance, { retries: 3 })
  return instance.request(config)
}

export const axiosRetryGet = async (url: string, params: any, config?: AxiosRequestConfig) => {
  const newConfig: AxiosRequestConfig = {
    ...config,
    url,
    method: 'GET',
    params
  }
  return requestRetry(newConfig)
}

export const axiosRetryPost = async (url: string, data?: any, config?: AxiosRequestConfig) => {
  const newConfig: AxiosRequestConfig = {
    ...config,
    url,
    method: 'POST',
    data
  }
  return requestRetry(newConfig)
}
