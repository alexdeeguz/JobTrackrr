import React from 'react'

class InterviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.cancelInterview = this.cancelInterview.bind(this)
        this.convertDate = this.convertDate.bind(this)
    }

    convertDate(date) {
        date = date.split("-")
        date[date.length-1] = String(Number(date[date.length-1])+1)
        date = new Date(date.join("-"))
        return date.toString().split(" ").slice(0,4).join(" ")
    }

    cancelInterview(e) {
        e.preventDefault()
        this.props.cancelInterview(this.props.interview.id)
            .then(() => this.props.getAllInterviews())
    }

    convertTime(str) {
        if (str === null) return null
        str = str.split("T")
        str = str[1].slice(0,5)
        let times = str.split(":")
        let hours = Number(times[0])
        let minutes = Number(times[1])
        let daylight;
        if (hours > 12) {
            hours = hours % 12
            daylight = "PM"
        } else if (hours === 12) {
            hours = String(12)
            daylight = "PM"
        } else if (hours === 0) {
            hours = String(12)
            daylight = "AM"
        } else {
            daylight = "AM"
        }

        if (minutes < 9) {
            minutes = "0" + String(minutes)
        }
        return `${hours}:${minutes} ${daylight}`
    }

    render() {
        const { date, time, interview_type, application_id } = this.props.interview
        const name = this.props.applications[application_id] ? this.props.applications[application_id].company_name : ""
        return (
            <div className="interview">
                <p className="grid1">{name}</p>
                <p className="grid2">{this.convertDate(date)}</p>
                <p className="grid3">{this.convertTime(time)}</p>
                <p className="grid4">{interview_type}</p>
                <p id="cancel-button" className="grid5" onClick={this.cancelInterview}>Cancel Interview</p>
            </div>
        )
    }
}

export default InterviewIndexItem