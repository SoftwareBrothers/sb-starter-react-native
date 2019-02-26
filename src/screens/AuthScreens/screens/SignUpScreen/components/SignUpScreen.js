import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'
import LoginForm from '../../../../../components/LoginForm'

export default class SignUpScreen extends React.Component {
  render () {
    const { error, isAuthenticating, signUp } = this.props

    return (
      <View>
        <Text>Sign Up</Text>
        <LoginForm onSubmit={signUp} disabled={isAuthenticating} />
        {error && (
          <Text>{error}</Text>
        )}
      </View>
    )
  }
}

SignUpScreen.propTypes = {
  error: PropTypes.string,
  isAuthenticating: PropTypes.bool,
  signUp: PropTypes.func.isRequired,
}
