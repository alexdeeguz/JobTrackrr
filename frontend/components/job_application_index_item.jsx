import React from 'react'

class JobApplicationIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.updateStatus = this.updateStatus.bind(this)
    }

    updateStatus(e) {
        e.preventDefault()
        const id = this.props.application.id
        const application = {
            status: e.target.value
        }
        this.props.updateApplication(id, application)
    }

    render() {
        const { application_date, company_name, position, job_posting_url, company_site_url, status } = this.props.application
        return (
            <div className="job-app">
                <select className="grid1" onChange={this.updateStatus}>
                    <option value={status}>{status}</option>
                    {status === "Applied" ? "" : <option value="Applied">Applied</option>}
                    {status === "Offered" ? "" : <option value="Offered">Offered</option>}
                    {status === "Rejected" ? "" : <option value="Rejected">Rejected</option>}
                </select>
                <p className="grid2">{application_date}</p>
                <p className="grid3">{company_name}</p>
                <p className="grid4">{position}</p>
                <p className="grid5"><a href={job_posting_url}>Job Posting</a></p>
                <p className="grid6"><a href={company_site_url}>Company Site</a></p>
            </div>
        )
    }
}

export default JobApplicationIndexItem