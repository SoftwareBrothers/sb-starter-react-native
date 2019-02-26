import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'
import LoginForm from '../../../../../components/LoginForm'

export default class SignInScreen extends React.Component {
  render () {
    const { error, isAuthenticating, signIn } = this.props

    return (
      <View>
        <Text>Sign In</Text>
        <LoginForm onSubmit={signIn} disabled={isAuthenticating} />
        {error && (
          <Text>{error}</Text>
        )}
      </View>
    )
  }
}

SignInScreen.propTypes = {
  error: PropTypes.string,
  isAuthenticating: PropTypes.bool,
  signIn: PropTypes.func.isRequired,
}
