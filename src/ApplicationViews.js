import { Route } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";

const ApplicationViews = () => {
  return (
    <React.Fragment>
        <Route
          exact
          path="/"
          render={props => { return (<Home {...props}/>)
          }}
        />
    </React.Fragment>
  );
};

export default ApplicationViews;
