import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
        <button type="submit">{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm