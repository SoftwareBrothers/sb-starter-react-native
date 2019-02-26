import axios from 'axios'
import { API_URL } from 'react-native-dotenv'
import LocalSession from '../../auth/LocalSession'

const JWT_AUTH_TOKEN_KEY = 'JWT_AUTH_TOKEN'

export class APIService {
  static instance

  constructor (customHost) {
    if (!APIService.instance) {
      this.createInstance(customHost)
    }

    return APIService.instance
  }

  createInstance (customHost) {
    this.host = customHost || API_URL
    this.defaultHeaders = {}
    this.http = axios.create({
      baseURL: this.host,
      headers: this.defaultHeaders,
      timeout: 1000,
    })

    APIService.instance = this
  }

  getAuthorizedCallConfig = async (config) => {
    const token = await LocalSession.loadRecord(JWT_AUTH_TOKEN_KEY)

    return {
      ...config,
      headers: {
        ...this.defaultHeaders,
        Authorization: `Bearer ${token}`,
      },
    }
  }

  client = () => ({
    delete: async (params, config = {}) => {
      const callConfig = await this.getAuthorizedCallConfig(config)

      return this.http.delete(params, callConfig)
    },
    get: async (params, config = {}) => {
      const callConfig = await this.getAuthorizedCallConfig(config)

      return this.http.get(params, callConfig)
    },
    post: async (params, data, config = {}) => {
      const callConfig = await this.getAuthorizedCallConfig(config)

      return this.http.post(params, data, callConfig)
    },
    put: async (params, data, config = {}) => {
      const callConfig = await this.getAuthorizedCallConfig(config)

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
