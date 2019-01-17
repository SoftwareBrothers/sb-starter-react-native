import { NavigationActions } from 'react-navigation'

let navigator = null

export const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef
}

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      params,
      routeName,
    }),
  )
}
