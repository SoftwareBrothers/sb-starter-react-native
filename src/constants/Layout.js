import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const SMALL_DEVICE_WIDTH = 375

export default {
  isSmallDevice: width < SMALL_DEVICE_WIDTH,
  window: {
    height,
    width,
  },
}
