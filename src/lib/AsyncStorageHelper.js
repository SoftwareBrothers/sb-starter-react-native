import _ from 'lodash'
import { AsyncStorage } from 'react-native'
import { LocalStorageException } from '../exceptions'

export default class AsyncStorageHelper {
  static createRecord = async (KEY, value, valueTransformer = (val) => val) => {
    try {
      await AsyncStorage.setItem(KEY, valueTransformer(value))
    } catch (exception) {
      throw new LocalStorageException(exception)
    }
  }

  static loadRecord = async (KEY, resultTransformer = (val) => val) => {
    try {
      return resultTransformer(await AsyncStorage.getItem(KEY))
    } catch (exception) {
      throw new LocalStorageException(exception)
    }
  }

  static destroyRecord = async (KEY) => {
    try {
      await AsyncStorage.removeItem(KEY)
    } catch (exception) {
      throw new LocalStorageException(exception)
    }
  }

  static savePersistentInt = async (KEY, value) => AsyncStorageHelper.createRecord(KEY, value, _.toString)

  static loadPersistentInt = async (KEY) => AsyncStorageHelper.loadRecord(KEY, _.toInteger)

  static savePersistentObject = async (KEY, value) => AsyncStorageHelper.createRecord(KEY, value, JSON.stringify)

  static loadPersistentObject = async (KEY) => AsyncStorageHelper.loadRecord(KEY, JSON.parse)
}
