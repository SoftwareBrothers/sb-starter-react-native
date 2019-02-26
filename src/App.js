import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { StatusBar, View } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import configureStore from './store/store'
import { isIOS } from './constants/Env'
import AppNavigator from './navigation/AppNavigator'
import { setTopLevelNavigator } from './services/NavigationService'
import styles from './App.styles'
import Log from './lib/Logger'

const store = configureStore()

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  render () {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    }

    return (
      <Provider store={store}>
        <View style={styles.container}>
          {isIOS && <StatusBar barStyle='default' />}
          <AppNavigator ref={setTopLevelNavigator} />
        </View>
      </Provider>
    )
  }

  /* eslint-disable global-require */
  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('../assets/images/robot-dev.png'),
      require('../assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ])
  /* eslint-enable global-require */

  handleLoadingError = (error) => {
    Log.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
}
