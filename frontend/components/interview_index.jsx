import React from 'react'
import InterviewIndexItem from './interview_index_item'
import Header from './header'

class InterviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getAllInterviews()
        this.props.getJobApplications()
    }

    getNextPhoneScreenInterview() {
        if (this.props.interviews.length > 0) {
            let dateToday = new Date()
            let interviews = this.props.interviews
            let apps = this.props.applications
            let future = interviews.filter(el => el.interview_type === "Phone Screen")
            if (future.length === 0) return null
            future.filter(el => dateToday <= new Date(this.convertDate(el.date)))
            future.sort((a,b) => a - b)
            let company = apps[future[0].application_id] ? apps[future[0].application_id].company_name : ""
            let date = this.convertDateToString(future[0].date)
            let time = this.convertTime(future[0].time)
            return [date, company, time]
        }
    }

    getNextOnSiteInterview() {
        if (this.props.interviews.length > 0) {
            let dateToday = new Date()
            let interviews = this.props.interviews
            let apps = this.props.applications
            let future = interviews.filter(el => el.interview_type === "On-site")
            console.log(future)
            if (future.length === 0) return null
            future.filter(el => dateToday <= new Date(this.convertDate(el.date)))
            future.sort((a,b) => a - b)
            let company = apps[future[0].application_id] ? apps[future[0].application_id].company_name : ""
            let date = this.convertDateToString(future[0].date)
            let time = this.convertTime(future[0].time)
            return [date, company, time]
        }
    }

    convertTime(str) {
        if (str === null) return null
        str = str.split("T")
        str = str[1].slice(0, 5)
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

    convertDate(date) {
        date = date.split("-")
        date[date.length - 1] = String(Number(date[date.length - 1]) + 1)
        date = new Date(date.join("-"))
        return date
    }

    convertDateToString(date) {
        date = date.split("-")
        date[date.length - 1] = String(Number(date[date.length - 1]) + 1)
        date = new Date(date.join("-"))
        return date.toString().split(" ").slice(0, 4).join(" ")
    }

    render() {
        let nextPhoneScreen = this.getNextPhoneScreenInterview() ? this.getNextPhoneScreenInterview()[0] : ""
        let phoneScreenCompany = this.getNextPhoneScreenInterview() ? this.getNextPhoneScreenInterview()[1] : ""
        let phoneScreenTime = this.getNextPhoneScreenInterview() ? this.getNextPhoneScreenInterview()[2] : ""
        let nextonSite = this.getNextOnSiteInterview() ? this.getNextOnSiteInterview()[0] : ""
        let onSiteCompany = this.getNextOnSiteInterview() ? this.getNextOnSiteInterview()[1] : ""
        let onSiteTime = this.getNextOnSiteInterview() ? this.getNextOnSiteInterview()[2] : ""
        return (
            <div>
                <Header history={this.props.history}/>
                <div className="future-details">
                    <h1>Your next phone screen is on <span>{nextPhoneScreen}</span> at <span>{phoneScreenTime}</span> with <span>{phoneScreenCompany}</span></h1>
                    <h1>Your next on-site is on <span>{nextonSite}</span> at <span>{onSiteCompany}</span> with <span>{onSiteTime}</span></h1>
                </div>

                <div>
                    {
                        this.props.interviews.map(interview => (
                            <InterviewIndexItem 
                                key={interview.id} 
                                interview={interview} 
                                getApplications={this.props.getJobApplications} 
                                applications={this.props.applications} 
                                cancelInterview={this.props.cancelInterview}
                                getAllInterviews={this.props.getAllInterviews}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default InterviewIndex