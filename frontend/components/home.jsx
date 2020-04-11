import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(e) {
        e.preventDefault()
        this.props.logout()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                HOME PAGE
                {this.props.currentUser ? <button onClick={this.logout}>Log out</button> : ""}
            </div>
        )
    }
}

export default Home