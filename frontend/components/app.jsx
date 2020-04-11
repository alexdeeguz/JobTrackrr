import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './containers/home_container'
import LoginContainer from './containers/login_container'
import SignupContainer from './containers/signup_container'
const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/login' component={LoginContainer}/>
                <Route path='/signup' component={SignupContainer}/>
                <Route path='/' component={HomeContainer}/>
            </Switch>
        </div>
    )
}

export default App