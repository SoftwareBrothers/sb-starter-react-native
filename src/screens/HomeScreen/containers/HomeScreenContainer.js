import { connect } from 'react-redux'
import HomeScreen from '../components/HomeScreen'
import { signOut } from '../../../auth/FSAs'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
  signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
