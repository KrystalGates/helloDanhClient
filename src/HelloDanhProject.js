import React from 'react'
import { Route } from "react-router-dom"
import NavBar from "./components/nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import useSimpleAuth from './hooks/ui/useSimpleAuth'
import Login from './components/auth/Login'


const HelloDanhProject = props => {
    const {isAuthenticated}  = useSimpleAuth()


        if (isAuthenticated())
        return (
          <React.Fragment>
              <ApplicationViews/>
              <Route render={props => (
                <NavBar {...props} />
            )} />
          </React.Fragment>
        );
       else
        return (
          <React.Fragment>
              <ApplicationViews/>
              <Route render={props => (
                <Login {...props} />
            )} />
          </React.Fragment>
        );


            // <React.Fragment>
            //     <ApplicationViews />
            //     {isAuthenticated() ?
            //         <>
            //         <Route render={props => (
            //             <NavBar {...props} />
            //         )} />
            //          </> : <> <Route render={props => (
            //             <Login {...props} />
            //         )} />
            //         </>
            //     }
            // </React.Fragment>
}

export default HelloDanhProject