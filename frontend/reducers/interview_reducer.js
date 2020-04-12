import { RECEIVE_ALL_INTERVIEWS, RECEIVE_INTERVIEW, REMOVE_INTERVIEW } from '../actions/interview_actions'

const InterviewReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_INTERVIEWS:
            return action.interviews
        case RECEIVE_INTERVIEW:
            newState[action.interview.id] = action.interview
            return newState
        case REMOVE_INTERVIEW:
            delete newState[action.id]
            return newState
        default:
            return state
    }
}

export default InterviewReducer