import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews";
import useSimpleAuth from "./hooks/ui/useSimpleAuth";
import Login from "./components/auth/Login";
import NavBar from "./components/nav/NavBar";


const HelloDanhProject = props => {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const { isAuthenticated } = useSimpleAuth();

  if (isAuthenticated(loggedIn)) {
    return (
      <React.Fragment>
        <NavBar setIsLoggedIn={setIsLoggedIn}/>
        <ApplicationViews />
      </React.Fragment>
    );
  } else {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
};

export default HelloDanhProject;
