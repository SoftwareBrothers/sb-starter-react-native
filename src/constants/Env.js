import { Platform } from 'react-native'

const PLATFORM_ANDROID = 'android'
const PLATFORM_IOS = 'ios'

const isIOS = Platform.OS === PLATFORM_IOS
const isAndroid = Platform.OS === PLATFORM_ANDROID

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

export {
  isAndroid,
  isIOS,
  isDevelopment,
  isProduction,
}
