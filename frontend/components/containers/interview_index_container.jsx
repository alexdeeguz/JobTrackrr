import { connect } from 'react-redux'
import InterviewIndex from '../interview_index'
import { getAllInterviews, createInterview, updateInterview, deleteInterview } from '../../actions/interview_actions'
import { getAllApplications } from '../../actions/job_application_actions'
const mSTP = state => ({
    interviews: Object.values(state.entities.interviews),
    applications: state.entities.jobApplications
})

const mDTP = dispatch => ({
    getAllInterviews: () => dispatch(getAllInterviews()),
    scheduleInterview: interview => dispatch(createInterview(interview)),
    updateInterview: (id, interview) => dispatch(updateInterview(id, interview)),
    cancelInterview: id => dispatch(deleteInterview(id)),
    getJobApplications: () => dispatch(getAllApplications())
})

export default connect(mSTP, mDTP)(InterviewIndex)
