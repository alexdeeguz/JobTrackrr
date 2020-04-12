import React from 'react'

class InterviewShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: "",
            time: "",
            interview_type: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        this.props.getJobApplications()
        this.props.getInterview(this.props.match.params.id)
    }

    updateField(e, field) {
        e.preventDefault()
        this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.updateInterview(this.props.match.params.id, this.state)
            .then(() => this.props.history.push('/interviews'))
    }

    render() {
        console.log(this.state)
        const id = this.props.match.params.id
        const interview = this.props.interviews[id]
        const application = interview ? this.props.applications[interview.application_id] : ""
        
        return (
            <div>
                <p>{application.company_name}</p>
                <input type="date" placeholder="Interview Date" value={this.state.date} onChange={(e) => this.updateField(e, "date")}/><br/>
                Time: <input type="time" value={this.state.time} onChange={(e) => this.updateField(e, "time")}/><br/>
                <select onChange={(e) => this.updateField(e, "interview_type")}>
                    <option disabled selected>--Interview Type</option>
                    <option value="phone">Phone</option>
                    <option value="onsite">On-site</option>
                </select>
                <button onClick={this.handleSubmit}>Update Interview</button>
            </div>
        )
    }
}

export default InterviewShow