import AsyncStorageHelper from '../lib/AsyncStorageHelper'

const JWT_AUTH_TOKEN_KEY = 'JWT_AUTH_TOKEN'

// TODO: consider caching JWT Token
class LocalSession {
  static getSession = async () => AsyncStorageHelper.loadRecord(JWT_AUTH_TOKEN_KEY)

  static setSession = async ({ token }) => AsyncStorageHelper.createRecord(JWT_AUTH_TOKEN_KEY, token)

  static deleteSession = async () => AsyncStorageHelper.destroyRecord(JWT_AUTH_TOKEN_KEY)
}

export default LocalSession
