export default class BaseException {
  constructor (data) {
    this.data = data
  }

  toString () {
    return `${constructor.name}: ${JSON.stringify(this.data)}`
  }
}
