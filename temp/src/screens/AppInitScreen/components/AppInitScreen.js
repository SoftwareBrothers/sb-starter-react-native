import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import styles from './AppInitScreen.styles'

export default class AppInitScreen extends React.PureComponent {
  componentDidMount () {
    this.props.initializeApp()
  }

  render = () => (
    <View style={styles.container}>
      <ActivityIndicator size='large'/>
      <Text>Loading...</Text>
    </View>
  )
}

AppInitScreen.propTypes = {
  initializeApp: PropTypes.func.isRequired,
}
