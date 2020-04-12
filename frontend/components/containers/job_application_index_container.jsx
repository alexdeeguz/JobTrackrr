import { connect } from 'react-redux'
import JobApplicationsIndex from '../job_applications_index'
import { getAllApplications, createApplication, updateApplication } from '../../actions/job_application_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    jobApplications: Object.values(state.entities.jobApplications).sort((a,b) => {
        if (a.company_name < b.company_name) return -1
        if (a.company_name > b.company_name) return 1
        return 0
    }),
    errors: state.errors.session
})

const mDTP = dispatch => ({
    getJobApplications: () => dispatch(getAllApplications()),
    createApplication: app => dispatch(createApplication(app)),
    updateApplication: (id, app) => dispatch(updateApplication(id, app))
})

export default connect(mSTP, mDTP)(JobApplicationsIndex)
