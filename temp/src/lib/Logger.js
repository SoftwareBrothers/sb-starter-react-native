// TODO: implement error tracking service e.g. bugsnag
/* eslint-disable no-console */
import { isDevelopment } from '../constants/Env'

export default class Logger {
  static error = (...args) => {
    if (isDevelopment) {
      console.error(...args)
    }
  }

  static warn = (...args) => {
    if (isDevelopment) {
      console.warn(...args)
    }
  }

  static log = (...args) => {
    if (isDevelopment) {
      console.log(...args)
    }
  }
}
