import axios from 'axios'
import { toast } from 'react-toastify'
import config from '../constants/config'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      function (error) {
        toast.error(error?.response.data.error.message || 'Request failed with status code 400')
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
