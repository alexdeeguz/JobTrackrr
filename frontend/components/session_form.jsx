import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }

        this.updateField = this.updateField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateField(e, field) {
        e.preventDefault()
        this.setState({
            [field]: e.target.value
        })
    } 

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.login(user)
            .then(() => this.props.history.push('/'))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" onChange={(e) => this.updateField(e, "username")} value={this.state.username}/>
                    <input type="text" placeholder="Password" onChange={(e) => this.updateField(e, "password")} value={this.state.password}/>
                    <button type="submit">{this.props.formType}</button><br/>
                    {this.props.errors}
                </form>
            </div>
        )
    }
}

export default SessionForm