import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar, View } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/store'
import { isIOS } from './constants/Env'
import AppNavigator from './navigation/AppNavigator'
import { setTopLevelNavigator } from './services/NavigationService'
import styles from './App.styles'

const { store, persistor } = configureStore()

export default class App extends React.Component {
  render = () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          {isIOS && <StatusBar barStyle='default' />}
          <AppNavigator ref={setTopLevelNavigator} />
        </View>
      </PersistGate>
    </Provider>
  )
}
