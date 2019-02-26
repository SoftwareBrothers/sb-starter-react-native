import { connect } from 'react-redux'
import SignUpScreen from '../components/SignUpScreen'
import { signUp } from '../../../../../auth/FSAs'

const mapStateToProps = (state) => ({
  error: state.auth.SignUpScreen,
  isAuthenticating: state.auth.isAuthenticating,
})

const mapDispatchToProps = {
  signUp,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
