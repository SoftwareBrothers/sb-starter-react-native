import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'
import AuthNavigator from './AuthNavigator'
import AppInitScreen from '../screens/AppInitScreen'

export default createAppContainer(createSwitchNavigator(
  {
    AppInit: AppInitScreen,
    Auth: AuthNavigator,
    Home: HomeNavigator,
  },
  {
    initialRouteName: 'AppInit',
  },
))
