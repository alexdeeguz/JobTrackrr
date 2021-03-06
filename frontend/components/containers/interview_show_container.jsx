import { connect } from 'react-redux'
import InterViewShow from '../interview_show'
import { updateInterview, getInterview, deleteInterview } from '../../actions/interview_actions'
import { getAllApplications } from '../../actions/job_application_actions'

const mSTP = state => ({
    interviews: state.entities.interviews,
    applications: state.entities.jobApplications
})

const mDTP = dispatch => ({
    getInterview: id => dispatch(getInterview(id)),
    updateInterview: (id, interview) => dispatch(updateInterview(id, interview)),
    getJobApplications: () => dispatch(getAllApplications()),
    cancelInterview: id => dispatch(deleteInterview(id))
})

export default connect(mSTP, mDTP)(InterViewShow)