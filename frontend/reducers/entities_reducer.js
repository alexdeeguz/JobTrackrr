import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import JobApplicationsReducer from './job_application_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    jobApplications: JobApplicationsReducer
})

export default EntitiesReducer