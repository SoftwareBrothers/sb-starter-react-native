import { connect } from 'react-redux'
import SignInScreen from '../components/SignInScreen'
import { signIn } from '../../../../../auth/FSAs'

const mapStateToProps = (state) => ({
  error: state.auth.signInError,
  isAuthenticating: state.auth.isAuthenticating,
})

const mapDispatchToProps = {
  signIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)
