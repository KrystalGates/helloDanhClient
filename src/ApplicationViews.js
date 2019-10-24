import { Route } from "react-router-dom"
import React from "react"
import Login from "./components/auth/Login"
import Home from "./components/home/Home"



const ApplicationViews = () => {

    return (
        <React.Fragment>
             <Route
                exact path="/" render={props => {
                    return <Home {...props} />
                }}
            />
             <Route
                exact path="/login" render={props => {
                    return <Login {...props} />
                }}
            />

        </React.Fragment>
    )
}

export default ApplicationViews