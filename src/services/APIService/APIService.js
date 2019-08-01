import axios from 'axios'
import Config from 'react-native-config'
import LocalSession from '../../auth/LocalSession'
import { navigate } from '../NavigationService'

const HTTP_UNAUTHORIZED_CODE = 401

export class APIService {
  static instance

  constructor (customHost) {
    if (!APIService.instance) {
      this.createInstance(customHost)
    }

    return APIService.instance
  }

  createInstance (customHost) {
    this.host = customHost || Config.API_URL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
    this.http = axios.create({
      baseURL: this.host,
      headers: this.defaultHeaders,
      timeout: 1000,
    })
    this.http.interceptors.response.use((response) => response, (error) => {
      if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
        navigate('Auth')
      }

      return Promise.reject(error)
    })

    APIService.instance = this
  }

  getAuthorizedCallConfig = async (config, options = {}) => {
    const token = await LocalSession.getSession()

    if (options.disableHeaders) {
      return config
    }

    return {
      ...config,
      headers: {
        ...this.defaultHeaders,
        'X-Auth-Token': token,
      },
    }
  }

  client = () => ({
    delete: async (params, config = {}, options = {}) => {
      const callConfig = await this.getAuthorizedCallConfig(config, options)

      return this.http.delete(params, callConfig)
    },
    get: async (params, config = {}, options = {}) => {
      const callConfig = await this.getAuthorizedCallConfig(config, options)

      return this.http.get(params, callConfig)
    },
    post: async (params, data, config = {}, options = {}) => {
      const callConfig = await this.getAuthorizedCallConfig(config, options)

      return this.http.post(params, data, callConfig)
    },
    put: async (params, data, config = {}, options = {}) => {
      const callConfig = await this.getAuthorizedCallConfig(config, options)

      return this.http.put(params, data, callConfig)
    },
  })

  auth = () => ({
    signIn: async ({ email, password }) => this.client().post('/users/auth', { email, password }),
    signUp: async ({ email, password }) => this.client().post('/users', { email, password }),
  })

  me = () => ({
    books: (bookId) => ({
      get: async () => this.client().get(`/me/books/${bookId}`),
      getAll: async () => this.client().get('/me/books'),
    }),
    get: async () => this.client().get('/me'),
  })
}

export default new APIService()
