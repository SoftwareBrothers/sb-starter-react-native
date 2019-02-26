import { connect } from 'react-redux'
import AppInitScreen from '../components/AppInitScreen'
import { initializeApp } from '../modules/FSAs'

const mapDispatchToProps = {
  initializeApp,
}

export default connect(null, mapDispatchToProps)(AppInitScreen)
