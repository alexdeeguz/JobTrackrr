import * as InterviewAPIUtil from '../util/interview_utils'

export const RECEIVE_ALL_INTERVIEWS = "RECEIVE_ALL_INTERVIEWS"
export const RECEIVE_INTERVIEW = "RECEIVE_INTERVIEW"
export const REMOVE_INTERVIEW = "REMOVE_INTERVIEW"

const receiveAllInterviews = interviews => ({
    type: RECEIVE_ALL_INTERVIEWS,
    interviews
})

const receiveInterview = interview => ({
    type: RECEIVE_INTERVIEW,
    interview
})

const removeInterview = id => ({
    type: REMOVE_INTERVIEW,
    id
})

export const getAllInterviews = () => dispatch => InterviewAPIUtil.fetchAllInterviews()
    .then(interviews => dispatch(receiveAllInterviews(interviews)))

export const getInterview = id => dispatch => InterviewAPIUtil.fetchInterview(id)
    .then(interview => dispatch(receiveInterview(interview)))

export const deleteInterview = id => dispatch => InterviewAPIUtil.deleteInterview(id)
    .then(() => dispatch(removeInterview()))

export const updateInterview = (id, interview) => dispatch => InterviewAPIUtil.updateInterview(id, interview)
    .then(interview => dispatch(receiveInterview(interview)))

export const createInterview = interview => dispatch => InterviewAPIUtil.createInterview(interview)
    .then(interview => dispatch(receiveInterview(interview)))

