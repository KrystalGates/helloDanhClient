import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Login from "./components/auth/Login"



const ApplicationViews = () => {

    return (
        <React.Fragment>

            <Route
                exact path="/login" render={props => {
                    return <Login {...props} />
                }}
            />

        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)