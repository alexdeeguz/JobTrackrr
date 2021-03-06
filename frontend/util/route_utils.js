import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'


const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
})


const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/applications" /> : <Component {...props} />
        )}
    />
)

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            !loggedIn ? <Redirect to="/login" /> : <Component {...props} />
        )}
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))