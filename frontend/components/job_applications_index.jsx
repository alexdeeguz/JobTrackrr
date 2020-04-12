import React from 'react'
import JobApplicationIndexItem from './job_application_index_item'
import Header from './header'

class JobApplicationIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            application_date: this.dateToday(),
            company_name: "",
            position: "",
            job_posting_url: "",
            company_site_url: "",
            status: "Applied",
            user_id: this.props.currentUser.id,
            sort: "name"
        }
        this.addApplication = this.addApplication.bind(this)
        this.updateField = this.updateField.bind(this)
    }

    componentWillMount() {
        this.props.getJobApplications()
    }

    addApplication(e) {
        e.preventDefault()
        const app = {
            application_date: this.state.application_date,
            company_name: this.state.company_name,
            position: this.state.position,
            job_posting_url: this.state.job_posting_url,
            company_site_url: this.state.company_site_url,
            status: "Applied",
            user_id: this.props.currentUser.id
        }
        this.props.createApplication(app)
        this.setState({
            application_date: this.dateToday(),
            company_name: "",
            position: "",
            job_posting_url: "",
            company_site_url: "",
            status: "Applied",
            user_id: this.props.currentUser.id
        })
    }

    updateField(e, field) {
        e.preventDefault()
        this.setState({
            [field]: e.target.value
        })
    }

    dateToday() {
        let date = new Date()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let year = date.getFullYear()
        if (month < 10) {
            month = `0${month}`
        }
        if (day < 10) {
            day = `0${day}`
        }
        return `${year}-${month}-${day}`
    }


    render() {
        const offers = this.props.jobApplications ? this.props.jobApplications.filter(el => el.status === "Offered").length : ""
        const applications = this.state.sort === "status" ? this.props.jobApplications.sort((a, b) => {
            if (a.status < b.status) return -1
            if (a.status > b.status) return 1
            return 0
        }) : this.props.jobApplications.sort((a, b) => {
            if (a.company_name < b.company_name) return -1
            if (a.company_name > b.company_name) return 1
            return 0
        })
        return (
            <div>
                <Header history={this.props.history}/>
                <div className="add-and-details-container">
                    <div className="form-container">
                        <h2>QUICK ADD</h2>
                        <form className="form" onSubmit={this.addApplication}>
                            <input type="date" placeholder="Application Date" onChange={(e) => this.updateField(e, "date")} value={this.state.application_date}/>                           
                            <input type="text" placeholder="Company Name" onChange={(e) => this.updateField(e, "company_name")} value={this.state.company_name}/>                            
                            <input type="text" placeholder="Position" onChange={(e) => this.updateField(e, "position")} value={this.state.position}/>
                            <input type="text" placeholder="Job Posting URL" onChange={(e) => this.updateField(e, "job_posting_url")} value={this.state.job_posting_url}/>
                            <input type="text" placeholder="Company Site" onChange={(e) => this.updateField(e, "company_site_url")} value={this.state.company_site_url}/>
                            <button className="button" type="submit">Add Application</button>
                        </form>
                    </div>
                    <div className="details">
                        <h2>DETAILS</h2>
                        <h3>Applications Submitted: {this.props.jobApplications.length}</h3>
                        <h3>Phone Screens:</h3>
                        <h3>On-sites:</h3>
                        <h3>Offers: {offers}</h3>
                    </div>
                </div>
                <span>
                    Sort by: <span id="sort" onClick={() => this.setState({sort: "name"})}>Name</span> <span id="sort" onClick={() => this.setState({sort: "status"})}>Status</span>
                </span>
                <div>
                {
                    applications.map(application => (
                    <JobApplicationIndexItem 
                        key={application.id} 
                        application={application} 
                        updateApplication={this.props.updateApplication} 
                        createInterview={this.props.createInterview}
                        history={this.props.history}
                    />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default JobApplicationIndex