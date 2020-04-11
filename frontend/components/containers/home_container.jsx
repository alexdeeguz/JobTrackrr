import { connect } from 'react-redux'
import Home from '../home'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({

})

export default connect(mSTP, null)(Home)