import * as JobAppAPIUtil from '../util/job_application_utils'
import { RECEIVE_ERRORS } from './session_actions'

export const RECEIVE_ALL_APPLICATIONS = "RECEIVE_ALL_APPLICATIONS"
export const RECEIVE_APPLICATION = "RECEIVE_APPLICATION"
export const REMOVE_APPLICATION = "REMOVE_APPLICATION"

const receiveAllApplications = applications => ({
    type: RECEIVE_ALL_APPLICATIONS,
    applications
})

const receiveApplication = application => ({
    type: RECEIVE_APPLICATION,
    application
})

const removeApplication = id => ({
    type: REMOVE_APPLICATION,
    id
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const getAllApplications = () => dispatch => JobAppAPIUtil.fetchAllApplications()
    .then(applications => dispatch(receiveAllApplications(applications)))

export const getApplication = id => dispatch => JobAppAPIUtil.fetchJobApplication(id)
    .then(application => dispatch(receiveApplication(application)))

export const deleteApplication = id => dispatch => JobAppAPIUtil.deleteJobApplication(id)
    .then(() => dispatch(removeApplication(id)))

export const updateApplication = (id, application) => dispatch => JobAppAPIUtil.updateJobApplication(id, application)
    .then(updatedApp => dispatch(receiveApplication(updatedApp)))

export const createApplication = application => dispatch => JobAppAPIUtil.createJobApplication(application)
    .then(createdApp => dispatch(receiveApplication(createdApp)),
    error => dispatch(receiveErrors(error.responseJSON)))





