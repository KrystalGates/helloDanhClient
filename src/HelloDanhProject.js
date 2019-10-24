import React from 'react'
import { Route, Redirect } from "react-router-dom"
import NavBar from "./components/nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import useSimpleAuth from './hooks/ui/useSimpleAuth'
import Login from './components/auth/Login'


const HelloDanhProject = props => {
    const {isAuthenticated}  = useSimpleAuth()

        if (isAuthenticated())
            return (
                <React.Fragment>
                   
                    <NavBar {...props} />
                </React.Fragment>
        )
       else
            return (
                <React.Fragment>
                    <ApplicationViews/>
                    <Redirect to="/login"/>
                </React.Fragment>
            )
}

export default HelloDanhProject