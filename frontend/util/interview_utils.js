export const fetchAllInterviews = () => (
    $.ajax({
        method: "GET",
        url: '/api/interviews'
    })
)

export const fetchInterview = id => (
    $.ajax({
        method: "GET",
        url: `/api/interviews/${id}`
    })
)

export const createInterview = (interview) => (
    $.ajax({
        method: "POST",
        url: '/api/interviews',
        data: { interview }
    })
)

export const deleteInterview = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/interviews/${id}`
    })
)

export const updateInterview = (id, interview) => (
    $.ajax({
        method: "PATCH",
        url: `/api/interviews/${id}`,
        data: { interview }
    })
)