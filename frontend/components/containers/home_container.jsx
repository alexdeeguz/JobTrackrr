import { connect } from 'react-redux'
import Home from '../home'
import { log_out } from '../../actions/session_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(log_out())
})

export default connect(mSTP, mDTP)(Home)