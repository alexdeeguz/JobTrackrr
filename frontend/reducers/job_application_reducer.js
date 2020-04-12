import { RECEIVE_ALL_APPLICATIONS, RECEIVE_APPLICATION, REMOVE_APPLICATION } from '../actions/job_application_actions'

const JobApplicationReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_ALL_APPLICATIONS:
            return action.applications
        case RECEIVE_APPLICATION:
            newState[action.application.id] = action.application
            return newState
        case REMOVE_APPLICATION:
            delete newState[action.id]
            return newState
        default: 
            return state
    }
}

export default JobApplicationReducer