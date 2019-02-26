import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import SignInScreen from '../screens/AuthScreens/screens/SignInScreen'
import SignUpScreen from '../screens/AuthScreens/screens/SignUpScreen'

const AuthNavigator = createStackNavigator({
  authIndex: {
    navigationOptions: {
      headerTitle: 'Not logged in',
    },
    screen: createMaterialTopTabNavigator({
      SignIn: SignInScreen,
      SignUp: SignUpScreen,
    }),
  },
})

export default AuthNavigator
