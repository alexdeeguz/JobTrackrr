export const fetchAllApplications = () => (
    $.ajax({
        method: "GET",
        url: '/api/job_applications'
    })
)

export const fetchJobApplication = id => (
    $.ajax({
        method: "GET",
        url: `/api/job_applications/${id}`
    })
)

export const createJobApplication = (job_application) => (
    $.ajax({
        method: "POST",
        url: '/api/job_applications',
        data: { job_application }
    })
)

export const deleteJobApplication = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/job_applications/${id}`
    })
)

export const updateJobApplication = (id, job_application) => (
    $.ajax({
        method: "PATCH", 
        url: `/api/job_applications/${id}`,
        data: { job_application }
    })
)