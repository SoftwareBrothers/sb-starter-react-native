import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from './HomeScreen.styles'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.signOut}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

HomeScreen.propTypes = {
  signOut: PropTypes.func.isRequired,
}
