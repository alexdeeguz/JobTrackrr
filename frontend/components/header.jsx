import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.redirect = this.redirect.bind(this)
    }

    redirect(e, queryStr) {
        e.preventDefault()
        this.props.history.push(`${queryStr}`)
    }

    render() {
        return (
            <div className="header">
                <h1 className={this.props.history.location.pathname === "/applications" ? "selected" : "non-selected"} onClick={(e) => this.redirect(e, '/applications')}>Applications</h1>
                <h1 className={this.props.history.location.pathname === "/interviews" ? "selected" : "non-selected"} onClick={(e) => this.redirect(e, '/interviews')}>Interviews</h1>
            </div>
        )
    }
}

export default Header