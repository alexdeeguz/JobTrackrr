import React from 'react'
import InterviewIndexItem from './interview_index_item'

class InterviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getAllInterviews()
        this.props.getJobApplications()
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Your next phone screen is on </h1>
                    <h1>Your next on-site is on </h1>
                </div>

                <div>
                    {
                        this.props.interviews.map(interview => (
                            <InterviewIndexItem key={interview.id} interview={interview} getApplications={this.props.getJobApplications} applications={this.props.applications}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default InterviewIndex