import React from 'react'
import { Route } from "react-router-dom"
import NavBar from "./components/nav/NavBar"
import ApplicationViews from "./ApplicationViews"

const HelloDanhProject = () => {
    return (
        <React.Fragment>
            <Route render={props => (
                <NavBar {...props} />
            )} />
            <ApplicationViews />
        </React.Fragment>
    )
}

export default HelloDanhProject